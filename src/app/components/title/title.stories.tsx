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

// Showcase multiple Title variants in a grid layout
export const Default: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-8">
      {[
        EmptyTitle,
        WithInitialTitle,
        WithTitleAndSubtitle,
        ReadOnly,
        ErrorState,
      ].map((TitleStory, index) => (
        <div key={index}>
          <Title {...TitleStory.args} />
        </div>
      ))}
    </div>
  ),
};

export const EmptyTitle: Story = {
  args: {
    initTitle: "",
    placeholder: "Write the title",
  },
};

export const WithInitialTitle: Story = {
  args: {
    initTitle: "Fix login page redirect after session expiry",
    placeholder: "Write the title",
  },
};

export const WithTitleAndSubtitle: Story = {
  args: {
    initTitle: "Design system improvements",
    initSubtitle: "Enhance component consistency and documentation",
    placeholder: "Write the title",
    subtitlePlaceholder: "Write the subtitle",
  },
};

export const ReadOnly: Story = {
  args: {
    initTitle: "This title is read-only and cannot be edited",
    initSubtitle: "Neither can the subtitle",
    readOnly: true,
  },
};

export const MaxLengthValidation: Story = {
  args: {
    initTitle:
      "This title is getting very long and approaches the character limit!!",
    maxLength: 80,
  },
};

export const AtMaxLength: Story = {
  args: {
    initTitle:
      "This title has reached the maximum allowed character count lim!!",
    maxLength: 64,
  },
};

export const ErrorState: Story = {
  args: {
    initTitle: "",
    error: "Title is required",
    placeholder: "Write the title",
  },
};

export const ErrorWithWhitespace: Story = {
  args: {
    initTitle: "   ",
    error: "Title cannot be empty or whitespace only",
    placeholder: "Write the title",
  },
};

export const CustomMaxLength: Story = {
  args: {
    initTitle: "Short title",
    maxLength: 30,
    placeholder: "Max 30 characters",
  },
};

export const SubtitleOnly: Story = {
  args: {
    initTitle: "",
    initSubtitle: "This is a subtitle without a main title",
    placeholder: "Write the title",
    subtitlePlaceholder: "Write the subtitle",
  },
};

export const SubtitleWithMaxLength: Story = {
  args: {
    initTitle: "Main Title",
    initSubtitle:
      "This subtitle has a maximum character limit to keep descriptions concise",
    subtitleMaxLength: 60,
    placeholder: "Write the title",
    subtitlePlaceholder: "Write the subtitle",
  },
};
