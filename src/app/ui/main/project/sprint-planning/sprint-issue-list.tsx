import { RxValueNone } from "react-icons/rx";
import { SprintIssue } from "@domain/sprint/sprint";
import { Button } from "@app/components/button/button";
import { TaskIcon } from "@app/components/icons";
import { PriorityIcon } from "@app/components/priority-icon/priority-icon";

export const SprintIssueList = ({
  issues,
  action,
  actionLabel,
  isSubmitting,
  onSubmit,
}: Props): JSX.Element => {
  if (issues.length === 0) {
    return (
      <ul className="flex min-h-0 flex-1 flex-col items-center pt-4">
        <li className="flex flex-col items-center text-font-subtlest">
          <RxValueNone size={36} />
          <p className="mt-4 font-primary-light text-xs uppercase">No issues found</p>
        </li>
      </ul>
    );
  }

  return (
    <ul className="scrollbar-hide mt-1 min-h-0 flex-1 overflow-y-auto px-3 pb-1">
      {issues.map((issue) => (
        <SprintIssueRow
          key={issue.id}
          issue={issue}
          action={action}
          actionLabel={actionLabel}
          isSubmitting={isSubmitting}
          onSubmit={onSubmit}
        />
      ))}
    </ul>
  );
};

const SprintIssueRow = ({
  issue,
  action,
  actionLabel,
  isSubmitting,
  onSubmit,
}: RowProps): JSX.Element => {
  const idPrefix = issue.id.split("-")[0];

  return (
    <li className="mb-2 flex items-center gap-3 rounded border-none bg-elevation-surface-raised px-3 py-2 shadow-xs duration-200 ease-in-out hover:bg-elevation-surface-raised-hovered">
      <PriorityIcon priority={issue.priority.id} />
      <span className="flex items-center">
        <TaskIcon size={18} />
        <span className="ml-1.5 text-2xs text-font-subtlest">{idPrefix}</span>
      </span>
      <span className="line-clamp-1 min-w-0 flex-1 text-font">{issue.name}</span>
      <span
        title={issue.storyPoints ? `${issue.storyPoints} story points` : "No estimate"}
        className="rounded bg-background-neutral px-1.5 py-0.5 font-primary-light text-2xs text-font-subtle"
      >
        {issue.storyPoints ?? "–"}
      </span>
      <Button
        type="button"
        variant="text"
        color="neutral"
        className="!p-1 text-xs"
        disabled={isSubmitting}
        aria-label={`${actionLabel}: ${issue.name}`}
        onClick={() => onSubmit({ _action: action, issueId: issue.id })}
      >
        {actionLabel}
      </Button>
    </li>
  );
};

interface RowProps {
  issue: SprintIssue;
  action: string;
  actionLabel: string;
  isSubmitting: boolean;
  onSubmit: (data: Record<string, string>) => void;
}

export interface Props {
  issues: SprintIssue[];
  action: string;
  actionLabel: string;
  isSubmitting: boolean;
  onSubmit: (data: Record<string, string>) => void;
}
