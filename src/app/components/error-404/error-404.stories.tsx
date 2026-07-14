import type { Meta, StoryObj } from "@storybook/react-vite";

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

export const Default: Story = {
  args: {
    message: "Looks like you got lost in another dimension!",
    href: "/",
  },
};

export const CustomMessage: Story = {
  args: {
    message: "This page has vanished into the void.",
    href: "/",
  },
};

export const WithoutButton: Story = {
  args: {
    message: "Looks like you got lost in another dimension!",
  },
};
