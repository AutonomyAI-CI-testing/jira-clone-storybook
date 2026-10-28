import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { twix } from "tailwindcss-radix-ui";
import { Button } from "../button/button";

export const Root = AlertDialog.Root;
export const Trigger = AlertDialog.Trigger;
export const Portal = AlertDialog.Portal;
export const Overlay = twix(
  AlertDialog.Overlay,
  "fixed left-0 top-0 z-50 h-full w-full backdrop-blur-sm"
);
export const Content = twix(
  AlertDialog.Content,
  "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded bg-elevation-surface-overlay p-5 text-font shadow-lg"
);
export const Title = twix(
  AlertDialog.Title,
  "mb-5 font-primary-black text-3xl"
);
export const Description = twix(
  AlertDialog.Description,
  "mt-8 flex w-full justify-end gap-4"
);
export const Cancel = ({
  children = "Cancel",
  color = "neutral",
  variant = "subtlest",
  ...rest
}: AlertDialogButtonProps): JSX.Element => (
  <AlertDialog.Cancel asChild>
    <Button color={color} variant={variant} {...rest}>
      {children}
    </Button>
  </AlertDialog.Cancel>
);
export const Action = ({
  children,
  color = "danger",
  variant = "contained",
  ...rest
}: AlertDialogButtonProps): JSX.Element => (
  <AlertDialog.Action asChild onClick={submitFormBeforeClosing}>
    <Button color={color} variant={variant} {...rest}>
      {children}
    </Button>
  </AlertDialog.Action>
);

/**
 * Closing the dialog unmounts the form the action button lives in, and the
 * browser then cancels the button's own submit ("Form submission canceled
 * because the form is not connected"). Send the form here instead, while it is
 * still mounted, so a submit button both submits and closes the dialog.
 */
const submitFormBeforeClosing = (
  e: React.MouseEvent<HTMLButtonElement>
): void => {
  const { form, type } = e.currentTarget;

  if (type !== "submit" || !form) return;

  e.preventDefault();
  form.requestSubmit(e.currentTarget);
};

interface AlertDialogButtonProps
  extends Omit<React.ComponentPropsWithRef<typeof Button>, "children"> {
  children?: React.ReactNode;
}
