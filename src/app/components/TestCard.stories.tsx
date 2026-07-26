import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./TestCard";

// Inject missing gray color utilities (the project's custom Tailwind theme overrides
// the default gray palette, so we restore them for this isolated component story).
const grayStyles = `
  .text-gray-200 { color: #e5e7eb !important; }
  .text-gray-300 { color: #d1d5db !important; }
  .text-gray-400 { color: #9ca3af !important; }
  .text-gray-600 { color: #4b5563 !important; }
  .border-gray-400 { border-color: #9ca3af !important; }
  .border-gray-500 { border-color: #6b7280 !important; }
  .border-gray-600 { border-color: #4b5563 !important; }
  .bg-\\[\\#1a1a1a\\] { background-color: #1a1a1a !important; }
  .bg-\\[\\#2a2a2a\\] { background-color: #2a2a2a !important; }
  .bg-\\[\\#a3542d\\] { background-color: #a3542d !important; }
  .hover\\:bg-\\[\\#b46238\\]:hover { background-color: #b46238 !important; }
`;

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#111111" }],
    },
  },
  decorators: [
    (Story) => (
      <>
        <style>{grayStyles}</style>
        <Story />
      </>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
