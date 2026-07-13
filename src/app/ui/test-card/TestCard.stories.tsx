import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from './TestCard';
import './test-card-styles.css';

const meta: Meta<typeof TestCard> = {
  title: 'UI/TestCard',
  component: TestCard,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'dark' },
  },
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
