import { test, expect, Page } from "@playwright/test";

// Seeded issue (see defaultIssuesIds) that the default login user can open.
const ISSUE_URL = "/projects/jira-clone/board/issue/8264e3fc-dd97-4abe-9612-deee6472e5c4";

const login = async (page: Page) => {
  await page.goto("/login");
  // The login page re-renders on the client after a hydration mismatch; a
  // click before that settles is lost.
  await page.waitForLoadState("networkidle");
  const loginButton = page.getByRole("button", { name: "Login" });
  await loginButton.click();
  try {
    await page.waitForURL(/.*projects/, { timeout: 5000 });
  } catch {
    // The first click landed before the page had hydrated; try once more.
    await loginButton.click();
  }
  await expect(page).toHaveURL(/.*projects/);
};

const openIssue = async (page: Page) => {
  await page.goto(ISSUE_URL);
  await page.waitForLoadState("networkidle");
  const acceptChanges = page.getByRole("button", { name: "Accept changes" });
  // A cold navigation to a panel URL can render the board with the panel never
  // mounted; one reload mounts it.
  try {
    await acceptChanges.waitFor({ state: "visible", timeout: 8000 });
  } catch {
    await page.reload({ waitUntil: "load" });
  }
  await expect(acceptChanges).toBeVisible({ timeout: 15000 });
};

const accept = async (page: Page) => {
  const saved = page.waitForResponse(
    (res) => res.request().method() === "POST" && res.url().includes("/issue/")
  );
  await page.getByRole("button", { name: "Accept changes" }).click();
  await saved;
};

const commentItem = (page: Page, text: string) =>
  page.getByRole("listitem").filter({ hasText: text });

test("an edited comment is persisted and flagged as EDITED", async ({ page }) => {
  const original = `original comment ${Date.now()}`;
  const edited = `edited comment ${Date.now()}`;

  await login(page);

  // Create a comment of our own and persist it.
  await openIssue(page);
  await page.locator('textarea[name="comment"]').first().fill(original);
  await page.getByRole("button", { name: "Save comment" }).click();
  await expect(page.getByText(original)).toBeVisible();
  await accept(page);

  // Reopen it: the comment is there and has never been edited.
  await openIssue(page);
  await expect(commentItem(page, original)).toBeVisible();
  await expect(commentItem(page, original).getByText("EDITED", { exact: true })).toHaveCount(0);

  // EDITED compares whole seconds of createdAt and updatedAt, so make sure the
  // edit lands in a later second than the comment's creation.
  await page.waitForTimeout(1100);

  // Edit it. The panel itself must flag the comment as edited right away.
  await commentItem(page, original).getByRole("button", { name: "Edit comment" }).click();
  await page.locator("textarea:focus").fill(edited);
  await page.getByRole("button", { name: "Save comment" }).click();
  await expect(commentItem(page, edited)).toBeVisible();
  await expect(commentItem(page, edited).getByText("EDITED", { exact: true })).toBeVisible();
  await accept(page);

  // Reopen: the new text was persisted over the old one, and it is flagged.
  await openIssue(page);
  await expect(commentItem(page, edited)).toBeVisible();
  await expect(page.getByText(original)).toHaveCount(0);
  await expect(commentItem(page, edited).getByText("EDITED", { exact: true })).toBeVisible();
});
