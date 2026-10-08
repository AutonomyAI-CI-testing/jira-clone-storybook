/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" Figma frame.
 *
 * Smoke test only: no props, no state, no interaction. Colours and spacing are
 * approximations read from the design image (its style guide was not available),
 * and the dark palette is hard-coded on purpose rather than drawn from the
 * theme-aware design tokens.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1c1c1c] px-11 py-10 font-primary"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-2xl text-[#e8e8e8]">
        UI magician Agent
      </h1>
      <GearIcon />
    </div>

    <div className="mt-8 flex items-center gap-2">
      <ChevronUpIcon className="h-4 w-4 text-[#c7c7c7]" />
      <span className="truncate text-[#8a8a8a]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-44 flex items-center gap-3">
      <ChevronUpIcon className="h-6 w-6 text-[#c7c7c7]" />
      <h2 className="font-primary-bold text-2xl text-[#c7c7c7]">
        Add New Design
      </h2>
    </div>

    <div className="mt-20">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-10 flex gap-10">
      <button
        type="button"
        className="h-16 flex-1 bg-[#8b3e12] font-primary-bold text-lg text-[#e0a37a]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-16 flex-1 bg-[#8b3e12] font-primary-bold text-lg text-[#e0a37a]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-16 font-primary-bold text-xl text-[#9a9a9a]">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({ label, placeholder }: FieldProps) => (
  <label className="mt-6 block first:mt-0">
    <span className="flex items-center gap-2 text-lg text-[#9a9a9a]">
      {label}
      <InfoIcon />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="mt-3 h-[60px] w-full border-2 border-[#9a9a9a] bg-[#232323] px-4 text-lg text-[#e8e8e8] placeholder:text-[#6f6f6f]"
    />
  </label>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-6 w-6 shrink-0 text-[#e8e8e8]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={`shrink-0 ${className}`}
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-5 w-5 shrink-0"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);
