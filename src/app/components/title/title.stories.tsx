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
    initTitle: "Implement user authentication flow",
    initSubtitle: "Add login, registration, and password reset functionality",
  },
};

export const WithLongSubtitle: Story = {
  args: {
    initTitle: "Project onboarding",
    initSubtitle: "Welcome to the Jira clone project. This subtitle describes the scope and goals of the project in more detail.",
    subtitleMaxLength: 120,
  },
};

export const EmptyEditable: Story = {
  args: {
    initTitle: "",
    initSubtitle: "",
    placeholder: "Write the title",
    subtitlePlaceholder: "Write the subtitle",
  },
};

export const ReadOnly: Story = {
  args: {
    initTitle: "Fix critical bug in authentication module",
    initSubtitle: "The login flow fails when users have special characters in their email address",
    readOnly: true,
  },
};

export const WithError: Story = {
  args: {
    initTitle: "",
    initSubtitle: "A subtitle is provided but the title is empty",
    error: "Title is required",
  },
};

export const LongContent: Story = {
  args: {
    initTitle: "Redesign the main navigation and improve accessibility",
    initSubtitle: "Update the navigation component to meet WCAG 2.1 AA standards and improve keyboard navigation for all user flows",
  },
};
