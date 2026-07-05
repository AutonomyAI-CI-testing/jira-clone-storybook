import type { Meta, StoryObj } from "@storybook/react";
import { BrandPanel } from "./brand-panel";

const meta: Meta<typeof BrandPanel> = {
  title: "Components/BrandPanel",
  component: BrandPanel,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    title: {
      control: { type: "text" },
      defaultValue: "Welcome Back",
    },
    subtitle: {
      control: { type: "text" },
      defaultValue: "To your project management dashboard",
    },
  },
};

export default meta;
type Story = StoryObj<typeof BrandPanel>;

export const Default: Story = {
  args: {
    title: "Welcome Back",
    subtitle: "To your project management dashboard",
  },
};

export const CustomFeatures: Story = {
  args: {
    title: "Build Better",
    subtitle: "Manage your work like a pro",
    features: [
      {
        title: "Sprint Planning",
        description: "Plan sprints and manage your backlog",
      },
      {
        title: "Issue Tracking",
        description: "Track bugs, features, and improvements",
      },
      {
        title: "Team Insights",
        description: "See your team's progress at a glance",
      },
    ],
  },
};
