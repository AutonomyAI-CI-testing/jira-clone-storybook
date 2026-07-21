import type { Meta, StoryObj } from "@storybook/react";
import { IncidentTimeline } from "./incident-timeline";

const meta: Meta<typeof IncidentTimeline> = {
  title: "Pages/Login/IncidentTimeline",
  component: IncidentTimeline,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof IncidentTimeline>;

/**
 * 3-step incident response timeline showing:
 * 1. Detect (<30s) - Blue status indicator
 * 2. Route (<2m) - Amber/Yellow status indicator
 * 3. Resolve (<5m) - Green status indicator
 *
 * Used in the brand panel of the login page
 */
export const Default: Story = {};

/**
 * Timeline with larger padding for full-screen context
 */
export const WithPadding: Story = {
  decorators: [
    (Story) => (
      <div className="p-12">
        <Story />
      </div>
    ),
  ],
};
