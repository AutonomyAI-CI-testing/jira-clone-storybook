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

/**
 * Default editable title with an empty initial value.
 */
export const Default: Story = {
  args: {},
};

/**
 * Title with a pre-filled initial value.
 */
export const WithInitialValue: Story = {
  args: {
    initTitle: "Implement user authentication feature",
  },
};

/**
 * Title in read-only mode (no editing, no add/remove buttons).
 */
export const ReadOnly: Story = {
  args: {
    initTitle: "Read-only title text",
    readOnly: true,
  },
};

/**
 * Title with a validation error displayed.
 */
export const WithError: Story = {
  args: {
    error: "Title is required",
  },
};

/**
 * Title with a custom placeholder.
 */
export const CustomPlaceholder: Story = {
  args: {
    placeholder: "Enter the issue title...",
  },
};

/**
 * Title with a reduced max length (shows character count sooner).
 */
export const CustomMaxLength: Story = {
  args: {
    initTitle: "Short title",
    maxLength: 30,
  },
};
