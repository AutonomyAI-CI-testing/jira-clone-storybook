import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./TestCard";

// Inline styles to compensate for gray-* colors not in project's Tailwind theme
const injectStyles = `
  .text-gray-200 { color: rgb(229 231 235); }
  .text-gray-300 { color: rgb(209 213 219); }
  .text-gray-400 { color: rgb(156 163 175); }
  .text-gray-600 { color: rgb(75 85 99); }
  .border-gray-500 { border-color: rgb(107 114 128); }
  .placeholder-gray-600::placeholder { color: rgb(75 85 99); }
  .font-sans { font-family: ui-sans-serif, system-ui, sans-serif; }
`;

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story: React.ComponentType) => (
      <>
        <style>{injectStyles}</style>
        <Story />
      </>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
