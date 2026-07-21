import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "fullscreen",
    backgrounds: { disable: true },
  },
  decorators: [
    (Story: React.FC) => (
      <div style={{ backgroundColor: "#1a1a1a", minHeight: "100vh", display: "flex", justifyContent: "center", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
