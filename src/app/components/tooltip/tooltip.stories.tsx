import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { Tooltip } from "./tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip title="Tooltip messsage">
      <div className="rounded bg-background-neutral p-1 text-font">
        Hover over me!
      </div>
    </Tooltip>
  ),
};

/**
 * The tooltip now also opens when the wrapped element receives keyboard focus
 * (onFocus) and hides again on blur — not only on mouse hover.
 * The play function tabs to the button to simulate a keyboard user.
 */
export const FocusedWithKeyboard: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-10 p-6">
      <button className="rounded border border-border bg-background-neutral px-2 py-1 text-xs text-font">
        Press Tab from here
      </button>
      <Tooltip title="Shown on keyboard focus">
        <button className="rounded border border-border bg-background-neutral px-3 py-1.5 text-xs text-font">
          Tab to me!
        </button>
      </Tooltip>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Tab to me!" });
    // Simulate a keyboard user tabbing onto the tooltip trigger.
    await userEvent.tab();
    await userEvent.tab();
    if (document.activeElement !== trigger) trigger.focus();
  },
};
