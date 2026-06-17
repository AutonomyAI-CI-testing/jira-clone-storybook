import type { Meta, StoryObj } from "@storybook/react";
import { LabelBadge } from "./label-badge";

const meta: Meta<typeof LabelBadge> = {
  title: "Components/LabelBadge",
  component: LabelBadge,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    text: {
      control: {
        type: "text",
      },
    },
    color: {
      control: {
        type: "select",
        options: ["red", "green", "blue"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LabelBadge>;

export const Default: Story = {
  render: () => (
    <div className="flex gap-4">
      <LabelBadge text="Bug" color="red" />
      <LabelBadge text="Feature" color="green" />
      <LabelBadge text="Improvement" color="blue" />
    </div>
  ),
};

export const Red: Story = {
  args: {
    text: "Bug",
    color: "red",
  },
};

export const Green: Story = {
  args: {
    text: "Feature",
    color: "green",
  },
};

export const Blue: Story = {
  args: {
    text: "Improvement",
    color: "blue",
  },
};
