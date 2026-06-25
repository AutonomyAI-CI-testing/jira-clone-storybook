import type { Meta, StoryObj } from "@storybook/react";

import { HeroSection } from "./hero-section";

const meta: Meta<typeof HeroSection> = {
  title: "Components/HeroSection",
  component: HeroSection,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    heading: {
      control: {
        type: "text",
      },
      description: "Main heading text",
    },
    subtitle: {
      control: {
        type: "text",
      },
      description: "Subtitle text",
    },
    ctaLabel: {
      control: {
        type: "text",
      },
      description: "CTA button label",
    },
    ctaHref: {
      control: {
        type: "text",
      },
      description: "Optional link URL for the CTA button",
    },
    onCtaClick: {
      description: "Optional click handler for the CTA button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {
    heading: "Let's Find Your Ideal Space",
    subtitle:
      "Discover residential and commercial properties tailored to your needs",
    ctaLabel: "Get Started",
  },
};

export const WithLink: Story = {
  args: {
    heading: "Let's Find Your Ideal Space",
    subtitle:
      "Discover residential and commercial properties tailored to your needs",
    ctaLabel: "Get Started",
    ctaHref: "/projects",
  },
};

export const WithClickHandler: Story = {
  args: {
    heading: "Let's Find Your Ideal Space",
    subtitle:
      "Discover residential and commercial properties tailored to your needs",
    ctaLabel: "Get Started",
    onCtaClick: () => alert("CTA button clicked!"),
  },
};

export const WithoutButton: Story = {
  args: {
    heading: "Let's Find Your Ideal Space",
    subtitle:
      "Discover residential and commercial properties tailored to your needs",
    ctaLabel: "",
  },
};
