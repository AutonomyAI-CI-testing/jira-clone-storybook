import type { Meta, StoryObj } from "@storybook/react-vite";
import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#1e1e1e" }],
    },
  },
  decorators: [
    (Story) => (
      <>
        <style>{`
          .text-gray-400 { color: rgb(156 163 175); }
          .text-gray-500 { color: rgb(107 114 128); }
          .placeholder\\:text-gray-500::placeholder { color: rgb(107 114 128); }
          .placeholder\\:text-gray-400::placeholder { color: rgb(156 163 175); }
        `}</style>
        <div style={{ background: "#1e1e1e", padding: "24px", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Story />
        </div>
      </>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
