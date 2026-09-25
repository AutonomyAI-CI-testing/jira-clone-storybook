/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 * Smoke test only — no props, no state, no interactivity, no repo design tokens.
 */

const GEAR_PATH =
  "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z";

const GearIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d={GEAR_PATH} />
  </svg>
);

const ChevronUp = ({ className }: { className?: string }): JSX.Element => (
  <svg
    viewBox="0 0 12 8"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg
    viewBox="0 0 15 15"
    className={className}
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="7" />
    <path d="M7.5 6.6v4.2" strokeLinecap="round" />
    <circle cx="7.5" cy="4.3" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const FieldLabel = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}): JSX.Element => (
  <div className={className}>
    <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
      {label}
    </span>
    <InfoIcon className="ml-[6px] inline-block h-[15px] w-[15px] align-[-2px] text-[#a4a4a3]" />
  </div>
);

const inputClass =
  "mt-3 h-9 w-full bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] font-semibold text-[#737470] placeholder:text-[#737470]";

const buttonClass =
  "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] font-semibold text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[#000000] px-5 pt-5 font-semibold"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon className="h-4 w-[14px] text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <ChevronUp className="h-[5px] w-2 text-[#8b9291]" />
      <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <ChevronUp className="h-2 w-3 text-[#b2b2b1]" />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <FieldLabel label="Personal Access Token" className="mt-7" />
    <input
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className={`${inputClass} border border-[#a5adad]`}
    />

    <FieldLabel label="Design URL" className="mt-3" />
    <input
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/"
      className={`${inputClass} border-2 border-[#929291] text-[10.5px] leading-[12.71px]`}
    />

    <div className="mt-[22px] flex justify-center gap-[17px]">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h2 className="mt-[46px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
