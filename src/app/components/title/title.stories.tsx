import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./title";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    initTitle: {
      defaultValue: "Title",
      control: {
        type: "text",
      },
    },
    readOnly: {
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    maxLength: {
      defaultValue: 80,
      control: {
        type: "number",
      },
    },
    error: {
      defaultValue: "",
      control: {
        type: "text",
      },
    },
    subtitle: {
      defaultValue: "",
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const DefaultTitle: Story = {};

export const InitTitle: Story = {
  args: {
    initTitle: "Default title",
  },
};

export const ReadOnly: Story = {
  args: {
    initTitle: "Read only title",
    readOnly: true,
  },
};

export const Error: Story = {
  args: {
    placeholder: "Error title",
    error: "Title is required",
  },
};

export const CustomMaxLength: Story = {
  args: {
    placeholder: "Custom max length",
    maxLength: 10,
  },
};

// Stories demonstrating subtitle functionality
export const WithShortSubtitle: Story = {
  args: {
    initTitle: "Project Overview",
    subtitle: "Q4 2024 Planning",
  },
};

export const WithLongSubtitle: Story = {
  args: {
    initTitle: "Quarterly Goals",
    subtitle:
      "This document outlines the key objectives and milestones we aim to achieve during this quarter",
  },
};

// Outline and Ghost are the primary visual variants
export const Outline: Story = {
  args: {
    initTitle: "Project Launch Timeline",
    subtitle: "Phase 1: Design & Planning",
    maxLength: 50,
  },
};

export const Ghost: Story = {
  args: {
    placeholder: "Start typing your title...",
    readOnly: false,
    subtitle: "A descriptive subtitle will appear here",
  },
};
