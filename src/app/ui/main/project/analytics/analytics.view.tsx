import cx from "classix";
import { Project } from "@domain/project";
import { Category, categoryTypeDict, CategoryType } from "@domain/category";
import { Issue } from "@domain/issue";
import { PriorityId, prioritiesMock } from "@domain/priority";
import { User } from "@domain/user";
import { UserAvatar } from "@app/components/user-avatar";
import { PriorityIcon } from "@app/components/priority-icon";

const statusOrder: CategoryType[] = ["TODO", "IN_PROGRESS", "DONE"];

const statusStyles: Record<CategoryType, { bar: string; chip: string }> = {
  TODO: {
    bar: "bg-background-accent-grey-bolder",
    chip: "bg-background-accent-grey-subtler text-font-accent-grey",
  },
  IN_PROGRESS: {
    bar: "bg-background-accent-blue-bolder",
    chip: "bg-background-accent-blue-subtler text-font-accent-blue",
  },
  DONE: {
    bar: "bg-background-accent-green-bolder",
    chip: "bg-background-accent-green-subtler text-font-accent-green",
  },
};

export const AnalyticsView = ({ project }: Props): JSX.Element => {
  const allIssues = project.categories.flatMap((category) => category.issues);
  const totalIssues = allIssues.length;

  if (totalIssues === 0) {
    return <EmptyAnalytics />;
  }

  const doneCount =
    project.categories.find((category) => category.type === "DONE")?.issues
      .length || 0;
  const completionRate = Math.round((doneCount / totalIssues) * 100);

  return (
    <div className="flex flex-col gap-6 pb-6">
      <section className="grid grid-cols-4 gap-4">
        <StatCard label="Total issues" value={totalIssues} />
        <StatCard label="Completed" value={doneCount} />
        <StatCard label="Completion rate" value={`${completionRate}%`} />
        <StatCard label="Contributors" value={project.users.length} />
      </section>

      <section className="grid grid-cols-2 gap-4">
        <Card title="Issues by status">
          <StatusBreakdown categories={project.categories} total={totalIssues} />
        </Card>
        <Card title="Issues by priority">
          <PriorityBreakdown issues={allIssues} total={totalIssues} />
        </Card>
      </section>

      <Card title="Workload by assignee">
        <AssigneeWorkload users={project.users} issues={allIssues} />
      </Card>
    </div>
  );
};

const EmptyAnalytics = (): JSX.Element => (
  <div className="flex h-full flex-col items-center justify-center text-font-subtlest">
    <p className="font-primary-bold text-lg">No issues yet</p>
    <p className="mt-2 font-primary-light text-sm">
      Create an issue on the board to see analytics for this project.
    </p>
  </div>
);

const Card = ({ title, children }: CardProps): JSX.Element => (
  <div className="rounded-md bg-elevation-surface-raised p-4 shadow-xs">
    <p className="mb-4 font-primary-bold text-font">{title}</p>
    {children}
  </div>
);

const StatCard = ({ label, value }: StatCardProps): JSX.Element => (
  <div className="rounded-md bg-elevation-surface-raised p-4 shadow-xs">
    <p className="font-primary-light text-xs uppercase text-font-subtlest">
      {label}
    </p>
    <p className="mt-2 font-primary-black text-2xl text-font">{value}</p>
  </div>
);

const StatusBreakdown = ({
  categories,
  total,
}: StatusBreakdownProps): JSX.Element => {
  const orderedCategories = statusOrder
    .map((type) => categories.find((category) => category.type === type))
    .filter((category): category is Category => Boolean(category));

  return (
    <ul className="flex flex-col gap-3">
      {orderedCategories.map((category) => {
        const count = category.issues.length;
        const percentage = total === 0 ? 0 : Math.round((count / total) * 100);

        return (
          <li key={category.id}>
            <div className="mb-1 flex items-center justify-between">
              <span
                className={cx(
                  "w-fit rounded px-1.5 py-0.5 text-2xs uppercase",
                  statusStyles[category.type].chip
                )}
              >
                {categoryTypeDict[category.type]}
              </span>
              <span className="font-primary-light text-xs text-font-subtlest">
                {count} ({percentage}%)
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-background-neutral">
              <div
                className={cx(
                  "h-2 rounded-full",
                  statusStyles[category.type].bar
                )}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const PriorityBreakdown = ({
  issues,
  total,
}: PriorityBreakdownProps): JSX.Element => (
  <ul className="flex flex-col gap-3">
    {prioritiesMock.map((priority) => {
      const count = issues.filter(
        (issue) => issue.priority.id === priority.id
      ).length;
      const percentage = total === 0 ? 0 : Math.round((count / total) * 100);

      return (
        <li key={priority.id}>
          <div className="mb-1 flex items-center justify-between">
            <span className="flex items-center gap-2 text-xs uppercase text-font-subtlest">
              <PriorityIcon priority={priority.id} size={16} />
              {priority.name}
            </span>
            <span className="font-primary-light text-xs text-font-subtlest">
              {count} ({percentage}%)
            </span>
          </div>
          <div className="h-2 w-full rounded-full bg-background-neutral">
            <div
              className={cx("h-2 rounded-full", priorityBarStyles[priority.id])}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </li>
      );
    })}
  </ul>
);

const priorityBarStyles: Record<PriorityId, string> = {
  low: "bg-background-success-bold",
  medium: "bg-background-warning-bold",
  high: "bg-background-danger-bold",
};

const AssigneeWorkload = ({
  users,
  issues,
}: AssigneeWorkloadProps): JSX.Element => {
  const sortedUsers = [...users].sort((userA, userB) => {
    const countA = issues.filter((issue) => issue.asignee.id === userA.id).length;
    const countB = issues.filter((issue) => issue.asignee.id === userB.id).length;
    return countB - countA;
  });

  return (
    <ul className="flex flex-col gap-3">
      {sortedUsers.map((user) => {
        const assignedIssues = issues.filter(
          (issue) => issue.asignee.id === user.id
        );
        const doneIssues = assignedIssues.filter(
          (issue) => issue.categoryType === "DONE"
        );

        return (
          <li key={user.id} className="flex items-center gap-3">
            <UserAvatar {...user} size={32} />
            <span className="flex-1 font-primary text-sm text-font">
              {user.name}
            </span>
            <span className="font-primary-light text-xs text-font-subtlest">
              {doneIssues.length} / {assignedIssues.length} done
            </span>
          </li>
        );
      })}
    </ul>
  );
};

interface Props {
  project: Project;
}

interface CardProps {
  title: string;
  children: JSX.Element;
}

interface StatCardProps {
  label: string;
  value: string | number;
}

interface StatusBreakdownProps {
  categories: Category[];
  total: number;
}

interface PriorityBreakdownProps {
  issues: Issue[];
  total: number;
}

interface AssigneeWorkloadProps {
  users: User[];
  issues: Issue[];
}
