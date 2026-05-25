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
      defaultValue: "Title",
      control: {
        type: "text",
      },
    },
    initSubtitle: {
      defaultValue: "",
      control: {
        type: "text",
      },
    },
    readOnly: {
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    maxLength: {
      defaultValue: 80,
      control: {
        type: "number",
      },
    },
    subtitleMaxLength: {
      defaultValue: 80,
      control: {
        type: "number",
      },
    },
    error: {
      defaultValue: "",
      control: {
        type: "text",
      },
    },
    subtitleError: {
      defaultValue: "",
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  render: (_) => (
    <div className="grid grid-cols-1 gap-6">
      {[
        DefaultTitle,
        WithSubtitle,
        ReadOnly,
        Error,
        CustomMaxLength,
      ].map((TitleStory, index) => (
        <Title {...TitleStory.args} key={index} />
      ))}
    </div>
  ),
};

export const DefaultTitle: Story = {};

export const InitTitle: Story = {
  args: {
    initTitle: "Default title",
  },
};

export const WithSubtitle: Story = {
  args: {
    initTitle: "Main title",
    initSubtitle: "This is a subtitle line",
  },
};

export const ReadOnly: Story = {
  args: {
    initTitle: "Read only title",
    initSubtitle: "Read only subtitle",
    readOnly: true,
  },
};

export const Error: Story = {
  args: {
    placeholder: "Error title",
    error: "Title is required",
  },
};

export const SubtitleError: Story = {
  args: {
    initTitle: "Valid title",
    subtitlePlaceholder: "Error subtitle",
    subtitleError: "Subtitle is required",
  },
};

export const CustomMaxLength: Story = {
  args: {
    placeholder: "Custom max length",
    subtitlePlaceholder: "Custom subtitle max length",
    maxLength: 10,
    subtitleMaxLength: 15,
  },
};
