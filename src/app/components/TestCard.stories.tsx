import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./TestCard";

// Inject the CSS classes that TestCard uses via Tailwind arbitrary values,
// since the project's compiled CSS doesn't include them (custom color palette).
const TestCardStyles = () => (
  <style>{`
    #testElem .w-\\[360px\\] { width: 360px; }
    #testElem .rounded-lg { border-radius: 0.5rem; }
    #testElem .rounded-md { border-radius: 0.375rem; }
    #testElem .rounded { border-radius: 0.25rem; }
    #testElem .bg-\\[\\#1a1a1a\\] { background-color: #1a1a1a; }
    #testElem .bg-\\[\\#2a2a2a\\] { background-color: #2a2a2a; }
    #testElem .bg-\\[\\#A54A2A\\] { background-color: #A54A2A; }
    #testElem .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
    #testElem .py-5 { padding-top: 1.25rem; padding-bottom: 1.25rem; }
    #testElem .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
    #testElem .py-2\\.5 { padding-top: 0.625rem; padding-bottom: 0.625rem; }
    #testElem .px-8 { padding-left: 2rem; padding-right: 2rem; }
    #testElem .text-neutral-200 { color: #e5e5e5; }
    #testElem .text-neutral-300 { color: #d4d4d4; }
    #testElem .text-neutral-400 { color: #a3a3a3; }
    #testElem .border-neutral-400 { border-color: #a3a3a3; }
    #testElem .border-neutral-500 { border-color: #737373; }
    #testElem .border-neutral-600 { border-color: #525252; }
    #testElem .font-sans { font-family: ui-sans-serif, system-ui, sans-serif; }
    #testElem .font-medium { font-weight: 500; }
    #testElem .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
    #testElem .text-base { font-size: 1rem; line-height: 1.5rem; }
    #testElem .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
    #testElem .text-\\[10px\\] { font-size: 10px; }
    #testElem .mb-6 { margin-bottom: 1.5rem; }
    #testElem .mb-8 { margin-bottom: 2rem; }
    #testElem .mb-4 { margin-bottom: 1rem; }
    #testElem .mb-2 { margin-bottom: 0.5rem; }
    #testElem .mb-10 { margin-bottom: 2.5rem; }
    #testElem .flex { display: flex; }
    #testElem .inline-flex { display: inline-flex; }
    #testElem .items-center { align-items: center; }
    #testElem .justify-between { justify-content: space-between; }
    #testElem .justify-center { justify-content: center; }
    #testElem .gap-2 { gap: 0.5rem; }
    #testElem .gap-3 { gap: 0.75rem; }
    #testElem .h-4 { height: 1rem; }
    #testElem .w-4 { width: 1rem; }
    #testElem .border { border-width: 1px; border-style: solid; }
    #testElem .w-full { width: 100%; }
    #testElem .outline-none { outline: none; }
    #testElem .truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  `}</style>
);

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ background: "#111", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <TestCardStyles />
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
