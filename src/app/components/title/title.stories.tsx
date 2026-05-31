import type { Meta, StoryObj } from "@storybook/react";
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
    subtitle: {
      defaultValue: "",
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

// Labels for the showcase stories in Default view
const SHOWCASE_LABELS = [
  "Editable",
  "Read-only",
  "Error — Empty",
  "Error — Spaces Only",
  "Near Max Length",
  "Short Title",
  "Long Title",
  "Outline",
  "Ghost",
];

export const Default: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-10 w-[600px]">
      {[Editable, ReadOnly, WithError, ErrorSpacesOnly, CharacterCountWarning, ShortTitle, LongTitle, Outline, Ghost].map(
        (TitleStory, index) => (
          <div key={index}>
            <p className="text-xs font-primary-medium text-font-subtlest mb-1 uppercase tracking-wide">
              {SHOWCASE_LABELS[index]}
            </p>
            <Title {...TitleStory.args} />
          </div>
        )
      )}
    </div>
  ),
};

export const Editable: Story = {
  args: {
    initTitle: "Build new authentication flow",
    readOnly: false,
  },
};

export const ReadOnly: Story = {
  args: {
    initTitle: "This title is read-only and cannot be edited",
    readOnly: true,
  },
};

export const WithError: Story = {
  args: {
    initTitle: "",
    error: "Title is required",
  },
};

export const ErrorSpacesOnly: Story = {
  args: {
    initTitle: "   ",
    error: "Title cannot be empty or contain only spaces",
  },
};

export const CharacterCountWarning: Story = {
  args: {
    initTitle: "This title is approaching the maximum character limit now!!!!",
    maxLength: 80,
  },
};

export const ShortTitle: Story = {
  args: {
    initTitle: "Fix bug",
    readOnly: false,
  },
};

export const LongTitle: Story = {
  args: {
    initTitle:
      "Implement comprehensive end-to-end testing suite for the entire application",
    maxLength: 80,
  },
};

export const WithShortSubtitle: Story = {
  args: {
    initTitle: "Build new authentication flow",
    subtitle: "Q1 2024 Initiative",
    readOnly: false,
  },
};

export const WithLongSubtitle: Story = {
  args: {
    initTitle: "Implement comprehensive end-to-end testing suite",
    subtitle:
      "This initiative aims to improve test coverage across all critical user workflows and ensure platform stability in production environments.",
    readOnly: false,
  },
};

export const Outline: Story = {
  args: {
    initTitle: "Styled with border outline",
    readOnly: false,
  },
};

export const Ghost: Story = {
  args: {
    initTitle: "Minimal ghost style",
    readOnly: true,
  },
};
