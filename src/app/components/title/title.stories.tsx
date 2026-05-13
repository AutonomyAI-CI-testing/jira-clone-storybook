import type { Meta, StoryObj } from "@storybook/react";

import { Title } from "./title";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    initTitle: {
      control: "text",
      description: "Initial title value",
    },
    initSubtitle: {
      control: "text",
      description: "Initial subtitle value",
    },
    readOnly: {
      control: "boolean",
      description: "Whether the title is read-only",
    },
    maxLength: {
      control: "number",
      description: "Maximum character length",
    },
    error: {
      control: "text",
      description: "Error message to display",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    subtitlePlaceholder: {
      control: "text",
      description: "Subtitle placeholder text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    initTitle: "",
    placeholder: "Write the title",
  },
};

export const WithInitialTitle: Story = {
  args: {
    initTitle: "Implement user authentication",
    placeholder: "Write the title",
  },
};

export const WithBothFields: Story = {
  args: {
    initTitle: "Main task title",
    initSubtitle: "Additional subtitle information",
    placeholder: "Write the title",
    subtitlePlaceholder: "Write the subtitle",
  },
};

export const ReadOnly: Story = {
  args: {
    initTitle: "This title cannot be edited",
    readOnly: true,
  },
};

export const WithError: Story = {
  args: {
    initTitle: "",
    error: "Title is required",
  },
};

export const CustomMaxLength: Story = {
  args: {
    initTitle: "Short title with 30 char limit",
    maxLength: 30,
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: "Enter your task name here...",
    subtitlePlaceholder: "Enter additional details...",
  },
};
