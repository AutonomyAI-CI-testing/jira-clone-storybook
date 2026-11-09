import { test, expect, Page } from "@playwright/test";

/**
 * The create-project panel pre-ticks the signed-in user, and the projects list
 * only lists the projects you are a member of — so a project created without
 * yourself on the team is one you can never open again. The panel warns about
 * that as soon as your own row is unticked.
 */
const SELF_MEMBERSHIP_WARNING =
  "This project will not appear in your projects list, because you are not on the team.";

/** On a cold server the login click can land before the page hydrates. */
async function loginWithDefaultUser(page: Page): Promise<void> {
  await page.goto("/login");

  await expect(async () => {
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL(/\/projects$/);
  }).toPass();
}

/** On a cold server a direct visit can render before the panel mounts. */
async function openCreateProjectPanel(page: Page): Promise<void> {
  await page.goto("/projects/new");

  await expect(async () => {
    if (!(await page.getByRole("dialog").isVisible())) {
      await page.reload({ waitUntil: "load" });
    }
    await expect(page.getByRole("dialog")).toBeVisible();
  }).toPass();
}

/** The row whose tick state the panel tracks, held by id so it survives unticking. */
async function ownMemberRow(page: Page) {
  const ownId = await page
    .getByRole("checkbox", { checked: true })
    .getAttribute("id");

  return page.locator(`#${ownId}`);
}

/** A member other than the signed-in user. */
async function otherMemberRow(page: Page) {
  const otherId = await page
    .getByRole("checkbox", { checked: false })
    .first()
    .getAttribute("id");

  return page.locator(`#${otherId}`);
}

test.describe("Create project panel: the signed-in user's own membership", () => {
  test.beforeEach(async ({ page }) => {
    await loginWithDefaultUser(page);
    await openCreateProjectPanel(page);
  });

  test("stays quiet while the signed-in user is on the team", async ({
    page,
  }) => {
    await expect(page.getByRole("status")).toHaveCount(0);

    // Another member's row is not the panel's own row: ticking it and unticking
    // it again must not raise the warning.
    const otherMember = await otherMemberRow(page);
    await otherMember.click();
    await expect(otherMember).toHaveAttribute("aria-checked", "true");
    await expect(page.getByRole("status")).toHaveCount(0);

    await otherMember.click();
    await expect(otherMember).toHaveAttribute("aria-checked", "false");
    await expect(page.getByRole("status")).toHaveCount(0);
  });

  test("warns when the signed-in user untick themselves, and clears on re-tick", async ({
    page,
  }) => {
    const ownMember = await ownMemberRow(page);
    await expect(ownMember).toHaveAttribute("aria-checked", "true");

    await ownMember.click();

    await expect(ownMember).toHaveAttribute("aria-checked", "false");
    await expect(page.getByRole("status")).toHaveText(SELF_MEMBERSHIP_WARNING);

    await ownMember.click();

    await expect(ownMember).toHaveAttribute("aria-checked", "true");
    await expect(page.getByRole("status")).toHaveCount(0);
  });
});
