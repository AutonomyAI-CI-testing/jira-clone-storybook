import { test, expect, type Page } from "@playwright/test";

const login = async (page: Page) => {
  await expect(async () => {
    await page.goto("/login");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL(/.*projects/, { timeout: 5000 });
  }).toPass();
};

// Counts the accessibility-tree nodes that are exposed (not ignored) and resolve to
// the invisible measuring <p class="... opacity-0"> that TextareaAutosize renders.
const exposedMeasuringParagraphs = async (page: Page): Promise<number> => {
  const cdp = await page.context().newCDPSession(page);
  await cdp.send("DOM.enable");
  await cdp.send("Accessibility.enable");
  const { nodes } = await cdp.send("Accessibility.getFullAXTree");
  let exposed = 0;
  for (const node of nodes) {
    if (node.ignored || node.backendDOMNodeId === undefined) continue;
    const { node: dom } = await cdp.send("DOM.describeNode", {
      backendNodeId: node.backendDOMNodeId,
    });
    if (dom.nodeName !== "P") continue;
    const attrs = dom.attributes ?? [];
    const classIndex = attrs.indexOf("class");
    const className = classIndex >= 0 ? attrs[classIndex + 1] : "";
    if (className.split(/\s+/).includes("opacity-0")) exposed += 1;
  }
  await cdp.detach();
  return exposed;
};

test.describe("TextareaAutosize measuring paragraph", () => {
  test.skip(({ browserName }) => browserName !== "chromium", "reads Chrome's accessibility tree over CDP");

  test("is not exposed to the accessibility tree but still sizes the textarea", async ({ page }) => {
    await login(page);
    await page.goto("/projects/new");

    const field = page.locator("textarea[name='description']");
    await expect(field).toBeVisible();
    const initialHeight = (await field.boundingBox())!.height;

    await field.fill("A project description that is long enough to wrap\nonto a second line\nand a third one");

    // The measuring paragraph still drives the textarea's height...
    await expect
      .poll(async () => (await field.boundingBox())!.height)
      .toBeGreaterThan(initialHeight);

    // ...but screen readers must not read it as a second copy of the field's text.
    const measuring = page.locator("p.opacity-0");
    expect(await measuring.count()).toBeGreaterThan(0);
    for (const p of await measuring.all()) {
      await expect(p).toHaveAttribute("aria-hidden", "true");
    }
    expect(await exposedMeasuringParagraphs(page)).toBe(0);
  });
});
