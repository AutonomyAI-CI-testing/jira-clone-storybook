/**
 * Smoke-test component reproducing the attached Figma frame:
 * a dark "UI magician Agent" panel with an Add New Design form
 * and a Recent Breakdowns heading. Takes no props.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-elevation-surface p-10 font-primary-light text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-2xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="rounded-full text-font-subtle hover:text-font"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-8 flex items-center gap-2 text-lg text-font-subtle">
      <ChevronUpIcon size={18} />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <ChevronUpIcon size={26} />
      <h3 className="font-primary-bold text-2xl">Add New Design</h3>
    </div>

    <div className="mt-10 space-y-7">
      <Field
        id="test-card-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-12 flex gap-10">
      {["Awesome", "Prepare"].map((label) => (
        <RustButton key={label}>{label}</RustButton>
      ))}
    </div>

    <h3 className="mt-24 font-primary-bold text-2xl">Recent Breakdowns</h3>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-lg text-font">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 w-full rounded-md border-none bg-background-input px-5 py-4 text-lg text-font outline outline-2 outline-border-input placeholder:text-font-subtlest focus:outline-border-brand"
    />
  </div>
);

const RustButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="rounded-md bg-[#9c4a1a] px-10 py-4 text-lg text-white/70 transition-colors hover:bg-[#8a4117] active:bg-[#7a3a14]"
  >
    {children}
  </button>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="26"
    height="26"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0 text-font-subtle"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
