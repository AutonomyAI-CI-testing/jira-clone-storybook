import type { Meta, StoryObj } from "@storybook/react-vite";
import { ClaudeDesign } from "./ClaudeDesign";

const meta: Meta<typeof ClaudeDesign> = {
  title: "Design/ClaudeDesign",
  component: ClaudeDesign,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "responsive",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: 1200, overflowX: "auto" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    view: {
      control: {
        type: "select",
        options: ["board", "issue-panel", "projects", "login"],
      },
    },
    theme: {
      control: {
        type: "select",
        options: ["light", "dark"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ClaudeDesign>;

export const Board: Story = {
  args: {
    view: "board",
    theme: "light",
  },
};

export const IssuePanel: Story = {
  args: {
    view: "issue-panel",
    theme: "light",
  },
};

export const Projects: Story = {
  args: {
    view: "projects",
    theme: "light",
  },
};

export const Login: Story = {
  args: {
    view: "login",
    theme: "light",
  },
};

export const DarkThemeBoard: Story = {
  args: {
    view: "board",
    theme: "dark",
  },
};
