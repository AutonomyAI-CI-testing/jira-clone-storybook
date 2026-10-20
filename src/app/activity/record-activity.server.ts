import { ActivityKind } from "@domain/activity/activity";
import { UserId } from "@domain/user/user";
import { recordActivity } from "@infrastructure/db/activity";
import { getUserSession } from "@app/session-storage/user-storage.server";

/**
 * Record that the signed-in user did something. Pass `userId` when the session
 * cannot be read from the request yet — the login action, which is still
 * committing its cookie. Nothing is recorded when there is no user to
 * attribute the activity to.
 */
export const recordUserActivity = async (
  request: Request,
  kind: ActivityKind,
  userId?: UserId
): Promise<void> => {
  const activityUserId = userId ?? (await getUserSession(request)).getUser();

  if (!activityUserId) return;

  await recordActivity(activityUserId, kind);
};
