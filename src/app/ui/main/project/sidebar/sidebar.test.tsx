import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRoutesStub } from "react-router";
import { describe, expect, it } from "vitest";
import { ProjectView } from "@app/ui/main/project/project.view";
import { Sidebar } from "./sidebar";

const project = {
  name: "Jira clone",
  description: "A Jira clone",
  image: "/images/default-project.png",
};

const sidebarProps = {
  projectName: project.name,
  projectDescription: project.description,
  projectImage: project.image,
};

// jsdom loads no stylesheet, so the panel's width is asserted through the
// utility classes that set it: `w-[240px]` when open, `max-w-0` when collapsed.
const OPEN_WIDTH_CLASS = "w-[240px]";

const renderSidebar = () => {
  const Stub = createRoutesStub([
    { path: "/", Component: () => <Sidebar {...sidebarProps} /> },
  ]);

  render(<Stub initialEntries={["/"]} />);
};

const renderProjectPage = () => {
  const Stub = createRoutesStub([
    {
      path: "/projects/:projectId/board",
      Component: () => <ProjectView {...project} />,
    },
  ]);

  render(<Stub initialEntries={["/projects/jira-clone/board"]} />);
};

const getToggle = () => screen.getByRole("button", { name: "Toggle sidebar" });

const getPanel = () => {
  const panel = document.getElementById("project-sidebar");

  expect(panel).not.toBeNull();

  return panel as HTMLElement;
};

describe("Sidebar collapse control", () => {
  it("reports the panel as expanded and names the panel it controls", () => {
    renderSidebar();

    const toggle = getToggle();

    expect(toggle.getAttribute("aria-expanded")).toBe("true");
    expect(toggle.getAttribute("aria-controls")).toBe("project-sidebar");

    const panel = getPanel();

    expect(within(panel).getByText(project.name)).toBeDefined();
    expect(panel.classList.contains(OPEN_WIDTH_CLASS)).toBe(true);
  });

  it("collapses the panel to no width and reports it as collapsed once pressed", async () => {
    const user = userEvent.setup();

    renderSidebar();
    await user.click(getToggle());

    expect(getToggle().getAttribute("aria-expanded")).toBe("false");
    expect(getPanel().classList.contains(OPEN_WIDTH_CLASS)).toBe(false);
    expect(getPanel().classList.contains("max-w-0")).toBe(true);
  });

  it("reports the expanded state of the panel the project page renders", async () => {
    const user = userEvent.setup();

    renderProjectPage();

    expect(within(getPanel()).getByText(project.name)).toBeDefined();
    expect(getToggle().getAttribute("aria-expanded")).toBe("true");

    await user.click(getToggle());

    expect(getToggle().getAttribute("aria-expanded")).toBe("false");
    expect(getPanel().classList.contains(OPEN_WIDTH_CLASS)).toBe(false);
  });

  it("expands the panel again when the control is pressed a second time", async () => {
    const user = userEvent.setup();

    renderSidebar();
    await user.click(getToggle());
    await user.click(getToggle());

    expect(getToggle().getAttribute("aria-expanded")).toBe("true");
    expect(getPanel().classList.contains(OPEN_WIDTH_CLASS)).toBe(true);
  });
});
