import type { Meta, StoryObj } from "@storybook/react-vite";
import { TestCard } from "./TestCard";
import { withMainContext, withRemixStub } from "@app/stories/utils";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => withRemixStub(withMainContext(Story)),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
