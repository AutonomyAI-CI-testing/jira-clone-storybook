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
    subtitle: {
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
      {[InitTitle, ReadOnly, Error, CustomMaxLength, FocusedWithCounter, ReadOnlyWithSubtitle].map(
        (TitleStory, index) => (
          <Title {...TitleStory.args} key={index} />
        )
      )}
    </div>
  ),
};

// Individual story variants for specific Title states and features
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
    initTitle: "Project Setup",
    subtitle: "Configure your project",
  },
};

export const WithLongSubtitle: Story = {
  args: {
    initTitle: "Comprehensive Documentation",
    subtitle: "Complete guide to implementing and customizing your application with best practices and examples",
  },
};

export const FocusedWithCounter: Story = {
  args: {
    initTitle: "Building great products",
    maxLength: 100,
  },
};

export const ReadOnlyWithSubtitle: Story = {
  args: {
    initTitle: "Project Overview",
    subtitle: "Last updated: December 2024",
    readOnly: true,
  },
};
