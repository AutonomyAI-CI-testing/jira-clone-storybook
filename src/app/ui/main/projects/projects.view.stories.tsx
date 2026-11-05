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

// The view fills the viewport with `h-full`; outside the app's root shell
// there is no height to resolve against, so the story supplies one.
export const Default: Story = {
  render: () => (
    <div className="h-screen">
      <ProjectsView />
    </div>
  ),
};
