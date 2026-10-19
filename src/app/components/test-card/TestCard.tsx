/**
 * TestCard — a self-contained rendering of the attached Figma frame.
 *
 * Smoke test only: no props, no state, no behaviour. Measurements come from the
 * frame's style guide; colour and spacing are approximations, not pixel-perfect.
 */

const ChevronUp = ({ className = "" }: { className?: string }): JSX.Element => (
  <svg viewBox="0 0 12 8" fill="none" aria-hidden="true" className={className}>
    <path
      d="M1.5 6.5 6 2l4.5 4.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className="h-[15px] w-[15px] shrink-0"
  >
    <circle cx="8" cy="8" r="6.6" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="8" cy="4.9" r="0.9" fill="currentColor" />
    <path
      d="M8 7.2v4.4"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="h-[16px] w-[14px] shrink-0"
  >
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1e1e1e] px-5 pb-[62px] pt-5 font-primary text-[#b5b5b5]"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px]">UI magician Agent</span>
      <GearIcon />
    </div>

    {/* Collapsed row */}
    <div className="mt-[18px] flex items-center gap-2">
      <ChevronUp className="h-[5px] w-2 shrink-0" />
      <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section header */}
    <div className="mt-[76px] flex items-center gap-2">
      <ChevronUp className="h-2 w-3 shrink-0" />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[32px]">
      <div className="flex items-center gap-2">
        <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <InfoIcon />
      </div>
      <div className="mt-[10px] flex h-9 w-full items-center border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </div>
    </div>

    {/* Design URL */}
    <div className="mt-[9px]">
      <div className="flex items-center gap-2">
        <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <InfoIcon />
      </div>
      <div className="mt-[11px] flex h-[37px] w-full items-center border-2 border-[#929291] bg-[#272822] px-[18px] text-[10.5px] leading-[12.71px] text-[#71726e]">
        https://www.figma.com/file/:
      </div>
    </div>

    {/* Actions */}
    <div className="mt-[22px] flex justify-center gap-[17px]">
      {["Awesome", "Prepare"].map((label) => (
        <div
          key={label}
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          {label}
        </div>
      ))}
    </div>

    {/* Recent Breakdowns */}
    <div className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
