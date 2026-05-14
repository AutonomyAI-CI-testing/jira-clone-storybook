import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "neutral", "success", "danger", "warning", "info"],
    },
    variant: {
      control: "select",
      options: ["contained", "subtlest", "text"],
    },
    size: {
      control: "select",
      options: ["md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary Button",
    color: "primary",
    variant: "contained",
  },
};

export const Neutral: Story = {
  args: {
    children: "Neutral Button",
    color: "neutral",
    variant: "contained",
  },
};

export const Success: Story = {
  args: {
    children: "Success Button",
    color: "success",
    variant: "contained",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger Button",
    color: "danger",
    variant: "contained",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning Button",
    color: "warning",
    variant: "contained",
  },
};

export const Info: Story = {
  args: {
    children: "Info Button",
    color: "info",
    variant: "contained",
  },
};

export const SubtlestVariant: Story = {
  args: {
    children: "Subtlest Button",
    color: "primary",
    variant: "subtlest",
  },
};

export const TextVariant: Story = {
  args: {
    children: "Text Button",
    color: "primary",
    variant: "text",
  },
};

export const LargeSize: Story = {
  args: {
    children: "Large Button",
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};
