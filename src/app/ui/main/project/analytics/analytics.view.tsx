import cx from "classix";
import { ImStatsDots } from "react-icons/im";
import { Project } from "@domain/project";
import { Category, categoryTypeDict, CategoryType } from "@domain/category";
import { Issue } from "@domain/issue";
import { PriorityId, prioritiesMock } from "@domain/priority";
import { User } from "@domain/user";
import { UserAvatar } from "@app/components/user-avatar";
import { PriorityIcon } from "@app/components/priority-icon";

const statusOrder: CategoryType[] = ["TODO", "IN_PROGRESS", "DONE"];

const statusStyles: Record<CategoryType, { bar: string; text: string }> = {
  TODO: {
    bar: "bg-background-accent-grey-bolder",
    text: "text-font-accent-grey",
  },
  IN_PROGRESS: {
    bar: "bg-background-accent-blue-bolder",
    text: "text-font-accent-blue",
  },
  DONE: {
    bar: "bg-background-accent-green-bolder",
    text: "text-font-accent-green",
  },
};

const priorityBarStyles: Record<PriorityId, string> = {
  low: "bg-icon-accent-green",
  medium: "bg-icon-accent-yellow",
  high: "bg-icon-accent-red",
};

export const AnalyticsView = ({ project }: Props): JSX.Element => {
  const allIssues = project.categories.flatMap((category) => category.issues);
  const totalIssues = allIssues.length;

  if (totalIssues === 0) {
    return <EmptyAnalytics />;
  }

  const orderedCategories = [...project.categories].sort(
    (a, b) => statusOrder.indexOf(a.type) - statusOrder.indexOf(b.type)
  );

  const doneCount =
    project.categories.find((category) => category.type === "DONE")?.issues
      .length || 0;
  const completionRate = Math.round((doneCount / totalIssues) * 100);

  return (
    <div className="flex flex-col gap-6 pb-6">
      <section className="grid grid-cols-3 gap-4">
        <StatCard label="Total issues" value={totalIssues} />
        <StatCard
          label="Completion rate"
          value={`${completionRate}%`}
          helper={`${doneCount} of ${totalIssues} done`}
        />
        <StatCard label="Team members" value={project.users.length} />
      </section>

      <section className="rounded-md bg-elevation-surface-raised p-4 shadow-sm">
        <SectionTitle>Issues by status</SectionTitle>
        <ul className="mt-4 flex flex-col gap-3">
          {orderedCategories.map((category) => (
            <StatusRow
              key={category.id}
              category={category}
              totalIssues={totalIssues}
            />
          ))}
        </ul>
      </section>

      <div className="grid grid-cols-2 gap-4">
        <section className="rounded-md bg-elevation-surface-raised p-4 shadow-sm">
          <SectionTitle>Issues by priority</SectionTitle>
          <ul className="mt-4 flex flex-col gap-3">
            {prioritiesMock.map((priority) => (
              <PriorityRow
                key={priority.id}
                priorityId={priority.id}
                issues={allIssues}
                totalIssues={totalIssues}
              />
            ))}
          </ul>
        </section>

        <section className="rounded-md bg-elevation-surface-raised p-4 shadow-sm">
          <SectionTitle>Top assignees</SectionTitle>
          <TopAssignees issues={allIssues} />
        </section>
      </div>
    </div>
  );
};

const SectionTitle = ({ children }: { children: string }): JSX.Element => (
  <h2 className="font-primary-bold text-sm uppercase text-font-subtlest">
    {children}
  </h2>
);

const StatCard = ({ label, value, helper }: StatCardProps): JSX.Element => (
  <div className="rounded-md bg-elevation-surface-raised p-4 shadow-sm">
    <p className="font-primary-light text-xs uppercase text-font-subtlest">
      {label}
    </p>
    <p className="mt-2 font-primary-black text-3xl text-font">{value}</p>
    {helper && (
      <p className="mt-1 font-primary-light text-xs text-font-subtlest">
        {helper}
      </p>
    )}
  </div>
);

interface StatCardProps {
  label: string;
  value: string | number;
  helper?: string;
}

const StatusRow = ({
  category,
  totalIssues,
}: {
  category: Category;
  totalIssues: number;
}): JSX.Element => {
  const count = category.issues.length;
  const percentage = totalIssues > 0 ? (count / totalIssues) * 100 : 0;
  const styles = statusStyles[category.type];

  return (
    <li className="flex items-center gap-3">
      <span
        className={cx(
          "w-32 shrink-0 font-primary text-xs uppercase",
          styles.text
        )}
      >
        {categoryTypeDict[category.type]}
      </span>
      <div className="h-2 flex-grow overflow-hidden rounded-full bg-background-neutral">
        <div
          className={cx("h-full rounded-full", styles.bar)}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="w-10 shrink-0 text-right font-primary text-xs text-font-subtlest">
        {count}
      </span>
    </li>
  );
};

const PriorityRow = ({
  priorityId,
  issues,
  totalIssues,
}: {
  priorityId: PriorityId;
  issues: Issue[];
  totalIssues: number;
}): JSX.Element => {
  const count = issues.filter((issue) => issue.priority.id === priorityId).length;
  const percentage = totalIssues > 0 ? (count / totalIssues) * 100 : 0;

  return (
    <li className="flex items-center gap-3">
      <span className="flex w-32 shrink-0 items-center gap-2 font-primary text-xs uppercase text-font-subtlest">
        <PriorityIcon priority={priorityId} size={14} />
        {priorityId}
      </span>
      <div className="h-2 flex-grow overflow-hidden rounded-full bg-background-neutral">
        <div
          className={cx("h-full rounded-full", priorityBarStyles[priorityId])}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="w-10 shrink-0 text-right font-primary text-xs text-font-subtlest">
        {count}
      </span>
    </li>
  );
};

const TopAssignees = ({ issues }: { issues: Issue[] }): JSX.Element => {
  const counts = new Map<string, { user: User; count: number }>();

  issues.forEach((issue) => {
    const { asignee } = issue;
    const existing = counts.get(asignee.id);
    counts.set(asignee.id, {
      user: asignee,
      count: (existing?.count || 0) + 1,
    });
  });

  const topAssignees = Array.from(counts.values())
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return (
    <ul className="mt-4 flex flex-col gap-3">
      {topAssignees.map(({ user, count }) => (
        <li key={user.id} className="flex items-center gap-3">
          <UserAvatar {...user} size={28} />
          <span className="flex-grow font-primary text-sm text-font">
            {user.name}
          </span>
          <span className="font-primary text-xs text-font-subtlest">
            {count} {count === 1 ? "issue" : "issues"}
          </span>
        </li>
      ))}
    </ul>
  );
};

const EmptyAnalytics = (): JSX.Element => (
  <div className="flex flex-col items-center gap-3 py-16 text-font-subtlest">
    <ImStatsDots size={36} />
    <p className="font-primary-light text-sm uppercase">
      No issues yet — create some to see analytics
    </p>
  </div>
);

interface Props {
  project: Project;
}
