import { test, expect, type Page } from "@playwright/test";

const NAV_LINK_COUNT = 5; // Board, Analytics, Backlog, Server error, Not found

const openProjectPage = async (page: Page) => {
  await page.goto("/login");
  // A click before hydration is lost on a cold server, so retry it.
  await expect(async () => {
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL(/.*projects/, { timeout: 3000 });
  }).toPass();
  await expect(async () => {
    await page
      .getByRole("link")
      .filter({ has: page.getByRole("img", { name: "Project", exact: true }) })
      .first()
      .click();
    await expect(page).toHaveURL(/\/projects\/[^/]+/, { timeout: 3000 });
  }).toPass();
  await expect(page.getByRole("button", { name: "Toggle sidebar" })).toBeVisible();
  // Let the page finish hydrating (and any cold-server reload) before clicking.
  await page.waitForLoadState("networkidle");
};

const navLinks = (page: Page) => page.locator("aside nav a");

/** Tries to focus every sidebar link and returns how many actually took focus. */
const countFocusableNavLinks = (page: Page) =>
  navLinks(page).evaluateAll((links) =>
    links.filter((link) => {
      (link as HTMLElement).focus();
      return document.activeElement === link;
    }).length
  );

test("open sidebar: all five links are focusable and navigate", async ({ page }) => {
  await openProjectPage(page);

  await expect(navLinks(page)).toHaveCount(NAV_LINK_COUNT);
  expect(await countFocusableNavLinks(page)).toBe(NAV_LINK_COUNT);

  await page.getByRole("navigation").getByRole("link", { name: "Analytics" }).click();
  await expect(page).toHaveURL(/\/analytics$/);
});

test("collapsed sidebar: no link can take focus or be reached with Tab", async ({ page }) => {
  await openProjectPage(page);
  const toggle = page.getByRole("button", { name: "Toggle sidebar" });
  await toggle.click();

  // The links stay in the DOM but none of them can be focused.
  await expect(navLinks(page)).toHaveCount(NAV_LINK_COUNT);
  expect(await countFocusableNavLinks(page)).toBe(0);

  // Tabbing forward from the toggle never lands inside the sidebar.
  await toggle.focus();
  for (let i = 0; i < 25; i++) {
    await page.keyboard.press("Tab");
    const inSidebar = await page.evaluate(() => !!document.activeElement?.closest("aside nav"));
    expect(inSidebar).toBe(false);
  }
});

test("collapsed sidebar: links are absent from the accessibility tree", async ({ page, browserName }) => {
  test.skip(browserName !== "chromium", "reads the tree through the Chrome DevTools protocol");
  await openProjectPage(page);

  const exposedNavLinks = async () => {
    const cdp = await page.context().newCDPSession(page);
    const { nodes } = await cdp.send("Accessibility.getFullAXTree");
    await cdp.detach();
    const names = ["Board", "Analytics", "Server error", "Not found"];
    return nodes.filter(
      (node) =>
        !node.ignored &&
        node.role?.value === "link" &&
        names.includes(String(node.name?.value ?? ""))
    ).length;
  };

  expect(await exposedNavLinks()).toBeGreaterThanOrEqual(4);
  await page.getByRole("button", { name: "Toggle sidebar" }).click();
  await expect.poll(exposedNavLinks).toBe(0);
});
