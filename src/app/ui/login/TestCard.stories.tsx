import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentType } from "react";
import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Login/TestCard",
  component: TestCard,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ maxWidth: 393, margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
