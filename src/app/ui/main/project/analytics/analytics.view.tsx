import cx from "classix";
import { Project, projectMock1 } from "@domain/project";
import { Category, CategoryType } from "@domain/category";
import { Issue } from "@domain/issue";
import { PriorityId } from "@domain/priority";
import { UserAvatar } from "@app/components/user-avatar";
import { PriorityIcon } from "@app/components/priority-icon";

// ── helpers ──────────────────────────────────────────────────────────────────

const getAllIssues = (categories: Category[]): Issue[] =>
  categories.flatMap((c) => c.issues);

const countByPriority = (issues: Issue[]): Record<PriorityId, number> => ({
  low: issues.filter((i) => i.priority.id === "low").length,
  medium: issues.filter((i) => i.priority.id === "medium").length,
  high: issues.filter((i) => i.priority.id === "high").length,
});

const countByCategory = (categories: Category[]): Record<CategoryType, number> =>
  Object.fromEntries(
    categories.map((c) => [c.type, c.issues.length])
  ) as Record<CategoryType, number>;

// ── sub-components ────────────────────────────────────────────────────────────

interface StatCardProps {
  label: string;
  value: number;
  color: "blue" | "green" | "grey" | "red" | "yellow";
}

const colorMap: Record<StatCardProps["color"], { text: string; bar: string }> = {
  blue: {
    text: "text-font-accent-blue",
    bar: "bg-background-accent-blue-bolder",
  },
  green: {
    text: "text-font-accent-green",
    bar: "bg-background-accent-green-bolder",
  },
  grey: {
    text: "text-font-subtle",
    bar: "bg-background-accent-grey-bolder",
  },
  red: {
    text: "text-font-danger",
    bar: "bg-background-danger-bold",
  },
  yellow: {
    text: "text-font-warning",
    bar: "bg-background-warning-bold",
  },
};

const StatCard = ({ label, value, color }: StatCardProps) => {
  const c = colorMap[color];
  return (
    <div
      className={cx(
        "flex flex-col gap-3 rounded-lg p-5 shadow-xs",
        "bg-elevation-surface-raised"
      )}
    >
      <span className="font-primary-light text-xs uppercase text-font-subtlest tracking-wider">
        {label}
      </span>
      <span className={cx("font-primary-black text-4xl", c.text)}>{value}</span>
      <div className="h-1.5 w-full rounded-full bg-background-neutral overflow-hidden">
        <div className={cx("h-full rounded-full", c.bar)} style={{ width: "100%" }} />
      </div>
    </div>
  );
};

// ── Donut chart (pure SVG) ────────────────────────────────────────────────────

interface DonutSegment {
  label: string;
  value: number;
  color: string;
}

interface DonutChartProps {
  segments: DonutSegment[];
  size?: number;
  strokeWidth?: number;
}

const DonutChart = ({ segments, size = 160, strokeWidth = 28 }: DonutChartProps) => {
  const total = segments.reduce((sum, s) => sum + s.value, 0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  let cumulativePct = 0;

  return (
    <div className="flex flex-col items-center gap-4">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        {total === 0 ? (
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="var(--color-background-neutral)"
            strokeWidth={strokeWidth}
          />
        ) : (
          segments.map((seg, i) => {
            const pct = seg.value / total;
            const dashArray = `${pct * circumference} ${(1 - pct) * circumference}`;
            const dashOffset = -cumulativePct * circumference;
            cumulativePct += pct;

            return (
              <circle
                key={i}
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke={seg.color}
                strokeWidth={strokeWidth}
                strokeDasharray={dashArray}
                strokeDashoffset={dashOffset}
              />
            );
          })
        )}
        {/* center label */}
        <text
          x={center}
          y={center}
          textAnchor="middle"
          dominantBaseline="central"
          className="rotate-90 origin-center"
          style={{ transform: `rotate(90deg)`, transformOrigin: `${center}px ${center}px` }}
          fill="var(--color-font)"
          fontSize={size / 5}
          fontFamily="CircularStdBlack, sans-serif"
        >
          {total}
        </text>
      </svg>
      {/* Legend */}
      <ul className="flex flex-col gap-1.5 self-start">
        {segments.map((seg, i) => (
          <li key={i} className="flex items-center gap-2 text-xs text-font-subtle">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: seg.color }}
            />
            <span className="font-primary-light">{seg.label}</span>
            <span className="ml-auto font-primary-bold text-font">{seg.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ── Bar chart ────────────────────────────────────────────────────────────────

interface BarChartItem {
  label: string;
  value: number;
  color: string;
}

interface BarChartProps {
  items: BarChartItem[];
}

const BarChart = ({ items }: BarChartProps) => {
  const max = Math.max(...items.map((i) => i.value), 1);
  return (
    <div className="flex flex-col gap-3 w-full">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-3">
          <span className="w-[90px] shrink-0 font-primary-light text-xs text-right text-font-subtlest truncate">
            {item.label}
          </span>
          <div className="flex-1 h-5 rounded-full bg-background-neutral overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${(item.value / max) * 100}%`,
                backgroundColor: item.color,
              }}
            />
          </div>
          <span className="w-5 shrink-0 font-primary-bold text-xs text-font text-right">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
};

// ── Recent issues list ────────────────────────────────────────────────────────

const RecentIssueRow = ({ issue }: { issue: Issue }) => (
  <div className="flex items-center gap-3 rounded-md px-3 py-2.5 hover:bg-background-neutral transition-colors duration-150">
    <PriorityIcon priority={issue.priority.id} size={16} />
    <span className="flex-1 font-primary-light text-sm text-font truncate">{issue.name}</span>
    <UserAvatar
      name={issue.asignee.name}
      image={issue.asignee.image}
      color={issue.asignee.color}
      size={24}
      tooltip
    />
  </div>
);

// ── Team member row ───────────────────────────────────────────────────────────

const TeamMemberRow = ({
  user,
  issueCount,
}: {
  user: { name: string; image?: string; color?: string };
  issueCount: number;
}) => {
  const max = 10; // visual max for bar
  return (
    <div className="flex items-center gap-3 py-2">
      <UserAvatar name={user.name} image={user.image} color={user.color} size={32} tooltip />
      <span className="w-[120px] shrink-0 font-primary-light text-sm text-font truncate">
        {user.name}
      </span>
      <div className="flex-1 h-2 rounded-full bg-background-neutral overflow-hidden">
        <div
          className="h-full rounded-full bg-background-brand-bold"
          style={{ width: `${Math.min((issueCount / max) * 100, 100)}%` }}
        />
      </div>
      <span className="font-primary-bold text-xs text-font w-5 text-right">{issueCount}</span>
    </div>
  );
};

// ── Section card wrapper ──────────────────────────────────────────────────────

const Card = ({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cx(
      "flex flex-col gap-4 rounded-lg bg-elevation-surface-raised p-5 shadow-xs",
      className
    )}
  >
    <h3 className="font-primary-bold text-sm uppercase tracking-wider text-font-subtlest">
      {title}
    </h3>
    {children}
  </div>
);

// ── Main view ────────────────────────────────────────────────────────────────

export interface AnalyticsViewProps {
  project?: Project;
}

export const AnalyticsView = ({ project = projectMock1 }: AnalyticsViewProps) => {
  const categories = project.categories;
  const allIssues = getAllIssues(categories);
  const priorityCounts = countByPriority(allIssues);
  const categoryCounts = countByCategory(categories);

  const todoCount = categoryCounts["TODO"] ?? 0;
  const inProgressCount = categoryCounts["IN_PROGRESS"] ?? 0;
  const doneCount = categoryCounts["DONE"] ?? 0;
  const totalIssues = allIssues.length;
  const totalUsers = project.users.length;

  // Issues per assignee
  const issuesByUser: Record<string, { name: string; image?: string; color?: string; count: number }> = {};
  allIssues.forEach((issue) => {
    const id = issue.asignee.id;
    if (!issuesByUser[id]) {
      issuesByUser[id] = {
        name: issue.asignee.name,
        image: issue.asignee.image,
        color: issue.asignee.color,
        count: 0,
      };
    }
    issuesByUser[id].count += 1;
  });
  const userIssues = Object.values(issuesByUser).sort((a, b) => b.count - a.count);

  // Recent issues — latest 5
  const recentIssues = [...allIssues]
    .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))
    .slice(0, 5);

  // Donut data
  const donutSegments = [
    { label: "To Do", value: todoCount, color: "var(--color-background-accent-grey-bolder)" },
    { label: "In Progress", value: inProgressCount, color: "var(--color-background-accent-blue-bolder)" },
    { label: "Done", value: doneCount, color: "var(--color-background-accent-green-bolder)" },
  ];

  // Priority bar data
  const priorityBars = [
    { label: "High", value: priorityCounts.high, color: "var(--color-icon-accent-red)" },
    { label: "Medium", value: priorityCounts.medium, color: "var(--color-icon-accent-yellow)" },
    { label: "Low", value: priorityCounts.low, color: "var(--color-icon-accent-green)" },
  ];

  return (
    <div className="flex flex-col gap-6 pb-8">
      {/* Stats row */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label="Total Issues" value={totalIssues} color="grey" />
        <StatCard label="To Do" value={todoCount} color="grey" />
        <StatCard label="In Progress" value={inProgressCount} color="blue" />
        <StatCard label="Done" value={doneCount} color="green" />
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card title="Issues by Status">
          <div className="flex items-center justify-center py-2">
            <DonutChart segments={donutSegments} size={160} />
          </div>
        </Card>
        <Card title="Issues by Priority">
          <div className="py-2">
            <BarChart items={priorityBars} />
          </div>
          <div className="mt-2 flex gap-4 justify-center flex-wrap">
            {priorityBars.map((p) => (
              <div key={p.label} className="flex items-center gap-1.5 text-xs text-font-subtlest">
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: p.color }}
                />
                {p.label}: <span className="font-primary-bold text-font">{p.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card title="Recent Issues">
          {recentIssues.length === 0 ? (
            <p className="font-primary-light text-sm text-font-subtlest py-4 text-center">
              No issues yet
            </p>
          ) : (
            <div className="-mx-2">
              {recentIssues.map((issue) => (
                <RecentIssueRow key={issue.id} issue={issue} />
              ))}
            </div>
          )}
        </Card>

        <Card title={`Team Members (${totalUsers})`}>
          <div className="flex flex-col divide-y divide-border">
            {userIssues.map((u) => (
              <TeamMemberRow key={u.name} user={u} issueCount={u.count} />
            ))}
            {project.users
              .filter((u) => !userIssues.find((ui) => ui.name === u.name))
              .map((u) => (
                <TeamMemberRow key={u.id} user={u} issueCount={0} />
              ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
