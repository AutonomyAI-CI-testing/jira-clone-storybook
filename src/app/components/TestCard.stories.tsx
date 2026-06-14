import type { Meta, StoryObj } from '@storybook/react-vite';
import { TestCard } from './TestCard';

const meta: Meta<typeof TestCard> = {
  title: 'Components/TestCard',
  component: TestCard,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem', background: '#333' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
