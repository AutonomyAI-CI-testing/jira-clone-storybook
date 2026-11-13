import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const INPUT_CLASS =
  "mt-3 h-14 w-full rounded border border-[var(--Neutral400)] bg-[var(--DarkNeutral250)] px-4 text-base text-[var(--DarkNeutral1100)] outline-none placeholder:text-[var(--DarkNeutral700)]";

const ACTION_CLASS =
  "rounded-md bg-[var(--Orange800)] px-8 py-3 text-base text-[var(--DarkNeutral1100)]";

const FIELD_LABEL_CLASS = "text-base text-[var(--DarkNeutral800)]";

const ACTION_LABELS = ["Awesome", "Prepare"];

/**
 * Static approximation of the "UI magician Agent" panel from the attached Figma
 * frame. Self-contained smoke test: no props, no state, no data.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] max-w-full bg-[var(--DarkNeutral0)] px-10 py-8 font-primary text-[var(--DarkNeutral900)]"
    >
      <div className="flex items-start justify-between">
        <h2 className="font-primary-bold text-xl text-[var(--DarkNeutral1100)]">
          UI magician Agent
        </h2>
        <button
          type="button"
          aria-label="Open settings"
          className="text-[var(--DarkNeutral700)]"
        >
          <FaCog size={24} />
        </button>
      </div>

      <div className="mt-6 flex items-center gap-3 text-[var(--DarkNeutral700)]">
        <FaChevronUp size={16} />
        <span className="truncate text-base">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-16 flex items-center gap-3">
        <FaChevronUp size={18} />
        <h3 className="font-primary-bold text-xl text-[var(--DarkNeutral900)]">
          Add New Design
        </h3>
      </div>

      <div className="mt-8 space-y-6">
        <Field
          id="personal-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-10 flex gap-8 pl-12">
        {ACTION_LABELS.map((label) => (
          <button key={label} type="button" className={ACTION_CLASS}>
            {label}
          </button>
        ))}
      </div>

      <h3 className="mt-16 font-primary-bold text-xl text-[var(--DarkNeutral900)]">
        Recent Breakdowns
      </h3>
    </div>
  );
};

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className={FIELD_LABEL_CLASS}>
        {label}
      </label>
      <span aria-hidden="true" className={FIELD_LABEL_CLASS}>
        <FaInfoCircle size={20} />
      </span>
    </div>
    <input id={id} type="text" placeholder={placeholder} className={INPUT_CLASS} />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
