import type { Meta, StoryObj } from "@storybook/react-vite";

import { LabelBadge } from "./label-badge";

const meta: Meta<typeof LabelBadge> = {
  title: "Components/LabelBadge",
  component: LabelBadge,
  parameters: {
    layout: "centered",
  },
  argTypes: {
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
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LabelBadge>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      {/* Subtle Variants */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-font-primary">Subtle Variants</h3>
        <div className="flex flex-wrap gap-2">
          <LabelBadge color="primary" variant="subtle">Primary</LabelBadge>
          <LabelBadge color="neutral" variant="subtle">Neutral</LabelBadge>
          <LabelBadge color="success" variant="subtle">Success</LabelBadge>
          <LabelBadge color="danger" variant="subtle">Danger</LabelBadge>
          <LabelBadge color="warning" variant="subtle">Warning</LabelBadge>
          <LabelBadge color="info" variant="subtle">Info</LabelBadge>
        </div>
      </div>

      {/* Bold Variants */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-font-primary">Bold Variants</h3>
        <div className="flex flex-wrap gap-2">
          <LabelBadge color="primary" variant="bold">Primary</LabelBadge>
          <LabelBadge color="neutral" variant="bold">Neutral</LabelBadge>
          <LabelBadge color="success" variant="bold">Success</LabelBadge>
          <LabelBadge color="danger" variant="bold">Danger</LabelBadge>
          <LabelBadge color="warning" variant="bold">Warning</LabelBadge>
          <LabelBadge color="info" variant="bold">Info</LabelBadge>
        </div>
      </div>

      {/* With Dot Indicator - Subtle */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-font-primary">With Dot (Subtle)</h3>
        <div className="flex flex-wrap gap-2">
          <LabelBadge color="primary" variant="subtle" dot>Primary</LabelBadge>
          <LabelBadge color="neutral" variant="subtle" dot>Neutral</LabelBadge>
          <LabelBadge color="success" variant="subtle" dot>Success</LabelBadge>
          <LabelBadge color="danger" variant="subtle" dot>Danger</LabelBadge>
          <LabelBadge color="warning" variant="subtle" dot>Warning</LabelBadge>
          <LabelBadge color="info" variant="subtle" dot>Info</LabelBadge>
        </div>
      </div>

      {/* With Dot Indicator - Bold */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-font-primary">With Dot (Bold)</h3>
        <div className="flex flex-wrap gap-2">
          <LabelBadge color="primary" variant="bold" dot>Primary</LabelBadge>
          <LabelBadge color="neutral" variant="bold" dot>Neutral</LabelBadge>
          <LabelBadge color="success" variant="bold" dot>Success</LabelBadge>
          <LabelBadge color="danger" variant="bold" dot>Danger</LabelBadge>
          <LabelBadge color="warning" variant="bold" dot>Warning</LabelBadge>
          <LabelBadge color="info" variant="bold" dot>Info</LabelBadge>
        </div>
      </div>

      {/* Size Variations */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-font-primary">Size Variations</h3>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-font-subtle">SM:</span>
            <LabelBadge color="primary" size="sm">Small</LabelBadge>
            <LabelBadge color="success" size="sm" dot>Small with Dot</LabelBadge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-font-subtle">MD:</span>
            <LabelBadge color="primary" size="md">Medium</LabelBadge>
            <LabelBadge color="success" size="md" dot>Medium with Dot</LabelBadge>
          </div>
        </div>
      </div>
    </div>
  ),
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

export const Info: Story = {
  args: {
    children: "Info",
    color: "info",
  },
};

export const BoldVariant: Story = {
  args: {
    children: "Bold Badge",
    color: "primary",
    variant: "bold",
  },
};

export const WithDot: Story = {
  args: {
    children: "Active",
    color: "success",
    dot: true,
  },
};

export const SmallSize: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
};
