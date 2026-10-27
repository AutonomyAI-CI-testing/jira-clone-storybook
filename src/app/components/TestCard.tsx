import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" Figma
 * frame. Smoke-test component: no props, no state, no data.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-elevation-surface px-10 pb-24 pt-10 font-primary text-font"
  >
    <div className="flex items-start justify-between gap-4">
      <h2 className="font-primary-bold text-2xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Agent settings"
        className="rounded p-1 text-font-subtle hover:bg-background-neutral hover:text-font"
      >
        <FaCog size={22} />
      </button>
    </div>

    <div className="mt-8 flex items-center gap-3 text-font-subtle">
      <FaChevronUp size={14} className="shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <FaChevronUp size={18} className="shrink-0" />
      <h3 className="font-primary-bold text-xl">Add New Design</h3>
    </div>

    <div className="mt-10">
      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-6">
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-8 flex gap-6">
      <button type="button" className={actionButton}>
        Awesome
      </button>
      <button type="button" className={actionButton}>
        Prepare
      </button>
    </div>

    <h3 className="mt-24 font-primary-bold text-2xl">Recent Breakdowns</h3>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-base text-font-subtle">
        {label}
      </label>
      <span
        aria-hidden="true"
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border-bold text-font-subtle"
      >
        <FaInfoCircle size={12} />
      </span>
    </div>
    <input
      id={id}
      name={id}
      type="text"
      placeholder={placeholder}
      className="mt-4 w-full rounded-md bg-background-input p-4 text-font placeholder:text-font-subtle"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const actionButton =
  "rounded bg-[var(--Orange700)] px-10 py-4 font-primary text-lg text-font-inverse hover:bg-[var(--Orange800)]";

export default TestCard;
