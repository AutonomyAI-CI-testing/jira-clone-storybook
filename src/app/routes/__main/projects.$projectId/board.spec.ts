import { test, expect, type Page } from "@playwright/test";

async function login(page: Page) {
  await page.goto("/login");
  // A cold dev server can lose the first click before the page hydrates.
  await expect(async () => {
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL(/.*projects/, { timeout: 3000 });
  }).toPass({ timeout: 20000 });
}

const BOARD_DATA = /\/board\.data/;
const BOARD_ROUTE_ID = "routes/__main/projects.$projectId/board";
const BOARD_LINK = 'a[href="/projects/jira-clone/board"]';
const ERROR_LINK_NAME = "The board page failed. Navigate to the projects page";

/**
 * The board loader only fails on an unexpected error, which the seeded data
 * never produces. Let the real single-fetch response through but rewrite the
 * board route's result into an error, so only the board route's own error
 * boundary is exercised (not the parent route's or the root's).
 */
async function failBoardLoader(page: Page) {
  await page.route(BOARD_DATA, async (route) => {
    const response = await route.fetch();
    const flat: unknown[] = JSON.parse(await response.text());
    const result = flat[0] as Record<string, number>;
    const routeKey = Object.keys(result).find(
      (key) => flat[Number(key.slice(1))] === BOARD_ROUTE_ID
    )!;
    const errorKey = flat.push("error") - 1;
    const errorValue = flat.push(["E", "Simulated board loader failure"]) - 1;
    result[routeKey] = flat.push({ [`_${errorKey}`]: errorValue }) - 1;
    await route.fulfill({ response, body: JSON.stringify(flat) });
  });
}

test("board error screen links to the projects list, not back to the failed board", async ({
  page,
}) => {
  await login(page);

  // Start on a sibling page so the board is reached by a client-side
  // navigation, whose data request can be made to fail.
  await page.goto("/projects/jira-clone/analytics");
  const boardLink = page.locator(BOARD_LINK).first();
  const errorLink = page.getByRole("link", { name: ERROR_LINK_NAME });

  await expect(boardLink).toBeVisible();
  await page.waitForLoadState("networkidle");

  await failBoardLoader(page);

  // A cold dev server can reload the page part-way through the navigation
  // (Vite re-optimizing dependencies), which drops the client-side hop the
  // error screen depends on — so retry the hop itself.
  await expect(async () => {
    if (!page.url().includes("/analytics")) {
      await page.goto("/projects/jira-clone/analytics");
    }
    await boardLink.click();
    await expect(errorLink).toBeVisible({ timeout: 4000 });
  }).toPass({ timeout: 20000 });

  await expect(errorLink).toHaveAttribute("href", "/projects");

  await page.unroute(BOARD_DATA);
  await errorLink.click();
  await expect(page).toHaveURL(/\/projects$/);
});
