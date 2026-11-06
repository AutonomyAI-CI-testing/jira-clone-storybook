import type { Meta, StoryObj } from "@storybook/react-vite";
import { withMainContext, withRemixStub } from "@app/stories/utils";
import { projectsMock } from "@domain/project/project.mock";
import { ProjectsView } from "./projects.view";

const meta: Meta<typeof ProjectsView> = {
  title: "Pages/Main/ProjectsView",
  component: ProjectsView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      // The page is full-height; the story supplies the height the app shell
      // would otherwise provide.
      return (
        <div className="h-screen">{withRemixStub(withMainContext(Story))}</div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof ProjectsView>;

const projectsSummary = projectsMock.map((project) => ({
  id: project.id,
  name: project.name,
  description: project.description,
  image: project.image,
  createdAt: project.createdAt,
}));

export const Default: Story = {
  args: {
    projectsSummary: projectsSummary,
  },
};

export const SingleProject: Story = {
  args: {
    projectsSummary: projectsSummary.slice(0, 1),
  },
};

export const Empty: Story = {
  args: {
    projectsSummary: [],
  },
};
