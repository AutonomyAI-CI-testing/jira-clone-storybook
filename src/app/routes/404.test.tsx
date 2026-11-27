import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { createRoutesStub, Meta } from "react-router";
import { describe, expect, it } from "vitest";
import NotFound404Route, { meta } from "./404";

const UNKNOWN_URL = "/this-page-does-not-exist";
const LOST_MESSAGE = "It seems that you have lost! Go to the main page";

// The route is registered as the catch-all (`route("*", "routes/404.tsx")`), so
// it is rendered for any address the app does not know. `Meta` is what the app's
// root renders inside `<head>`, so the stub renders it the same way.
const NotFoundScreen = () => (
  <>
    <Meta />
    <NotFound404Route />
  </>
);

const renderUnknownUrl = () => {
  const Stub = createRoutesStub([
    { path: "*", Component: NotFoundScreen, meta },
  ]);

  return render(<Stub initialEntries={[UNKNOWN_URL]} />);
};

describe("catch-all route", () => {
  it("renders the app's 404 screen, centred, with its message linked to the main page", () => {
    const { container } = renderUnknownUrl();

    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "/images/error-404.svg"
    );

    const link = screen.getByRole("link", { name: LOST_MESSAGE });
    expect(link).toHaveAttribute("href", "/");

    expect(container.firstElementChild).toHaveClass(
      "flex",
      "h-full",
      "items-center",
      "justify-center"
    );
  });

  it("titles the page", () => {
    renderUnknownUrl();

    expect(document.title).toBe("Jira clone - Not found");
  });
});
