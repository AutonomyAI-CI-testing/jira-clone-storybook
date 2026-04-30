import type { Meta, StoryObj } from "@storybook/react";

import { LabelBadge } from "./label-badge";

const meta: Meta<typeof LabelBadge> = {
  title: "Components/LabelBadge",
  component: LabelBadge,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: { type: "text" },
    },
    color: {
      control: {
        type: "select",
      },
      options: ["primary", "neutral", "success", "danger", "warning", "info"],
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["subtle", "bold"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md"],
    },
    dot: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LabelBadge>;

// Default story showing all variants in a grid
export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      {/* Subtle variants */}
      <div>
        <h3 className="mb-2 text-sm font-medium text-font-primary">Subtle Variants</h3>
        <div className="flex flex-wrap gap-2">
          <LabelBadge color="primary" variant="subtle">Primary</LabelBadge>
          <LabelBadge color="neutral" variant="subtle">Neutral</LabelBadge>
          <LabelBadge color="success" variant="subtle">Success</LabelBadge>
          <LabelBadge color="danger" variant="subtle">Danger</LabelBadge>
          <LabelBadge color="warning" variant="subtle">Warning</LabelBadge>
          <LabelBadge color="info" variant="subtle">Info</LabelBadge>
        </div>
      </div>

      {/* Bold variants */}
      <div>
        <h3 className="mb-2 text-sm font-medium text-font-primary">Bold Variants</h3>
        <div className="flex flex-wrap gap-2">
          <LabelBadge color="primary" variant="bold">Primary</LabelBadge>
          <LabelBadge color="neutral" variant="bold">Neutral</LabelBadge>
          <LabelBadge color="success" variant="bold">Success</LabelBadge>
          <LabelBadge color="danger" variant="bold">Danger</LabelBadge>
          <LabelBadge color="warning" variant="bold">Warning</LabelBadge>
          <LabelBadge color="info" variant="bold">Info</LabelBadge>
        </div>
      </div>

      {/* With dot indicators */}
      <div>
        <h3 className="mb-2 text-sm font-medium text-font-primary">With Dot Indicators</h3>
        <div className="flex flex-wrap gap-2">
          <LabelBadge color="primary" dot>Primary</LabelBadge>
          <LabelBadge color="neutral" dot>Neutral</LabelBadge>
          <LabelBadge color="success" dot>Success</LabelBadge>
          <LabelBadge color="danger" dot>Danger</LabelBadge>
          <LabelBadge color="warning" dot>Warning</LabelBadge>
          <LabelBadge color="info" dot>Info</LabelBadge>
        </div>
      </div>

      {/* Bold with dot indicators */}
      <div>
        <h3 className="mb-2 text-sm font-medium text-font-primary">Bold with Dot</h3>
        <div className="flex flex-wrap gap-2">
          <LabelBadge color="primary" variant="bold" dot>Primary</LabelBadge>
          <LabelBadge color="neutral" variant="bold" dot>Neutral</LabelBadge>
          <LabelBadge color="success" variant="bold" dot>Success</LabelBadge>
          <LabelBadge color="danger" variant="bold" dot>Danger</LabelBadge>
          <LabelBadge color="warning" variant="bold" dot>Warning</LabelBadge>
          <LabelBadge color="info" variant="bold" dot>Info</LabelBadge>
        </div>
      </div>

      {/* Size comparison */}
      <div>
        <h3 className="mb-2 text-sm font-medium text-font-primary">Size Comparison</h3>
        <div className="flex items-center gap-2">
          <LabelBadge color="primary" size="sm">Small</LabelBadge>
          <LabelBadge color="primary" size="md">Medium</LabelBadge>
          <LabelBadge color="success" size="sm" dot>Small with Dot</LabelBadge>
          <LabelBadge color="success" size="md" dot>Medium with Dot</LabelBadge>
        </div>
      </div>
    </div>
  ),
};

// Individual color stories
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

export const Info: Story = {
  args: {
    children: "Info",
    color: "info",
  },
};

// Bold variant stories
export const PrimaryBold: Story = {
  args: {
    children: "Primary Bold",
    color: "primary",
    variant: "bold",
  },
};

export const SuccessBold: Story = {
  args: {
    children: "Success Bold",
    color: "success",
    variant: "bold",
  },
};

export const DangerBold: Story = {
  args: {
    children: "Danger Bold",
    color: "danger",
    variant: "bold",
  },
};

// With dot indicator
export const WithDot: Story = {
  args: {
    children: "Status Active",
    color: "success",
    dot: true,
  },
};

export const BoldWithDot: Story = {
  args: {
    children: "Status Critical",
    color: "danger",
    variant: "bold",
    dot: true,
  },
};

// Size variants
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
