/**
 * TestCard — a self-contained layout component built from the supplied Figma frame.
 *
 * Smoke-test scope: no props, no state, no interactivity. Colours, spacing and
 * typography are approximate. The frame's own style guide and exported assets
 * were not available, so the icons below are drawn inline rather than imported.
 *
 * The `dark` class is pinned on the root because the frame is a dark surface and
 * this token set answers to a theme class — that gets the dark plane and its ink
 * without hardcoding a single colour.
 */

const GearIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
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
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

const Field = ({ label, placeholder }: FieldProps) => (
  <label className="flex flex-col gap-3">
    <span className="flex items-center gap-3">
      <span className="text-base text-font">{label}</span>
      <InfoIcon />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded border border-border-bold bg-background-input px-4 py-4 text-base text-font-subtle placeholder:text-font-subtle"
    />
  </label>
);

interface ActionProps {
  children: React.ReactNode;
}

const Action = ({ children }: ActionProps) => (
  <button
    type="button"
    className="min-w-[170px] rounded-md bg-[var(--Orange800)] px-8 py-4 font-primary-bold text-base text-font"
  >
    {children}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-[508px] max-w-full bg-elevation-surface-sunken p-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl text-font">UI magician Agent</h1>
      <GearIcon />
    </div>

    <div className="mt-6 flex items-center gap-3 text-font-subtle">
      <ChevronUpIcon />
      <span className="text-base">From entire frame to a singl…</span>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <ChevronUpIcon />
      <h2 className="font-primary-bold text-lg text-font">Add New Design</h2>
    </div>

    <div className="mt-10 flex flex-col gap-6">
      <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxxxx" />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-12 flex items-center gap-8 pl-10">
      <Action>Awesome</Action>
      <Action>Prepare</Action>
    </div>

    <h2 className="mt-20 font-primary-bold text-lg text-font">Recent Breakdowns</h2>
  </div>
);
