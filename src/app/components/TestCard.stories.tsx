import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: { layout: "centered" },
};

export default meta;

export const Default: StoryObj<typeof TestCard> = {};
