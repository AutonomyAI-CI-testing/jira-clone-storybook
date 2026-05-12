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
    initSubtitle: {
      defaultValue: "",
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

export const DefaultTitle: Story = {
  args: {},
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
    initTitle: "Title with subtitle",
    initSubtitle: "This is a subtitle",
    subtitlePlaceholder: "Add a subtitle",
  },
};

export const Default: Story = {
  render: (_) => (
    <div className="grid grid-cols-1 gap-6">
      {[DefaultTitle, InitTitle, ReadOnly, Error, CustomMaxLength, WithSubtitle].map(
        (TitleStory, index) => (
          <Title {...(TitleStory.args || {})} key={index} />
        )
      )}
    </div>
  ),
};
