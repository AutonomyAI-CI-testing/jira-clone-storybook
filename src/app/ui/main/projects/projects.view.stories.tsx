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
    // The view fills the space the app shell leaves for it, so the story needs
    // the same full-height flex column around it.
    (Story) => {
      return (
        <div className="flex h-screen flex-col [&>div]:flex [&>div]:flex-1 [&>div]:flex-col">
          <Story />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof ProjectsView>;

export const Default: Story = {};
