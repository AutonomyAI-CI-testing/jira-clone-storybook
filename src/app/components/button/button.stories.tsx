import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
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
        options: ["primary", "neutral", "success", "danger", "warning", "info"],
      },
    },
    variant: {
      description: "The variant of the button",
      control: {
        type: "select",
        options: ["contained", "subtlest", "text"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["md", "lg"],
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      {/* Color Themes - Contained Variant (Medium) */}
      <div>
        <h3 className="mb-4 font-bold">Colors - Contained (Medium)</h3>
        <div className="flex flex-wrap gap-3">
          {[Primary, Neutral, Success, Danger, Warning, Info].map(
            (ButtonStory, index) => (
              <Button {...ButtonStory.args} className="w-fit" key={index}>
                {ButtonStory.args?.children}
              </Button>
            )
          )}
        </div>
      </div>

      {/* Variant Types - Primary Color */}
      <div>
        <h3 className="mb-4 font-bold">Variants - Primary Color (Medium)</h3>
        <div className="flex flex-wrap gap-3">
          {[Primary, PrimarySubtle, PrimaryText].map((ButtonStory, index) => (
            <Button {...ButtonStory.args} className="w-fit" key={index}>
              {ButtonStory.args?.children}
            </Button>
          ))}
        </div>
      </div>

      {/* All Variants Subtlest - All Colors (Medium) */}
      <div>
        <h3 className="mb-4 font-bold">Subtlest Variant - All Colors (Medium)</h3>
        <div className="flex flex-wrap gap-3">
          {[
            PrimarySubtle,
            NeutralSubtle,
            SuccessSubtle,
            DangerSubtle,
            WarningSubtle,
            InfoSubtle,
          ].map((ButtonStory, index) => (
            <Button {...ButtonStory.args} className="w-fit" key={index}>
              {ButtonStory.args?.children}
            </Button>
          ))}
        </div>
      </div>

      {/* All Variants Text - All Colors (Medium) */}
      <div>
        <h3 className="mb-4 font-bold">Text Variant - All Colors (Medium)</h3>
        <div className="flex flex-wrap gap-3">
          {[
            PrimaryText,
            NeutralText,
            SuccessText,
            DangerText,
            WarningText,
            InfoText,
          ].map((ButtonStory, index) => (
            <Button {...ButtonStory.args} className="w-fit" key={index}>
              {ButtonStory.args?.children}
            </Button>
          ))}
        </div>
      </div>

      {/* Large Size Variants */}
      <div>
        <h3 className="mb-4 font-bold">Size - Large (All Variants)</h3>
        <div className="flex flex-wrap gap-3">
          {[PrimaryContainedBig, PrimarySubtleBig, PrimaryTextBig].map(
            (ButtonStory, index) => (
              <Button {...ButtonStory.args} className="w-fit" key={index}>
                {ButtonStory.args?.children}
              </Button>
            )
          )}
        </div>
      </div>

      {/* Disabled States - All Colors */}
      <div>
        <h3 className="mb-4 font-bold">Disabled State - All Colors</h3>
        <div className="flex flex-wrap gap-3">
          {[
            PrimaryDisabled,
            NeutralDisabled,
            SuccessDisabled,
            DangerDisabled,
            WarningDisabled,
            InfoDisabled,
          ].map((ButtonStory, index) => (
            <Button {...ButtonStory.args} className="w-fit" key={index}>
              {ButtonStory.args?.children}
            </Button>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const Primary: Story = {
  args: {
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

export const PrimarySubtle: Story = {
  args: {
    variant: "subtlest",
    children: "Primary",
  },
};

export const NeutralSubtle: Story = {
  args: {
    variant: "subtlest",
    color: "neutral",
    children: "Neutral",
  },
};

export const SuccessSubtle: Story = {
  args: {
    variant: "subtlest",
    color: "success",
    children: "Success",
  },
};

export const DangerSubtle: Story = {
  args: {
    variant: "subtlest",
    color: "danger",
    children: "Danger",
  },
};

export const WarningSubtle: Story = {
  args: {
    variant: "subtlest",
    color: "warning",
    children: "Warning",
  },
};

export const InfoSubtle: Story = {
  args: {
    variant: "subtlest",
    color: "info",
    children: "Info",
  },
};

export const PrimaryText: Story = {
  args: {
    variant: "text",
    children: "Primary",
  },
};

export const NeutralText: Story = {
  args: {
    variant: "text",
    color: "neutral",
    children: "Neutral",
  },
};

export const SuccessText: Story = {
  args: {
    variant: "text",
    color: "success",
    children: "Success",
  },
};

export const DangerText: Story = {
  args: {
    variant: "text",
    color: "danger",
    children: "Danger",
  },
};

export const WarningText: Story = {
  args: {
    variant: "text",
    color: "warning",
    children: "Warning",
  },
};

export const InfoText: Story = {
  args: {
    variant: "text",
    color: "info",
    children: "Info",
  },
};

export const PrimaryDisabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

export const NeutralDisabled: Story = {
  args: {
    color: "neutral",
    disabled: true,
    children: "Disabled",
  },
};

export const SuccessDisabled: Story = {
  args: {
    color: "success",
    disabled: true,
    children: "Disabled",
  },
};

export const DangerDisabled: Story = {
  args: {
    color: "danger",
    disabled: true,
    children: "Disabled",
  },
};

export const WarningDisabled: Story = {
  args: {
    color: "warning",
    disabled: true,
    children: "Disabled",
  },
};

export const InfoDisabled: Story = {
  args: {
    color: "info",
    disabled: true,
    children: "Disabled",
  },
};

export const PrimaryContainedBig: Story = {
  args: {
    size: "lg",
    children: "Primary",
  },
};

export const PrimarySubtleBig: Story = {
  args: {
    variant: "subtlest",
    size: "lg",
    children: "Primary",
  },
};

export const PrimaryTextBig: Story = {
  args: {
    variant: "text",
    size: "lg",
    children: "Primary",
  },
};
