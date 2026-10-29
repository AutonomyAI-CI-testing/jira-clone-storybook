/**
 * TestCard — a static recreation of the "UI magician Agent" panel from the
 * supplied Figma frame. Smoke test only: self-contained, no props, no state.
 *
 * Every colour here is a semantic theme token, so the card is themed with the
 * rest of the app. The one exception is the action-button fill: the frame's
 * rust has no token in the palette, so it is a literal value read off the frame.
 */

const GearIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" strokeLinecap="round" />
    <circle cx="12" cy="7.75" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-[15px] text-font-subtle">
        {label}
      </label>
      <InfoIcon className="text-font-subtle" />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className="mt-2 w-full rounded border border-border-bold bg-background-input px-3 py-3 text-sm text-font placeholder:font-primary-light placeholder:text-font-subtlest"
    />
  </div>
);

const ActionButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="min-w-[170px] rounded-md bg-[#9c3f1c] px-6 py-3.5 text-[15px] text-white"
  >
    {children}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-elevation-surface px-10 py-8 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-lg">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Open settings"
        className="rounded p-1 text-font-subtle hover:bg-background-neutral hover:text-font"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-3 flex items-center gap-2 text-sm text-font-subtle">
      <ChevronUpIcon className="shrink-0" />
      <span className="truncate">From entire frame to a single component</span>
    </div>

    <div className="h-24" aria-hidden="true" />

    <div className="flex items-center gap-2">
      <ChevronUpIcon />
      <h3 className="font-primary-bold text-lg">Add New Design</h3>
    </div>

    <div className="mt-6 space-y-4">
      <Field
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="test-card-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="ml-12 mt-8 flex gap-6">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h3 className="mt-20 font-primary-bold text-lg text-font-subtle">
      Recent Breakdowns
    </h3>
  </div>
);
