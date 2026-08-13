import type { Meta, StoryObj } from "@storybook/react-vite";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import IndexRoute from "./index";

const meta: Meta<typeof IndexRoute> = {
  title: "Routes/Index",
  component: IndexRoute,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      const RemixStub = createRemixStub([
        { path: "/", element: <Story /> },
      ]);
      return <RemixStub />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof IndexRoute>;

export const Default: Story = {
  args: {},
};

export const FeiFiLanding: Story = {
  args: {},
  name: "Fei Landing Page",
};
