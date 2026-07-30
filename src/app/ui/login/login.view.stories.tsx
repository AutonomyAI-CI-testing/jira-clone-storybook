import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { usersMock } from "@domain/user";
import { LoginView } from "./login.view";
import { userEvent, within } from "@storybook/testing-library";

const RemixDecorator = (Story: React.ComponentType) => {
  const RemixStub = createRemixStub([
    {
      path: "/",
      element: <Story />,
      action: async () => {
        return { status: 200 };
      },
    },
  ]);
  return <RemixStub />;
};

const meta: Meta<typeof LoginView> = {
  title: "Pages/Login",
  component: LoginView,
  parameters: {
    layout: "padded",
  },
  decorators: [RemixDecorator],
};

export default meta;
type Story = StoryObj<typeof LoginView>;

export const Default: Story = {
  args: {
    users: usersMock,
  },
};

export const WithOpenDropdown: Story = {
  args: {
    users: usersMock,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("combobox", {
      name: /open user select/i,
    });
    await userEvent.click(trigger);
  },
};
