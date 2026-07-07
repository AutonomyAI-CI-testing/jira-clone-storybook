import type { Meta, StoryObj } from "@storybook/react";

import { Error500 } from "./error-500";

const meta: Meta<typeof Error500> = {
  title: "Components/Error500",
  component: Error500,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    message: {
      control: {
        type: "text",
      },
    },
    href: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Error500>;

export const Default: Story = {};

export const Message: Story = {
  args: {
    message: "This is the error message",
  },
};

export const Link: Story = {
  args: {
    href: "/link-to-safe-place",
  },
};

export const MessageLink: Story = {
  args: {
    message: "This is the error message",
    href: "/link-to-safe-place",
  },
};

export const BothVariants: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <div className="flex origin-top scale-[0.62] transform flex-row items-start justify-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-bold text-font-subtle">
          Default message
        </span>
        <Error500 message="Error 500: Server error" href="" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-bold text-font-subtle">
          Linked message
        </span>
        <Error500
          message="Error 500: Server error"
          href="/link-to-safe-place"
        />
      </div>
    </div>
  ),
};
