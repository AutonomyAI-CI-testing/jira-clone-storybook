import { Form, Link, useLocation } from "react-router";
import { toast } from "react-toastify";
import * as AlertDialog from "@app/components/alert-dialog/alert-dialog";
import cx from "classix";
import { MdDeleteOutline, MdLink } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { IssueId } from "@domain/issue/issue";
import { TaskIcon } from "@app/components/icons";

export const PanelHeaderIssue = ({
  id,
  showCopyLink,
  deleteDisabled,
}: PanelHeaderIssueProps): JSX.Element => {
  const location = useLocation();
  const previousUrl = location.pathname.split("/issue")[0];

  const handleCopyLink = (): void => {
    const issueUrl = `${window.location.origin}${location.pathname}`;

    copyTextToClipboard(issueUrl)
      .then(() => toast.success("Link copied"))
      .catch(() => toast.error("Could not copy the link"));
  };

  return (
    <div className="flex">
      <span className="flex flex-grow items-center">
        <span className="flex items-center">
          <TaskIcon size={20} />
        </span>
        <span className="ml-1 text-font-subtlest text-opacity-80">{id}</span>
        {showCopyLink && (
          <button
            type="button"
            onClick={handleCopyLink}
            className="ml-2 flex cursor-pointer items-center gap-1 rounded border-none p-1 text-2xs text-font-subtlest hover:bg-background-neutral hover:text-font"
            aria-label="Copy link"
            title="Copy link"
          >
            <MdLink size={14} />
            Copy link
          </button>
        )}
      </span>
      <DeleteIssueModalDialog disabled={deleteDisabled} />
      <Link
        to={previousUrl}
        className="ml-3 flex cursor-pointer rounded border-none p-0.5 text-icon flex-center hover:bg-background-neutral"
        aria-label="Close issue panel"
      >
        <IoCloseOutline size={32} />
      </Link>
    </div>
  );
};

interface PanelHeaderIssueProps {
  id: IssueId;
  showCopyLink?: boolean;
  deleteDisabled?: boolean;
}

const copyTextToClipboard = async (text: string): Promise<void> => {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Fall through to the legacy path when the Clipboard API is blocked,
      // for example inside a sandboxed iframe.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();

  const copied = document.execCommand("copy");
  document.body.removeChild(textarea);

  if (!copied) throw new Error("Copy to clipboard was rejected");
};

const DeleteIssueModalDialog = ({
  disabled,
}: DeleteIssueModalDialogProps): JSX.Element => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger
        className={cx(
          "flex rounded border-none p-1.5 text-icon flex-center",
          disabled
            ? "cursor-not-allowed hover:text-font-disabled"
            : "hover:bg-background-danger hover:text-font-danger"
        )}
        aria-label="Open delete issue dialog"
        disabled={disabled}
        title={disabled ? "This user cannot delete the issue" : "Delete issue"}
      >
        <MdDeleteOutline size={26} />
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay />
        <AlertDialog.Content>
          <AlertDialog.Title>Delete issue?</AlertDialog.Title>
          <AlertDialog.Description>
            This action is permanent and cannot be undone. Are you sure you want
            to remove this issue completely?
          </AlertDialog.Description>
          <Form method="delete" className="mt-8 flex w-full justify-end gap-4">
            <AlertDialog.Cancel aria-label="Cancel">Cancel</AlertDialog.Cancel>
            <AlertDialog.Action
              name="_action"
              value="delete"
              type="submit"
              aria-label="Delete issue"
            >
              Delete
            </AlertDialog.Action>
          </Form>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

interface DeleteIssueModalDialogProps {
  disabled?: boolean;
}
