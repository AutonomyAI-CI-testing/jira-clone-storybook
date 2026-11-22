import type { ReactNode } from "react";

/**
 * TestCard
 *
 * Static, self-contained recreation of the cropped Figma frame
 * ("UI magician Agent" / "Add New Design"). Smoke test of the
 * design-to-component path: no props, no state, no data.
 *
 * The design's style guide was not available, so the palette below is read
 * approximately from the frame and uses the raw ramp values this repo already
 * declares (`src/app/styles/app.css`, on `*`, so they resolve in any theme).
 */

const GEAR_PATH =
  "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z";

const CHEVRON_UP_PATH = "m18 15-6-6-6 6";

function Icon({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
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
    <div className="mt-8">
      <div className="flex items-center justify-between gap-4">
        <label htmlFor={id} className="text-xl text-[var(--DarkNeutral1000)]">
          {label}
        </label>
        <Icon className="h-6 w-6 shrink-0 text-[var(--DarkNeutral800)]">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </Icon>
      </div>
      <input
        id={id}
        type="text"
        readOnly
        placeholder={placeholder}
        className="mt-3 h-[68px] w-full rounded-md border border-[var(--DarkNeutral400)] bg-[var(--DarkNeutral100)] px-4 text-lg text-[var(--DarkNeutral1000)] placeholder:text-[var(--DarkNeutral700)]"
      />
    </div>
  );
}

function ActionButton({ children }: { children: ReactNode }) {
  return (
    <button
      type="button"
      className="h-[70px] w-[172px] cursor-pointer rounded-lg bg-[var(--Orange800)] text-xl text-[var(--Neutral400)]"
    >
      {children}
    </button>
  );
}

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-full max-w-[508px] bg-[var(--DarkNeutral0)] p-11 font-primary text-[var(--DarkNeutral1000)]"
    >
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
        <Icon className="h-7 w-7 shrink-0 text-[var(--DarkNeutral800)]">
          <path d={GEAR_PATH} />
          <circle cx="12" cy="12" r="3" />
        </Icon>
      </div>

      <div className="mt-8 flex items-center gap-3 border-b border-[var(--DarkNeutral400)] pb-4">
        <Icon className="h-5 w-5 shrink-0 text-[var(--DarkNeutral800)]">
          <path d={CHEVRON_UP_PATH} />
        </Icon>
        <span className="truncate text-lg text-[var(--DarkNeutral800)]">
          From entire frame to a singl…
        </span>
      </div>

      <h2 className="mt-24 flex items-center gap-3 font-primary-bold text-2xl">
        <Icon className="h-6 w-6 shrink-0 text-[var(--DarkNeutral800)]">
          <path d={CHEVRON_UP_PATH} />
        </Icon>
        Add New Design
      </h2>

      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
      <Field id="design-url" label="Design URL" placeholder="https://www.figma.com/file/" />

      <div className="mt-12 flex flex-wrap gap-8">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      <h2 className="mt-28 font-primary-bold text-2xl">Recent Breakdowns</h2>
    </div>
  );
}
