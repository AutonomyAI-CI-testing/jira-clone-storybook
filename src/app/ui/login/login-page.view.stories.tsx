import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { LoginPageView } from "./login-page.view";

const meta: Meta<typeof LoginPageView> = {
  title: "Pages/LoginPage",
  component: LoginPageView,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    isLoading: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    error: {
      control: { type: "text" },
      defaultValue: undefined,
    },
    onSubmit: {
      action: "submitted",
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
type Story = StoryObj<typeof LoginPageView>;

export const Default: Story = {
  args: {
    isLoading: false,
    error: undefined,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    error: undefined,
  },
};

export const WithError: Story = {
  args: {
    isLoading: false,
    error: "Invalid email or password. Please try again.",
  },
};
