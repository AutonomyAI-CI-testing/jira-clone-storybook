import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./TestCard";

// The project's tailwind.config.js replaces the default color palette with CSS variables,
// omitting zinc/amber. This decorator supplies those color values so the component renders
// correctly in Storybook without modifying the component source.
const injectCSS = `
  #testElem { background-color: #18181b !important; color: #ffffff !important; font-family: ui-sans-serif, system-ui, sans-serif !important; }
  #testElem .bg-zinc-900 { background-color: #18181b !important; }
  #testElem .bg-zinc-800 { background-color: #27272a !important; }
  #testElem .text-white { color: #ffffff !important; }
  #testElem .text-zinc-200 { color: #e4e4e7 !important; }
  #testElem .text-zinc-300 { color: #d4d4d8 !important; }
  #testElem .text-zinc-400 { color: #a1a1aa !important; }
  #testElem .text-zinc-500 { color: #71717a !important; }
  #testElem .text-amber-600 { color: #d97706 !important; }
  #testElem .border-zinc-600 { border-color: #52525b !important; }
  #testElem .placeholder-zinc-500::placeholder { color: #71717a !important; }
  #testElem .bg-amber-700 { background-color: #b45309 !important; }
  #testElem .font-sans { font-family: ui-sans-serif, system-ui, sans-serif !important; }
`;

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <>
        <style>{injectCSS}</style>
        <Story />
      </>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
