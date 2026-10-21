import type { LoaderFunctionArgs } from "react-router";
import { eventStream } from "remix-utils/sse/server";
import { EVENTS } from "@app/events/events";
import { emitter } from "@app/events/emitter.server";

export async function loader({ request }: LoaderFunctionArgs) {
  return eventStream(request.signal, (send) => {
    // send() splits the payload on newlines to write one `data:` line per line, so it
    // needs a string: the emitters pass Date.now(), and a number would throw part-way
    // through the frame and leave it unterminated, which the browser never dispatches.
    //
    // A browser can also drop the connection without the request signal aborting,
    // leaving a listener attached to a stream that is already closed. A throw there
    // would bubble out of the emitter and fail the route action that emitted it, so a
    // listener that can no longer send unsubscribes itself.
    const forward = (event: string) => {
      const listener = (message: unknown): void => {
        try {
          send({ event, data: String(message) });
        } catch (error) {
          console.error(`SSE ${event} listener removed:`, error);
          emitter.off(event, listener);
        }
      };

      return listener;
    };

    const handleIssueCreated = forward(EVENTS.ISSUE_CREATED);
    const handleIssueChanged = forward(EVENTS.ISSUE_CHANGED);
    const handleIssueDeleted = forward(EVENTS.ISSUE_DELETED);

    emitter.on(EVENTS.ISSUE_CREATED, handleIssueCreated);
    emitter.on(EVENTS.ISSUE_CHANGED, handleIssueChanged);
    emitter.on(EVENTS.ISSUE_DELETED, handleIssueDeleted);

    return () => {
      emitter.off(EVENTS.ISSUE_CHANGED, handleIssueChanged);
      emitter.off(EVENTS.ISSUE_CREATED, handleIssueCreated);
      emitter.off(EVENTS.ISSUE_DELETED, handleIssueDeleted);
    };
  });
}
