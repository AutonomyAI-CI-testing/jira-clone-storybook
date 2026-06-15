import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./test-card";
import { withMainContext, withRemixStub } from "@app/stories/utils";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  decorators: [(Story) => withRemixStub(withMainContext(Story))],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
