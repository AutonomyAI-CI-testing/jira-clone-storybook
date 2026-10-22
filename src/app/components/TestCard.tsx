import cx from "classix";
import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/**
 * Static reproduction of the "UI magician Agent" panel from the attached Figma
 * frame. Self-contained: no props, no state, no data.
 */
export const TestCard = () => (
  <div id="testElem">
    <div className="flex w-[508px] flex-col bg-[var(--DarkNeutral0)] px-10 py-12 text-[var(--DarkNeutral900)]">
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-2xl text-[var(--DarkNeutral1100)]">
          UI magician Agent
        </h2>
        <FaCog
          aria-hidden="true"
          size={26}
          className="text-[var(--DarkNeutral800)]"
        />
      </div>

      <div className="mt-4 flex items-center gap-2 text-[var(--DarkNeutral700)]">
        <FaChevronUp aria-hidden="true" size={18} />
        <span className="truncate font-primary-light text-lg">
          From entire frame to a singl…
        </span>
      </div>

      <div className="mt-36 flex items-center gap-2 text-[var(--DarkNeutral1100)]">
        <FaChevronUp aria-hidden="true" size={20} />
        <h3 className="font-primary-bold text-2xl">Add New Design</h3>
      </div>

      <Field
        className="mt-12"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <Field
        className="mt-12"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="mt-14 flex gap-8">
        {actionLabels.map((label) => (
          <button key={label} type="button" className={actionButtonStyle}>
            {label}
          </button>
        ))}
      </div>

      <h3 className="mt-24 font-primary-bold text-2xl text-[var(--DarkNeutral1100)]">
        Recent Breakdowns
      </h3>
    </div>
  </div>
);

const actionLabels = ["Awesome", "Prepare"];

const actionButtonStyle =
  "h-16 w-[170px] rounded bg-[var(--Orange800)] font-primary text-xl text-[var(--DarkNeutral800)]";

const Field = ({
  label,
  placeholder,
  className,
}: {
  label: string;
  placeholder: string;
  className?: string;
}) => (
  <label className={cx("flex flex-col gap-3", className)}>
    <span className="flex items-center gap-2 font-primary text-lg text-[var(--DarkNeutral800)]">
      {label}
      <FaInfoCircle aria-hidden="true" size={18} />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="h-16 rounded-md bg-[var(--DarkNeutral250)] px-4 font-primary-light text-lg text-[var(--DarkNeutral1100)] outline outline-2 outline-[var(--DarkNeutral500)] placeholder:text-[var(--DarkNeutral600)] focus:outline-[var(--DarkNeutral400)]"
    />
  </label>
);
