import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const ACTION_BUTTON_CLASS =
  "h-9 w-[85px] cursor-pointer rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[var(--DarkNeutral1100)] hover:brightness-110 active:brightness-95";

const Field = ({ label, placeholder, className }: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-2">
      <span className="font-primary-light text-2xs text-[var(--DarkNeutral700)]">
        {label}
      </span>
      <FaInfoCircle size={15} aria-hidden="true" className="shrink-0" />
    </div>
    <input
      readOnly
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className="mt-3 h-9 w-full border border-[var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-3 font-primary-light text-2xs text-[var(--DarkNeutral800)] placeholder:text-[var(--DarkNeutral600)]"
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[var(--DarkNeutral-100)] p-5 font-primary text-[var(--DarkNeutral800)]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs">UI magician Agent</span>
      <button
        type="button"
        aria-label="Settings"
        className="flex cursor-pointer items-center justify-center rounded p-0.5 hover:bg-background-neutral-hovered"
      >
        <FaCog size={14} />
      </button>
    </div>

    <button
      type="button"
      aria-label="Collapse summary"
      className="mt-4 flex w-full cursor-pointer items-center gap-2 rounded text-left"
    >
      <FaChevronUp size={8} className="shrink-0" />
      <span className="min-w-0 truncate font-primary-light text-2xs text-[var(--DarkNeutral700)]">
        From entire frame to a singl...
      </span>
    </button>

    <div className="mt-16 flex items-center gap-2">
      <FaChevronUp size={12} className="shrink-0" />
      <span className="font-primary-bold text-xs">Add New Design</span>
    </div>

    <Field
      className="mt-8"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />
    <Field
      className="mt-3"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
    />

    <div className="mt-6 flex justify-center gap-4">
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className="mt-12 font-primary-bold text-xs">Recent Breakdowns</h2>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
  className?: string;
}
