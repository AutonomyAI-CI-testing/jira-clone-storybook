/**
 * Smoke-test card: a fixed-look reproduction of the "UI magician Agent" Figma panel.
 * Self-contained (no props) and deliberately theme-independent — it uses the design's
 * own literal values rather than the app's semantic tokens, which would re-skin it.
 */

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-[16px] w-[14px] shrink-0 text-[#d0d0d0]"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
  >
    <circle cx="12" cy="12" r="6.2" />
    <circle cx="12" cy="12" r="2.6" />
    <line x1="12" y1="1.8" x2="12" y2="4.4" />
    <line x1="12" y1="19.6" x2="12" y2="22.2" />
    <line x1="1.8" y1="12" x2="4.4" y2="12" />
    <line x1="19.6" y1="12" x2="22.2" y2="12" />
    <line x1="4.8" y1="4.8" x2="6.7" y2="6.7" />
    <line x1="17.3" y1="17.3" x2="19.2" y2="19.2" />
    <line x1="4.8" y1="19.2" x2="6.7" y2="17.3" />
    <line x1="17.3" y1="6.7" x2="19.2" y2="4.8" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2.6}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="4,15 12,7 20,15" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-[15px] w-[15px] shrink-0 text-[#d0d0d0]"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
  >
    <circle cx="12" cy="12" r="9.2" />
    <line x1="12" y1="11" x2="12" y2="16.8" />
    <circle cx="12" cy="7.6" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div id="testElem">
    <div className="flex h-[508px] w-[254px] flex-col overflow-hidden bg-black px-5 pt-5 font-primary-bold">
      {/* Title row */}
      <div className="flex items-start justify-between">
        <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Collapsed summary row */}
      <div className="mt-[18px] flex items-center gap-[9px]">
        <ChevronUpIcon className="h-[5px] w-[8px] shrink-0 text-[#8b9291]" />
        <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section heading */}
      <div className="mt-[75px] flex items-center gap-[5px]">
        <ChevronUpIcon className="h-[8px] w-[12px] shrink-0 text-[#b2b2b1]" />
        <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[28px] flex items-center gap-[6px]">
        <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <InfoIcon />
      </div>
      <div className="mt-[12px] flex h-[36px] w-[211px] items-center border border-[#a5adad] bg-[#272822] pl-[19px]">
        <span className="text-[11.5px] leading-[13.92px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL */}
      <div className="mt-[11px] flex items-center gap-[6px]">
        <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <InfoIcon />
      </div>
      <div className="mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] pl-[20px]">
        <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Actions */}
      <div className="mt-[22px] flex gap-[17px] pl-[24px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  </div>
);
