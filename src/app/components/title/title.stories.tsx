import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./title";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "500px", padding: "20px", paddingRight: "30px", paddingBottom: "50px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    initTitle: "My Project Title",
    initSubtitle: "A brief description of this project",
    showSubtitle: true,
  },
};

export const WithSubtitle: Story = {
  args: {
    initTitle: "Project with Subtitle",
    initSubtitle:
      "This is an optional subtitle that appears below the main title",
    showSubtitle: true,
  },
};

export const WithoutSubtitle: Story = {
  args: {
    initTitle: "Title Only",
    showSubtitle: false,
  },
};

export const EmptyState: Story = {
  args: {
    initTitle: "",
    initSubtitle: "",
    showSubtitle: true,
    placeholder: "Write the title",
    subtitlePlaceholder: "Add a subtitle",
  },
};

export const ReadOnly: Story = {
  args: {
    initTitle: "Read Only Title",
    initSubtitle: "This subtitle cannot be edited",
    showSubtitle: true,
    readOnly: true,
  },
};

export const WithError: Story = {
  args: {
    initTitle: "",
    showSubtitle: true,
    error: "Title is required",
  },
};
