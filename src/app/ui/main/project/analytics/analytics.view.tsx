import { ActivityReadout, WeeklyActivity } from "@domain/activity/activity";
import { formatDateTime } from "@utils/formatDateTime";

const MS_PER_DAY = 24 * 60 * 60 * 1000;
const DAYS_PER_WEEK = 7;

export const AnalyticsView = ({
  weeks,
  recordingStartedAt,
}: ActivityReadout): JSX.Element => {
  const currentWeek = weeks[weeks.length - 1];
  // Newest first: the current week already has its own block above.
  const earlierWeeks = weeks.slice(0, -1).reverse();
  const busiestWeek = Math.max(...weeks.map((week) => week.active), 1);

  return (
    <div className="flex h-full flex-col gap-5 overflow-y-auto pb-8">
      <section className="w-fit rounded bg-elevation-surface-raised px-6 py-4 shadow-xs">
        <p className="font-primary-light text-sm text-font-subtlest">
          Weekly active users · all projects
        </p>
        <div className="mt-1 flex items-baseline gap-3">
          <p className="font-primary-black text-5xl">{currentWeek.active}</p>
          <p className="font-primary-light text-sm text-font-subtle">
            {formatWeekRange(currentWeek.weekStart)}
          </p>
        </div>
        <p className="mt-1 font-primary-light text-sm text-font-subtlest">
          {currentWeek.signedIn} signed in this week
        </p>
      </section>

      <section className="rounded bg-elevation-surface-raised px-6 py-5 shadow-xs">
        <h2 className="font-primary-black text-lg">How this is counted</h2>
        <p className="mt-2 max-w-[70ch] font-primary-light text-sm text-font-subtle">
          A weekly active user signs in and then does at least one piece of work
          in the same week. Work is creating, editing, moving or deleting an
          issue, writing or deleting a comment, or creating or deleting a
          project. A sign-in on its own does not count. Weeks run from Monday to
          Sunday, in UTC.
        </p>
      </section>

      <section className="rounded bg-elevation-surface-raised px-6 py-5 shadow-xs">
        <h2 className="font-primary-black text-lg">Earlier weeks</h2>
        <ul className="mt-4 flex flex-col gap-2">
          {earlierWeeks.map((week) => (
            <WeekRow key={week.weekStart} week={week} busiestWeek={busiestWeek} />
          ))}
        </ul>
      </section>

      {recordingStartedAt === null ? (
        <p className="max-w-[70ch] font-primary-light text-sm text-font-subtlest">
          Nothing has been recorded yet. The count moves the first time someone
          signs in and does some work.
        </p>
      ) : (
        <p className="max-w-[70ch] font-primary-light text-sm text-font-subtlest">
          Recording started {formatDateTime(recordingStartedAt)}. Weeks before
          that show zero because the app did not measure them, not because
          nobody used it.
        </p>
      )}
    </div>
  );
};

const WeekRow = ({ week, busiestWeek }: WeekRowProps): JSX.Element => (
  <li className="flex items-center gap-4">
    <span className="w-[150px] font-primary-light text-sm text-font-subtle">
      {formatWeekRange(week.weekStart)}
    </span>
    <div className="h-2 flex-grow rounded-full bg-background-neutral">
      <div
        className="h-2 rounded-full bg-background-brand-bold"
        style={{ width: `${(week.active / busiestWeek) * 100}%` }}
      />
    </div>
    <span className="w-[90px] text-right font-primary-light text-sm">
      {week.active} active
    </span>
    <span className="w-[110px] text-right font-primary-light text-sm text-font-subtlest">
      {week.signedIn} signed in
    </span>
  </li>
);

const formatWeekRange = (weekStart: number): string => {
  const lastDay = weekStart + (DAYS_PER_WEEK - 1) * MS_PER_DAY;

  return `${formatDay(weekStart)} – ${formatDay(lastDay)}`;
};

const formatDay = (timestamp: number): string =>
  new Date(timestamp).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
  });

interface WeekRowProps {
  week: WeeklyActivity;
  busiestWeek: number;
}
