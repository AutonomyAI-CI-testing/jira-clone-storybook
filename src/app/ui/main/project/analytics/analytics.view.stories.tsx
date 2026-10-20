import type { Meta, StoryObj } from "@storybook/react-vite";
import { withMainContext, withRemixStub } from "@app/stories/utils";
import { getWeekStarts, WEEKS_READ } from "@domain/activity/activity";
import { AnalyticsView } from "./analytics.view";

const weekStarts = getWeekStarts(WEEKS_READ, Date.now());
const counts = [
  { signedIn: 4, active: 1 },
  { signedIn: 6, active: 2 },
  { signedIn: 5, active: 2 },
  { signedIn: 7, active: 3 },
  { signedIn: 9, active: 4 },
  { signedIn: 8, active: 3 },
];

const meta: Meta<typeof AnalyticsView> = {
  title: "Pages/Main/Project/AnalyticsView",
  component: AnalyticsView,
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
type Story = StoryObj<typeof AnalyticsView>;

export const Default: Story = {
  args: {
    weeks: counts.map((weekCounts, index) => ({
      weekStart: weekStarts[index],
      ...weekCounts,
    })),
    recordingStartedAt: weekStarts[0],
  },
};
