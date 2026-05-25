import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./title";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    initTitle: {
      defaultValue: "",
      control: { type: "text" },
    },
    initSubtitle: {
      defaultValue: "",
      control: { type: "text" },
    },
    readOnly: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    error: {
      defaultValue: "",
      control: { type: "text" },
    },
    errorSubtitle: {
      defaultValue: "",
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  render: (_) => (
    <div className="grid grid-cols-1 gap-6 w-[500px]">
      {[EmptyTitle, WithTitle, WithTitleAndSubtitle, ReadOnly, WithError].map(
        (TitleStory, index) => (
          <Title {...TitleStory.args} key={index} />
        )
      )}
    </div>
  ),
};

export const EmptyTitle: Story = {};

export const WithTitle: Story = {
  args: {
    initTitle: "Project Alpha",
  },
};

export const WithTitleAndSubtitle: Story = {
  args: {
    initTitle: "Project Alpha",
    initSubtitle: "A comprehensive project management solution for teams",
  },
};

export const ReadOnly: Story = {
  args: {
    initTitle: "Read-only Project Title",
    initSubtitle: "This is a read-only subtitle",
    readOnly: true,
  },
};

export const WithError: Story = {
  args: {
    error: "Title is required",
    errorSubtitle: "Subtitle is required",
  },
};
