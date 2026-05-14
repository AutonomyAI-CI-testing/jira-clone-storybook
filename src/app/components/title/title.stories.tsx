import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./title";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    initTitle: { control: "text" },
    placeholder: { control: "text" },
    maxLength: { control: "number" },
    error: { control: "text" },
    readOnly: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    initTitle: "",
    placeholder: "Write the title",
    maxLength: 80,
  },
};

export const WithContent: Story = {
  args: {
    initTitle: "This is a sample title",
    placeholder: "Write the title",
    maxLength: 80,
  },
};

export const WithError: Story = {
  args: {
    initTitle: "",
    placeholder: "Write the title",
    error: "Title is required",
  },
};

export const ReadOnly: Story = {
  args: {
    initTitle: "This title cannot be edited",
    readOnly: true,
  },
};

export const NearMaxLength: Story = {
  args: {
    initTitle:
      "This is a long title that is approaching the maximum character limit allowed",
    maxLength: 80,
  },
};
