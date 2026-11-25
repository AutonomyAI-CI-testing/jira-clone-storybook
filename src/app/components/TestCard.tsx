/**
 * TestCard — a static approximation of the "UI magician Agent" Figma frame.
 *
 * Self-contained by design: no props, no state, no handlers. The colours,
 * sizes and spacing below are the literal values extracted from the frame's
 * style guide rather than this app's semantic theme tokens, because the panel
 * is a standalone mock and is not part of the product's themeable surface.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col bg-[#000000] px-5 pt-5 font-primary-bold"
    >
      {/* Panel header */}
      <div className="flex items-start justify-between">
        <h1 className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <GearIcon className="h-4 w-[14px] shrink-0 text-[#b5b5b5]" />
      </div>

      {/* Collapsed summary row */}
      <div className="mt-[18px] flex items-center gap-2">
        <ChevronUpIcon className="h-[5px] w-2 shrink-0 text-[#b5b5b5]" />
        <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-[77px] flex items-center gap-[13px]">
        <ChevronUpIcon className="h-2 w-3 shrink-0 text-[#d9d9d9]" />
        <h2 className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      <div className="mt-[28px] flex items-center justify-between">
        <label
          htmlFor="test-card-access-token"
          className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#d9d9d9]" />
      </div>
      <input
        id="test-card-access-token"
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
      />

      <div className="mt-[11px] flex items-center gap-[18px]">
        <label
          htmlFor="test-card-design-url"
          className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#d9d9d9]" />
      </div>
      <input
        id="test-card-design-url"
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-9 w-full border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
      />

      <div className="mt-[22px] flex gap-[17px] pl-6">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

interface IconProps {
  className?: string;
}

const ChevronUpIcon = ({ className }: IconProps): JSX.Element => (
  <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" className={className}>
    <path
      d="M2 8 6 4l4 4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
    <circle cx="8" cy="8" r="7.2" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="8" cy="4.8" r="0.9" fill="currentColor" />
    <path
      d="M8 7.2v4.4"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const GearIcon = ({ className }: IconProps): JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
