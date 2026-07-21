import type { Meta, StoryObj } from "@storybook/react";
import { BrandPanel } from "./brand-panel";

const meta: Meta<typeof BrandPanel> = {
  title: "Pages/Login/BrandPanel",
  component: BrandPanel,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof BrandPanel>;

/**
 * Brand panel showing AutonomyAI wordmark, headline, description,
 * and 3-step incident response timeline with colored status indicators
 */
export const Default: Story = {};

/**
 * Brand panel with full height for desktop layout context
 */
export const Fullscreen: Story = {
  decorators: [
    (Story) => (
      <div className="h-screen w-full">
        <Story />
      </div>
    ),
  ],
};
