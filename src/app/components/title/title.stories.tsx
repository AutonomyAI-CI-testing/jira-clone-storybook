import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./title";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    initTitle: "Epic Story Title",
    initTitle2: "Subtitle or Secondary Title",
  },
};

export const Empty: Story = {
  args: {
    initTitle: "",
    initTitle2: "",
  },
};

export const ReadOnly: Story = {
  args: {
    initTitle: "This title is read only",
    initTitle2: "This subtitle is also read only",
    readOnly: true,
  },
};

export const WithErrors: Story = {
  args: {
    initTitle: "",
    initTitle2: "",
    error: "Title is required",
    error2: "Second title is required",
  },
};

export const CustomPlaceholders: Story = {
  args: {
    placeholder: "Enter issue title",
    placeholder2: "Enter issue description",
  },
};

export const CustomMaxLength: Story = {
  args: {
    initTitle: "Short max",
    initTitle2: "Also short",
    maxLength: 20,
    maxLength2: 15,
  },
};
