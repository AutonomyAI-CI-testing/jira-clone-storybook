import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./title";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    initTitle: "",
    readOnly: false,
    maxLength: 80,
    placeholder: "Write the title",
  },
};

export const DefaultTitle: Story = {
  args: {
    initTitle: "Default title",
    readOnly: false,
    maxLength: 80,
    placeholder: "Write the title",
  },
};

export const InitTitle: Story = {
  args: {
    initTitle: "Initial title for demonstration",
    readOnly: false,
    maxLength: 80,
    placeholder: "Write the title",
  },
};

export const ReadOnly: Story = {
  args: {
    initTitle: "This is a read-only title",
    readOnly: true,
    maxLength: 80,
    placeholder: "Write the title",
  },
};

export const Error: Story = {
  args: {
    initTitle: "",
    readOnly: false,
    maxLength: 80,
    error: "Title cannot be empty or only spaces",
    placeholder: "Write the title",
  },
};

export const CustomMaxLength: Story = {
  args: {
    initTitle: "Shorter",
    readOnly: false,
    maxLength: 10,
    placeholder: "Write the title",
  },
};
