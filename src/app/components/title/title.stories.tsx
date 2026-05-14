import type { Meta, StoryObj } from "@storybook/react-vite";
import { Title } from "./title";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    showSubtitle: {
      control: "boolean",
      description: "Show the subtitle input field",
    },
    readOnly: {
      control: "boolean",
      description: "Make inputs read-only",
    },
    error: {
      control: "text",
      description: "Error message to display",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    initTitle: "Project Title",
    placeholder: "Write the title",
  },
};

export const WithSubtitle: Story = {
  args: {
    initTitle: "Main Project Title",
    initSubtitle: "This is the subtitle for additional context",
    showSubtitle: true,
    placeholder: "Write the title",
    subtitlePlaceholder: "Write the subtitle",
  },
};

export const SubtitleEmpty: Story = {
  args: {
    initTitle: "Project with Subtitle",
    showSubtitle: true,
    placeholder: "Write the title",
    subtitlePlaceholder: "Add a subtitle here...",
  },
};

export const ReadOnly: Story = {
  args: {
    initTitle: "Read Only Title",
    initSubtitle: "Read only subtitle text",
    showSubtitle: true,
    readOnly: true,
  },
};

export const WithError: Story = {
  args: {
    initTitle: "",
    error: "Title is required",
    placeholder: "Write the title",
  },
};
