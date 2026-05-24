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

// Sample text values used across stories
const SAMPLE_TITLE = "Project Alpha";
const SAMPLE_SUBTITLE = "A comprehensive project management tool";

// Default state with sample content
export const Default: Story = {
  args: {
    initTitle: SAMPLE_TITLE,
    initSubtitle: SAMPLE_SUBTITLE,
  },
};

// Empty state with no initial content
export const Empty: Story = {
  args: {},
};

// Component populated with sample content
export const WithContent: Story = {
  args: {
    initTitle: SAMPLE_TITLE,
    initSubtitle: SAMPLE_SUBTITLE,
  },
};

// Read-only mode with sample content
export const ReadOnly: Story = {
  args: {
    initTitle: SAMPLE_TITLE,
    initSubtitle: SAMPLE_SUBTITLE,
    readOnly: true,
  },
};

// Error state with validation messages
export const WithErrors: Story = {
  args: {
    initTitle: "",
    initSubtitle: "",
    error: "Title is required",
    subtitleError: "Subtitle is required",
  },
};

// Custom placeholder text for alternative use case
export const WithCustomPlaceholders: Story = {
  args: {
    placeholder: "Enter issue title...",
    subtitlePlaceholder: "Enter a brief description...",
  },
};
