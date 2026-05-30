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
    error: {
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
      {[DefaultTitle, ReadOnly, Error, CustomMaxLength].map(
        (TitleStory, index) => (
          <Title {...TitleStory.args} key={index} />
        )
      )}
    </div>
  ),
};

export const DefaultTitle: Story = {};

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

export const WithShortSubtitle: Story = {
  args: {
    initTitle: "Project Overview",
    subtitle: "Q4 2024 Planning",
  },
};

export const WithLongSubtitle: Story = {
  args: {
    initTitle: "Quarterly Goals",
    subtitle:
      "This is a comprehensive subtitle that provides additional context and details about the main title. It can span multiple thoughts and offers more information to the user.",
  },
};

export const Outline: Story = {
  args: {
    initTitle: "Sprint",
    maxLength: 20,
    placeholder: "Keep it brief",
    subtitle: "Limited to 20 characters",
  },
};

export const Ghost: Story = {
  args: {
    initTitle: "Published Document",
    readOnly: true,
    subtitle: "Read-only mode with supporting context",
  },
};
