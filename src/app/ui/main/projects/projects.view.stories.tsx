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
      // The page fills its container, so the story supplies a definite box.
      return (
        <div className="h-screen [&_div]:h-full">
          {withRemixStub(withMainContext(Story))}
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof ProjectsView>;

export const Default: Story = {};
