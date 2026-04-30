import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./tooltip";
import { Button } from "../button";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: { control: "text" },
    show: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    title: "This is a tooltip",
    show: true,
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
  ),
};

export const CustomStyled: Story = {
  args: {
    title: "Custom styled tooltip",
    show: true,
    className: "bg-primary-main text-white",
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button>Styled tooltip</Button>
    </Tooltip>
  ),
};

export const Disabled: Story = {
  args: {
    title: "This tooltip is disabled",
    show: false,
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button>No tooltip</Button>
    </Tooltip>
  ),
};
