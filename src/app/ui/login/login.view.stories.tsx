import type { Meta, StoryObj } from "@storybook/react";
import { usersMock } from "@domain/user";
import { LoginView } from "./login.view";
import { withRemixStub, withMainContext } from "@app/stories/utils";

const meta: Meta<typeof LoginView> = {
  title: "UI/LoginView",
  component: LoginView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(Story) => withRemixStub(withMainContext(Story))],
};

export default meta;
type Story = StoryObj<typeof LoginView>;

export const Default: Story = {
  args: {
    users: usersMock,
  },
};
