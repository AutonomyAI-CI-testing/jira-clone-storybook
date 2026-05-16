import type { Meta, StoryObj } from "@storybook/react-vite";
import { Title } from "@app/components/title";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    initTitle: {
      control: "object",
      description: "Initial title lines array",
    },
    readOnly: {
      control: "boolean",
      description: "Whether the title is read-only",
    },
    maxLength: {
      control: "number",
      description: "Maximum character length across all lines",
    },
    error: {
      control: "text",
      description: "Error message to display",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for empty input",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    initTitle: ["My Project Title"],
    placeholder: "Write the title",
  },
};

export const Empty: Story = {
  args: {
    initTitle: [""],
    placeholder: "Write the title",
  },
};

export const MultiLine: Story = {
  args: {
    initTitle: ["First Line", "Second Line", "Third Line"],
    placeholder: "Write the title",
  },
};

export const ReadOnly: Story = {
  args: {
    initTitle: ["Read-only Title", "Cannot be edited"],
    readOnly: true,
  },
};

export const WithError: Story = {
  args: {
    initTitle: [""],
    error: "Title is required",
  },
};

export const CustomMaxLength: Story = {
  args: {
    initTitle: ["Short max length example"],
    maxLength: 50,
  },
};
