import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from './TestCard';

const meta: Meta<typeof TestCard> = {
  title: 'Components/TestCard',
  component: TestCard,
  parameters: {
    layout: 'centered',
    backgrounds: { disable: true },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '390px', background: '#252525', minHeight: '100vh' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
