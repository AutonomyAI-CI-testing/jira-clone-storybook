// A due date is day-granularity: it is stored as the epoch ms of UTC midnight and
// always formatted and compared in UTC, so the server render and the browser
// hydration always agree on which day it is.
const DUE_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const MS_PER_DAY = 24 * 60 * 60 * 1000;
const DATE_LOCALE = "en-US";

const startOfUtcDay = (timestamp: number): number =>
  Math.floor(timestamp / MS_PER_DAY) * MS_PER_DAY;

// The value an `<input type="date">` produces: "YYYY-MM-DD".
export const isValidDueDate = (value: string): boolean =>
  DUE_DATE_PATTERN.test(value) && !Number.isNaN(new Date(value).getTime());

export const parseDueDate = (value: unknown): number | undefined => {
  if (typeof value !== "string" || !isValidDueDate(value)) {
    return undefined;
  }

  return new Date(value).getTime();
};

export const toDueDateInputValue = (timestamp: number): string =>
  // toISOString() starts with the date in UTC, which is the input's own format
  new Date(timestamp).toISOString().slice(0, 10);

export const formatDate = (timestamp: number): string =>
  new Date(timestamp).toLocaleDateString(DATE_LOCALE, {
    day: "2-digit",
    month: "short",
    timeZone: "UTC",
  });

// A date that has passed is overdue: something due today is still on time.
export const isOverdue = (
  timestamp: number,
  now: number = Date.now()
): boolean => startOfUtcDay(timestamp) < startOfUtcDay(now);
