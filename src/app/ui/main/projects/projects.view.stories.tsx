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
      // The page fills whatever space the app shell leaves it, so the story
      // needs the same full-height flex column the main layout provides.
      return withRemixStub(
        withMainContext(() => (
          <div className="flex h-[100vh] flex-col">
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
