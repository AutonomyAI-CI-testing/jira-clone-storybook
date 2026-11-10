import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const ICON_SIZE = 24;

/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 * Rendered as-is: no props, no state, no handlers.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] bg-[var(--DarkNeutral-100)] px-10 py-10 font-primary text-font"
  >
    <header className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl leading-none">
        UI magician Agent
      </h2>
      <FiSettings size={ICON_SIZE} aria-hidden="true" className="text-font" />
    </header>

    <div className="mt-8 flex items-center gap-3">
      <FiChevronUp
        size={ICON_SIZE}
        aria-hidden="true"
        className="shrink-0 text-font-subtle"
      />
      <p className="truncate text-base text-font-subtle">
        From entire frame to a singl…
      </p>
    </div>

    <div className="mt-[150px] flex items-center gap-3">
      <FiChevronUp
        size={ICON_SIZE}
        aria-hidden="true"
        className="shrink-0 text-font"
      />
      <h2 className="font-primary-bold text-xl leading-none">Add New Design</h2>
    </div>

    <Field
      className="mt-16"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
    />
    <Field
      className="mt-5"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-10 flex gap-8">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h2 className="mt-28 font-primary-bold text-xl text-font-subtle">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({ label, placeholder, className }: FieldProps): JSX.Element => (
  <label className={cx("block", className)}>
    <span className="flex items-center gap-4">
      <span className="font-primary-bold text-base">{label}</span>
      <FiInfo
        size={20}
        aria-hidden="true"
        className="shrink-0 text-font-subtle"
      />
    </span>
    <input
      type="text"
      readOnly
      placeholder={placeholder}
      className="mt-6 box-border h-[76px] w-full rounded border border-border-bold bg-elevation-surface-raised px-8 text-base text-font placeholder:text-font-subtle"
    />
  </label>
);

const ActionButton = ({ children }: ActionButtonProps): JSX.Element => (
  <button
    type="button"
    className="h-14 flex-1 rounded-md bg-[var(--Orange800)] font-primary-bold text-lg text-[color:var(--DarkNeutral1000)]"
  >
    {children}
  </button>
);

interface FieldProps {
  label: string;
  placeholder: string;
  className?: string;
}

interface ActionButtonProps {
  children: string;
}
