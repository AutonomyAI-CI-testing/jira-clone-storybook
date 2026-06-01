import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./title";

// Story labels for consistent display across the composition story
const STORY_LABELS: Record<number, string> = {
  0: "Editable (empty)",
  1: "Editable (with content)",
  2: "With subtitle",
  3: "Read-only",
  4: "With validation error",
  5: "Near max length",
  6: "At max length",
  7: "With subtitle error",
};

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    initTitle: {
      defaultValue: "",
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
    error: {
      defaultValue: undefined,
      control: {
        type: "text",
      },
    },
    maxLength: {
      defaultValue: 80,
      control: {
        type: "number",
      },
    },
    placeholder: {
      defaultValue: "Write the title",
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
      defaultValue: "Write a subtitle",
      control: {
        type: "text",
      },
    },
    subtitleMaxLength: {
      defaultValue: 160,
      control: {
        type: "number",
      },
    },
    subtitleError: {
      defaultValue: undefined,
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
    <div className="grid grid-cols-1 gap-8 w-[500px]">
      {[
        Editable,
        WithTitle,
        WithSubtitle,
        ReadOnly,
        WithError,
        NearMaxLength,
        AtMaxLength,
        WithSubtitleError,
      ].map((TitleStory, index) => (
        <div key={index}>
          <p className="text-xs text-font-subtlest mb-2 font-primary-medium uppercase tracking-wide">
            {STORY_LABELS[index]}
          </p>
          <Title {...TitleStory.args} />
        </div>
      ))}
    </div>
  ),
};

export const Editable: Story = {
  args: {
    initTitle: "",
    placeholder: "Write the title",
  },
};

export const WithTitle: Story = {
  args: {
    initTitle: "Fix authentication bug in login flow",
  },
};

export const WithSubtitle: Story = {
  args: {
    initTitle: "Fix authentication bug in login flow",
    initSubtitle: "Login page shows error when user enters invalid credentials",
  },
};

export const ReadOnly: Story = {
  args: {
    initTitle: "This title is read-only",
    readOnly: true,
  },
};

export const WithError: Story = {
  args: {
    initTitle: "",
    error: "Title is required",
  },
};

export const NearMaxLength: Story = {
  args: {
    initTitle: "This title is getting close to the maximum character limit now",
    maxLength: 80,
  },
};

export const AtMaxLength: Story = {
  args: {
    initTitle:
      "This title has reached the absolute maximum character limit for this field!!!!!!",
    maxLength: 80,
  },
};

export const WithSubtitleError: Story = {
  args: {
    initTitle: "Fix authentication bug",
    initSubtitle: "",
    subtitleError: "Subtitle is required",
  },
};

export const Outline: Story = {
  args: {
    initTitle: "This is an outlined title variant",
    initSubtitle: "Subtitle with outline style",
  },
};

export const Ghost: Story = {
  args: {
    initTitle: "This is a ghost title variant",
    initSubtitle: "Subtle subtitle with ghost style",
    placeholder: "Enter title (ghost style)",
  },
};
