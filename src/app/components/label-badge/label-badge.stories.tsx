import type { Meta, StoryObj } from "@storybook/react";
import { LabelBadge } from "./label-badge";
import "../../styles/app.css";

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
  args: {
    text: "Bug",
    color: "red",
  },
  render: (args) => (
    <div className="flex gap-3">
      <LabelBadge text="Bug" color="red" />
      <LabelBadge text="Feature" color="green" />
      <LabelBadge text="Improvement" color="blue" />
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
