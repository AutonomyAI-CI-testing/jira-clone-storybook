import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import * as AlertDialog from "./alert-dialog";
import { Button } from "../button";

const meta: Meta<typeof AlertDialog> = {
  title: "Components/AlertDialog",
  parameters: {
    layout: "centered",
  },

  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button>Trigger</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay />
        <AlertDialog.Content>
          <AlertDialog.Title>Alert title</AlertDialog.Title>
          <AlertDialog.Description>
            This is the description of the alert dialog. Here you can add more
            information about the alert.
          </AlertDialog.Description>
          <div className="mt-4 flex justify-end gap-2">
            <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
            <AlertDialog.Action>Action</AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Trigger" });
    await userEvent.click(trigger);
  },
};

/**
 * Clicking the danger `Action` button closes the dialog, because `Action` is
 * wrapped in Radix's `<AlertDialog.Action asChild>` (which renders a
 * `DialogPrimitive.Close` under the hood) just like `Cancel` is.
 * After the play function runs, no element with role="alertdialog" remains.
 */
export const ActionClosesDialog: Story = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", { name: "Trigger" });
    await userEvent.click(trigger);

    const body = within(canvasElement.ownerDocument.body);
    const action = await body.findByRole("button", { name: "Action" });
    await userEvent.click(action);
  },
};
