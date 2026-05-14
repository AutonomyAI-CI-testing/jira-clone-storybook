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
  args: {},
};

export const WithInitialValues: Story = {
  args: {
    initTitle: "Main Title",
    initSecondLine: "This is the subtitle for the component",
  },
};

export const WithCustomPlaceholders: Story = {
  args: {
    placeholder: "Enter the main heading",
    secondLinePlaceholder: "Enter a description (optional)",
  },
};

export const WithCustomMaxLengths: Story = {
  args: {
    initTitle: "Short title",
    initSecondLine: "Short subtitle",
    maxLength: 40,
    secondLineMaxLength: 60,
  },
};

export const ReadOnly: Story = {
  args: {
    initTitle: "Read-only Title",
    initSecondLine: "This subtitle cannot be edited",
    readOnly: true,
  },
};

export const WithError: Story = {
  args: {
    error: "Title is required",
    initTitle: "",
    initSecondLine: "A subtitle without a title",
  },
};

export const AtMaxLength: Story = {
  args: {
    initTitle:
      "This is a title that is exactly at the maximum character length for demonstration",
    initSecondLine:
      "This is a subtitle that demonstrates the second line counter when approaching the maximum character limit for testing purposes",
    maxLength: 80,
    secondLineMaxLength: 100,
  },
};
