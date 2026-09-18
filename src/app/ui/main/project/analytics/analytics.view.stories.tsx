import type { Meta, StoryObj } from "@storybook/react";
import { projectMock1, projectMock2 } from "@domain/project";
import { withRemixStub } from "@app/stories/utils";
import { AnalyticsView } from "./analytics.view";

const meta: Meta<typeof AnalyticsView> = {
  title: "Pages/Project/Analytics",
  component: AnalyticsView,
  parameters: {
    layout: "padded",
  },
  decorators: [(Story) => withRemixStub(<Story />)],
};

export default meta;
type Story = StoryObj<typeof AnalyticsView>;

export const Default: Story = {
  args: {
    project: projectMock1,
  },
};

export const SmallerTeam: Story = {
  args: {
    project: projectMock2,
  },
};

export const Empty: Story = {
  args: {
    project: {
      ...projectMock1,
      categories: projectMock1.categories.map((category) => ({
        ...category,
        issues: [],
      })),
    },
  },
};
