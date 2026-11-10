import cx from "classix";
import { FiAlertTriangle, FiCalendar } from "react-icons/fi";
import { formatDate, isOverdue } from "@utils/due-date";

export const DueDateChip = ({ dueDate }: Props): JSX.Element | null => {
  if (!dueDate) return null;

  const overdue = isOverdue(dueDate);
  const formatted = formatDate(dueDate);

  return (
    <span
      className={cx(
        "flex items-center gap-1 text-2xs",
        overdue ? "text-font-danger" : "text-font-subtlest"
      )}
      title={overdue ? `Overdue, due ${formatted}` : `Due ${formatted}`}
    >
      {overdue ? (
        <FiAlertTriangle size={14} aria-hidden="true" />
      ) : (
        <FiCalendar size={14} aria-hidden="true" />
      )}
      <span>{formatted}</span>
      {/* The date alone reads as a date: say the state in words too, so the
          meaning is never carried by the danger colour on its own. */}
      {overdue && <span className="sr-only">Overdue</span>}
    </span>
  );
};

interface Props {
  dueDate?: number;
}
