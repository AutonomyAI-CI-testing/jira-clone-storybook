import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentType } from "react";
import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "dark", values: [{ name: "dark", value: "#1a1a1a" }] },
  },
  decorators: [
    (Story: ComponentType) => (
      <div style={{ backgroundColor: "#1a1a1a", minHeight: "100vh", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
