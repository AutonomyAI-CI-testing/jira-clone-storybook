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
      description: "The error description message displayed below the title",
    },
    href: {
      control: {
        type: "text",
      },
      description: "The link for the primary 'Go back home' button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Error404>;

export const Default: Story = {
  args: {},
};

export const CustomMessage: Story = {
  args: {
    message:
      "We couldn't find the page you were looking for. It might have been moved or deleted.",
  },
};

export const CustomLink: Story = {
  args: {
    href: "/projects",
  },
};

export const FullyCustomized: Story = {
  args: {
    message:
      "The project you're trying to access doesn't exist or you don't have permission to view it.",
    href: "/projects",
  },
};
