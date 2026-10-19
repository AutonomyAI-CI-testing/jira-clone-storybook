/**
 * TestCard — a self-contained smoke-test card built from the Figma design
 * "Test Page - Simple" (UI magician Agent panel).
 *
 * Takes no props and imports nothing: the whole card, including its icons, is
 * defined here so it can be rendered on its own.
 *
 * Colours use the raw dark-neutral custom properties declared on :root in
 * `src/app/styles/app.css` rather than the semantic layer, because the design is
 * a fixed dark panel that should look the same in every app theme.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-[var(--DarkNeutral100)] px-10 py-8 font-primary-light text-[var(--DarkNeutral1100)]"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <h1 className="font-primary text-xl text-[var(--DarkNeutral1100)]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      {/* Collapsed summary row */}
      <div className="mt-8 flex items-center gap-2">
        <ChevronUpIcon className="h-4 w-4 shrink-0 text-[var(--DarkNeutral1100)]" />
        <span className="truncate text-base text-[var(--DarkNeutral700)]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-16 flex items-center gap-2">
        <ChevronUpIcon className="h-5 w-5 shrink-0 text-[var(--DarkNeutral1100)]" />
        <h2 className="font-primary-bold text-2xl text-[var(--DarkNeutral1100)]">
          Add New Design
        </h2>
      </div>

      <div className="mt-12 space-y-6">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />
      </div>

      {/* Actions */}
      <div className="mt-8 flex gap-5">
        <button
          type="button"
          className="flex-1 rounded-md bg-[var(--Red800)] px-4 py-3 font-primary text-base text-white/70"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-md bg-[var(--Red800)] px-4 py-3 font-primary text-base text-white/70"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="mt-16 font-primary-bold text-xl text-[var(--DarkNeutral800)]">
        Recent Breakdowns
      </h3>
    </div>
  );
};

const Field = ({ label, placeholder }: FieldProps) => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <label className="text-base text-[var(--DarkNeutral1100)]">
          {label}
        </label>
        <InfoIcon />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="mt-3 w-full rounded border border-[var(--DarkNeutral500)] bg-[var(--DarkNeutral0)] px-4 py-3 text-base text-[var(--DarkNeutral1100)] outline-none placeholder:text-[var(--DarkNeutral600)]"
      />
    </div>
  );
};

const GearIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6 shrink-0 text-[var(--DarkNeutral1100)]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6h.09A1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
};

const ChevronUpIcon = ({ className }: { className: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
};

const InfoIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 text-[var(--DarkNeutral800)]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <path d="M12 7.75h.01" strokeWidth="2" />
    </svg>
  );
};

interface FieldProps {
  label: string;
  placeholder: string;
}
