const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    focusable="false"
    className="h-4 w-3.5 text-[color:var(--Neutral400)]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    focusable="false"
    className={className}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    focusable="false"
    className="h-[15px] w-[15px] text-[color:var(--DarkNeutral800)]"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
  >
    <circle cx="7.5" cy="7.5" r="6.75" />
    <path d="M7.5 6.8v4" strokeLinecap="round" />
    <circle cx="7.5" cy="4.6" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

const chevronClassName = "shrink-0 text-[color:var(--DarkNeutral800)]";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="flex w-[254px] flex-col bg-black px-5 pb-14 pt-5 font-primary">
        <div className="flex items-center justify-between">
          <span className="font-primary-bold text-sm text-[color:var(--Neutral400)]">
            UI magician Agent
          </span>
          <GearIcon />
        </div>

        <div className="mt-3 flex items-center gap-2">
          <ChevronUpIcon className={`h-[5px] w-2 ${chevronClassName}`} />
          <span className="truncate text-2xs text-[color:var(--DarkNeutral800)]">
            From entire frame to a singl...
          </span>
        </div>

        <div className="h-[86px]" />

        <div className="flex items-center gap-2">
          <ChevronUpIcon className={`h-2 w-3 ${chevronClassName}`} />
          <span className="font-primary-bold text-sm text-[color:var(--Neutral400)]">
            Add New Design
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-2xs text-[color:var(--DarkNeutral800)]">
            Personal Access Token
          </span>
          <InfoIcon />
        </div>

        <div className="mt-2 flex h-9 w-full items-center border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-3">
          <span className="text-2xs text-[color:var(--Neutral700)]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-2xs text-[color:var(--DarkNeutral800)]">
            Design URL
          </span>
          <InfoIcon />
        </div>

        <div className="mt-2 flex h-9 w-full items-center border-2 border-[color:var(--Neutral500)] bg-[var(--DarkNeutral200)] px-3">
          <span className="text-2xs text-[color:var(--Neutral700)]">
            https://www.figma.com/file/:
          </span>
        </div>

        <div className="mt-5 flex justify-center gap-4">
          <div className="flex h-9 w-[85px] items-center justify-center rounded bg-[var(--Orange800)]">
            <span className="text-2xs text-[color:var(--Neutral600)]">
              Awesome
            </span>
          </div>
          <div className="flex h-9 w-[85px] items-center justify-center rounded bg-[var(--Orange800)]">
            <span className="text-2xs text-[color:var(--Neutral600)]">
              Prepare
            </span>
          </div>
        </div>

        <span className="mt-12 font-primary-bold text-sm text-[color:var(--Neutral400)]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
