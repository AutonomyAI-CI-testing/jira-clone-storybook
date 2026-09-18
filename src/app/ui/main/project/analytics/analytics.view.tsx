import cx from "classix";
import { RxValueNone } from "react-icons/rx";
import { Project } from "@domain/project";
import { CategoryType, categoryTypeDict } from "@domain/category";
import { PriorityId, prioritiesMock } from "@domain/priority";
import { User } from "@domain/user";
import { UserAvatar } from "@app/components/user-avatar";
import { PriorityIcon } from "@app/components/priority-icon";
import { TaskIcon } from "@app/components/icons";

const statusOrder: CategoryType[] = ["TODO", "IN_PROGRESS", "DONE"];

const statusBarClass: Record<CategoryType, string> = {
  TODO: "bg-background-accent-grey-bolder",
  IN_PROGRESS: "bg-background-accent-blue-bolder",
  DONE: "bg-background-accent-green-bolder",
};

const priorityBarClass: Record<PriorityId, string> = {
  low: "bg-icon-accent-green",
  medium: "bg-icon-accent-yellow",
  high: "bg-icon-accent-red",
};

export const AnalyticsView = ({ project }: Props): JSX.Element => {
  const allIssues = project.categories.flatMap((category) =>
    category.issues.map((issue) => ({ ...issue, categoryType: category.type }))
  );
  const totalIssues = allIssues.length;

  if (totalIssues === 0) {
    return <EmptyAnalytics />;
  }

  const issuesByStatus = statusOrder.map((type) => ({
    type,
    count: allIssues.filter((issue) => issue.categoryType === type).length,
  }));

  const doneCount = issuesByStatus.find((s) => s.type === "DONE")?.count || 0;
  const completionRate = Math.round((doneCount / totalIssues) * 100);

  const issuesByPriority = prioritiesMock.map((priority) => ({
    priority: priority.id,
    label: priority.name,
    count: allIssues.filter((issue) => issue.priority.id === priority.id).length,
  }));

  const workload = project.users
    .map((user) => ({
      user,
      count: allIssues.filter((issue) => issue.asignee.id === user.id).length,
    }))
    .sort((a, b) => b.count - a.count);

  const maxWorkload = Math.max(...workload.map((w) => w.count), 1);
  const maxPriority = Math.max(...issuesByPriority.map((p) => p.count), 1);

  return (
    <div className="flex flex-col gap-6 pb-6">
      <section className="grid grid-cols-4 gap-4">
        <OverviewCard label="Total issues" value={totalIssues} icon={<TaskIcon size={20} />} />
        {issuesByStatus.map(({ type, count }) => (
          <OverviewCard
            key={type}
            label={categoryTypeDict[type]}
            value={count}
            accentClass={statusBarClass[type]}
          />
        ))}
      </section>

      <section className="rounded-md bg-elevation-surface-raised p-4 shadow-xs">
        <div className="flex items-center justify-between">
          <p className="font-primary-bold text-font">Completion rate</p>
          <p className="font-primary-bold text-font">{completionRate}%</p>
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-background-neutral">
          <div
            className="h-full rounded-full bg-background-accent-green-bolder transition-all duration-300 ease-out"
            style={{ width: `${completionRate}%` }}
          />
        </div>
        <p className="mt-2 font-primary-light text-xs text-font-subtlest">
          {doneCount} of {totalIssues} issues done
        </p>
      </section>

      <section className="grid grid-cols-2 gap-4">
        <div className="rounded-md bg-elevation-surface-raised p-4 shadow-xs">
          <p className="mb-4 font-primary-bold text-font">Issues by priority</p>
          <div className="flex flex-col gap-3">
            {issuesByPriority.map(({ priority, label, count }) => (
              <div key={priority} className="flex items-center gap-3">
                <span className="flex w-20 items-center gap-1.5 text-xs uppercase text-font-subtlest">
                  <PriorityIcon priority={priority} size={14} />
                  {label}
                </span>
                <div className="h-2 flex-grow overflow-hidden rounded-full bg-background-neutral">
                  <div
                    className={cx(
                      "h-full rounded-full transition-all duration-300 ease-out",
                      priorityBarClass[priority]
                    )}
                    style={{ width: `${(count / maxPriority) * 100}%` }}
                  />
                </div>
                <span className="w-6 text-right text-xs text-font-subtlest">{count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-md bg-elevation-surface-raised p-4 shadow-xs">
          <p className="mb-4 font-primary-bold text-font">Team workload</p>
          <div className="flex flex-col gap-3">
            {workload.map(({ user, count }) => (
              <WorkloadRow key={user.id} user={user} count={count} max={maxWorkload} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const OverviewCard = ({
  label,
  value,
  icon,
  accentClass,
}: OverviewCardProps): JSX.Element => (
  <div className="flex items-center gap-3 rounded-md bg-elevation-surface-raised p-4 shadow-xs">
    {accentClass ? (
      <span className={cx("h-8 w-1.5 rounded-full", accentClass)} />
    ) : (
      icon
    )}
    <div>
      <p className="font-primary-black text-2xl text-font">{value}</p>
      <p className="font-primary-light text-xs uppercase text-font-subtlest">{label}</p>
    </div>
  </div>
);

interface OverviewCardProps {
  label: string;
  value: number;
  icon?: JSX.Element;
  accentClass?: string;
}

const WorkloadRow = ({ user, count, max }: WorkloadRowProps): JSX.Element => (
  <div className="flex items-center gap-3">
    <UserAvatar {...user} size={28} tooltip />
    <span className="w-24 truncate text-xs text-font-subtlest">{user.name}</span>
    <div className="h-2 flex-grow overflow-hidden rounded-full bg-background-neutral">
      <div
        className="h-full rounded-full bg-background-brand-bold transition-all duration-300 ease-out"
        style={{ width: `${(count / max) * 100}%` }}
      />
    </div>
    <span className="w-6 text-right text-xs text-font-subtlest">{count}</span>
  </div>
);

interface WorkloadRowProps {
  user: User;
  count: number;
  max: number;
}

const EmptyAnalytics = (): JSX.Element => (
  <div className="flex flex-col items-center justify-center gap-3 py-24 text-font-subtlest">
    <RxValueNone size={40} />
    <p className="font-primary-light text-sm uppercase">
      No issues yet — analytics will appear once you add some
    </p>
  </div>
);

interface Props {
  project: Project;
}
