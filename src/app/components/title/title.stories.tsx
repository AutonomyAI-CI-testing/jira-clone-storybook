import type { Meta, StoryObj } from "@storybook/react";

import { Title } from "./title";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    initTitle: "Fix login button not responding on mobile devices",
    placeholder: "Write the title",
  },
};

export const Empty: Story = {
  args: {
    initTitle: "",
    placeholder: "Write the title",
  },
};

export const ReadOnly: Story = {
  args: {
    initTitle: "Implement dark mode for the dashboard",
    readOnly: true,
  },
};

export const WithError: Story = {
  args: {
    initTitle: "",
    error: "Title is required",
  },
};

export const MultiLine: Story = {
  args: {
    initTitle:
      "This is a very long title that spans multiple lines when the content overflows the available width and wraps to a second or even third line in the text area",
    placeholder: "Write the title",
    maxLength: 255,
  },
};
