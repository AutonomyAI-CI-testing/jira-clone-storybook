/**
 * TestCard — a self-contained smoke-test card reproducing the dark settings panel
 * from the attached Figma frame ("UI magician Agent").
 *
 * Takes no props and holds no state; every surface is display-only.
 * Colours come from the repo's raw palette variables, which are declared once in
 * :root and never re-mapped per theme, so the card looks the same under all five
 * of the app's themes without pinning one.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[var(--DarkNeutral-100)] px-5 pb-[62px] pt-5 font-[Inter,sans-serif]"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[color:var(--Neutral400)]">
        UI magician Agent
      </span>
      <GearIcon className="h-4 w-[14px] shrink-0 text-[color:var(--Neutral400)]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <ChevronUpIcon className="h-[5px] w-2 shrink-0 text-[color:var(--DarkNeutral700)]" />
      <span className="truncate text-[11.5px] font-semibold leading-[13.92px] text-[color:var(--DarkNeutral700)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[83px] flex items-center gap-2">
      <ChevronUpIcon className="h-2 w-3 shrink-0 text-[color:var(--Neutral400)]" />
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[color:var(--Neutral400)]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center gap-2">
      <span className="text-[11.5px] font-semibold leading-[13.92px] text-[color:var(--DarkNeutral700)]">
        Personal Access Token
      </span>
      <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[color:var(--DarkNeutral700)]" />
    </div>

    <input
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-[12px] h-9 w-full border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-3 text-[11.5px] font-semibold leading-[13.92px] text-[color:var(--Neutral600)] placeholder:text-[color:var(--Neutral600)]"
    />

    <div className="mt-[11px] flex items-center gap-2">
      <span className="text-[11.5px] font-semibold leading-[13.92px] text-[color:var(--DarkNeutral700)]">
        Design URL
      </span>
      <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[color:var(--DarkNeutral700)]" />
    </div>

    <input
      readOnly
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-full border-2 border-[color:var(--DarkNeutral700)] bg-[var(--DarkNeutral200)] px-3 text-[10.5px] font-semibold leading-[12.71px] text-[color:var(--Neutral600)] placeholder:text-[color:var(--Neutral600)]"
    />

    <div className="ml-6 mt-[22px] flex gap-[17px]">
      <ButtonLabel>Awesome</ButtonLabel>
      <ButtonLabel>Prepare</ButtonLabel>
    </div>

    <p className="mt-[47px] text-[13.5px] font-semibold leading-[16.34px] text-[color:var(--Neutral400)]">
      Recent Breakdowns
    </p>
  </div>
);

const ButtonLabel = ({ children }: ButtonLabelProps): JSX.Element => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-[11.5px] font-semibold leading-[13.92px] text-[color:var(--DarkNeutral700)]"
  >
    {children}
  </button>
);

const GearIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

interface IconProps {
  className?: string;
}

interface ButtonLabelProps {
  children: string;
}
