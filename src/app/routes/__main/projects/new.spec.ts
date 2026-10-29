import { test, expect, type Page } from "@playwright/test";

const login = async (page: Page) => {
  await page.goto("/login");
  const loginButton = page.getByRole("button", { name: "Login" });
  await expect(loginButton).toBeVisible();
  // On a cold server the first click can land before hydration and be lost.
  await expect(async () => {
    await loginButton.click();
    await expect(page).toHaveURL(/.*projects/, { timeout: 3000 });
  }).toPass({ timeout: 20000 });
};

// The panel is opened by URL; on a cold server the first load can come up without
// the panel mounted, so reload once before giving up.
const openCreatePanel = async (page: Page) => {
  await page.goto("/projects/new");
  const dialog = page.getByRole("dialog");
  try {
    await expect(dialog).toBeVisible({ timeout: 5000 });
  } catch {
    await page.reload({ waitUntil: "load" });
    await expect(dialog).toBeVisible();
  }
  return dialog;
};

const submitWithName = async (page: Page, name: string) => {
  const dialog = await openCreatePanel(page);
  await dialog.locator("textarea[name=title]").fill(name);
  await dialog.getByRole("checkbox").first().click();
  await dialog.getByRole("button", { name: "Accept changes" }).click();
  return dialog;
};

test.describe("create project: whitespace-only names are empty", () => {
  for (const [label, name] of [
    ["a single space", " "],
    ["line breaks only", "\n\n"],
    ["a tab only", "\t"],
    ["spaces mixed with line breaks and tabs", "  \n \t\n  "],
  ] as const) {
    test(`rejects ${label}`, async ({ page }) => {
      await login(page);
      const dialog = await submitWithName(page, name);

      await expect(dialog.getByText("Name is required")).toBeVisible();
      await expect(page).toHaveURL(/\/projects\/new/);
    });
  }

  test("accepts a real name that has surrounding whitespace", async ({ page }) => {
    await login(page);
    const name = `WS guard ${Date.now() % 100000}`;
    await submitWithName(page, `\n  ${name}\t \n`);

    await expect(page).toHaveURL(/\/projects$/);
    await expect(page.getByText("Name is required")).toHaveCount(0);
  });
});
