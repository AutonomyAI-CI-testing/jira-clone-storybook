import type { Meta, StoryObj } from "@storybook/react";

import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Error404>;

export const Default: Story = {};

export const WithCustomMessage: Story = {
  args: {
    message: "Looks like this page vanished into thin air.",
    href: "/",
  },
};

export const WithHomeLink: Story = {
  args: {
    message: "The page you're looking for doesn't exist or has been moved.",
    href: "/",
  },
};
