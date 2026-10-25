import cx from "classix";

/**
 * TestCard — a static reproduction of the "Add New Design" Figma panel.
 *
 * Smoke-test component: self-contained, takes no props and has no behaviour.
 * Colours are read from the palette custom properties declared in app.css,
 * because the semantic token layer has no near-black panel or rust accent.
 */

interface IconProps {
  className?: string;
}

function ChevronUpIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cx("h-4 w-4", className)}
    >
      <path d="m6 15 6-6 6 6" />
    </svg>
  );
}

function InfoIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cx("h-4 w-4", className)}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function GearIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cx("h-4 w-4", className)}
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

const accentButton =
  "flex h-12 flex-1 items-center justify-center rounded-md bg-[var(--Orange800)] text-[15px] text-[var(--DarkNeutral1100)] hover:bg-[var(--Orange700)]";

interface FieldProps {
  label: string;
  placeholder: string;
}

function Field({ label, placeholder }: FieldProps) {
  const id = `test-card-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center gap-3">
        <label htmlFor={id} className="text-[15px]">
          {label}
        </label>
        <InfoIcon className="text-[var(--DarkNeutral700)]" />
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="h-11 w-full rounded border border-[var(--DarkNeutral700)] bg-[var(--DarkNeutral100)] px-3 text-[15px] text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral600)]"
      />
    </div>
  );
}

export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex w-[320px] flex-col bg-[var(--DarkNeutral0)] px-5 py-6 text-[var(--DarkNeutral1100)]"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-[17px]">UI magician Agent</h2>
        <button
          type="button"
          aria-label="Settings"
          className="rounded p-1 text-[var(--DarkNeutral700)] hover:text-[var(--DarkNeutral1100)]"
        >
          <GearIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <ChevronUpIcon className="shrink-0 text-[var(--DarkNeutral700)]" />
        <span className="truncate font-primary-light text-[15px] text-[var(--DarkNeutral700)]">
          From entire frame to a singl…
        </span>
      </div>

      <div className="mt-10 flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <ChevronUpIcon className="shrink-0" />
          <h3 className="font-primary-bold text-[18px]">Add New Design</h3>
        </div>

        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />

        <div className="flex gap-3">
          <button type="button" className={accentButton}>
            Awesome
          </button>
          <button type="button" className={accentButton}>
            Prepare
          </button>
        </div>
      </div>

      <h3 className="mt-10 font-primary-bold text-[18px]">Recent Breakdowns</h3>
    </div>
  );
}
