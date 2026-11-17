import type { Meta, StoryObj } from "@storybook/react-vite";
import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    // Top-aligned rather than centered: the card is only ~254x500px, so vertical
    // centering in the tall story canvas leaves the fixed preview pane mostly blank.
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
