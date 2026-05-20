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
      description: "Makes the input read-only",
    },
    disabled: {
      control: "boolean",
      description: "Disables the input",
    },
    loading: {
      control: "boolean",
      description: "Shows loading skeleton",
    },
    maxLength: {
      control: "number",
      description: "Maximum length for title",
    },
    subtitleMaxLength: {
      control: "number",
      description: "Maximum length for subtitle",
    },
    error: {
      control: "text",
      description: "Error message for title",
    },
    subtitleError: {
      control: "text",
      description: "Error message for subtitle",
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
  args: {
    initTitle: "",
    initSubtitle: "",
    placeholder: "Write the title",
    subtitlePlaceholder: "Add a subtitle (optional)",
  },
};

export const WithContent: Story = {
  args: {
    initTitle: "Project Dashboard Redesign",
    initSubtitle:
      "Update the main dashboard with new analytics widgets and improved navigation",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    initTitle: "Disabled Title",
    initSubtitle: "This input is disabled",
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    initTitle: "Read Only Title",
    initSubtitle: "This input is read only",
    readOnly: true,
  },
};

export const WithValidationError: Story = {
  args: {
    initTitle: "",
    initSubtitle: "",
    error: "Title is required",
    subtitleError: "Subtitle is required",
  },
};

export const NearMaxLength: Story = {
  args: {
    initTitle:
      "This is a title that is getting close to the maximum character limit allowed",
    initSubtitle:
      "This subtitle demonstrates validation when approaching the character limit - you can see the counter when focused",
    maxLength: 80,
    subtitleMaxLength: 120,
  },
};

export const CustomPlaceholders: Story = {
  args: {
    placeholder: "Enter issue title here...",
    subtitlePlaceholder: "Enter description here...",
  },
};
