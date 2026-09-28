import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./spinner";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: {
        type: "number",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: 20,
  },
  render: (args) => (
    <div className="text-font">
      <Spinner {...args} />
    </div>
  ),
};

export const OnButton: Story = {
  render: () => (
    <button className="flex items-center gap-2 rounded bg-background-brand-bold p-2 text-font-inverse">
      Submitting
      <Spinner />
    </button>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6 text-font">
      {[16, 20, 32, 48].map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Spinner size={size} />
          <span className="text-xs text-font-subtlest">{size}px</span>
        </div>
      ))}
    </div>
  ),
};
