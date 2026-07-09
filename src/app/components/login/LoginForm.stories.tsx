import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
  title: "Components/Login/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

/**
 * Default state of the login form with all inputs empty and ready for input.
 */
export const Default: Story = {
  args: {
    isLoading: false,
    error: undefined,
  },
};

/**
 * Form is in a loading state while authentication is in progress.
 * The submit button shows a spinner and is disabled.
 */
export const Loading: Story = {
  args: {
    isLoading: true,
    error: undefined,
  },
};

/**
 * Shows an error message when authentication fails or validation fails.
 * The error is displayed prominently below the heading.
 */
export const WithError: Story = {
  args: {
    isLoading: false,
    error: "Invalid email or password. Please try again.",
  },
};

/**
 * Form with an email validation error message.
 */
export const EmailValidationError: Story = {
  args: {
    isLoading: false,
    error: "Please enter a valid email address.",
  },
};

/**
 * Shows the form with the password field revealed (text visible).
 * Demonstrates the password toggle functionality.
 */
export const PasswordRevealed: Story = {
  args: {
    isLoading: false,
    error: undefined,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Users can toggle password visibility by clicking the eye icon in the password field.",
      },
    },
  },
};

/**
 * Shows the form with an error and loading state simultaneously.
 * Useful for understanding how the component handles edge cases.
 */
export const ErrorWhileLoading: Story = {
  args: {
    isLoading: true,
    error: "Network error. Please try again.",
  },
};
