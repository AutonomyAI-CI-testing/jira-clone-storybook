import { test, expect, type Page } from "@playwright/test";

const ISSUE_PATH = /^\/projects\/([^/]+)\/board\/issue\/([^/?]+)/;

async function loginAndFindIssuePath(page: Page) {
  // The login click can be lost before hydration on a cold server: retry it.
  await expect(async () => {
    await page.goto("/login", { waitUntil: "load" });
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL(/.*projects/, { timeout: 3000 });
  }).toPass({ timeout: 30000 });

  const projectHref = await page.getByRole("link", { name: /^Project / }).first().getAttribute("href");
  await page.goto(`${projectHref}/board`, { waitUntil: "load" });

  const link = page.locator('a[href*="issue/"]:not([href*="issue/new"])').first();
  await expect(link).toBeVisible();
  const href = await link.getAttribute("href");
  const board = new URL(page.url()).pathname.replace(/\/$/, "");
  const path = new URL(href as string, `http://x${board}/`).pathname;
  const match = ISSUE_PATH.exec(path);
  expect(match).not.toBeNull();
  return { path, projectId: match![1], issueId: match![2] };
}

// A full document load, so the assertions read the head the server rendered.
async function loadIssue(page: Page, path: string) {
  await page.goto(path, { waitUntil: "load" });
  const ogUrl = await page.locator('head meta[property="og:url"]').getAttribute("content");
  const twitterSite = await page.locator('head meta[name="twitter:site"]').getAttribute("content");
  const ogTitle = await page.locator('head meta[property="og:title"]').getAttribute("content");
  const title = (ogTitle ?? "").replace(/^Jira clone - /, "");
  return { ogUrl, twitterSite, title };
}

test.describe("issue panel share url", () => {
  test("og:url and twitter:site point at the issue id, not its title", async ({ page }) => {
    const { path, projectId, issueId } = await loginAndFindIssuePath(page);
    const { ogUrl, twitterSite, title } = await loadIssue(page, path);

    const expected = `https://jira-clone.fly.dev/projects/${projectId}/board/issue/${issueId}`;
    expect(ogUrl).toBe(expected);
    expect(twitterSite).toBe(expected);

    expect(title.length).toBeGreaterThan(0);
    for (const url of [ogUrl, twitterSite]) {
      expect(url).not.toContain(title);
      expect(url).not.toContain(encodeURIComponent(title));
    }
  });
});
