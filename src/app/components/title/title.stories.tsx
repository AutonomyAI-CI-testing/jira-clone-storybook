import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
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

// The character counter below the title should only show while the field
// is focused. Previously `onBlur` was a leftover `console.log` instead of
// hiding the counter, so it stayed visible forever after the first focus.
export const CounterHidesOnBlur: Story = {
  args: {
    initTitle: "My issue title",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = await canvas.findByPlaceholderText("Write the title");

    await userEvent.click(textarea);
    await userEvent.tab();
  },
};
