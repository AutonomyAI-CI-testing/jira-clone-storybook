import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {
  render: () => <TestCard />,
};
