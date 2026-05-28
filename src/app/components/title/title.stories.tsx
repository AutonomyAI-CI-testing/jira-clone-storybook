import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./title";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "ghost"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    initTitle: "Implement user authentication",
    initDescription: "Add login and registration functionality with JWT tokens.",
    variant: "default",
  },
};

export const Outline: Story = {
  args: {
    initTitle: "Fix navigation bug on mobile",
    initDescription: "The hamburger menu does not close after selecting an item on small screens.",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    initTitle: "Refactor database queries",
    initDescription: "Optimize slow queries and add proper indexes to improve performance.",
    variant: "ghost",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "48px", padding: "16px", maxWidth: "600px" }}>
      <div>
        <div style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", opacity: 0.5, marginBottom: "12px", letterSpacing: "0.08em" }}>
          Default
        </div>
        <Title
          initTitle="Design new onboarding flow"
          initDescription="Create a step-by-step guide for new users to set up their workspace."
          variant="default"
        />
      </div>
      <div>
        <div style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", opacity: 0.5, marginBottom: "12px", letterSpacing: "0.08em" }}>
          Outline
        </div>
        <Title
          initTitle="Fix navigation bug on mobile"
          initDescription="The hamburger menu does not close after selecting an item on small screens."
          variant="outline"
        />
      </div>
      <div>
        <div style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", opacity: 0.5, marginBottom: "12px", letterSpacing: "0.08em" }}>
          Ghost
        </div>
        <Title
          initTitle="Refactor database queries"
          initDescription="Optimize slow queries and add proper indexes to improve performance."
          variant="ghost"
        />
      </div>
    </div>
  ),
};

export const WithError: Story = {
  args: {
    initTitle: "",
    initDescription: "",
    variant: "default",
    error: "Title is required",
  },
};

export const ReadOnly: Story = {
  args: {
    initTitle: "Implement user authentication",
    initDescription: "Add login and registration functionality with JWT tokens.",
    variant: "default",
    readOnly: true,
  },
};
