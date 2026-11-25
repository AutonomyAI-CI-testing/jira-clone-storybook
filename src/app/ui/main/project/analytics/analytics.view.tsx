import { ActivityReadout } from "@domain/activity/activity";

const MS_PER_DAY = 24 * 60 * 60 * 1000;

const formatDay = (date: Date): string =>
  date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });

const weekLabel = (weekStart: Date): string => {
  const weekEnd = new Date(weekStart.getTime() + 6 * MS_PER_DAY);
  return `${formatDay(weekStart)} - ${formatDay(weekEnd)}`;
};

const recordingNote = (recordingStartedAt: Date | null): string =>
  recordingStartedAt
    ? `Recording began ${formatDay(recordingStartedAt)}. Weeks before that are empty because the app was not measuring them, not because nobody used it.`
    : "Nothing has been recorded yet, so every week reads 0. The count starts from the first sign-in after this page ships.";

export interface AnalyticsViewProps {
  activity: ActivityReadout;
}

export const AnalyticsView = ({ activity }: AnalyticsViewProps) => {
  const currentWeek = activity.weeks[activity.weeks.length - 1];
  const earlierWeeks = activity.weeks.slice(0, -1).reverse();

  return (
    <div className="flex min-h-0 flex-grow flex-col gap-8 overflow-y-auto pb-4">
      <section className="max-w-[520px]">
        <h2 className="font-primary-black text-lg text-font">Weekly active users</h2>
        <p className="mt-3 font-primary-black text-3xl leading-none text-font">
          {currentWeek?.activeUsers ?? 0}
        </p>
        <p className="mt-2 text-sm text-font-subtle">This week, across all projects</p>
        <p className="mt-4 text-2xs leading-5 text-font-subtlest">
          A weekly active user signs in and does at least one piece of work in the same
          Monday-to-Sunday week. A sign-in on its own does not count.
        </p>
      </section>

      <section className="max-w-[520px]">
        <h2 className="font-primary-black text-lg text-font">Earlier weeks</h2>
        <ul className="mt-3 flex flex-col gap-1">
          {earlierWeeks.map((week) => (
            <li
              key={week.weekStart.toISOString()}
              className="flex items-center justify-between rounded bg-background-neutral px-3 py-2"
            >
              <span className="text-2xs uppercase text-font-subtle">
                {weekLabel(week.weekStart)}
              </span>
              <span className="font-primary-bold text-font">{week.activeUsers}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-2xs leading-5 text-font-subtlest">
          {recordingNote(activity.recordingStartedAt)}
        </p>
      </section>
    </div>
  );
};
