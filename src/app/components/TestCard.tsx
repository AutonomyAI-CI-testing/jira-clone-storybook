/**
 * Smoke-test component reproduced from a Figma frame.
 *
 * Self-contained by design: no props, no state, no app wiring. It renders an
 * external design's dark palette directly rather than the product's semantic
 * tokens, because the tokens are theme-driven and resolve to the light palette
 * by default.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-[#1e1e1e] px-10 py-6 font-sans text-[#d4d4d4]"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-xl">UI magician Agent</h1>
        <SettingsIcon />
      </div>

      <div className="mt-7 flex items-center gap-2 text-[#9a9a9a]">
        <ChevronUpIcon />
        <span className="truncate text-base">
          From entire frame to a singl...
        </span>
      </div>

      <div className="h-24" />

      <div className="flex items-center gap-2">
        <ChevronUpIcon />
        <h2 className="text-xl font-semibold">Add New Design</h2>
      </div>

      <div className="mt-10 space-y-6">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/:" />
      </div>

      <div className="mt-10 flex gap-8 pl-12">
        {["Awesome", "Prepare"].map((label) => (
          <button
            key={label}
            type="button"
            className="h-[52px] w-[172px] rounded-lg bg-[#a03b12] text-[17px] text-[#d4d4d4]"
          >
            {label}
          </button>
        ))}
      </div>

      <h2 className="mt-28 text-xl font-semibold">Recent Breakdowns</h2>
    </div>
  );
};

const Field = ({ label, placeholder }: FieldProps) => {
  return (
    <div>
      <div className="mb-3 flex items-center gap-3">
        <span className="text-[15px]">{label}</span>
        <InfoIcon />
      </div>
      <input
        type="text"
        aria-label={label}
        placeholder={placeholder}
        className="h-12 w-full rounded-sm border border-[#b0b0b0] bg-[#262626] px-4 text-[15px] text-[#d4d4d4] placeholder:text-[#8a8a8a] focus:outline-none"
      />
    </div>
  );
};

const SettingsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
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
    viewBox="0 0 24 24"
    width="20"
    height="20"
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
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </svg>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
