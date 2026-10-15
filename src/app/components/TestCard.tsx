/**
 * TestCard — a self-contained reproduction of an attached Figma frame, built to
 * smoke-test the design-to-component path. It takes no props and is not wired
 * into any screen.
 *
 * The frame's palette (neutral dark greys plus a rust accent) has no equivalent
 * in the semantic token layer, so colours reference the repo's declared
 * dark-neutral ramp and Orange800 rather than introducing literals.
 */

const SettingsIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 16v-5" />
    <path d="M12 8h.01" />
  </svg>
);

const Field = ({ label, placeholder }: FieldProps) => (
  <label className="mt-16 block">
    <span className="flex items-center gap-3">
      <span className="font-primary-bold text-xl">{label}</span>
      <InfoIcon />
    </span>
    <input
      readOnly
      placeholder={placeholder}
      className="mt-5 h-[70px] w-full rounded border border-[var(--DarkNeutral700)] bg-[var(--DarkNeutral250)] px-8 font-primary-light text-xl outline-none placeholder:text-[var(--DarkNeutral700)]"
    />
  </label>
);

const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    className="h-[68px] w-[168px] rounded-lg bg-[var(--Orange800)] font-primary-bold text-xl text-[var(--DarkNeutral1000)]"
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[1016px] w-[508px] bg-[var(--DarkNeutral100)] px-10 pb-16 pt-10 font-primary text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-3xl">UI magician Agent</h1>
      <SettingsIcon />
    </div>

    <div className="mt-10 flex items-center gap-3">
      <ChevronUpIcon />
      <span className="font-primary-light text-lg text-[var(--DarkNeutral800)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-40 flex items-center gap-3">
      <ChevronUpIcon />
      <h2 className="font-primary-black text-2xl">Add New Design</h2>
    </div>

    <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxxxxx" />
    <Field label="Design URL" placeholder="https://www.figma.com/file/" />

    <div className="mt-12 flex justify-center gap-8">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h2 className="mt-16 font-primary-black text-2xl">Recent Breakdowns</h2>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
