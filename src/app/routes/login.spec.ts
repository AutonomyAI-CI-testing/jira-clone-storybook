import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/login");
  await expect(page).toHaveTitle(/Jira clone - Login/);
});

test("page renders", async ({ page }) => {
  await page.goto("/login");
  await expect(page.getByRole("heading", { name: "Fei" })).toBeVisible();
});
