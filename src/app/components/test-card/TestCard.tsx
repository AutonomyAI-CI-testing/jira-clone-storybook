/**
 * TestCard — a static, self-contained recreation of a Figma frame.
 *
 * Smoke test only: no props, no state, no handlers — the fields are read-only
 * and the buttons are inert.
 *
 * The frame is a dark panel whose palette (black / #272822 / #843a17) has no
 * counterpart in this app's semantic token themes — the nearest tokens are
 * visibly different shades — so the frame's literal values are used here on
 * purpose rather than being forced through the theme.
 */
const fieldClass = "mt-2 w-[211px] bg-[#272822] px-[19px]";

const actionButtonClass =
  "h-[37px] w-[85px] cursor-pointer rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-black px-5 pt-5 font-primary"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    {/* Collapsed disclosure row */}
    <div className="mt-4 flex items-center gap-2">
      <ChevronIcon className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
      <span className="min-w-0 truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section header */}
    <div className="mt-20 flex items-center gap-2">
      <ChevronIcon className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-6">
      <div className="flex items-center gap-3">
        <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <InfoIcon />
      </div>
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={`${fieldClass} h-9 border border-[#a5adad] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]`}
      />
    </div>

    {/* Design URL */}
    <div className="mt-5">
      <div className="flex items-center gap-3">
        <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <InfoIcon />
      </div>
      <input
        readOnly
        placeholder="https://www.figma.com/file/:"
        className={`${fieldClass} h-[37px] border-2 border-[#929291] text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]`}
      />
    </div>

    {/* Actions */}
    <div className="mt-[22px] flex gap-[17px] pl-6">
      <button type="button" className={actionButtonClass}>
        Awesome
      </button>
      <button type="button" className={actionButtonClass}>
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <p className="mt-24 text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </p>
  </div>
);

const GearIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#b5b5b5"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronIcon = ({ className }: ChevronIconProps): JSX.Element => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M1 7 6 1.5 11 7" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1.2" />
    <path
      d="M7.5 6.6V11"
      stroke="#a4a4a3"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.4" r="0.9" fill="#a4a4a3" />
  </svg>
);

interface ChevronIconProps {
  className: string;
}
