import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./TestCard";

// Inject missing Tailwind utility CSS — this project's Tailwind theme overrides
// all default colors, so standard classes like text-white / text-gray-* / text-amber-*
// are not generated. We supply them here so the component renders correctly.
const TAILWIND_COMPAT_CSS = `
  .text-white { color: #ffffff !important; }
  .text-gray-200 { color: #e5e7eb !important; }
  .text-gray-400 { color: #9ca3af !important; }
  .text-gray-500 { color: #6b7280 !important; }
  .text-gray-600 { color: #4b5563 !important; }
  .text-amber-600 { color: #d97706 !important; }
  .text-amber-700 { color: #b45309 !important; }
  .bg-\\[\\#1e1e1e\\] { background-color: #1e1e1e !important; }
  .bg-\\[\\#2a2a2a\\] { background-color: #2a2a2a !important; }
  .bg-amber-700 { background-color: #b45309 !important; }
  .hover\\:bg-amber-600:hover { background-color: #d97706 !important; }
  .border-gray-600 { border-color: #4b5563 !important; }
  .placeholder-gray-500::placeholder { color: #6b7280 !important; }
  .min-h-screen { min-height: 100vh !important; }
  .font-bold { font-weight: 700 !important; }
  .font-semibold { font-weight: 600 !important; }
  .font-medium { font-weight: 500 !important; }
  .text-xl { font-size: 1.25rem !important; line-height: 1.75rem !important; }
  .text-lg { font-size: 1.125rem !important; line-height: 1.75rem !important; }
  .text-sm { font-size: 0.875rem !important; line-height: 1.25rem !important; }
  .text-2xl { font-size: 1.5rem !important; line-height: 2rem !important; }
  .rounded { border-radius: 0.25rem !important; }
  .rounded-lg { border-radius: 0.5rem !important; }
  .rounded-full { border-radius: 9999px !important; }
  .transition-colors { transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out !important; }
  .flex-1 { flex: 1 1 0% !important; }
`;

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: React.ComponentType) => (
      <>
        <style dangerouslySetInnerHTML={{ __html: TAILWIND_COMPAT_CSS }} />
        <div
          style={{
            minHeight: "100vh",
            background: "#111",
            display: "flex",
            justifyContent: "center",
            padding: "16px",
          }}
        >
          <div style={{ width: "384px", flexShrink: 0 }}>
            <Story />
          </div>
        </div>
      </>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
