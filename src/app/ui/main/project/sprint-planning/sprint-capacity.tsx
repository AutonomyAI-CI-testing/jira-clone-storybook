import cx from "classix";
import { SprintCapacity as SprintCapacityState, canStartSprint } from "@domain/sprint/sprint";
import { Button } from "@app/components/button/button";
import { Spinner } from "@app/ui/main/project/board/issue-panel/spinner";

const pointLabel = (points: number): string => `${points} ${points === 1 ? "point" : "points"}`;

export const SprintCapacity = ({
  capacity,
  isStarted,
  isSubmitting,
  onSubmit,
}: Props): JSX.Element => {
  const { committed, capacity: capacityPoints, remaining, usedRatio, isOver } = capacity;
  const overBy = Math.abs(remaining);

  const hint = isOver
    ? isStarted
      ? `${pointLabel(overBy)} over capacity`
      : `${pointLabel(overBy)} over capacity — remove issues to start the sprint`
    : `${pointLabel(remaining)} still available`;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-3">
        <span
          className={cx(
            "font-primary-bold text-xs",
            isOver ? "text-font-danger" : "text-font"
          )}
        >
          {committed}{" "}
          <span className="font-primary-light text-font-subtle">
            of {capacityPoints} points committed
          </span>
        </span>
        <Button
          type="button"
          disabled={isSubmitting || (!isStarted && !canStartSprint(capacity))}
          onClick={() => onSubmit({ _action: isStarted ? "complete" : "start" })}
        >
          {isSubmitting && <Spinner />}
          {isStarted ? "Complete sprint" : "Start sprint"}
        </Button>
      </div>
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={capacityPoints}
        aria-valuenow={Math.min(committed, capacityPoints)}
        aria-valuetext={`${committed} of ${capacityPoints} points committed`}
        className="h-2 w-full overflow-hidden rounded-full bg-background-neutral"
      >
        <div
          style={{ width: `${usedRatio * 100}%` }}
          className={cx(
            "h-full rounded-full duration-200 ease-in-out",
            isOver ? "bg-background-danger-bold" : "bg-background-brand-bold"
          )}
        />
      </div>
      <p
        className={cx(
          "font-primary-light text-2xs",
          isOver ? "text-font-danger" : "text-font-subtle"
        )}
      >
        {hint}
      </p>
    </div>
  );
};

export interface Props {
  capacity: SprintCapacityState;
  isStarted: boolean;
  isSubmitting: boolean;
  onSubmit: (data: Record<string, string>) => void;
}
