import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { FormPanel } from "./form-panel";

const meta: Meta<typeof FormPanel> = {
  title: "Pages/Login/FormPanel",
  component: FormPanel,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    isLoading: {
      control: "boolean",
      description: "Show loading state on submit button",
    },
    onSubmit: {
      action: "submitted",
      description: "Called when form is submitted",
    },
  },
  decorators: [
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: "/",
          element: <Story />,
          action: async () => {
            return {
              status: 200,
            };
          },
        },
      ]);

      return <RemixStub />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof FormPanel>;

/**
 * Default form panel with empty fields
 */
export const Default: Story = {
  args: {
    isLoading: false,
  },
};

/**
 * Form panel in loading/submitting state
 * Shows spinner in button and disables all inputs
 */
export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

/**
 * Form panel with full height for context
 */
export const Fullscreen: Story = {
  args: {
    isLoading: false,
  },
  decorators: [
    (Story) => (
      <div className="h-screen w-full">
        <Story />
      </div>
    ),
  ],
};
