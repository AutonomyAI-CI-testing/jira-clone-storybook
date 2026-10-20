import { UserId } from "@domain/user/user";

export type ActivityId = string;

export const ACTIVITY_KINDS = {
  SIGNED_IN: "signedIn",
  WORKED: "worked",
} as const;

export type ActivityKind =
  (typeof ACTIVITY_KINDS)[keyof typeof ACTIVITY_KINDS];

export interface ActivityEvent {
  id: ActivityId;
  userId: UserId;
  kind: ActivityKind;
  createdAt: number;
}

export interface WeeklyActivity {
  /** Timestamp of the Monday 00:00 UTC that opens the week. */
  weekStart: number;
  /** People who signed in during the week. */
  signedIn: number;
  /** People who did at least one piece of work during the week. */
  active: number;
}

export interface ActivityReadout {
  /** The last `WEEKS_READ` weeks, oldest first. */
  weeks: WeeklyActivity[];
  /** When the first activity was recorded, or null when none ever was. */
  recordingStartedAt: number | null;
}

/** How many weeks the analytics page reads back. */
export const WEEKS_READ = 6;

const MS_PER_DAY = 24 * 60 * 60 * 1000;
const DAYS_PER_WEEK = 7;

/**
 * The Monday 00:00 UTC that opens the week containing `timestamp`. Weeks are
 * fixed calendar weeks so that one week can be compared with the next one.
 */
export const getWeekStart = (timestamp: number): number => {
  const date = new Date(timestamp);
  const daysSinceMonday = (date.getUTCDay() + 6) % 7;
  const startOfDay = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate()
  );

  return startOfDay - daysSinceMonday * MS_PER_DAY;
};

/** The week starts of the last `count` weeks, oldest first. */
export const getWeekStarts = (count: number, now: number): number[] => {
  const currentWeekStart = getWeekStart(now);

  return Array.from(
    { length: count },
    (_, index) =>
      currentWeekStart - (count - 1 - index) * DAYS_PER_WEEK * MS_PER_DAY
  );
};

/**
 * A person is active in a week when they did at least one piece of work in it.
 * A sign-in on its own does not make them active, so the two counts are kept
 * apart: `signedIn` is how many people arrived, `active` is how many of them
 * did something.
 */
export const summarizeWeeks = (
  events: ActivityEvent[],
  weekStarts: number[]
): WeeklyActivity[] => {
  const weeksByStart = new Map<
    number,
    { signedIn: Set<UserId>; active: Set<UserId> }
  >(
    weekStarts.map((weekStart) => [
      weekStart,
      { signedIn: new Set<UserId>(), active: new Set<UserId>() },
    ])
  );

  events.forEach((event) => {
    const week = weeksByStart.get(getWeekStart(event.createdAt));

    if (!week) return;

    if (event.kind === ACTIVITY_KINDS.SIGNED_IN) week.signedIn.add(event.userId);
    if (event.kind === ACTIVITY_KINDS.WORKED) week.active.add(event.userId);
  });

  return Array.from(weeksByStart.entries()).map(([weekStart, week]) => ({
    weekStart,
    signedIn: week.signedIn.size,
    active: week.active.size,
  }));
};
