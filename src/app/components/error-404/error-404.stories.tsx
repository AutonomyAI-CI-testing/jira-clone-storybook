import type { Meta, StoryObj } from "@storybook/react";

import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    // Fullscreen layout to showcase the centered error page design
    layout: "fullscreen",
  },
  argTypes: {
    href: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Error404>;

// Default story with the default href (/projects)
export const Default: Story = {};

// Custom href example pointing to root
export const CustomHref: Story = {
  args: {
    href: "/",
  },
};

// Explicitly showing /projects href (same as default for documentation)
export const ProjectsHref: Story = {
  args: {
    href: "/projects",
  },
};
