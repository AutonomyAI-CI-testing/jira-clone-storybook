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
      control: {
        type: "select",
        options: ["primary", "neutral", "success", "danger", "warning", "info"],
      },
      defaultValue: "info",
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md"],
      },
      defaultValue: "md",
    },
    children: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof LabelBadge>;

export const Default: Story = {
  args: {
    children: "Label",
    color: "info",
    size: "md",
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-font">Colors (Size: md)</h3>
        <div className="flex gap-2 flex-wrap">
          <LabelBadge color="primary">Primary</LabelBadge>
          <LabelBadge color="neutral">Neutral</LabelBadge>
          <LabelBadge color="success">Success</LabelBadge>
          <LabelBadge color="danger">Danger</LabelBadge>
          <LabelBadge color="warning">Warning</LabelBadge>
          <LabelBadge color="info">Info</LabelBadge>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-font">Sizes</h3>
        <div className="flex gap-2 items-center">
          <span className="text-xs text-font-subtle">Small:</span>
          <LabelBadge color="primary" size="sm">Label</LabelBadge>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-xs text-font-subtle">Medium:</span>
          <LabelBadge color="primary" size="md">Label</LabelBadge>
        </div>
      </div>
    </div>
  ),
};

export const Primary: Story = {
  args: {
    children: "Primary Badge",
    color: "primary",
    size: "md",
  },
};

export const Neutral: Story = {
  args: {
    children: "Neutral Badge",
    color: "neutral",
    size: "md",
  },
};

export const Success: Story = {
  args: {
    children: "Success Badge",
    color: "success",
    size: "md",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger Badge",
    color: "danger",
    size: "md",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning Badge",
    color: "warning",
    size: "md",
  },
};

export const Info: Story = {
  args: {
    children: "Info Badge",
    color: "info",
    size: "md",
  },
};

export const SmallSize: Story = {
  args: {
    children: "Small",
    color: "primary",
    size: "sm",
  },
};

export const MediumSize: Story = {
  args: {
    children: "Medium",
    color: "primary",
    size: "md",
  },
};
