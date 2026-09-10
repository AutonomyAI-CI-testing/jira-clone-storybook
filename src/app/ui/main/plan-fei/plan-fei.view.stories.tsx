import type { Meta, StoryObj } from "@storybook/react";
import { withMainContext, withRemixStub } from "@app/stories/utils";
import { PlanFeiView } from "./plan-fei.view";

const meta: Meta<typeof PlanFeiView> = {
  title: "Pages/Main/Plan Fei",
  component: PlanFeiView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="flex h-screen w-full flex-col [&>*]:flex [&>*]:h-full [&>*]:w-full [&>*>*]:h-full [&>*>*]:w-full">
        {withRemixStub(withMainContext(Story))}
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PlanFeiView>;

export const Default: Story = {};
