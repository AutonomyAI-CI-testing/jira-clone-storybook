import type { Meta, StoryObj } from "@storybook/react";
import { TestCard } from "./TestCard";

// Inject missing Tailwind utility classes not present in the project's compiled CSS
// (TestCard lives in src/components, but tailwind scans only src/app/**)
const MissingTailwindCSS = () => (
  <style>{`
    .font-sans { font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif; }
    .font-semibold { font-weight: 600; }
    .text-white { --tw-text-opacity: 1; color: rgb(255 255 255 / var(--tw-text-opacity)); }
    .text-gray-300 { --tw-text-opacity: 1; color: rgb(209 213 219 / var(--tw-text-opacity)); }
    .text-gray-400 { --tw-text-opacity: 1; color: rgb(156 163 175 / var(--tw-text-opacity)); }
    .border-gray-600 { --tw-border-opacity: 1; border-color: rgb(75 85 99 / var(--tw-border-opacity)); }
    .text-base { font-size: 1rem; line-height: 1.5rem; }
    .opacity-70 { opacity: 0.7; }
    .mb-1\\.5 { margin-bottom: 0.375rem; }
    .mb-3 { margin-bottom: 0.75rem; }
    .gap-1\\.5 { gap: 0.375rem; }
    .border { border-width: 1px; }
    .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
  `}</style>
);

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div style={{ background: "#111111", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "1rem" }}>
        <MissingTailwindCSS />
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
