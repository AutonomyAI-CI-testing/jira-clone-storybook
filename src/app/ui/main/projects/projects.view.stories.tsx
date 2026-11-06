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
    // The page fills the viewport with `h-full`, a chain that only exists in
    // the app shell, so the story supplies its own viewport-height box.
    (Story) =>
      withRemixStub(
        withMainContext(() => (
          <div className="h-screen">
            <Story />
          </div>
        ))
      ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProjectsView>;

export const Default: Story = {};
