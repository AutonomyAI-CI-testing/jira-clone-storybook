import type { Meta, StoryObj } from "@storybook/react-vite";
import { Title } from "./title";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    initTitle: {
      control: {
        type: "text",
      },
    },
    initSubtitle: {
      control: {
        type: "text",
      },
    },
    readOnly: {
      control: {
        type: "boolean",
      },
    },
    maxLength: {
      control: {
        type: "number",
      },
    },
    subtitleMaxLength: {
      control: {
        type: "number",
      },
    },
    error: {
      control: {
        type: "text",
      },
    },
    subtitleError: {
      control: {
        type: "text",
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
    },
    subtitlePlaceholder: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {};

export const DefaultTitle: Story = {
  args: {
    initTitle: "Default title",
  },
};

export const InitTitle: Story = {
  args: {
    initTitle: "Project Alpha",
    initSubtitle: "Building the next generation platform",
    readOnly: false,
    maxLength: 80,
    subtitleMaxLength: 120,
    placeholder: "Write the title",
    subtitlePlaceholder: "Write a subtitle",
  },
};

export const ReadOnly: Story = {
  args: {
    initTitle: "Project Alpha",
    initSubtitle: "Building the next generation platform",
    readOnly: true,
    maxLength: 80,
    subtitleMaxLength: 120,
    placeholder: "Write the title",
    subtitlePlaceholder: "Write a subtitle",
  },
};

export const Error: Story = {
  args: {
    initTitle: "",
    initSubtitle: "",
    readOnly: false,
    maxLength: 80,
    subtitleMaxLength: 120,
    error: "Title is required",
    subtitleError: "Subtitle is required",
    placeholder: "Write the title",
    subtitlePlaceholder: "Write a subtitle",
  },
};

export const CustomMaxLength: Story = {
  args: {
    initTitle: "This is a very long title that approaches the maximum length",
    initSubtitle:
      "This is a very long subtitle that provides additional context about the project",
    readOnly: false,
    maxLength: 80,
    subtitleMaxLength: 120,
    placeholder: "Write the title",
    subtitlePlaceholder: "Write a subtitle",
  },
};
