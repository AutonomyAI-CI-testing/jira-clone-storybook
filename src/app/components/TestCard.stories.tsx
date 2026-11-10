import type { Meta, StoryObj } from "@storybook/react-vite";

import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "fullscreen",
  },
  globals: { theme: "dark" },
  decorators: [
    (Story) => (
      <div
        className="bg-elevation-surface-sunken"
        style={{
          minHeight: "100vh",
          width: "100%",
          padding: "2rem",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
