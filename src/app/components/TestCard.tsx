import cx from "classix";

interface IconProps {
  className?: string;
}

const GearIcon = ({ className = "" }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className = "" }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M1 6.5L6 1.5L11 6.5" />
  </svg>
);

const InfoIcon = ({ className = "" }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-5" />
    <path d="M12 8h.01" />
  </svg>
);

const fieldBaseClass = "h-9 w-full bg-[#272822] px-[18px] font-primary-bold";

const buttonClass =
  "h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]";

/**
 * Static, prop-less reproduction of a single cropped Figma frame.
 * A smoke test for the design-to-component path: no state, no data, no behaviour.
 */
export const TestCard = (): JSX.Element => (
  <div id="testElem" className="w-[254px] bg-[#0d0d0d] px-5 py-5 font-primary">
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon className="h-4 w-[14px] shrink-0 text-[#b5b5b5]" />
    </div>

    {/* Collapsed summary */}
    <div className="mt-[18px] flex min-w-0 items-center gap-[9px] text-[#8b9291]">
      <ChevronUpIcon className="h-[5px] w-2 shrink-0" />
      <span className="min-w-0 flex-1 truncate font-primary-bold text-[11.5px] leading-[13.92px]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section header */}
    <div className="mt-[77px] flex items-center gap-1.5 text-[#b2b2b1]">
      <ChevronUpIcon className="h-2 w-3 shrink-0" />
      <span className="font-primary-bold text-[13.5px] leading-[16.34px]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-7 flex items-center gap-3 text-[#a4a4a3]">
      <span className="font-primary-bold text-[11.5px] leading-[13.92px]">
        Personal Access Token
      </span>
      <InfoIcon className="h-[15px] w-[15px] shrink-0" />
    </div>
    <input
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className={cx(
        fieldBaseClass,
        "mt-3 border border-[#a5adad] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
      )}
    />

    {/* Design URL */}
    <div className="mt-[11px] flex items-center gap-3 text-[#a3a3a2]">
      <span className="font-primary-bold text-[11.5px] leading-[13.92px]">
        Design URL
      </span>
      <InfoIcon className="h-[15px] w-[15px] shrink-0" />
    </div>
    <input
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className={cx(
        fieldBaseClass,
        "mt-[11px] border-2 border-[#929291] text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
      )}
    />

    {/* Actions */}
    <div className="ml-6 mt-[22px] flex gap-[17px]">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    {/* Footer heading */}
    <h2 className="mt-[46px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

export default TestCard;
