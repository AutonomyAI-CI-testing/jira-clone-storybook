/**
 * TestCard
 *
 * A static rendering of the "UI magician Agent" settings panel from the
 * attached Figma frame. Smoke-test component: no props, no state and no
 * behaviour — the inputs are inert and the buttons do nothing.
 *
 * Colours come from the repo's raw palette (`--DarkNeutral*`, `--Orange800`)
 * rather than the semantic roles, so the panel keeps the frame's look under
 * every theme class instead of re-skinning with it.
 */
import cx from "classix";

const actionButton =
  "rounded-md bg-[var(--Orange800)] px-6 py-3 text-sm text-[color:var(--DarkNeutral1100)]";

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}

function Field({ id, label, placeholder, className }: FieldProps) {
  return (
    <div className={cx("flex flex-col gap-3", className)}>
      <div className="flex items-center gap-3">
        <label htmlFor={id} className="text-sm">
          {label}
        </label>
        <InfoIcon />
      </div>
      <input
        id={id}
        name={id}
        type="text"
        placeholder={placeholder}
        className="w-full rounded border border-[color:var(--DarkNeutral500)] bg-transparent px-4 py-3 text-sm text-[color:var(--DarkNeutral1000)] outline-none placeholder:text-[color:var(--DarkNeutral800)]"
      />
    </div>
  );
}

function ChevronUpIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cx("h-5 w-5 shrink-0", className)}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M6 15l6-6 6 6" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="9.5" />
      <path d="M12 16.5v-5" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 shrink-0"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="3.25" />
      <path d="M19.1 14.4a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.55V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1.1-1.55 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.55-1.03H3a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1.55-1.1 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H9a1.7 1.7 0 0 0 1.03-1.55V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1.03 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87V9a1.7 1.7 0 0 0 1.55 1.03H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.55 1.03z" />
    </svg>
  );
}

export default function TestCard() {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col bg-[var(--DarkNeutral100)] px-10 py-10 font-primary text-[color:var(--DarkNeutral1000)]"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
        <GearIcon />
      </div>

      <div className="mt-5 flex items-center gap-3 text-[color:var(--DarkNeutral800)]">
        <ChevronUpIcon />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      <div className="mt-20 flex items-center gap-3">
        <ChevronUpIcon className="h-6 w-6" />
        <h3 className="font-primary-bold text-lg">Add New Design</h3>
      </div>

      <Field
        id="testElem-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-6"
      />

      <Field
        id="testElem-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-5"
      />

      <div className="mt-8 flex gap-8">
        <button type="button" className={actionButton}>
          Awesome
        </button>
        <button type="button" className={actionButton}>
          Prepare
        </button>
      </div>

      <h3 className="mt-24 font-primary-bold text-lg">Recent Breakdowns</h3>
    </div>
  );
}
