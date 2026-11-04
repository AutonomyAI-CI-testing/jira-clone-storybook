/**
 * TestCard — a static, prop-free recreation of the "UI magician Agent" panel
 * from the Test Page Figma frame.
 *
 * This is a smoke test for the build/preview pipeline: it renders the frame's
 * layout only. No props, no state, no behaviour.
 *
 * The root pins the `dark` theme class because the design is a dark panel and
 * the card has to look the same whichever theme the app is in. Inside a pinned
 * subtree an inherited colour does not re-resolve, so the root declares
 * `text-font` on itself and the two buttons declare theirs.
 */

interface IconProps {
  className?: string;
}

const GearIcon = ({ className }: IconProps) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.6}
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.08a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.08a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

interface InfoIconProps extends IconProps {
  label: string;
}

const InfoIcon = ({ className, label }: InfoIconProps) => (
  <svg
    aria-label={label}
    className={className}
    fill="none"
    role="img"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.6}
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </svg>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-4">
      <label className="text-base" htmlFor={id}>
        {label}
      </label>
      <InfoIcon
        className="h-5 w-5 shrink-0 text-font-subtle"
        label="More information"
      />
    </div>
    <input
      className="w-full rounded-md border border-border-input bg-background-input px-4 py-4 text-base placeholder:text-font-subtlest"
      id={id}
      placeholder={placeholder}
      type="text"
    />
  </div>
);

const actionLabels = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div
    className="dark flex w-full max-w-[508px] flex-col rounded-md bg-elevation-surface px-10 py-8 font-primary text-font"
    id="testElem"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <button
        aria-label="Settings"
        className="flex cursor-pointer items-center justify-center rounded p-1 text-font-subtle hover:bg-background-neutral-hovered"
        type="button"
      >
        <GearIcon className="h-6 w-6" />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3 text-font-subtle">
      <ChevronUpIcon className="h-4 w-4 shrink-0" />
      <span className="truncate text-base">From entire frame to a singl…</span>
    </div>

    {/* The frame leaves a large empty gap before the form section. */}
    <div aria-hidden="true" className="h-24" />

    <div className="flex items-center gap-3">
      <ChevronUpIcon className="h-5 w-5 shrink-0 text-font-subtle" />
      <h3 className="font-primary-bold text-xl">Add New Design</h3>
    </div>

    <div className="mt-8 flex flex-col gap-8">
      <Field
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="test-card-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-8 flex justify-end gap-8">
      {actionLabels.map((label) => (
        <button
          className="min-w-[170px] cursor-pointer rounded bg-[var(--Orange800)] px-8 py-5 text-lg text-font hover:bg-[var(--Orange700)]"
          key={label}
          type="button"
        >
          {label}
        </button>
      ))}
    </div>

    {/* The frame leaves a large empty gap before the last heading. */}
    <div aria-hidden="true" className="h-14" />

    <h3 className="font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);
