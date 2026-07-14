import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { usersMock } from "@domain/user";
import { LoginView } from "./login.view";

const makeRemixDecorator = (wrapperClass?: string) => {
  const Decorator = (Story: React.ComponentType) => {
    const element = wrapperClass ? (
      <div className={wrapperClass}>
        <Story />
      </div>
    ) : (
      <Story />
    );
    const RemixStub = createRemixStub([
      { path: "/", element, action: async () => ({ status: 200 }) },
    ]);
    return <RemixStub />;
  };
  Decorator.displayName = wrapperClass ? `RemixDecorator(${wrapperClass})` : "RemixDecorator";
  return Decorator;
};

const meta: Meta<typeof LoginView> = {
  title: "Pages/Login",
  component: LoginView,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    users: {
      control: { type: "object" },
    },
    initialShowPassword: {
      control: { type: "boolean" },
      description: "Start with password field revealed",
    },
    initialLoading: {
      control: { type: "boolean" },
      description: "Start in loading state",
    },
  },
  decorators: [makeRemixDecorator()],
};

export default meta;
type Story = StoryObj<typeof LoginView>;

/** Full two-panel desktop layout — primary reference state */
export const Default: Story = {
  args: {
    users: usersMock,
    initialShowPassword: false,
    initialLoading: false,
  },
};

/** Password field showing plain text — eye toggle active */
export const PasswordRevealed: Story = {
  args: {
    users: usersMock,
    initialShowPassword: true,
    initialLoading: false,
  },
};

/** Submit button in loading/spinning state */
export const LoadingState: Story = {
  args: {
    users: usersMock,
    initialShowPassword: false,
    initialLoading: true,
  },
};

/** Single-column mobile view — left panel hidden, compact wordmark shown */
export const MobileView: Story = {
  args: {
    users: usersMock,
    initialShowPassword: false,
    initialLoading: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

/** Explicit dark theme applied to wrapper */
export const DarkTheme: Story = {
  args: {
    users: usersMock,
    initialShowPassword: false,
    initialLoading: false,
  },
  decorators: [makeRemixDecorator("dark")],
};

/** Light theme applied to wrapper */
export const LightTheme: Story = {
  args: {
    users: usersMock,
    initialShowPassword: false,
    initialLoading: false,
  },
  decorators: [makeRemixDecorator("light")],
};
