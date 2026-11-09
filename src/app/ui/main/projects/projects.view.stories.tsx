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
    // The view fills its parent with `flex-1`, so the story supplies the
    // full-height flex column the app layout gives it.
    (Story) =>
      withRemixStub(
        <div className="flex h-screen flex-col [&>div]:flex [&>div]:flex-1 [&>div]:flex-col">
          {withMainContext(Story)}
        </div>
      ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProjectsView>;

export const Default: Story = {};
