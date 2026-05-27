import type { Meta, StoryObj } from "@storybook/react-vite";
import { TestCard } from "./test-card";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "gray",
      values: [
        { name: "gray", value: "#374151" },
        { name: "dark", value: "#1a1a1a" },
        { name: "light", value: "#f3f4f6" },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 400, margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};

export const WithDarkBackground: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
};
