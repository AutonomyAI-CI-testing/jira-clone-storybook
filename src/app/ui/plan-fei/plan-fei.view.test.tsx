import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import PlanFeiRoute, * as planFeiRouteModule from "@app/routes/plan-fei";

const renderPage = () => render(<PlanFeiRoute />);

const classesOf = (element: Element | null): string[] =>
  (element?.getAttribute("class") ?? "").split(" ").filter(Boolean);

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
