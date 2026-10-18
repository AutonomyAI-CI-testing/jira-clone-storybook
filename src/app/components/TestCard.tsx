/**
 * TestCard — a self-contained, static rendering of the attached Figma frame.
 *
 * Smoke test only: no props, no state, no data wiring, and it is not mounted
 * anywhere in the app. Colours come from the palette variables the app already
 * declares (src/app/styles/app.css) rather than new literals; the dark panel
 * has no semantic token equivalent, so the raw dark-neutral steps are used.
 */

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 10.5 8 5.5l5 5" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="6.25" />
    <path d="M8 7.25v4" strokeLinecap="round" />
    <circle cx="8" cy="4.9" r="0.85" fill="currentColor" stroke="none" />
  </svg>
);

const SettingsIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="2.4" />
    <path d="M8 1.4l1.1 1.7 2-.4.5 2 1.8 1-.9 1.9.9 1.9-1.8 1-.5 2-2-.4L8 14.6l-1.1-1.7-2 .4-.5-2-1.8-1 .9-1.9-.9-1.9 1.8-1 .5-2 2 .4z" />
  </svg>
);

const Field = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div className="mt-7">
    <div className="flex items-center gap-2">
      <span className="text-lg text-[var(--DarkNeutral1000)]">{label}</span>
      <InfoIcon className="h-5 w-5 text-[var(--DarkNeutral700)]" />
    </div>
    <input
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className="mt-3 w-full rounded border border-[var(--DarkNeutral500)] bg-transparent px-4 py-3 text-lg text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral600)]"
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-screen w-full bg-[var(--DarkNeutral100)] px-9 py-10 font-primary-light text-[var(--DarkNeutral1100)]"
  >
    <div className="mx-auto w-full max-w-[508px]">
      <div className="flex items-start justify-between gap-4">
        <h1 className="font-primary-black text-2xl leading-tight">
          UI magician Agent
        </h1>
        <SettingsIcon className="mt-1 h-6 w-6 shrink-0 text-[var(--DarkNeutral900)]" />
      </div>

      <div className="mt-5 flex items-center gap-3 text-[var(--DarkNeutral800)]">
        <ChevronUpIcon className="h-4 w-4 shrink-0" />
        <span className="truncate text-lg">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-24 flex items-center gap-3">
        <ChevronUpIcon className="h-7 w-7 shrink-0" />
        <h2 className="font-primary-black text-3xl leading-none">
          Add New Design
        </h2>
      </div>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      <div className="mt-8 flex justify-center gap-9">
        <button
          type="button"
          className="w-[170px] rounded-md bg-[var(--Orange800)] py-3 text-xl text-[var(--DarkNeutral1100)] hover:bg-[var(--Orange700)] active:bg-[var(--Orange800)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="w-[170px] rounded-md bg-[var(--Orange800)] py-3 text-xl text-[var(--DarkNeutral1100)] hover:bg-[var(--Orange700)] active:bg-[var(--Orange800)]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-24 font-primary-black text-2xl">Recent Breakdowns</h2>
    </div>
  </div>
);
