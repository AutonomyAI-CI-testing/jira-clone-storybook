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
    // The view fills its parent, so the story supplies the viewport height that
    // `root.tsx` gives it in the app.
    (Story) =>
      withRemixStub(
        <div className="flex h-screen">{withMainContext(Story)}</div>
      ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProjectsView>;

export const Default: Story = {};
