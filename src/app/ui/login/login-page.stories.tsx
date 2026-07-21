import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { LoginPage } from "./login-page";

const meta: Meta<typeof LoginPage> = {
  title: "Pages/Login/LoginPage",
  component: LoginPage,
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
type Story = StoryObj<typeof LoginPage>;

/**
 * Default login page with desktop split-screen layout
 * Shows 55% brand panel (left) with incident timeline + 45% form panel (right)
 */
export const Default: Story = {
  args: {
    isLoading: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

/**
 * Login page on mobile/tablet - shows form full-width with brand panel hidden
 */
export const Mobile: Story = {
  args: {
    isLoading: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

/**
 * Tablet layout - shows form full-width but larger viewport
 */
export const Tablet: Story = {
  args: {
    isLoading: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

/**
 * Form in loading state - submit button shows spinner, inputs disabled
 */
export const Loading: Story = {
  args: {
    isLoading: true,
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

/**
 * Loading state on mobile
 */
export const LoadingMobile: Story = {
  args: {
    isLoading: true,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

// Additional component stories for the sub-components
export { Default as BrandPanelDefault } from "./brand-panel.stories";
export { Default as FormPanelDefault } from "./form-panel.stories";
export { Default as IncidentTimelineDefault } from "./incident-timeline.stories";
