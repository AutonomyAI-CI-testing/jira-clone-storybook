import type { Meta, StoryObj } from "@storybook/react-vite";
import * as AlertDialog from "./alert-dialog";
import { Button } from "../button/button";

const meta: Meta<typeof AlertDialog> = {
  title: "Components/AlertDialog",
  parameters: {
    layout: "centered",
  },

  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

/**
 * The dialog is rendered open so the Cancel / Action pair is visible without
 * clicking the trigger. `Action` is a real `AlertDialog.Action`, so clicking it
 * (or Cancel) closes the dialog and the trigger reopens it.
 */
export const Default: Story = {
  render: () => (
    <AlertDialog.Root defaultOpen>
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
          <div className="mt-8 flex w-full justify-end gap-4">
            <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
            <AlertDialog.Action>Action</AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  ),
};

/**
 * `Action` and `Cancel` honour a caller-supplied label, colour and variant.
 * Here the action carries a non-danger (`success`) colour and its own label
 * instead of the hardcoded danger styling and "Action" text.
 */
export const CustomAction: Story = {
  render: () => (
    <AlertDialog.Root defaultOpen>
      <AlertDialog.Trigger asChild>
        <Button>Trigger</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay />
        <AlertDialog.Content>
          <AlertDialog.Title>Publish changes?</AlertDialog.Title>
          <AlertDialog.Description>
            Your changes will be visible to everyone on the team.
          </AlertDialog.Description>
          <div className="mt-8 flex w-full justify-end gap-4">
            <AlertDialog.Cancel>Keep editing</AlertDialog.Cancel>
            <AlertDialog.Action color="success">
              Publish changes
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  ),
};
