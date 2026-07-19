import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Pages/TestCard",
  component: TestCard,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "dark", values: [{ name: "dark", value: "#1a1a1a" }] },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "100vh", backgroundColor: "#1a1a1a", display: "flex", justifyContent: "center", paddingTop: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
