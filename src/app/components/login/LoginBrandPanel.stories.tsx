import type { Meta, StoryObj } from "@storybook/react";
import { LoginBrandPanel } from "./LoginBrandPanel";

const meta: Meta<typeof LoginBrandPanel> = {
  title: "Components/Login/LoginBrandPanel",
  component: LoginBrandPanel,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof LoginBrandPanel>;

/**
 * The brand panel displayed on the left side of the login page.
 * Shows the AutonomyAI wordmark, value proposition headline,
 * incident response timeline, and trust badges.
 */
export const Default: Story = {};

/**
 * Full screen view of the brand panel showing how it appears
 * in the desktop login experience with the dark theme and film grain overlay.
 */
export const FullView: Story = {
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

/**
 * Focused view on the content area to demonstrate typography and spacing.
 */
export const Content: Story = {
  parameters: {
    layout: "centered",
  },
};
