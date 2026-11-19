import type { Meta, StoryObj } from "@storybook/react-vite";
import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="flex min-h-screen items-start justify-center bg-[var(--DarkNeutral-100)] p-10">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
