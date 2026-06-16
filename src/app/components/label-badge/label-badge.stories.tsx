import type { Meta, StoryObj } from "@storybook/react";

import { LabelBadge } from "./label-badge";

const meta: Meta<typeof LabelBadge> = {
  title: "Components/LabelBadge",
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
    <div className="w-full">
      <div className="flex gap-3 p-4">
        <LabelBadge text="Bug" color="red" />
        <LabelBadge text="Feature" color="green" />
        <LabelBadge text="Improvement" color="blue" />
      </div>
      <div className="border-t border-gray-300 pt-3 text-center">
        © AutonomyAI
      </div>
    </div>
  ),
};

export const Red: Story = {
  render: () => <LabelBadge text="Bug" color="red" />,
};

export const Green: Story = {
  render: () => <LabelBadge text="Feature" color="green" />,
};

export const Blue: Story = {
  render: () => <LabelBadge text="Improvement" color="blue" />,
};
