import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./TestCard";
import "./TestCard.story.css";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
