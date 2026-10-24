// Card reproduced from a Figma frame. Self-contained and prop-less: the panel is
// a fixed dark surface with a rust accent that has no matching semantic token in
// the design system, so its colours are literals rather than theme roles.

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({
  className = "",
}: {
  className?: string;
}): JSX.Element => (
  <svg
    aria-hidden="true"
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v6" strokeLinecap="round" />
    <circle cx="12" cy="7.6" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const Field = ({
  className = "",
  label,
  hint,
  placeholder,
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-3">
      <span className="text-[20px] text-[#b8b8b8]">{label}</span>
      <button
        type="button"
        aria-label={hint}
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[#c9c9c9]"
      >
        <InfoIcon />
      </button>
    </div>
    <input
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className="mt-5 h-[74px] w-full border border-[#6e6e6e] bg-[#2b2b2b] px-8 text-[18px] text-[#e6e6e6] placeholder:text-[#8f8f8f]"
    />
  </div>
);

const ActionButton = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <button
    type="button"
    className="h-[72px] w-[170px] rounded-[8px] bg-[#9c3f14] font-primary-bold text-[20px] text-[#c9b3a6] hover:bg-[#8a3711] active:bg-[#7c3110]"
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1c1c1c] p-10 pb-[120px] font-primary text-[#e6e6e6]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-[22px] leading-none">
        UI magician Agent
      </h2>
      <button
        type="button"
        aria-label="Open settings"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#c9c9c9] hover:bg-[#2b2b2b]"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-9 flex items-center gap-3 text-[20px] text-[#b8b8b8]">
      <ChevronUpIcon className="shrink-0" />
      <span className="truncate">From entire frame to a singl…</span>
    </div>

    <div className="mt-[150px] flex items-center gap-3">
      <ChevronUpIcon className="shrink-0 text-[#e6e6e6]" />
      <h3 className="font-primary-bold text-[22px] leading-none">
        Add New Design
      </h3>
    </div>

    <Field
      className="mt-16"
      label="Personal Access Token"
      hint="About personal access tokens"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
    />
    <Field
      className="mt-7"
      label="Design URL"
      hint="About the design URL"
      placeholder="https://www.figma.com/file/:"
    />

    <div className="ml-12 mt-10 flex gap-[34px]">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h3 className="mt-[100px] font-primary-bold text-[22px] leading-none">
      Recent Breakdowns
    </h3>
  </div>
);

interface FieldProps {
  className?: string;
  label: string;
  hint: string;
  placeholder: string;
}
