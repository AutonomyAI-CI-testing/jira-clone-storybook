import type { Meta, StoryObj } from '@storybook/react';
import { TestCard } from './TestCard';

const meta: Meta<typeof TestCard> = {
  title: 'Components/TestCard',
  component: TestCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#2a2a2a' }],
    },
    viewport: {
      defaultViewport: 'responsive',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '24px', background: '#2a2a2a', minHeight: '100vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
