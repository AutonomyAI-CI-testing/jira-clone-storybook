interface ChevronProps {
  width: number;
  height: number;
}

const GearIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="7" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M11.5 9.9a1.1 1.1 0 0 0 .22 1.21l.04.04a1.33 1.33 0 1 1-1.88 1.88l-.04-.04a1.1 1.1 0 0 0-1.21-.22 1.1 1.1 0 0 0-.67 1v.11a1.33 1.33 0 1 1-2.66 0v-.06a1.1 1.1 0 0 0-.72-1 1.1 1.1 0 0 0-1.21.22l-.04.04a1.33 1.33 0 1 1-1.88-1.88l.04-.04a1.1 1.1 0 0 0 .22-1.21 1.1 1.1 0 0 0-1-.67H.72a1.33 1.33 0 1 1 0-2.66h.06a1.1 1.1 0 0 0 1-.72 1.1 1.1 0 0 0-.22-1.21l-.04-.04A1.33 1.33 0 1 1 3.4 2.72l.04.04a1.1 1.1 0 0 0 1.21.22h.05a1.1 1.1 0 0 0 .67-1V1.9a1.33 1.33 0 1 1 2.66 0v.06a1.1 1.1 0 0 0 .67 1 1.1 1.1 0 0 0 1.21-.22l.04-.04a1.33 1.33 0 1 1 1.88 1.88l-.04.04a1.1 1.1 0 0 0-.22 1.21v.05a1.1 1.1 0 0 0 1 .67h.11a1.33 1.33 0 1 1 0 2.66h-.06a1.1 1.1 0 0 0-1 .67Z"
      stroke="currentColor"
      strokeWidth="1.1"
    />
  </svg>
);

const ChevronUpIcon = ({ width, height }: ChevronProps): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M1 7 6 1l5 6"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.1" />
    <path
      d="M7.5 7v3.4"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.8" r="0.85" fill="currentColor" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-[var(--DarkNeutral200)] px-5 py-5 font-primary text-[color:var(--DarkNeutral800)]"
    >
      <div className="flex items-start justify-between">
        <span className="font-primary-bold text-xs">UI magician Agent</span>
        <GearIcon />
      </div>

      <div className="mt-[18px] flex items-center gap-1.5 text-[color:var(--DarkNeutral700)]">
        <ChevronUpIcon width={8} height={5} />
        <span className="truncate text-2xs">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-2">
        <ChevronUpIcon width={12} height={8} />
        <span className="font-primary-bold text-xs">Add New Design</span>
      </div>

      <div className="mt-7 flex items-center gap-2">
        <span className="font-primary-bold text-2xs">
          Personal Access Token
        </span>
        <InfoIcon />
      </div>
      <input
        name="personalAccessToken"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 w-full rounded border border-[color:var(--DarkNeutral700)] bg-[var(--DarkNeutral200)] px-[19px] py-[11px] text-2xs text-[color:var(--DarkNeutral600)] outline-none placeholder:text-[color:var(--DarkNeutral600)]"
      />

      <div className="mt-3 flex items-center gap-2">
        <span className="font-primary-bold text-2xs">Design URL</span>
        <InfoIcon />
      </div>
      <input
        name="designUrl"
        placeholder="https://www.figma.com/file/:"
        className="mt-3 w-full rounded border-2 border-[color:var(--DarkNeutral600)] bg-[var(--DarkNeutral200)] px-[19px] py-[11px] text-2xs text-[color:var(--DarkNeutral600)] outline-none placeholder:text-[color:var(--DarkNeutral600)]"
      />

      <div className="mt-[22px] flex gap-4 pl-6">
        <button
          type="button"
          className="rounded bg-[var(--Orange800)] px-4 py-[10px] font-primary-bold text-2xs"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded bg-[var(--Orange800)] px-4 py-[10px] font-primary-bold text-2xs"
        >
          Prepare
        </button>
      </div>

      <div className="mt-[47px] font-primary-bold text-xs">
        Recent Breakdowns
      </div>
    </div>
  );
};
