import type { Meta, StoryObj } from "@storybook/react";
import TestCard from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "centered",
    backgrounds: { disable: true },
  },
  decorators: [
    (Story: () => JSX.Element) => (
      <div className="dark" style={{ backgroundColor: "#2a2a2a", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
