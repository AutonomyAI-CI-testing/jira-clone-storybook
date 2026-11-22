/**
 * TestCard — a self-contained card matching the "UI magician Agent" Figma frame.
 *
 * Smoke-test component: no props, no state, no interactivity. It is deliberately
 * not wired into any route.
 *
 * Colours come from the raw palette variables declared in `src/app/styles/app.css`
 * rather than the semantic `--color-*` tokens: the frame is a standalone dark panel
 * with a burnt-orange action, and the semantic tokens only resolve inside a theme
 * class (`.light`, `.dark`, …), which a standalone card does not carry.
 */

function GearIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      className="h-6 w-6 shrink-0 fill-[var(--DarkNeutral900)]"
    >
      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
    </svg>
  );
}

function ChevronUpIcon({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 ${className}`}
    >
      <path d="M5 15.5 12 8.5l7 7" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.75}
      strokeLinecap="round"
      className="h-6 w-6 shrink-0 stroke-[var(--DarkNeutral800)]"
    >
      <circle cx="12" cy="12" r="9.25" />
      <path d="M12 11v5.5" />
      <path d="M12 7.6h.01" />
    </svg>
  );
}

function Field({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <label
          htmlFor={id}
          className="font-primary-bold text-lg text-[var(--DarkNeutral800)]"
        >
          {label}
        </label>
        <InfoIcon />
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="mt-3 w-full rounded border border-[var(--DarkNeutral400)] bg-[var(--DarkNeutral250)] px-4 py-4 font-primary-light text-lg text-[var(--DarkNeutral800)] outline-none placeholder:text-[var(--DarkNeutral800)]"
      />
    </div>
  );
}

const actionButtonClassName =
  "rounded bg-[var(--Orange800)] px-10 py-5 font-primary-light text-xl text-[var(--DarkNeutral800)]";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[508px] rounded-md bg-[var(--DarkNeutral0)] px-10 py-12 font-primary text-[var(--DarkNeutral800)]"
    >
      <div className="flex items-start justify-between gap-4">
        <h1 className="font-primary-black text-2xl leading-none text-[var(--DarkNeutral1000)]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      <div className="mt-9 flex items-center gap-3">
        <ChevronUpIcon className="h-4 w-4 stroke-[var(--DarkNeutral900)]" />
        <span className="truncate font-primary-light text-lg text-[var(--DarkNeutral800)]">
          From entire frame to a singl…
        </span>
      </div>

      <section className="mt-28">
        <div className="flex items-center gap-3">
          <ChevronUpIcon className="h-6 w-6 stroke-[var(--DarkNeutral1000)]" />
          <h2 className="font-primary-black text-2xl text-[var(--DarkNeutral1000)]">
            Add New Design
          </h2>
        </div>

        <div className="mt-9">
          <Field
            id="test-card-token"
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxxx"
          />
        </div>

        <div className="mt-6">
          <Field
            id="test-card-url"
            label="Design URL"
            placeholder="https://www.figma.com/file/"
          />
        </div>

        <div className="mt-14 flex justify-center gap-8">
          <button type="button" className={actionButtonClassName}>
            Awesome
          </button>
          <button type="button" className={actionButtonClassName}>
            Prepare
          </button>
        </div>
      </section>

      <section className="mt-24">
        <h2 className="font-primary-black text-2xl text-[var(--DarkNeutral1000)]">
          Recent Breakdowns
        </h2>
      </section>
    </div>
  );
}

export default TestCard;
