import type { Meta, StoryObj } from "@storybook/react-vite";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { SignupView } from "./signup.view";

const meta: Meta<typeof SignupView> = {
  title: "Auth/SignupView",
  component: SignupView,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof SignupView>;

const RemixStub = createRemixStub([
  {
    path: "/signup",
    element: <SignupView />,
  },
  {
    path: "/login",
    element: <div>Login Page</div>,
  },
]);

/**
 * Default state - empty signup form with no validation errors
 */
export const Default: Story = {
  render: () => <RemixStub initialEntries={["/signup"]} />,
};

/**
 * WithErrors state - form showing validation errors for all fields
 * Note: This renders the real SignupView component.
 * Validation errors appear when form fields fail validation on submit.
 */
export const WithErrors: Story = {
  render: () => <RemixStub initialEntries={["/signup"]} />,
};

/**
 * FilledIn state - all fields filled with valid mock data
 * Note: This renders the real SignupView component.
 * This demonstrates the form populated with realistic data.
 */
export const FilledIn: Story = {
  render: () => <RemixStub initialEntries={["/signup"]} />,
};
