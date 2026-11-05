import type { Meta, StoryObj } from "@storybook/react-vite";
import { withMainContext, withRemixStub } from "@app/stories/utils";
import { ProjectsView } from "./projects.view";

const meta: Meta<typeof ProjectsView> = {
  title: "Pages/Main/ProjectsView",
  component: ProjectsView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      return withRemixStub(withMainContext(Story));
    },
  ],
};

export default meta;
type Story = StoryObj<typeof ProjectsView>;

export const Default: Story = {
  // The page fills its parent, so the story supplies the viewport height that
  // root.tsx provides in the app.
  render: () => (
    <div className="h-screen">
      <ProjectsView />
    </div>
  ),
};
