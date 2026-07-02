import type { Meta, StoryObj } from "@storybook/react";
import { SuddenlySpacesHomepage } from "./suddenly-spaces-homepage";

const meta = {
  title: "Components/SuddenlySpacesHomepage",
  component: SuddenlySpacesHomepage,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SuddenlySpacesHomepage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
