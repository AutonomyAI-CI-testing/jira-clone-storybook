import cx from "classix";
import { HiFlag } from "react-icons/hi";
import { PriorityId, prioritiesMock } from "@domain/priority";
import { Tooltip } from "@app/components/tooltip";

const PRIORITY_LABELS: Record<PriorityId, string> = prioritiesMock.reduce(
  (labels, priority) => ({ ...labels, [priority.id]: priority.name }),
  {} as Record<PriorityId, string>
);

export const PriorityIcon = ({
  priority,
  size = 18,
  tooltip = true,
}: PriorityIconProps): JSX.Element => (
  <Tooltip title={`${PRIORITY_LABELS[priority]} priority`} show={tooltip}>
    <span
      aria-label={`${PRIORITY_LABELS[priority]} priority`}
      className={cx(
        "flex",
        priority === "low" && "text-icon-accent-green",
        priority === "medium" && "text-icon-accent-yellow",
        priority === "high" && "text-icon-accent-red"
      )}
    >
      <HiFlag size={size} />
    </span>
  </Tooltip>
);

interface PriorityIconProps {
  priority: PriorityId;
  size?: number;
  tooltip?: boolean;
}
