import type { Meta, StoryObj } from "@storybook/react-vite";
import { LabelBadge } from "./label-badge";

const meta: Meta<typeof LabelBadge> = {
  title: "Components/LabelBadge",
  component: LabelBadge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LabelBadge>;

export const Default: Story = {
  args: {
    children: "Blue Badge",
    color: "blue",
    size: "md",
  },
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

export const Blue: Story = {
  args: {
    children: "Blue Badge",
    color: "blue",
    size: "md",
  },
};

export const SmallSize: Story = {
  args: {
    children: "Small Badge",
    color: "primary",
    size: "sm",
  },
};

export const MediumSize: Story = {
  args: {
    children: "Medium Badge",
    color: "primary",
    size: "md",
  },
};

export const Removable: Story = {
  args: {
    children: "Removable Badge",
    color: "success",
    size: "md",
    removable: true,
    onRemove: () => alert("Badge removed"),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <LabelBadge color="primary" size="sm">
          Primary Small
        </LabelBadge>
        <LabelBadge color="primary" size="md">
          Primary Medium
        </LabelBadge>
        <LabelBadge color="primary" size="md" removable>
          Primary Removable
        </LabelBadge>
      </div>
      <div className="flex flex-wrap gap-2">
        <LabelBadge color="neutral" size="sm">
          Neutral Small
        </LabelBadge>
        <LabelBadge color="neutral" size="md">
          Neutral Medium
        </LabelBadge>
      </div>
      <div className="flex flex-wrap gap-2">
        <LabelBadge color="success" size="sm">
          Success Small
        </LabelBadge>
        <LabelBadge color="success" size="md">
          Success Medium
        </LabelBadge>
      </div>
      <div className="flex flex-wrap gap-2">
        <LabelBadge color="danger" size="sm">
          Danger Small
        </LabelBadge>
        <LabelBadge color="danger" size="md">
          Danger Medium
        </LabelBadge>
      </div>
      <div className="flex flex-wrap gap-2">
        <LabelBadge color="warning" size="sm">
          Warning Small
        </LabelBadge>
        <LabelBadge color="warning" size="md">
          Warning Medium
        </LabelBadge>
      </div>
      <div className="flex flex-wrap gap-2">
        <LabelBadge color="info" size="sm">
          Info Small
        </LabelBadge>
        <LabelBadge color="info" size="md">
          Info Medium
        </LabelBadge>
      </div>
      <div className="flex flex-wrap gap-2">
        <LabelBadge color="blue" size="sm">
          Blue Small
        </LabelBadge>
        <LabelBadge color="blue" size="md">
          Blue Medium
        </LabelBadge>
      </div>
    </div>
  ),
};
