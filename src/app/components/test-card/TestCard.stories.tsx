import type { Meta, StoryObj } from "@storybook/react-vite";
import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: () => JSX.Element) => (
      <div style={{ background: "#1e1e1c", minHeight: "100vh", display: "flex", justifyContent: "center", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
