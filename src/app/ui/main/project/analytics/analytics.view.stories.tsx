import type { Meta, StoryObj } from "@storybook/react-vite";
import { projectMock1, projectMock2 } from "@domain/project";
import { AnalyticsView } from "./analytics.view";

const meta: Meta<typeof AnalyticsView> = {
  title: "Pages/Project/AnalyticsView",
  component: AnalyticsView,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof AnalyticsView>;

export const Default: Story = {
  args: {
    project: projectMock1,
  },
};

export const SecondProject: Story = {
  args: {
    project: projectMock2,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-12">
      <div>
        <h2 className="mb-4 font-primary-bold text-lg text-font">
          Project 1 — {projectMock1.name}
        </h2>
        <AnalyticsView project={projectMock1} />
      </div>
      <div>
        <h2 className="mb-4 font-primary-bold text-lg text-font">
          Project 2 — {projectMock2.name}
        </h2>
        <AnalyticsView project={projectMock2} />
      </div>
    </div>
  ),
};
