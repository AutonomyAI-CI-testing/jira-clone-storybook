import type { Meta, StoryObj } from '@storybook/react';
import { TestCard } from './TestCard';

const meta: Meta<typeof TestCard> = {
  title: 'UI/TestCard',
  component: TestCard,
  decorators: [
    (Story) => (
      <div style={{ background: '#1a1a17', minHeight: '100vh', display: 'flex', alignItems: 'flex-start', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
