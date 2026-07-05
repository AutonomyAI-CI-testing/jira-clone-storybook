import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "./login-form";

const meta: Meta<typeof LoginForm> = {
  title: "Components/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isLoading: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    error: {
      control: { type: "text" },
      defaultValue: undefined,
    },
    onSubmit: {
      action: "submitted",
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
    isLoading: false,
    error: undefined,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    error: undefined,
  },
};

export const WithError: Story = {
  args: {
    isLoading: false,
    error: "Invalid email or password. Please try again.",
  },
};
