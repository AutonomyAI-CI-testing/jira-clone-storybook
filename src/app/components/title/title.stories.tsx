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
      description: "Initial title text",
    },
    subtitle: {
      control: "text",
      description: "Subtitle text displayed below the title",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text when title is empty",
    },
    maxLength: {
      control: "number",
      description: "Maximum character length for the title",
    },
    readOnly: {
      control: "boolean",
      description: "Whether the title is read-only",
    },
    error: {
      control: "text",
      description: "Error message to display",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    initTitle: "Project Issue Title",
    placeholder: "Write the title",
  },
};

export const WithSubtitle: Story = {
  args: {
    initTitle: "Main Task Title",
    subtitle:
      "This is a helpful subtitle providing additional context about the task",
  },
};

export const EmptyWithSubtitle: Story = {
  args: {
    initTitle: "",
    subtitle: "Add a descriptive title for your issue",
    placeholder: "Write the title",
  },
};

export const ReadOnly: Story = {
  args: {
    initTitle: "Read-only Title",
    subtitle: "This title cannot be edited",
    readOnly: true,
  },
};

export const WithError: Story = {
  args: {
    initTitle: "",
    subtitle: "Please provide a title for this issue",
    error: "Title is required",
    placeholder: "Write the title",
  },
};

export const NearMaxLength: Story = {
  args: {
    initTitle:
      "This is a very long title that is getting close to the maximum character limit",
    subtitle: "Watch the character count indicator",
    maxLength: 80,
  },
};
