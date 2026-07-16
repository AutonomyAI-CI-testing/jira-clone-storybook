import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#1e1e1e" }],
    },
  },
  decorators: [
    (Story: () => JSX.Element) => (
      <div style={{ width: "390px", backgroundColor: "#1e1e1e" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
