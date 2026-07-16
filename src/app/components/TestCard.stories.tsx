import type { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";
import { TestCard } from "./TestCard";

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story: React.ComponentType) => {
      useEffect(() => {
        document.documentElement.classList.add("dark");
        return () => document.documentElement.classList.remove("dark");
      }, []);
      return (
        <div style={{ background: "#1a1a1a", padding: "32px", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Story />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
