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
      description: "Maximum character length for title",
    },
    error: {
      control: "text",
      description: "Error message to display",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for title",
    },
    subtitlePlaceholder: {
      control: "text",
      description: "Placeholder text for subtitle",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {},
};

export const WithContent: Story = {
  args: {
    initTitle: "Project Title",
    initSubtitle: "A brief description of this project",
  },
};

export const ReadOnly: Story = {
  args: {
    initTitle: "Read-Only Title",
    initSubtitle: "This content cannot be edited",
    readOnly: true,
  },
};

export const WithError: Story = {
  args: {
    initTitle: "",
    error: "Title is required",
  },
};

export const MaxLengthReached: Story = {
  args: {
    initTitle: "This title is exactly at the maximum character limit allowed!",
    maxLength: 60,
  },
};

export const CustomPlaceholders: Story = {
  args: {
    placeholder: "Enter issue title here...",
    subtitlePlaceholder: "Enter issue description...",
  },
};
