import cx from "classix";

/**
 * Static reproduction of the "UI magician Agent" Figma panel.
 *
 * Smoke-test component: self-contained, accepts no props and holds no state.
 * Colours, type and shape are expressed through the app's semantic tokens only.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-elevation-surface p-10 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
        <GearIcon className="h-7 w-7 text-font" />
      </div>

      <div className="mt-6 flex items-center gap-4">
        <ChevronUpIcon className="h-5 w-5 text-font-subtle" />
        <span className="max-w-[300px] truncate text-lg text-font-subtle">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-32 flex items-center gap-3">
        <ChevronUpIcon className="h-6 w-6 text-font" />
        <h2 className="font-primary-black text-2xl">Add New Design</h2>
      </div>

      <div className="mt-12 space-y-6">
        <FieldGroup
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        />
        <FieldGroup
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-10 flex items-center gap-8">
        <button type="button" className={accentButtonClass}>
          Awesome
        </button>
        <button type="button" className={accentButtonClass}>
          Prepare
        </button>
      </div>

      <h2 className="mt-24 font-primary-black text-2xl">Recent Breakdowns</h2>
    </div>
  );
};

const accentButtonClass =
  "rounded-md bg-background-brand-bold px-10 py-5 text-xl text-font-inverse";

const FieldGroup = ({ label, placeholder }: FieldGroupProps): JSX.Element => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="text-lg text-font-subtle">{label}</span>
        <InfoIcon className="h-5 w-5 text-font-subtle" />
      </div>
      <input
        readOnly
        aria-label={label}
        placeholder={placeholder}
        className="mt-3 w-full rounded-md border border-border bg-background-input px-4 py-3 text-lg text-font placeholder:text-font-subtlest"
      />
    </div>
  );
};

const GearIcon = ({ className }: IconProps): JSX.Element => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cx("shrink-0", className)}
    >
      <circle cx="12" cy="12" r="3.25" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
};

const ChevronUpIcon = ({ className }: IconProps): JSX.Element => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cx("shrink-0", className)}
    >
      <path d="M18 15l-6-6-6 6" />
    </svg>
  );
};

const InfoIcon = ({ className }: IconProps): JSX.Element => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cx("shrink-0", className)}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
};

interface IconProps {
  className?: string;
}

interface FieldGroupProps {
  label: string;
  placeholder: string;
}
