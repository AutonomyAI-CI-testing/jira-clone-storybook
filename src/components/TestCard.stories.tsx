import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import "./testcard-storybook.css";
import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "fullscreen",
    backgrounds: { disable: true },
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div style={{ backgroundColor: "#2a2a2a", minHeight: "100vh" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
