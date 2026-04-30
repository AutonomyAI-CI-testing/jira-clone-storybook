import type { Meta, StoryObj } from "@storybook/react";
import { LabelBadge } from "./label-badge";

const meta: Meta<typeof LabelBadge> = {
  title: "Components/LabelBadge",
  component: LabelBadge,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "neutral", "success", "danger", "warning", "info"],
    },
    variant: {
      control: "select",
      options: ["subtle", "bold"],
    },
    size: {
      control: "select",
      options: ["sm", "md"],
    },
    dot: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof LabelBadge>;

// Default story shows the default color (info - blue) without explicitly setting it
export const Default: Story = {
  args: {
    children: "Badge Label",
  },
};

// Individual color stories
export const Info: Story = {
  args: {
    children: "Info",
    color: "info",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary",
    color: "primary",
  },
};

export const Neutral: Story = {
  args: {
    children: "Neutral",
    color: "neutral",
  },
};

export const Success: Story = {
  args: {
    children: "Success",
    color: "success",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger",
    color: "danger",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning",
    color: "warning",
  },
};

// Variant stories
export const SubtleVariant: Story = {
  args: {
    children: "Subtle",
    variant: "subtle",
  },
};

export const BoldVariant: Story = {
  args: {
    children: "Bold",
    variant: "bold",
  },
};

// Size stories
export const SmallSize: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
};

export const MediumSize: Story = {
  args: {
    children: "Medium",
    size: "md",
  },
};

// With dot indicator
export const WithDot: Story = {
  args: {
    children: "With Dot",
    dot: true,
  },
};

// Showcase all colors
export const AllColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <LabelBadge>Default (Info)</LabelBadge>
      <LabelBadge color="primary">Primary</LabelBadge>
      <LabelBadge color="neutral">Neutral</LabelBadge>
      <LabelBadge color="success">Success</LabelBadge>
      <LabelBadge color="danger">Danger</LabelBadge>
      <LabelBadge color="warning">Warning</LabelBadge>
      <LabelBadge color="info">Info</LabelBadge>
    </div>
  ),
};

// All colors with bold variant
export const AllColorsBold: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <LabelBadge variant="bold">Default (Info)</LabelBadge>
      <LabelBadge color="primary" variant="bold">Primary</LabelBadge>
      <LabelBadge color="neutral" variant="bold">Neutral</LabelBadge>
      <LabelBadge color="success" variant="bold">Success</LabelBadge>
      <LabelBadge color="danger" variant="bold">Danger</LabelBadge>
      <LabelBadge color="warning" variant="bold">Warning</LabelBadge>
      <LabelBadge color="info" variant="bold">Info</LabelBadge>
    </div>
  ),
};

// All colors with dot
export const AllColorsWithDot: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <LabelBadge dot>Default (Info)</LabelBadge>
      <LabelBadge color="primary" dot>Primary</LabelBadge>
      <LabelBadge color="neutral" dot>Neutral</LabelBadge>
      <LabelBadge color="success" dot>Success</LabelBadge>
      <LabelBadge color="danger" dot>Danger</LabelBadge>
      <LabelBadge color="warning" dot>Warning</LabelBadge>
      <LabelBadge color="info" dot>Info</LabelBadge>
    </div>
  ),
};
