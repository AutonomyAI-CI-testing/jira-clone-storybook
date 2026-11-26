import { readFileSync } from "node:fs";
import path from "node:path";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import routes from "../../routes";
import BuildFeiRoute, { meta } from "../../routes/build-fei";
import { BuildFeiView } from "./build-fei.view";

/** The one line the page is allowed to show. */
const PAGE_TEXT = "Build fei";
/** The artwork, referenced root-absolute, so it resolves to `public/images/...`. */
const ARTWORK_SRC = "/images/build-fei-mascot.png";
const PNG_SIGNATURE = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);
/** Byte 25 of a PNG is the IHDR colour type. */
const PNG_COLOUR_TYPE_OFFSET = 25;
const PNG_GREYSCALE_ALPHA = 4;
const PNG_TRUECOLOUR_ALPHA = 6;
const PNG_INDEXED = 3;
/** Viewport heights the layout is checked at; 757px is the one it was designed against. */
const VIEWPORT_HEIGHTS_PX = [757, 1080];
/** Tailwind's font sizes, in px at the default 16px root font size. */
const FONT_SIZE_PX: Record<string, number> = {
  "text-4xl": 36,
  "text-5xl": 48,
  "text-6xl": 60,
  "text-7xl": 72,
};
const DEFAULT_HEADING_HEIGHT_PX = 48;

const classes = (element: Element): string[] =>
  element.className.split(/\s+/).filter(Boolean);

const hasClass = (element: Element, name: string): boolean =>
  classes(element).includes(name);

const classValue = (element: Element, pattern: RegExp): number | undefined => {
  const match = element.className.match(pattern);
  return match ? Number(match[1]) : undefined;
};

const vhToPx = (vh: number, viewportHeightPx: number): number =>
  (vh / 100) * viewportHeightPx;

/** A Tailwind spacing step (`bottom-4`) is 4 × 0.25rem, at the default 16px root. */
const spacingStepToPx = (step: number): number => step * 0.25 * 16;

type RouteEntry = { path?: string; file?: string; children?: RouteEntry[] };

const flattenRoutes = (entries: RouteEntry[]): RouteEntry[] =>
  entries.flatMap(({ path, file, children }) => [
    { path, file },
    ...(children ? flattenRoutes(children) : []),
  ]);

const renderPage = () => {
  const { container } = render(<BuildFeiView />);
  const page = container.firstElementChild;
  const artwork = container.querySelector("img");
  const heading = container.querySelector("h1");
  if (!page || !artwork || !heading) {
    throw new Error(
      "The page must render its wrapper, its heading and its artwork"
    );
  }
  return { page, artwork, heading };
};

describe("Build fei page", () => {
  it("is reachable at /build-fei, and the routes the app already served still resolve", () => {
    const entries = flattenRoutes(routes as RouteEntry[]);

    expect(entries).toEqual(
      expect.arrayContaining([
        { path: undefined, file: "routes/index.tsx" },
        { path: "login", file: "routes/login.tsx" },
        { path: "action/logout", file: "routes/action/logout.tsx" },
        { path: "action/set-theme", file: "routes/action/set-theme.tsx" },
        { path: "build-fei", file: "routes/build-fei.tsx" },
        { path: undefined, file: "routes/__main.tsx" },
        { path: "projects", file: "routes/__main/projects.tsx" },
        { path: "new", file: "routes/__main/projects/new.tsx" },
        {
          path: "projects/:projectId",
          file: "routes/__main/projects.$projectId.tsx",
        },
        {
          path: "analytics",
          file: "routes/__main/projects.$projectId/analytics.tsx",
        },
        { path: "board", file: "routes/__main/projects.$projectId/board.tsx" },
        {
          path: "issue/new",
          file: "routes/__main/projects.$projectId/board/issue/new.tsx",
        },
        {
          path: "issue/:issueId",
          file: "routes/__main/projects.$projectId/board/issue/$issueId.tsx",
        },
        {
          path: "server-error",
          file: "routes/__main/projects.$projectId/server-error.tsx",
        },
        { path: "*", file: "routes/__main/projects.$projectId/$.tsx" },
        { path: "*", file: "routes/404.tsx" },
      ])
    );

    // The entry above names this module, and it is the page: rendering it shows the line.
    const { container } = render(<BuildFeiRoute />);
    expect(container.querySelector("h1")?.textContent).toBe(PAGE_TEXT);
  });

  it("titles itself 'Jira clone - Build fei' in the document head", () => {
    expect(meta({} as Parameters<typeof meta>[0])).toEqual([
      { title: "Jira clone - Build fei" },
      { name: "charset", content: "utf-8" },
      { name: "viewport", content: "width=device-width,initial-scale=1" },
      { name: "title", content: "Jira clone - Build fei" },
      { name: "description", content: "Build fei." },
      { property: "og:url", content: "https://jira-clone.fly.dev/build-fei" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Jira clone - Build fei" },
      { property: "og:title", content: "Jira clone - Build fei" },
      { property: "og:description", content: "Build fei." },
    ]);
  });

  it("shows only the line 'Build fei', over the wizard-robot artwork", () => {
    const { page, artwork, heading } = renderPage();

    expect(heading.tagName).toBe("H1");
    expect(heading.textContent).toBe(PAGE_TEXT);
    // "Build fei" is the only text on the page.
    expect(page.textContent?.trim()).toBe(PAGE_TEXT);

    expect(artwork.getAttribute("src")).toBe(ARTWORK_SRC);
    // The artwork is decorative, so it carries no name for assistive tech.
    expect(artwork.getAttribute("alt")).toBe("");
    expect(artwork.getAttribute("aria-hidden")).toBe("true");

    // The file the page asks for is the one that ships with it, and it is transparent,
    // so no white box is painted behind the robot.
    const asset = readFileSync(path.join(process.cwd(), "public", ARTWORK_SRC));
    expect(asset.subarray(0, PNG_SIGNATURE.length)).toEqual(PNG_SIGNATURE);
    const colourType = asset[PNG_COLOUR_TYPE_OFFSET];
    const hasAlphaChannel =
      colourType === PNG_GREYSCALE_ALPHA || colourType === PNG_TRUECOLOUR_ALPHA;
    const hasIndexedTransparency =
      colourType === PNG_INDEXED && asset.indexOf(Buffer.from("tRNS")) !== -1;
    expect(hasAlphaChannel || hasIndexedTransparency).toBe(true);
  });

  it("fills the height left under the heading, clear of it", () => {
    const { page, artwork, heading } = renderPage();

    // The page is a full-height column: the heading keeps its own height and the
    // artwork takes everything left below it, so the two cannot overlap.
    expect(hasClass(page, "relative")).toBe(true);
    expect(hasClass(page, "h-full")).toBe(true);
    expect(hasClass(page, "flex")).toBe(true);
    expect(hasClass(page, "flex-col")).toBe(true);
    expect(hasClass(page, "overflow-hidden")).toBe(true);
    const pageBottomStep = classValue(page, /(?:^|\s)pb-(\d+)(?:\s|$)/);
    expect(pageBottomStep).toBeDefined();
    const pageBottomPx = spacingStepToPx(pageBottomStep ?? 0);

    // The heading is laid out first and the artwork after it: that order is what
    // gives the artwork the space under the heading rather than behind it.
    expect(heading.nextElementSibling).toBe(artwork);

    // The artwork grows into the space left (`flex-1`), may shrink below its
    // intrinsic size (`min-h-0`), stays whole (`object-contain`) and sits on the
    // bottom edge of its box (`object-bottom`).
    expect(hasClass(artwork, "flex-1")).toBe(true);
    expect(hasClass(artwork, "min-h-0")).toBe(true);
    expect(hasClass(artwork, "w-full")).toBe(true);
    expect(hasClass(artwork, "object-contain")).toBe(true);
    expect(hasClass(artwork, "object-bottom")).toBe(true);

    // A gap between the heading's block and the artwork's box keeps them apart, and
    // the artwork's box still has height left at every viewport size.
    const gapStep = classValue(artwork, /(?:^|\s)mt-(\d+)(?:\s|$)/);
    expect(gapStep).toBeDefined();
    const gapPx = spacingStepToPx(gapStep ?? 0);
    expect(gapPx).toBeGreaterThan(0);

    const headingTopVh = classValue(heading, /(?:^|\s)mt-\[([\d.]+)vh\]/);
    expect(headingTopVh).toBeDefined();
    const headingFont = classes(heading).find((name) => name in FONT_SIZE_PX);
    const headingHeightPx = headingFont
      ? FONT_SIZE_PX[headingFont]
      : DEFAULT_HEADING_HEIGHT_PX;

    for (const viewportHeightPx of VIEWPORT_HEIGHTS_PX) {
      const headingBottomPx =
        vhToPx(headingTopVh ?? 0, viewportHeightPx) + headingHeightPx;
      const artworkTopPx = headingBottomPx + gapPx;
      expect(artworkTopPx).toBeGreaterThan(headingBottomPx);
      expect(viewportHeightPx - artworkTopPx - pageBottomPx).toBeGreaterThan(0);
    }
  });
});
