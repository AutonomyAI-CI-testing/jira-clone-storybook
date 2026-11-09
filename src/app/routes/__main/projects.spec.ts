import { expect, Page, test } from "@playwright/test";

// Seeded data: both seeded projects are default projects, and every seeded
// issue is a default issue.
const PROJECT_ID = "jira-clone";
const DEFAULT_ISSUE_ID = "4db55cbf-222d-424a-b23b-08e61534c706";
const SEEDED_USER_ID = "1c6855bf-9a0f-4a45-9641-7b7c7855c570";

const deleteControl = (page: Page) =>
  page.getByRole("button", { name: "Open delete issue dialog" });

const login = async (page: Page) => {
  // A cold dev server can lose the click before the page hydrates.
  await expect(async () => {
    await page.goto("/login");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL(/\/projects$/);
  }).toPass();
};

// The delete controls explain their disabled state on hover. A disabled button
// never shows its native `title` tooltip, so the explanation has to be a
// rendered element that the app's own tooltip reveals.

test("a default project's delete control shows why it cannot be used", async ({
  page,
}) => {
  await login(page);

  const control = deleteControl(page).first();
  await expect(control).toBeDisabled();
  await expect(control).toHaveAttribute(
    "title",
    "Cannot delete default project"
  );

  const hint = page.getByText("Cannot delete default project").first();
  await expect(hint).toBeHidden();

  await control.hover({ force: true });
  await expect(hint).toBeVisible();
});

test("a project that can be deleted keeps its control tooltip-free and usable", async ({
  page,
}) => {
  await login(page);

  // The seeded projects are all default projects, so a deletable one has to be
  // created first — through the app's own action.
  const title = `Deletable project ${Date.now()}`;
  await page.request.post("/projects/new", {
    form: {
      _action: "upsert",
      title,
      description: "Created by the projects spec",
      user: SEEDED_USER_ID,
    },
  });
  await page.goto("/projects");

  const controls = deleteControl(page);
  const control = page
    .getByRole("button", {
      name: "Open delete issue dialog",
      disabled: false,
    })
    .first();

  await expect(control).toBeEnabled();
  await expect(control).toHaveAttribute("title", "Delete project");
  // Each control carries its own label once, and nothing else renders "Delete
  // project": an enabled control is not wrapped in a tooltip.
  await expect(page.getByText("Delete project", { exact: true })).toHaveCount(
    await controls.count()
  );

  await control.click();
  await expect(page.getByRole("alertdialog")).toBeVisible();
  await page.keyboard.press("Escape");

  // Take the test's own project back out, so the suite leaves the database it
  // runs against as it found it. Delete through the app's action, as the UI does.
  const projectId = await page
    .locator('a[href^="/projects/"]')
    .filter({ hasText: title })
    .first()
    .evaluate((el) => el.getAttribute("href")!.split("/").pop()!);
  await page.request.delete("/projects", {
    form: { _action: "delete", projectId },
  });
  await page.goto("/projects");
  await expect(page.getByText(title, { exact: true })).toHaveCount(0);
});

test("an issue that cannot be deleted shows why on hover", async ({ page }) => {
  await login(page);

  const control = deleteControl(page);
  await expect(async () => {
    await page.goto(`/projects/${PROJECT_ID}/board/issue/${DEFAULT_ISSUE_ID}`);
    await expect(control).toBeVisible();
  }).toPass();

  await expect(control).toBeDisabled();
  await expect(control).toHaveAttribute(
    "title",
    "This user cannot delete the issue"
  );

  const hint = page.getByText("This user cannot delete the issue").first();
  await expect(hint).toBeHidden();

  await control.hover({ force: true });
  await expect(hint).toBeVisible();
});

test("a new issue's delete control is tooltip-free and usable", async ({
  page,
}) => {
  await login(page);

  const control = deleteControl(page);
  await expect(async () => {
    await page.goto(`/projects/${PROJECT_ID}/board/issue/new`);
    await expect(control).toBeVisible();
  }).toPass();

  await expect(control).toBeEnabled();
  await expect(control).toHaveAttribute("title", "Delete issue");

  // Nothing renders "Delete issue" while the control is on: an enabled control
  // carries no tooltip.
  await expect(page.getByText("Delete issue", { exact: true })).toHaveCount(0);

  await control.click();
  await expect(page.getByRole("alertdialog")).toBeVisible();
});
