import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { usersMock } from "@domain/user";
import { LoginView } from "./login.view";

const meta: Meta<typeof LoginView> = {
  title: "Pages/Login",
  component: LoginView,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    users: {
      defaultValue: usersMock,
      control: {
        type: "object",
      },
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
type Story = StoryObj<typeof LoginView>;

/**
 * Desktop view of the login page with both brand panel and form side-by-side.
 * Shows the full AutonomyAI branding on the left with incident response timeline,
 * and the email/password form on the right.
 */
export const Desktop: Story = {
  args: {
    users: usersMock,
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

/**
 * Mobile view of the login page (< 920px viewport).
 * The brand panel is hidden and the form takes up the full width.
 * This demonstrates the responsive collapse behavior.
 */
export const Mobile: Story = {
  args: {
    users: usersMock,
  },
  parameters: {
    viewport: {
      defaultViewport: "iphone12",
    },
  },
};

/**
 * Tablet view showing the transition between mobile and desktop layouts.
 */
export const Tablet: Story = {
  args: {
    users: usersMock,
  },
  parameters: {
    viewport: {
      defaultViewport: "ipad",
    },
  },
};

/**
 * The login form focused and ready for input.
 * All interactive elements are visible and accessible.
 */
export const Ready: Story = {
  args: {
    users: usersMock,
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

/**
 * Shows the full AutonomyAI design system colors, typography, and component states
 * in one comprehensive view of the login experience.
 */
export const DesignSystem: Story = {
  args: {
    users: usersMock,
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
    docs: {
      description: {
        story:
          "Complete AutonomyAI login page design with dark theme, orange accents, split-panel layout, " +
          "responsive behavior, accessibility features, and smooth animations.",
      },
    },
  },
};
