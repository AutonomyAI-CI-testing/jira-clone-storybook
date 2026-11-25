import {
  ACTIVITY_WEEKS_SHOWN,
  ActivityEvent,
  ActivityKind,
  ActivityReadout,
  getWeekStarts,
  isValidActivityKind,
  summarizeWeeks,
} from "@domain/activity/activity";
import { UserId } from "@domain/user/user";
import { db } from "./db.server";

export interface RecordActivityData {
  userId: UserId;
  kind: ActivityKind;
}

export const recordActivity = async ({
  userId,
  kind,
}: RecordActivityData): Promise<void> => {
  await db.activityEvent.create({ data: { userId, kind } });
};

/**
 * The last `ACTIVITY_WEEKS_SHOWN` weeks, oldest first, plus the date recording
 * began. Rows whose `kind` is not one this app writes are skipped rather than
 * counted as something they are not.
 */
export const getActivityReadout = async (
  now: Date = new Date()
): Promise<ActivityReadout> => {
  const weekStarts = getWeekStarts(ACTIVITY_WEEKS_SHOWN, now);

  const [rows, first] = await Promise.all([
    db.activityEvent.findMany({
      where: { createdAt: { gte: weekStarts[0] } },
      select: { userId: true, kind: true, createdAt: true },
    }),
    db.activityEvent.findFirst({
      orderBy: { createdAt: "asc" },
      select: { createdAt: true },
    }),
  ]);

  const events: ActivityEvent[] = rows.flatMap(({ userId, kind, createdAt }) =>
    isValidActivityKind(kind) ? [{ userId, kind, createdAt }] : []
  );

  return {
    weeks: summarizeWeeks(events, weekStarts),
    recordingStartedAt: first?.createdAt ?? null,
  };
};
