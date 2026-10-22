import { useState, useRef, useEffect } from "react";
import { useFetcher } from "react-router";
import { AiOutlinePlus } from "react-icons/ai";
import cx from "classix";
import { toast } from "react-toastify";
import { useUserStore } from "@app/store/user.store";
import { Button } from "@app/components/button/button";
import { SelectStatus } from "../issue-panel/select-status";

type ActionData = {
  issueId?: string;
  error?: string;
};

export const QuickCreateIssue = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [createdIssueId, setCreatedIssueId] = useState<string>();
  const fetcher = useFetcher<ActionData>();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const wasSubmitting = useRef(false);
  const { user } = useUserStore();
  const isSubmitting = fetcher.state !== "idle";

  // Close and reset the form as soon as an issue comes back, so the new card is
  // in view (state adjustment during render, as in the board's own columns)
  if (fetcher.data?.issueId && fetcher.data.issueId !== createdIssueId) {
    setCreatedIssueId(fetcher.data.issueId);
    setTitle("");
    setIsOpen(false);
  }

  const closeForm = (): void => {
    setIsOpen(false);
    setTitle("");
    triggerRef.current?.focus();
  };

  const toggleForm = (): void => {
    if (isOpen) {
      closeForm();
      return;
    }

    setIsOpen(true);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.currentTarget.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === "Escape") {
      e.preventDefault();
      closeForm();
    }
  };

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (fetcher.state !== "idle") {
      wasSubmitting.current = true;
      return;
    }

    if (!wasSubmitting.current || !fetcher.data) {
      return;
    }

    wasSubmitting.current = false;

    if (fetcher.data.error) {
      toast.error(fetcher.data.error);
      return;
    }

    toast.success("Issue created successfully");
    triggerRef.current?.focus();
  }, [fetcher.state, fetcher.data]);

  return (
    <div className="relative w-fit" onKeyDown={handleKeyDown}>
      <Button
        ref={triggerRef}
        type="button"
        onClick={toggleForm}
        aria-expanded={isOpen}
        aria-label="Create a new issue"
      >
        <AiOutlinePlus size={16} />
        Create issue
      </Button>
      {isOpen && (
        <fetcher.Form
          method="post"
          className={cx(
            "absolute left-0 top-full z-40 mt-2 flex w-[320px] flex-col gap-3 rounded-md",
            "bg-elevation-surface-overlay p-3 shadow-md"
          )}
        >
          <input type="hidden" name="_action" value="createIssue" />
          <input type="hidden" name="reporter" value={user.id} />
          <input type="hidden" name="asignee" value={user.id} />
          <input
            ref={inputRef}
            type="text"
            name="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Issue title"
            aria-label="New issue title"
            autoComplete="off"
            className={cx(
              "h-[40px] w-full rounded border-none bg-background-input py-2 pl-2 pr-2",
              "box-border outline outline-2 outline-border-input duration-200 ease-in-out",
              "placeholder:font-primary-light placeholder:text-xs placeholder:text-font-subtlest",
              "focus:bg-background-input-pressed focus:outline-border-brand"
            )}
          />
          <div className="flex items-center justify-between gap-2">
            <SelectStatus initStatus="TODO" />
            <div className="flex items-center gap-2">
              <Button
                type="button"
                color="neutral"
                variant="text"
                onClick={closeForm}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting || !title.trim()}>
                {isSubmitting ? "Creating" : "Create"}
              </Button>
            </div>
          </div>
        </fetcher.Form>
      )}
    </div>
  );
};
