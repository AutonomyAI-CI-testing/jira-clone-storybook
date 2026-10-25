/**
 * TestCard — a static reproduction of the "UI magician Agent" frame.
 *
 * Smoke test: self-contained, no props, no state, nothing wired up. The root is
 * pinned to the dark theme class because the frame is a dark panel and should
 * look the same whichever theme the app is in.
 */

const ChevronUpIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
    <path
      d="M3 10.5 8 5.5l5 5"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.75" />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M8 7.25v4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="8" cy="4.9" r="0.9" fill="currentColor" />
  </svg>
);

const Field = ({ label, placeholder }: FieldProps) => (
  <label className="mt-8 block">
    <span className="mb-6 flex items-center gap-2 font-primary-light text-lg text-font-subtle">
      {label}
      <InfoIcon className="h-5 w-5 shrink-0" />
    </span>
    <input
      type="text"
      readOnly
      placeholder={placeholder}
      className="h-14 w-full rounded border border-border-bold bg-background-input px-4 font-primary-light text-lg text-font placeholder:text-font-subtlest"
    />
  </label>
);

/**
 * The frame's two action buttons are filled in a rust/terracotta orange that no
 * semantic token covers — the palette's accents are the brand blue plus the
 * semantic danger/success/warning ramps — so this is the one place the raw
 * palette value is used directly.
 */
const CardButton = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    className="h-[72px] w-[168px] rounded bg-[var(--Orange800)] font-primary text-xl text-font-subtle hover:bg-[var(--Orange700)] active:bg-[var(--Orange900)]"
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="dark">
      <div className="w-[508px] bg-elevation-surface px-10 pb-16 pt-10">
        <div className="flex items-center justify-between">
          <h1 className="font-primary-bold text-2xl text-font">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="shrink-0 text-font"
          >
            <GearIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <ChevronUpIcon className="h-4 w-4 shrink-0 text-font-subtle" />
          <span className="truncate font-primary-light text-lg text-font-subtle">
            From entire frame to a singl...
          </span>
        </div>

        <div className="mt-40 flex items-center gap-3">
          <ChevronUpIcon className="h-5 w-5 shrink-0 text-font" />
          <h2 className="font-primary-bold text-2xl text-font">
            Add New Design
          </h2>
        </div>

        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />

        <div className="mt-8 flex gap-9 pl-12">
          <CardButton>Awesome</CardButton>
          <CardButton>Prepare</CardButton>
        </div>

        <h2 className="mt-20 font-primary-bold text-2xl text-font">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};

interface IconProps {
  className?: string;
}

interface FieldProps {
  label: string;
  placeholder: string;
}
