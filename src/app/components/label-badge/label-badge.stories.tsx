import type { Meta, StoryObj } from "@storybook/react";

import { LabelBadge } from "./label-badge";

const meta: Meta<typeof LabelBadge> = {
  title: "Components/LabelBadge",
  component: LabelBadge,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    color: {
      control: {
        type: "select",
      },
      options: ["primary", "neutral", "success", "danger", "warning", "info"],
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["subtle", "bold"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof LabelBadge>;

// Default story shows the badge with info (blue) color - the new default
export const Default: Story = {
  args: {
    children: "Label",
  },
};

export const Primary: Story = {
  args: {
    color: "primary",
    children: "Primary",
  },
};

export const Neutral: Story = {
  args: {
    color: "neutral",
    children: "Neutral",
  },
};

export const Success: Story = {
  args: {
    color: "success",
    children: "Success",
  },
};

export const Danger: Story = {
  args: {
    color: "danger",
    children: "Danger",
  },
};

export const Warning: Story = {
  args: {
    color: "warning",
    children: "Warning",
  },
};

export const Info: Story = {
  args: {
    color: "info",
    children: "Info",
  },
};

// Bold variants
export const PrimaryBold: Story = {
  args: {
    color: "primary",
    variant: "bold",
    children: "Primary Bold",
  },
};

export const NeutralBold: Story = {
  args: {
    color: "neutral",
    variant: "bold",
    children: "Neutral Bold",
  },
};

export const SuccessBold: Story = {
  args: {
    color: "success",
    variant: "bold",
    children: "Success Bold",
  },
};

export const DangerBold: Story = {
  args: {
    color: "danger",
    variant: "bold",
    children: "Danger Bold",
  },
};

export const WarningBold: Story = {
  args: {
    color: "warning",
    variant: "bold",
    children: "Warning Bold",
  },
};

export const InfoBold: Story = {
  args: {
    color: "info",
    variant: "bold",
    children: "Info Bold",
  },
};

// Size variants
export const SmallSize: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
};

export const MediumSize: Story = {
  args: {
    size: "md",
    children: "Medium",
  },
};
