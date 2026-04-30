import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./tooltip";
import { Button } from "../button";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <Tooltip title="This is a tooltip with red text">
        <Button>Hover over me</Button>
      </Tooltip>
    </div>
  ),
};

export const CustomStyled: Story = {
  render: () => (
    <div className="p-8">
      <Tooltip title="Custom styled tooltip" className="bg-blue-600">
        <Button>Custom Style</Button>
      </Tooltip>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="p-8">
      <Tooltip title="This tooltip won't show" show={false}>
        <Button>Tooltip Disabled</Button>
      </Tooltip>
    </div>
  ),
};
