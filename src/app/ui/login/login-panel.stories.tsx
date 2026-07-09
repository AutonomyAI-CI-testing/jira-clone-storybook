import type { Meta, StoryObj } from "@storybook/react";
import { LoginPanel } from "./login-panel";

const meta: Meta<typeof LoginPanel> = {
  title: "Pages/LoginPanel",
  component: LoginPanel,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof LoginPanel>;

/**
 * Default idle state showing the full split-panel layout with brand section
 * and login form on desktop, and responsive single-column on mobile.
 * Demonstrates the complete dark theme with orange accents and film grain overlay.
 */
export const Default: Story = {};

/**
 * Desktop view (large screen) showing the full two-column layout
 * with brand narrative on left and login form on right.
 * The BrandSection is visible with full AutonomyAI branding, headline with orange gradient,
 * product description, and PipelineTimeline workflow visualization.
 */
export const Desktop: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: "1280px", height: "1080px", overflow: "hidden" }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * Mobile view (small screen) showing single-column responsive layout.
 * The left BrandSection is hidden, and the MobileWordmark appears above the form.
 * The entire login form is centered in a single column with proper mobile spacing.
 */
export const Mobile: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: "375px", height: "667px", overflow: "hidden" }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * Tablet view (medium screen) showing the transition between mobile and desktop layouts.
 * The layout adapts to tablet size with adjusted spacing and readability.
 */
export const Tablet: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: "768px", height: "1024px", overflow: "hidden" }}>
        <Story />
      </div>
    ),
  ],
};
