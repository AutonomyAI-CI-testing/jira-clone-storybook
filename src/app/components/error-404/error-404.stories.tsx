import type { Meta, StoryObj } from "@storybook/react";

import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    layout: "fullscreen",
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
type Story = StoryObj<typeof Error404>;

export const Default: Story = {};

export const CustomMessage: Story = {
  args: {
    message: "Oops! This page has wandered off",
  },
};

export const Link: Story = {
  args: {
    href: "/link-to-safe-place",
  },
};

export const MessageLink: Story = {
  args: {
    message: "Oops! This page has wandered off",
    href: "/link-to-safe-place",
  },
};
