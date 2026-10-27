const ChevronUp = ({ width, height }: IconSize): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.2" />
    <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <path d="M7 1.1v1.7M7 11.2v1.7M1.1 7h1.7M11.2 7h1.7M2.83 2.83l1.2 1.2M9.97 9.97l1.2 1.2M11.17 2.83l-1.2 1.2M4.03 9.97l-1.2 1.2" />
    </g>
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="8" cy="8" r="6.6" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M8 7.3v3.9"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <circle cx="8" cy="4.9" r="0.9" fill="currentColor" />
  </svg>
);

const FieldLabel = ({ htmlFor, children }: FieldLabelProps): JSX.Element => (
  <div className="flex items-center gap-3">
    <label htmlFor={htmlFor} className="text-2xs text-[var(--DarkNeutral700)]">
      {children}
    </label>
    <span className="text-[var(--DarkNeutral600)]">
      <InfoIcon />
    </span>
  </div>
);

const CardButton = ({ children }: { children: string }): JSX.Element => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[var(--DarkNeutral600)]"
  >
    {children}
  </button>
);

const inputClassName =
  "mt-[10px] h-9 w-full rounded border border-[var(--DarkNeutral600)] bg-[var(--DarkNeutral200)] px-4 text-2xs text-[var(--DarkNeutral800)] placeholder:text-[var(--DarkNeutral600)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[var(--DarkNeutral100)] px-5 pt-5 pb-[62px] font-primary text-[var(--DarkNeutral800)]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xs">UI magician Agent</h2>
      <span className="text-[var(--DarkNeutral700)]">
        <GearIcon />
      </span>
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] pl-[3px] text-[var(--DarkNeutral600)]">
      <ChevronUp width={8} height={5} />
      <span className="text-2xs text-[var(--DarkNeutral700)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[62px] flex h-[47px] items-center gap-[5px] pl-[6px] text-[var(--DarkNeutral700)]">
      <ChevronUp width={12} height={8} />
      <h3 className="font-primary-bold text-xs text-[var(--DarkNeutral800)]">
        Add New Design
      </h3>
    </div>

    <div className="mt-3">
      <FieldLabel htmlFor="test-card-token">Personal Access Token</FieldLabel>
    </div>
    <input
      id="test-card-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className={inputClassName}
    />

    <div className="mt-[10px]">
      <FieldLabel htmlFor="test-card-url">Design URL</FieldLabel>
    </div>
    <input
      id="test-card-url"
      type="text"
      placeholder="https://www.figma.com/file/:"
      className={inputClassName}
    />

    <div className="mt-[18px] flex gap-[17px] pl-6">
      <CardButton>Awesome</CardButton>
      <CardButton>Prepare</CardButton>
    </div>

    <h3 className="mt-[46px] font-primary-bold text-xs">Recent Breakdowns</h3>
  </div>
);

interface IconSize {
  width: number;
  height: number;
}

interface FieldLabelProps {
  htmlFor: string;
  children: string;
}
