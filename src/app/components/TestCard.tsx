const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-6 w-6 shrink-0 text-[#e6e6e6]"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 16.5v-5" strokeLinecap="round" />
    <circle cx="12" cy="8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const ChevronUpIcon = ({ className }: ChevronUpIconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-9 w-9"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6h.09A1.7 1.7 0 0 0 10.12 3.04V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9v.09a1.7 1.7 0 0 0 1.56 1.03H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.51 1.03Z" />
  </svg>
);

const Field = ({ label, placeholder, monospace }: FieldProps): JSX.Element => {
  const inputId = `test-card-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-4">
        <label
          htmlFor={inputId}
          className="font-primary-bold text-[19px] text-[#d0d0d0]"
        >
          {label}
        </label>
        <InfoIcon />
      </div>
      <input
        id={inputId}
        type="text"
        placeholder={placeholder}
        className={`h-16 rounded-md border border-[#8a8a8a] bg-[#2a2a2a] px-7 text-[19px] text-[#e6e6e6] outline-none placeholder:text-[#8a8a8a] ${
          monospace
            ? "font-[ui-monospace,Menlo,Consolas,monospace]"
            : "font-primary"
        }`}
      />
    </div>
  );
};

const PanelButton = ({ children }: PanelButtonProps): JSX.Element => (
  <button
    type="button"
    className="rounded-lg bg-[#9e3b1b] px-10 py-4 font-primary-bold text-[22px] leading-none text-[#cfc6c1]"
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[1016px] w-[508px] flex-col bg-[#191919] px-10 py-9 font-primary text-[#e6e6e6]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[26px] leading-none">
        UI magician Agent
      </h1>
      <button type="button" aria-label="Open settings" className="shrink-0">
        <GearIcon />
      </button>
    </div>

    <div className="mt-7 flex items-center gap-3">
      <ChevronUpIcon className="h-6 w-6 shrink-0 text-[#e6e6e6]" />
      <span className="min-w-0 truncate text-[18px] text-[#a0a0a0]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-28 flex items-center gap-3">
      <ChevronUpIcon className="h-8 w-8 shrink-0 text-[#e6e6e6]" />
      <h2 className="font-primary-bold text-[28px] leading-none">
        Add New Design
      </h2>
    </div>

    <div className="mt-10 flex flex-col gap-7">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        monospace
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-10 flex items-center gap-8">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    <h2 className="mt-24 font-primary-bold text-[26px] leading-none text-[#a0a0a0]">
      Recent Breakdowns
    </h2>
  </div>
);

interface ChevronUpIconProps {
  className?: string;
}

interface FieldProps {
  label: string;
  placeholder: string;
  monospace?: boolean;
}

interface PanelButtonProps {
  children: string;
}
