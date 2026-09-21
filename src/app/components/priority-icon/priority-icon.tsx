import cx from "classix";
import { HiFlag } from "react-icons/hi";
import { PriorityId, priorityLabelDict } from "@domain/priority";
import { Tooltip } from "@app/components/tooltip";

export const PriorityIcon = ({
  priority,
  size = 18,
  showTooltip = false,
}: PriorityIconProps): JSX.Element => {
  const label = `${priorityLabelDict[priority]} priority`;

  const icon = (
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
  );

  return (
    <Tooltip title={label} show={showTooltip}>
      {icon}
    </Tooltip>
  );
};

interface PriorityIconProps {
  priority: PriorityId;
  size?: number;
  showTooltip?: boolean;
}
