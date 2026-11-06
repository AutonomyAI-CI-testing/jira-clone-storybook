import { useEffect, useRef } from "react";
import { useFetcher } from "react-router";
import { toast } from "react-toastify";
import { SprintPlanning, getSprintCapacity } from "@domain/sprint/sprint";
import { ActionData } from "@app/routes/__main/projects.$projectId/sprint-planning";
import { SprintCapacity } from "./sprint-capacity";
import { SprintIssueList } from "./sprint-issue-list";

export const SprintPlanningView = ({ planning }: Props): JSX.Element => {
  const { sprint, backlog, capacityPoints, startedAt } = planning;
  const fetcher = useFetcher<ActionData>();
  const inFlightAction = fetcher.formData?.get("_action");
  const answeredAction = useRef<ActionData | undefined>(undefined);

  const isSubmitting = fetcher.state !== "idle";
  const isStarted = Boolean(startedAt);
  const isSprintActionPending =
    isSubmitting && (inFlightAction === "start" || inFlightAction === "complete");

  // The action answers with the action it finished, so the page can confirm it
  // once. Reading it off the fetcher's form data races the revalidation.
  useEffect(() => {
    const answer = fetcher.data;

    if (!answer || answer === answeredAction.current) return;
    answeredAction.current = answer;

    if (answer.error) {
      toast.error("The sprint could not be updated. Try again");
      return;
    }

    if (answer.action === "start") toast.success("Sprint started");
    if (answer.action === "complete") {
      toast.success("Sprint finished, its issues are back in the backlog");
    }
  }, [fetcher.data]);

  const submit = (data: Record<string, string>) => fetcher.submit(data, { method: "post" });

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex min-h-0 flex-1 gap-3">
        <section className="flex min-w-0 flex-1 flex-col rounded-md bg-elevation-surface-sunken">
          <PaneHead label="Backlog" count={backlog.length} />
          <SprintIssueList
            issues={backlog}
            action="addToSprint"
            actionLabel="Add to sprint"
            isSubmitting={isSubmitting}
            onSubmit={submit}
          />
        </section>
        <section className="flex w-[440px] max-w-[440px] flex-col rounded-md bg-elevation-surface-sunken">
          <PaneHead
            label="Sprint"
            count={sprint.length}
            note={isStarted ? "Running" : "Upcoming"}
          />
          <SprintIssueList
            issues={sprint}
            action="removeFromSprint"
            actionLabel="Remove"
            isSubmitting={isSubmitting}
            onSubmit={submit}
          />
          <div className="border-t border-border bg-elevation-surface-raised p-3">
            <SprintCapacity
              capacity={getSprintCapacity(capacityPoints, sprint)}
              isStarted={isStarted}
              isSubmitting={isSprintActionPending}
              onSubmit={submit}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

const PaneHead = ({ label, count, note }: PaneHeadProps): JSX.Element => (
  <div className="flex justify-between px-3 py-2.5 font-primary-light text-xs uppercase text-font-subtlest">
    <span className="flex gap-2">
      <span>{label}</span>
      {count > 0 && <span>( {count} )</span>}
    </span>
    {note && <span>{note}</span>}
  </div>
);

interface PaneHeadProps {
  label: string;
  count: number;
  note?: string;
}

export interface Props {
  planning: SprintPlanning;
}
