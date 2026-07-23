import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./TestCard";

// Inject missing Tailwind utility classes: the project's tailwind.config.js overrides
// theme.colors entirely (no standard neutral-100–900 scale), so these classes are absent
// from app-compiled.css. We add them inline here for story rendering.
const missingUtils = `
  .text-neutral-200 { color: #e5e5e5; }
  .text-neutral-300 { color: #d4d4d4; }
  .text-neutral-400 { color: #a3a3a3; }
  .text-neutral-500 { color: #737373; }
  .bg-\\[\\#2a2a2a\\] { background-color: #2a2a2a; }
  .border-neutral-500 { border-color: #737373; }
  .border-neutral-600 { border-color: #525252; }
`;

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  decorators: [
    (Story) => (
      <>
        <style>{missingUtils}</style>
        <Story />
      </>
    ),
  ],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#111" }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
