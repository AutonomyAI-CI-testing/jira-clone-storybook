import type { Meta, StoryObj } from "@storybook/react";
import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: { type: "text" },
      description: "Main heading text",
    },
    description: {
      control: { type: "text" },
      description: "Secondary explanatory text",
    },
    actions: {
      description: "Array of action buttons",
      control: { type: "object" },
    },
    href: {
      control: { type: "text" },
      description: "Fallback link URL (deprecated pattern)",
    },
    linkLabel: {
      control: { type: "text" },
      description: "Label for fallback link",
    },
    message: {
      control: { type: "text" },
      description: "Deprecated - use description instead",
    },
    showImage: {
      control: { type: "boolean" },
      description: "Toggle SVG image visibility",
    },
    imageAlt: {
      control: { type: "text" },
      description: "Custom alt text for image",
    },
    className: {
      control: { type: "text" },
      description: "Custom container classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Error404>;

export const Default: Story = {};

export const WithDescription: Story = {
  args: {
    description: "The page you're looking for doesn't exist or has been moved.",
  },
};

export const WithSingleAction: Story = {
  args: {
    description: "The page you're looking for doesn't exist.",
    actions: [
      {
        label: "Go Home",
        href: "/",
        variant: "contained",
        color: "primary",
      },
    ],
  },
};

export const WithMultipleActions: Story = {
  args: {
    description: "We couldn't find what you're looking for.",
    actions: [
      {
        label: "Go Home",
        href: "/",
        variant: "contained",
        color: "primary",
      },
      {
        label: "View Projects",
        href: "/projects",
        variant: "subtlest",
        color: "primary",
      },
    ],
  },
};

export const WithDifferentVariants: Story = {
  args: {
    title: "Page Not Found",
    description: "The page you requested does not exist.",
    actions: [
      {
        label: "Go Home",
        href: "/",
        variant: "contained",
        color: "primary",
      },
      {
        label: "Dashboard",
        href: "/dashboard",
        variant: "text",
        color: "primary",
      },
      {
        label: "Support",
        href: "/support",
        variant: "subtlest",
        color: "neutral",
      },
    ],
  },
};

export const BackwardCompatible: Story = {
  args: {
    message: "Go to main page",
    href: "/",
  },
};

export const WithoutImage: Story = {
  args: {
    showImage: false,
    description: "The page you're looking for doesn't exist.",
    actions: [
      {
        label: "Go Home",
        href: "/",
      },
    ],
  },
};

export const WithCustomAltText: Story = {
  args: {
    imageAlt: "Custom error illustration: page not found",
    description: "The requested page could not be found.",
    actions: [
      {
        label: "Go Home",
        href: "/",
      },
    ],
  },
};

export const LongDescription: Story = {
  args: {
    description:
      "We couldn't find the page you're looking for. This might happen if the page was moved, deleted, or if you followed a broken link. Please check the URL and try again, or navigate back to our home page to continue exploring.",
    actions: [
      {
        label: "Go Home",
        href: "/",
      },
    ],
  },
};

export const CustomTitle: Story = {
  args: {
    title: "Lost?",
    description: "This page doesn't exist. Let's get you back on track.",
    actions: [
      {
        label: "Return Home",
        href: "/",
        variant: "contained",
      },
    ],
  },
};

export const MinimalWithFallback: Story = {
  args: {
    href: "/",
    linkLabel: "Back to Home",
  },
};

export const RichErrorPage: Story = {
  args: {
    title: "404 - Page Not Found",
    description:
      "The page you're looking for has moved or doesn't exist anymore.",
    actions: [
      {
        label: "Home",
        href: "/",
        variant: "contained",
        color: "primary",
      },
      {
        label: "Projects",
        href: "/projects",
        variant: "subtlest",
        color: "primary",
      },
      {
        label: "Help Center",
        href: "/help",
        variant: "text",
        color: "primary",
      },
    ],
    showImage: true,
  },
};
