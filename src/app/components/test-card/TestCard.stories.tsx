import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./TestCard";

const meta = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#181818" }],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ background: "#181818", minHeight: "100vh" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TestCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
