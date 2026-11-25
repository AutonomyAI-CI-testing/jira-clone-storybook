import { getUserSession } from "@app/session-storage/user-storage.server";
import { ActivityKind } from "@domain/activity/activity";
import { UserId } from "@domain/user/user";
import { recordActivity } from "@infrastructure/db/activity";

/**
 * Records one piece of activity for a user we already know. The login action
 * needs this form: it sets the user on a session that is not committed yet, so
 * the session cannot be read back from the request.
 *
 * Nothing here swallows a failure. A count that is quietly short is worse than
 * a visible error for a feature whose only job is to be trusted.
 */
export const recordActivityForUser = async (
  userId: UserId,
  kind: ActivityKind
): Promise<void> => {
  await recordActivity({ userId, kind });
};

/** Records one piece of activity for the signed-in user of `request`. */
export const recordUserActivity = async (
  request: Request,
  kind: ActivityKind
): Promise<void> => {
  const userSession = await getUserSession(request);
  const userId = userSession.getUser();

  if (!userId) return;

  await recordActivity({ userId, kind });
};
