import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * The frame this reproduces is dark, so its colours are pinned to the raw
 * palette instead of semantic roles: a role flips with the active theme, and
 * a pinned container does not re-resolve an inherited text colour.
 */
const headingClass =
  "font-primary-bold text-xl text-[color:var(--DarkNeutral1100)]";

const inputClass =
  "w-full rounded border-none bg-[var(--DarkNeutral250)] px-4 py-3 text-base text-[color:var(--DarkNeutral900)] outline outline-1 outline-[color:var(--DarkNeutral400)] placeholder:text-[color:var(--DarkNeutral700)]";

const buttonClass =
  "flex-1 rounded bg-[var(--Orange800)] px-6 py-3 text-base text-white";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col gap-7 bg-[var(--DarkNeutral100)] p-10 font-primary text-[color:var(--DarkNeutral900)]"
  >
    <div className="flex items-start justify-between gap-4">
      <h2 className={headingClass}>UI magician Agent</h2>
      <FiSettings
        aria-hidden="true"
        size={22}
        className="shrink-0 text-[color:var(--DarkNeutral700)]"
      />
    </div>

    <div className="flex items-center gap-2 text-[color:var(--DarkNeutral800)]">
      <FiChevronUp aria-hidden="true" size={18} className="shrink-0" />
      <span className="truncate text-base">From entire frame to a singl...</span>
    </div>

    <div className="flex items-center gap-2 pt-14">
      <FiChevronUp aria-hidden="true" size={22} className="shrink-0" />
      <h2 className={headingClass}>Add New Design</h2>
    </div>

    <Field
      id="test-card-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
    />

    <Field
      id="test-card-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="flex gap-8 pl-12">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h2 className={cx(headingClass, "pt-14")}>Recent Breakdowns</h2>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-base">
        {label}
      </label>
      <FiInfo
        aria-hidden="true"
        size={18}
        className="shrink-0 text-[color:var(--DarkNeutral700)]"
      />
    </div>
    <input id={id} placeholder={placeholder} className={inputClass} />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
