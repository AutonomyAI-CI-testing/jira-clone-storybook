import {
  ActivityEvent,
  ActivityKind,
  ActivityReadout,
  getWeekStarts,
  summarizeWeeks,
  WEEKS_READ,
} from "@domain/activity/activity";
import { UserId } from "@domain/user/user";
import { db } from "./db.server";

export const recordActivity = async (
  userId: UserId,
  kind: ActivityKind
): Promise<void> => {
  await db.activityEvent.create({ data: { userId, kind } });
};

export const getActivityReadout = async (
  now: number = Date.now()
): Promise<ActivityReadout> => {
  const weekStarts = getWeekStarts(WEEKS_READ, now);

  const [rows, firstEvent] = await Promise.all([
    db.activityEvent.findMany({
      where: { createdAt: { gte: new Date(weekStarts[0]) } },
      orderBy: { createdAt: "asc" },
    }),
    db.activityEvent.findFirst({
      orderBy: { createdAt: "asc" },
      select: { createdAt: true },
    }),
  ]);

  return {
    weeks: summarizeWeeks(rows.map(toActivityEvent), weekStarts),
    recordingStartedAt: firstEvent ? firstEvent.createdAt.valueOf() : null,
  };
};

const toActivityEvent = (row: {
  id: string;
  userId: string;
  kind: string;
  createdAt: Date;
}): ActivityEvent => ({
  id: row.id,
  userId: row.userId,
  // Stored as a string: SQLite has no enums, so the kind is checked where it is
  // written rather than by the database.
  kind: row.kind as ActivityKind,
  createdAt: row.createdAt.valueOf(),
});
