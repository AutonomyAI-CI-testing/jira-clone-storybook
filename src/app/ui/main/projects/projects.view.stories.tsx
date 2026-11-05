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
      // The page fills the viewport with `h-full`, which resolves against the
      // `h-full` chain in root.tsx — absent in a story, so give it its own box.
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
