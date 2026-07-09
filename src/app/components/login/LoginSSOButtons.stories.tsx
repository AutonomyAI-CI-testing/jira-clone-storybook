import type { Meta, StoryObj } from "@storybook/react";
import { LoginSSOButtons } from "./LoginSSOButtons";

const meta: Meta<typeof LoginSSOButtons> = {
  title: "Components/Login/LoginSSOButtons",
  component: LoginSSOButtons,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof LoginSSOButtons>;

/**
 * The SSO (Single Sign-On) button group showing GitHub and Google options.
 * These buttons are displayed at the top of the login form before the email/password fields.
 */
export const Default: Story = {};

/**
 * Shows the button group with focus ring to demonstrate keyboard navigation.
 */
export const Focused: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Both buttons support keyboard navigation and have visible focus indicators " +
          "for accessibility compliance.",
      },
    },
  },
};

/**
 * Demonstrates how the buttons stack vertically with proper spacing.
 */
export const Layout: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iphone12",
    },
  },
};
