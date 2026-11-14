import cx from "classix";
import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/**
 * TestCard — a static redraw of the "UI magician Agent" panel from the attached
 * Figma frame. Deliberately self-contained: no props, no state, no handlers.
 */
export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col bg-[var(--DarkNeutral0)] px-[45px] py-[40px] font-primary text-[var(--DarkNeutral1100)]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-[26px] leading-none">
          UI magician Agent
        </h2>
        <FaCog
          aria-hidden="true"
          className="text-[var(--DarkNeutral900)]"
          size={30}
        />
      </div>

      {/* Collapsed section row */}
      <div className="mt-[30px] flex items-center gap-3">
        <FaChevronUp
          aria-hidden="true"
          className="shrink-0 text-[var(--DarkNeutral900)]"
          size={16}
        />
        <span className="truncate text-[19px] text-[var(--DarkNeutral700)]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[110px] flex items-center gap-3">
        <FaChevronUp
          aria-hidden="true"
          className="shrink-0 text-[var(--DarkNeutral1100)]"
          size={20}
        />
        <h3 className="font-primary-bold text-[22px]">Add New Design</h3>
      </div>

      <Field
        className="mt-[62px]"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />

      <Field
        className="mt-[24px]"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      {/* Actions */}
      <div className="mt-[52px] flex gap-[34px]">
        {["Awesome", "Prepare"].map((label) => (
          <button
            key={label}
            type="button"
            className="h-[72px] flex-1 rounded-[8px] bg-[var(--Orange800)] text-[21px] text-[var(--DarkNeutral1100)]"
          >
            {label}
          </button>
        ))}
      </div>

      {/* Recent Breakdowns */}
      <h3 className="mt-[90px] font-primary-bold text-[22px]">
        Recent Breakdowns
      </h3>
    </div>
  );
}

function Field({
  label,
  placeholder,
  className,
}: FieldProps): JSX.Element {
  return (
    <div className={cx("flex flex-col", className)}>
      <div className="flex items-center gap-3">
        <span className="text-[20px] text-[var(--DarkNeutral1000)]">
          {label}
        </span>
        <FaInfoCircle
          aria-hidden="true"
          className="text-[var(--DarkNeutral1000)]"
          size={26}
        />
      </div>
      <input
        type="text"
        aria-label={label}
        placeholder={placeholder}
        className="mt-[30px] h-[70px] w-full rounded-[2px] border-2 border-[var(--DarkNeutral400)] bg-[var(--DarkNeutral200)] px-[32px] text-[20px] text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral600)] focus:outline-none"
      />
    </div>
  );
}

interface FieldProps {
  label: string;
  placeholder: string;
  className?: string;
}
