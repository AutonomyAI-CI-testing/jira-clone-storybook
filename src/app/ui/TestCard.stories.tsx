import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./TestCard";

const meta = {
  title: "Components/TestCard",
  component: TestCard,
} satisfies Meta<typeof TestCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
