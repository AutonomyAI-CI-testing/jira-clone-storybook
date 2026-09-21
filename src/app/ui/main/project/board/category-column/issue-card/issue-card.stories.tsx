import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { withRemixStub } from "@app/stories/utils";
import { IssueCardContent } from "./issue-card";

const meta: Meta<typeof IssueCardContent> = {
  title: "Pages/Project/IssueCard",
  component: IssueCardContent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    link: {
      defaultValue: "https://google.com",
      control: {
        type: "text",
      },
    },
    name: {
      defaultValue: "Issue name",
      control: {
        type: "text",
      },
    },
    priorityId: {
      defaultValue: "high",
      control: {
        type: "text",
      },
    },
    idPrefix: {
      defaultValue: "1234",
      control: {
        type: "text",
      },
    },
    isSubmitting: {
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
  },
  decorators: [
    (Story) =>
      withRemixStub(
        <div style={{ width: 230 }}>
          <Story />
        </div>
      ),
  ],
};

export default meta;
type Story = StoryObj<typeof IssueCardContent>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {[Standard, LongName, Submitting].map(({ args }, index) => (
        <IssueCardContent
          key={index}
          link={args?.link || "https://google.com"}
          name={args?.name || "Issue name"}
          priorityId={args?.priorityId || "low"}
          idPrefix={args?.idPrefix || "1234"}
          isSubmitting={args?.isSubmitting || false}
        />
      ))}
    </div>
  ),
};

export const Standard: Story = {
  args: {
    link: "https://google.com",
    name: "Issue 1",
    priorityId: "high",
    idPrefix: "1234",
    isSubmitting: false,
  },
};

export const LongName: Story = {
  args: {
    link: "https://google.com",
    name: "This is a very long issue name that should be truncated",
    priorityId: "high",
    idPrefix: "1234",
    isSubmitting: false,
  },
};

export const Submitting: Story = {
  args: {
    link: "https://google.com",
    name: "Submitting issue",
    priorityId: "low",
    idPrefix: "1234",
    isSubmitting: true,
  },
};

export const PriorityTooltip: Story = {
  name: "Priority flag tooltip",
  render: () => (
    <div className="pb-16" data-testid="issue-card">
      <IssueCardContent
        link="https://google.com"
        name="Fix login redirect after session expires"
        priorityId="high"
        idPrefix="1234"
        isSubmitting={false}
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const card = await canvas.findByTestId("issue-card");
    const flag = card.querySelector(
      ".text-icon-accent-red"
    ) as HTMLElement | null;
    if (flag) await userEvent.hover(flag);
  },
};
