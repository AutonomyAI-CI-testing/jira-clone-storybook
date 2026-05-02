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
    initTitle: "Default title",
  },
};

export const ReadOnly: Story = {
  args: {
    initTitle: "Read only title",
    readOnly: true,
  },
};

export const Error: Story = {
  args: {
    placeholder: "Error title",
    error: "Title is required",
  },
};

export const CustomMaxLength: Story = {
  args: {
    placeholder: "Custom max length",
    maxLength: 10,
  },
};

export const WithSubtitle: Story = {
  args: {
    initTitle: "Main Title",
    initSubtitle: "Secondary subtitle line",
  },
};

export const WithSubtitleAndError: Story = {
  args: {
    placeholder: "Title required",
    subtitlePlaceholder: "Subtitle",
    error: "Title is required",
    subtitleError: "Subtitle cannot be empty",
  },
};

export const SubtitleReadOnly: Story = {
  args: {
    initTitle: "Read only title",
    initSubtitle: "Read only subtitle",
    readOnly: true,
  },
};
