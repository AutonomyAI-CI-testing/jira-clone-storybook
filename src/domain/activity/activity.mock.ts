import { UserId } from "@domain/user/user";
import {
  ACTIVITY_WEEKS_SHOWN,
  ActivityEvent,
  ActivityReadout,
  getWeekStarts,
  summarizeWeeks,
} from "./activity";

/** The instant the mock readout is built for, so a story's numbers never drift. */
const NOW = new Date("2026-11-25T09:00:00.000Z");

const MS_PER_DAY = 24 * 60 * 60 * 1000;
const MS_PER_HOUR = 60 * 60 * 1000;

const weekStarts = getWeekStarts(ACTIVITY_WEEKS_SHOWN, NOW);

const at = (weekStart: Date, dayOffset: number, hour: number): Date =>
  new Date(weekStart.getTime() + dayOffset * MS_PER_DAY + hour * MS_PER_HOUR);

const signedIn = (userId: UserId, createdAt: Date): ActivityEvent => ({
  userId,
  kind: "signedIn",
  createdAt,
});

const worked = (userId: UserId, createdAt: Date): ActivityEvent => ({
  userId,
  kind: "worked",
  createdAt,
});

const [firstWeek, secondWeek, thirdWeek, fourthWeek, fifthWeek, thisWeek] = weekStarts;

export const activityEventsMock: ActivityEvent[] = [
  // The first measured week: two people arrived, one of them did some work.
  signedIn("woody", at(firstWeek, 1, 9)),
  signedIn("buzz", at(firstWeek, 2, 14)),
  worked("woody", at(firstWeek, 1, 10)),
  // The second: one active user.
  signedIn("woody", at(secondWeek, 0, 8)),
  worked("woody", at(secondWeek, 0, 9)),
  // The third: two active users.
  signedIn("jessie", at(thirdWeek, 1, 11)),
  worked("jessie", at(thirdWeek, 1, 12)),
  signedIn("buzz", at(thirdWeek, 3, 15)),
  worked("buzz", at(thirdWeek, 3, 16)),
  // The fourth: a sign-in that led to no work — deliberately not an active user.
  signedIn("zurg", at(fourthWeek, 2, 10)),
  // The fifth: three active users.
  signedIn("woody", at(fifthWeek, 0, 9)),
  worked("woody", at(fifthWeek, 0, 9)),
  signedIn("jessie", at(fifthWeek, 2, 13)),
  worked("jessie", at(fifthWeek, 2, 14)),
  signedIn("buzz", at(fifthWeek, 4, 16)),
  worked("buzz", at(fifthWeek, 4, 17)),
  // The week in progress: two so far.
  signedIn("woody", at(thisWeek, 0, 9)),
  worked("woody", at(thisWeek, 0, 10)),
  signedIn("jessie", at(thisWeek, 1, 12)),
  worked("jessie", at(thisWeek, 1, 13)),
];

export const activityReadoutMock: ActivityReadout = {
  weeks: summarizeWeeks(activityEventsMock, weekStarts),
  recordingStartedAt: at(firstWeek, 1, 9),
};

export const emptyActivityReadoutMock: ActivityReadout = {
  weeks: summarizeWeeks([], weekStarts),
  recordingStartedAt: null,
};
