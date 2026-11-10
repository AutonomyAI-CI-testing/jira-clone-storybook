import { useState } from "react";
import cx from "classix";
import { IoCloseOutline } from "react-icons/io5";
import { toDueDateInputValue } from "@utils/due-date";

export const IssueDueDate = ({ initDueDate, error }: Props): JSX.Element => {
  const [dueDate, setDueDate] = useState<string>(
    initDueDate ? toDueDateInputValue(initDueDate) : ""
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDueDate(e.target.value);
  };

  const clearDueDate = (): void => setDueDate("");

  return (
    <div>
      <label htmlFor="dueDate" className="mb-1 block">
        Due date
      </label>
      <div className="flex items-center gap-2">
        <input
          id="dueDate"
          name="dueDate"
          type="date"
          value={dueDate}
          onChange={handleChange}
          className={cx(
            "w-[150px] rounded border-none bg-background-input px-2 py-2 text-sm text-font duration-200 ease-in-out",
            "outline outline-2 hover:bg-background-input-hovered focus:bg-background-input-pressed",
            error
              ? "outline-border-danger focus:outline-border-danger"
              : "outline-border-input focus:outline-border-brand"
          )}
        />
        {dueDate && (
          <button
            type="button"
            onClick={clearDueDate}
            className="flex cursor-pointer items-center justify-center rounded border-none p-1 text-icon hover:bg-background-neutral"
            aria-label="Clear due date"
          >
            <IoCloseOutline size={16} />
          </button>
        )}
      </div>
      {error && (
        <p className="mt-1 font-primary-light text-sm text-font-danger">
          {error}
        </p>
      )}
    </div>
  );
};

interface Props {
  initDueDate?: number;
  error?: string;
}
