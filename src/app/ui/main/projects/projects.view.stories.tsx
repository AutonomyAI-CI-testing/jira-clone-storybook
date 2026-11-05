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
      // The view fills its container with h-full, which the app supplies
      // through the main layout. The story has no such chain, so it gives the
      // page a viewport-height box of its own.
      return withRemixStub(
        withMainContext(() => (
          <div className="h-screen">
            <Story />
          </div>
        ))
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof ProjectsView>;

export const Default: Story = {};
