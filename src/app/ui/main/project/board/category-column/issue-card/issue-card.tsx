import { useEffect } from "react";
import { Link } from "@remix-run/react";
import cx from "classix";
import { useDrag } from "react-dnd";
import { BiCommentDetail } from "react-icons/bi";
import { CategoryId } from "@domain/category";
import { Issue, IssueId } from "@domain/issue";
import { PriorityId } from "@domain/priority";
import { User } from "@domain/user";
import { TaskIcon } from "@app/components/icons";
import { PriorityIcon } from "@app/components/priority-icon";
import { UserAvatar } from "@app/components/user-avatar";
import { useSortBy } from "@app/hooks/useSortBy";

export interface DropItem {
  issueId: IssueId;
  categoryId: CategoryId;
}

export const IssueCard = ({
  issue,
  categoryId,
  isSubmitting,
  handleDragging,
}: Props): JSX.Element => {
  const issueIdPrefix = issue.id.split("-")[0];
  const sortBy = useSortBy();
  const issueLink = sortBy
    ? `issue/${issue.id}?sortBy=${sortBy}`
    : `issue/${issue.id}`;

  type Collected = { isDragging: boolean };

  const [{ isDragging }, dragRef] = useDrag<DropItem, unknown, Collected>(
    () => ({
      type: DRAG_ISSUE_CARD,
      item: {
        issueId: issue.id,
        categoryId,
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [issue.id]
  );

  useEffect(() => {
    handleDragging(isDragging);
  }, [isDragging, handleDragging]);

  return (
    <div ref={isSubmitting ? undefined : dragRef}>
      <IssueCardContent
        link={issueLink}
        name={issue.name}
        priorityId={issue.priority.id}
        idPrefix={issueIdPrefix}
        isSubmitting={isSubmitting}
        assignee={issue.asignee}
        commentCount={issue.comments.length}
      />
    </div>
  );
};

interface Props {
  issue: Issue;
  categoryId: CategoryId;
  isSubmitting: boolean;
  handleDragging: (isDragging: boolean) => void;
}

export const IssueCardContent = ({
  link,
  name,
  priorityId,
  idPrefix,
  isSubmitting,
  assignee,
  commentCount = 0,
}: IssueCardContentProps): JSX.Element => (
  <div
    style={{ minWidth: "200px" }}
    className={cx(
      "flex w-full cursor-pointer flex-col rounded border-none bg-elevation-surface-raised p-3 text-left shadow-xs duration-200 ease-in-out hover:bg-elevation-surface-raised-hovered active:bg-elevation-surface-raised-pressed",
      isSubmitting && "opacity-50"
    )}
  >
    <Link to={link}>
      <>
        <p className="line-clamp-2 min-h-[48px] w-full text-font">{name}</p>
        <div className="flex items-center justify-between pt-4">
          <span className="flex items-center gap-2">
            <span className="flex items-center">
              <TaskIcon size={18} />
              <span className="ml-1.5 text-2xs text-font-subtlest">
                {idPrefix}
              </span>
            </span>
            {commentCount > 0 && (
              <span
                className="flex items-center gap-1 text-2xs text-font-subtlest"
                aria-label={`${commentCount} comment${
                  commentCount === 1 ? "" : "s"
                }`}
              >
                <BiCommentDetail size={14} />
                {commentCount}
              </span>
            )}
          </span>
          <span className="flex items-center gap-2">
            <PriorityIcon priority={priorityId} />
            {assignee && (
              <UserAvatar {...assignee} size={24} tooltip />
            )}
          </span>
        </div>
      </>
    </Link>
  </div>
);

interface IssueCardContentProps {
  link: string;
  name: string;
  priorityId: PriorityId;
  idPrefix: string;
  isSubmitting: boolean;
  assignee?: User;
  commentCount?: number;
}

export const DRAG_ISSUE_CARD = "ISSUE_CARD";
