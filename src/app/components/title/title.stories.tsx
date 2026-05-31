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
    subtitle: "Updated 5 minutes ago",
  },
};

export const WithLongSubtitle: Story = {
  args: {
    initTitle: "Technical Documentation",
    subtitle:
      "A comprehensive guide covering all aspects of the system architecture, design patterns, and implementation details for developers.",
  },
};

export const Outline: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => (
    <div style={{ width: 480 }}>
      <Title
        initTitle="Project Requirements"
        subtitle="Due by end of Q3"
        maxLength={50}
      />
    </div>
  ),
};

export const Ghost: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => (
    <div style={{ width: 480 }}>
      <Title
        initTitle="Archive 2024"
        readOnly={true}
        subtitle="Read-only reference document"
      />
    </div>
  ),
};
