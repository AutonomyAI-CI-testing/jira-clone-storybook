import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./title";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
  decorators: [
    (Story: React.FC) => (
      <div style={{ width: "600px", padding: "24px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    initTitle: "Fix the broken login flow for OAuth users",
    initSubtitle: "Users cannot authenticate using Google or GitHub",
    readOnly: false,
    placeholder: "Write the title",
    subtitlePlaceholder: "Write the subtitle",
  },
};

export const WithSubtitleOnly: Story = {
  args: {
    initTitle: "Main issue title",
    initSubtitle: "Detailed context and additional information about the title",
    readOnly: false,
  },
};

export const Empty: Story = {
  args: {
    initTitle: "",
    initSubtitle: "",
    readOnly: false,
    placeholder: "Write the title",
    subtitlePlaceholder: "Write the subtitle",
  },
};

export const WithError: Story = {
  args: {
    initTitle: "",
    initSubtitle: "Additional context",
    error: "Title is required",
    readOnly: false,
    placeholder: "Write the title",
    subtitlePlaceholder: "Write the subtitle",
  },
};

export const ReadOnly: Story = {
  args: {
    initTitle: "Update dashboard performance metrics for Q4 reporting",
    initSubtitle: "Ensure all KPIs are captured and displayed correctly",
    readOnly: true,
  },
};

export const NearMaxLength: Story = {
  args: {
    initTitle:
      "This is a title that is approaching the maximum allowed character limit",
    initSubtitle: "This subtitle is also approaching the maximum length allowed",
    readOnly: false,
    maxLength: 80,
    subtitleMaxLength: 120,
  },
};
