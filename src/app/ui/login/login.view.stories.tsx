import type { Meta, StoryObj } from "@storybook/react";
import { LoginView } from "./login.view";
import { userMock1, userMock2, userMock3, userMock4 } from "@domain/user";

const meta = {
  title: "Pages/Login",
  component: LoginView,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LoginView>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockUsers = [userMock1, userMock2, userMock3, userMock4];

/**
 * Default login view with the professional two-panel layout.
 * Shows the brand panel on the left (hidden on mobile) and auth form on the right.
 */
export const Default: Story = {
  args: {
    users: mockUsers,
  },
};

/**
 * Desktop view showing the full two-panel layout with brand messaging
 * and hero headline with gradient text.
 */
export const Desktop: Story = {
  args: {
    users: mockUsers,
  },
  parameters: {
    viewport: {
      defaultViewport: "1280",
    },
  },
};

/**
 * Mobile responsive view showing single-column layout with
 * mobile logo at the top and form taking full width.
 */
export const Mobile: Story = {
  args: {
    users: mockUsers,
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
    users: mockUsers,
  },
  parameters: {
    viewport: {
      defaultViewport: "ipad",
    },
  },
};

/**
 * Login view with single user for demo purposes.
 */
export const SingleUser: Story = {
  args: {
    users: [userMock1],
  },
};

/**
 * Login view with many users to showcase the dropdown scrolling.
 */
export const ManyUsers: Story = {
  args: {
    users: [userMock1, userMock2, userMock3, userMock4, userMock1, userMock2, userMock3, userMock4],
  },
};

/**
 * Shows the login form styling with focus states and interactions.
 */
export const FormFocused: Story = {
  args: {
    users: mockUsers,
  },
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
};

/**
 * Dark theme variant showcasing the design's color scheme and contrast.
 */
export const DarkMode: Story = {
  args: {
    users: mockUsers,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
};
