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
    // The splash fills its container, so the story gives it a height to fill.
    (Story) =>
      withRemixStub(
        withMainContext(() => (
          <div className="h-screen w-full">
            <Story />
          </div>
        ))
      ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProjectsView>;

export const Default: Story = {};
