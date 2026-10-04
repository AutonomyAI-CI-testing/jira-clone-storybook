import type { Meta, StoryObj } from "@storybook/react";
import { COMMENT_MAX_LENGTH } from "@utils/comment-length";

import { CharacterCounter } from "./character-counter";

const meta: Meta<typeof CharacterCounter> = {
  title: "Components/CharacterCounter",
  component: CharacterCounter,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    text: {
      control: {
        type: "text",
      },
    },
    max: {
      control: {
        type: "number",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CharacterCounter>;

export const Default: Story = {
  args: {
    text: "A short comment",
    max: COMMENT_MAX_LENGTH,
  },
};

export const RunningOut: Story = {
  args: {
    text: "a".repeat(COMMENT_MAX_LENGTH - 20),
    max: COMMENT_MAX_LENGTH,
  },
};

export const OverTheLimit: Story = {
  args: {
    text: "a".repeat(COMMENT_MAX_LENGTH + 13),
    max: COMMENT_MAX_LENGTH,
  },
};
