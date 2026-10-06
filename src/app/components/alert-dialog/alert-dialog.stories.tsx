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
};

// Demonstrates the fix: clicking the destructive Action button must close
// the dialog (Radix's AlertDialog.Action wraps a DialogPrimitive.Close).
// Open the dialog, then click Action, then assert it is gone.
export const ActionClosesDialog: Story = {
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button>Trigger</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay />
        <AlertDialog.Content>
          <AlertDialog.Title>Delete item?</AlertDialog.Title>
          <AlertDialog.Description>
            This action is permanent and cannot be undone.
          </AlertDialog.Description>
          <div className="mt-4 flex justify-end gap-2">
            <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
            <AlertDialog.Action>Delete</AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    const trigger = await canvas.findByRole("button", { name: "Trigger" });
    await userEvent.click(trigger);

    const actionButton = await body.findByRole("button", { name: "Delete" });
    await userEvent.click(actionButton);

    const dialog = body.queryByRole("alertdialog");
    if (dialog) {
      throw new Error(
        "AlertDialog did not close after clicking Action - expected it to be removed from the DOM"
      );
    }
  },
};
