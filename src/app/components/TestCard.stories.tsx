import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    backgrounds: { default: 'dark' },
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ background: '#1a1a17', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
