import { UserId } from "@domain/user/user";

export const activityKinds = ["signedIn", "worked"] as const;
export type ActivityKind = (typeof activityKinds)[number];

export const isValidActivityKind = (kind: unknown): kind is ActivityKind =>
  typeof kind === "string" && (activityKinds as readonly string[]).includes(kind);

export interface ActivityEvent {
  userId: UserId;
  kind: ActivityKind;
  createdAt: Date;
}

export interface WeeklyActivity {
  weekStart: Date;
  /** Signed in AND did some work in this week. A sign-in on its own does not count. */
  activeUsers: number;
  signIns: number;
  workedUsers: number;
}

export interface ActivityReadout {
  /** Oldest first; the last entry is the week in progress. */
  weeks: WeeklyActivity[];
  /** When the first activity was ever recorded, or null while nothing has been. */
  recordingStartedAt: Date | null;
}

export const ACTIVITY_WEEKS_SHOWN = 6;

const MS_PER_DAY = 24 * 60 * 60 * 1000;

/** The Monday 00:00 UTC that starts the week containing `date`. */
export const getWeekStart = (date: Date): Date => {
  const start = new Date(date);
  start.setUTCHours(0, 0, 0, 0);
  const daysSinceMonday = (start.getUTCDay() + 6) % 7;
  return new Date(start.getTime() - daysSinceMonday * MS_PER_DAY);
};

/** The `count` week starts ending with the week containing `from`, oldest first. */
export const getWeekStarts = (count: number, from: Date): Date[] => {
  const current = getWeekStart(from);
  return Array.from(
    { length: count },
    (_, index) => new Date(current.getTime() - (count - 1 - index) * 7 * MS_PER_DAY)
  );
};

export const summarizeWeeks = (
  events: ActivityEvent[],
  weekStarts: Date[]
): WeeklyActivity[] => {
  const buckets = new Map<number, { signedIn: Set<UserId>; worked: Set<UserId> }>();

  weekStarts.forEach((weekStart) => {
    buckets.set(weekStart.getTime(), { signedIn: new Set(), worked: new Set() });
  });

  events.forEach((event) => {
    const bucket = buckets.get(getWeekStart(event.createdAt).getTime());
    if (!bucket) return;
    const users = event.kind === "worked" ? bucket.worked : bucket.signedIn;
    users.add(event.userId);
  });

  return weekStarts.map((weekStart) => {
    const bucket = buckets.get(weekStart.getTime());
    const signedIn = bucket?.signedIn ?? new Set<UserId>();
    const worked = bucket?.worked ?? new Set<UserId>();

    return {
      weekStart,
      activeUsers: [...worked].filter((userId) => signedIn.has(userId)).length,
      signIns: signedIn.size,
      workedUsers: worked.size,
    };
  });
};
