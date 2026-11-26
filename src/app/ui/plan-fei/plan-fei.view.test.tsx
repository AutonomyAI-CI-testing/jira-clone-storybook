import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import PlanFeiRoute, * as planFeiRouteModule from "@app/routes/plan-fei";

const renderPage = () => render(<PlanFeiRoute />);

const classesOf = (element: Element | null): string[] =>
  (element?.getAttribute("class") ?? "").split(" ").filter(Boolean);

// The marks come from a recorded session: three clicks in a 1280x800 window.
const RECORDED_WINDOW = { width: 1280, height: 800 };
const RECORDED_POINTS = [
  { x: 138, y: 225 },
  { x: 277, y: 326 },
  { x: 1114, y: 94 },
];

const marksOf = (container: HTMLElement): HTMLElement[] =>
  Array.from(container.querySelectorAll<HTMLElement>("span"));

const layerOf = (container: HTMLElement): HTMLElement | null =>
  marksOf(container)[0]?.parentElement ?? null;

// jsdom lays nothing out, so a mark's centre is read back from the offset it is
// placed at, resolved against a window of the given size. It also keeps only
// four decimals of a percentage, hence the 0.005px tolerance on the result.
const PX_TOLERANCE = 2;

const centreIn = (
  mark: HTMLElement,
  window: { width: number; height: number }
): { x: number; y: number } => ({
  x: (Number.parseFloat(mark.style.left) / 100) * window.width,
  y: (Number.parseFloat(mark.style.top) / 100) * window.height,
});

it("renders 'Plan fei' as the page's entire text, over the mascot artwork", () => {
  const { container } = renderPage();

  expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
    "Plan fei"
  );
  // "Plan fei" is everything the page says: no header, no navigation, no form.
  expect(container.textContent).toBe("Plan fei");
  expect(screen.queryByRole("banner")).toBeNull();
  expect(screen.queryByRole("navigation")).toBeNull();

  const artwork = container.querySelector("img");
  expect(artwork?.getAttribute("src")).toBe("/images/plan-fei-mascot.png");
  // The artwork is decoration: it adds no text and is hidden from assistive tech.
  expect(artwork?.getAttribute("alt")).toBe("");
  expect(artwork?.getAttribute("aria-hidden")).toBe("true");
  expect(screen.queryByRole("img")).toBeNull();
});

it("anchors the artwork to the bottom edge, centred, in a layer behind the heading", () => {
  const { container } = renderPage();

  expect(classesOf(container.querySelector("img"))).toEqual(
    expect.arrayContaining([
      "absolute",
      "bottom-0",
      "left-1/2",
      "-translate-x-1/2",
      "object-contain",
      "w-auto",
      "h-[78vh]",
      "pointer-events-none",
      "select-none",
    ])
  );
  expect(classesOf(screen.getByRole("heading", { level: 1 }))).toEqual(
    expect.arrayContaining(["relative", "z-10"])
  );
  expect(classesOf(container.firstElementChild)).toEqual(
    expect.arrayContaining(["relative", "h-full", "overflow-hidden"])
  );
});

it("is reachable without signing in and titles itself", () => {
  const routeModule = planFeiRouteModule as unknown as Record<string, unknown>;

  // No loader/action means no session read, so no redirect to the login page.
  expect(routeModule.loader).toBeUndefined();
  expect(routeModule.action).toBeUndefined();

  const tags = (
    planFeiRouteModule.meta as unknown as () => Array<Record<string, string>>
  )();

  expect(tags).toEqual([
    { title: "Jira clone - Plan fei" },
    { name: "charset", content: "utf-8" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
    { name: "title", content: "Jira clone - Plan fei" },
    { name: "description", content: "Plan fei." },
  ]);
});

it("centres a mark on each point clicked in the recorded session", () => {
  const { container } = renderPage();
  const marks = marksOf(container);

  expect(marks).toHaveLength(RECORDED_POINTS.length);
  marks.forEach((mark, index) => {
    const centre = centreIn(mark, RECORDED_WINDOW);
    expect(centre.x).toBeCloseTo(RECORDED_POINTS[index].x, PX_TOLERANCE);
    expect(centre.y).toBeCloseTo(RECORDED_POINTS[index].y, PX_TOLERANCE);
  });
});

it("holds each mark at the same fraction of the window at another size", () => {
  const { container } = renderPage();
  const otherWindow = { width: 1920, height: 1080 };

  marksOf(container).forEach((mark, index) => {
    const recorded = RECORDED_POINTS[index];
    const centre = centreIn(mark, otherWindow);
    expect(centre.x).toBeCloseTo(
      (recorded.x / RECORDED_WINDOW.width) * otherWindow.width,
      PX_TOLERANCE
    );
    expect(centre.y).toBeCloseTo(
      (recorded.y / RECORDED_WINDOW.height) * otherWindow.height,
      PX_TOLERANCE
    );
  });
});

it("draws each mark 48px wide, 2px tall, fully rounded and in the brand blue", () => {
  const { container } = renderPage();
  const marks = marksOf(container);

  expect(marks).toHaveLength(RECORDED_POINTS.length);
  marks.forEach((mark) => {
    // w-12 is 3rem (48px) and h-0.5 is 0.125rem (2px); bg-background-brand-bold
    // is the brand blue token (rgb(12, 102, 228) in the light theme).
    expect(classesOf(mark)).toEqual(
      expect.arrayContaining([
        "w-12",
        "h-0.5",
        "rounded-full",
        "bg-background-brand-bold",
        "-translate-x-1/2",
        "-translate-y-1/2",
      ])
    );
  });
});

it("hides the marks from assistive tech and from the pointer, adding no text", () => {
  const { container } = renderPage();
  const marks = marksOf(container);

  expect(marks).toHaveLength(RECORDED_POINTS.length);
  marks.forEach((mark) => {
    expect(mark.textContent).toBe("");
  });

  const layer = layerOf(container);
  expect(layer?.getAttribute("aria-hidden")).toBe("true");
  // inset-0 is what makes each offset a fraction of the window.
  expect(classesOf(layer)).toEqual(
    expect.arrayContaining(["pointer-events-none", "absolute", "inset-0"])
  );
});
