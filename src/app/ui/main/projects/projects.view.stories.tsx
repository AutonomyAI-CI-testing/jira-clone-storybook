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

// The view fills its parent (`h-full`), which only resolves inside the app's
// full-height document chain. Storybook has no such chain, so the story gives
// it a viewport-tall box of its own.
export const Default: Story = {
  render: () => (
    <div className="h-screen">
      <ProjectsView />
    </div>
  ),
};
