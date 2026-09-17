import cx from "classix";
import { HiFlag } from "react-icons/hi";
import { PriorityId, priorityLabelDict } from "@domain/priority";
import { Tooltip } from "@app/components/tooltip";

export const PriorityIcon = ({
  priority,
  size = 18,
  tooltip = true,
}: PriorityIconProps): JSX.Element => {
  const label = priorityLabelDict[priority];

  return (
    <Tooltip title={label} show={tooltip}>
      <span
        role="img"
        aria-label={label}
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
};

interface PriorityIconProps {
  priority: PriorityId;
  size?: number;
  tooltip?: boolean;
}
