// Smoke-test component. Reproduces the "UI magician Agent" panel from the attached
// Figma frame. Deliberately self-contained: no props, no imports, no app wiring.
// Colours are arbitrary Tailwind values because this repo's tailwind.config.js
// replaces the whole colour scale with semantic --color-* tokens.

type IconProps = {
  className?: string;
};

const GearIcon = ({ className = "" }: IconProps) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.6"
    viewBox="0 0 24 24"
    width="24"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 8.9 19.3a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.7 8.9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1.03-1.56V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15 4.7a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9v.09A1.7 1.7 0 0 0 21 10.1h.09a2 2 0 1 1 0 4H21a1.7 1.7 0 0 0-1.6 1.03Z" />
  </svg>
);

const ChevronUpIcon = ({ className = "" }: IconProps) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    height="20"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2.4"
    viewBox="0 0 24 24"
    width="20"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = ({ className = "" }: IconProps) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    height="20"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.6"
    viewBox="0 0 24 24"
    width="20"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.5v5" />
    <path d="M12 8h.01" />
  </svg>
);

type FieldProps = {
  label: string;
  placeholder: string;
};

const Field = ({ label, placeholder }: FieldProps) => {
  const id = `test-card-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2">
        <label className="text-base text-[#f0f0f0]" htmlFor={id}>
          {label}
        </label>
        <InfoIcon className="text-[#f0f0f0]" />
      </div>
      <input
        className="mt-3 h-14 w-full rounded border border-[#a9a9a9] bg-[#2b2b2b] px-4 text-base text-white placeholder:text-[#9b9b9b] focus-visible:outline-2 focus-visible:outline-[#0c66e4]"
        id={id}
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
};

const ACTIONS = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div
    className="flex min-h-screen w-full max-w-[508px] flex-col bg-[#1e1e1e] px-10 py-10 font-primary text-white"
    id="testElem"
  >
    <div className="flex items-center justify-between gap-4">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <GearIcon />
    </div>

    <div className="mt-4 flex items-center gap-3">
      <ChevronUpIcon className="shrink-0 text-[#cfcfcf]" />
      <span className="truncate text-[15px] text-[#cfcfcf]">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <ChevronUpIcon />
      <h2 className="font-primary-bold text-[22px]">Add New Design</h2>
    </div>

    <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxxxxx" />
    <Field label="Design URL" placeholder="https://www.figma.com/file/" />

    <div className="mt-8 flex gap-8">
      {ACTIONS.map((action) => (
        <button
          className="rounded-md bg-[#a34310] px-8 py-4 text-lg text-[#e6ded6]"
          key={action}
          type="button"
        >
          {action}
        </button>
      ))}
    </div>

    <h2 className="mt-16 font-primary-bold text-[22px]">Recent Breakdowns</h2>
  </div>
);
