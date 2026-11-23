/**
 * Throwaway smoke-test component: a static reproduction of the
 * "UI magician Agent" Figma panel (254x508).
 *
 * Self-contained, takes no props and renders inert markup only. It is not
 * wired into any route and is not meant to be used by the app.
 *
 * Colours are the design's literal hex values as arbitrary Tailwind values:
 * the design is a dark editor panel with no equivalent in the app's semantic
 * token set, and this component never ships.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="h-[508px] w-[254px] bg-black font-primary text-[#b5b5b5]"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5">
        <span className="font-primary-bold text-[13.5px] leading-[16.34px]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Collapsed section */}
      <div className="mt-[18px] flex items-center px-5">
        <ChevronUp className="ml-[3px] h-[5px] w-[8px] text-[#8b9291]" />
        <span className="ml-[9px] text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[77px] flex items-center px-5">
        <ChevronUp className="ml-[6px] h-[8px] w-[12px] text-[#b2b2b1]" />
        <span className="ml-[5px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <label className="mt-[28px] flex flex-col px-5">
        <span className="flex items-center gap-2 text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
          <InfoIcon />
        </span>
        <input
          readOnly
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 h-[36px] w-[211px] border border-[#a5adad] bg-[#272822] px-[18px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
        />
      </label>

      {/* Design URL */}
      <label className="mt-[11px] flex flex-col px-5">
        <span className="flex items-center gap-2 text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
          <InfoIcon />
        </span>
        <input
          readOnly
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="mt-[11px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-[18px] text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
        />
      </label>

      {/* Actions */}
      <div className="mt-[23px] flex gap-[17px] pl-[44px]">
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

      {/* Footer */}
      <h2 className="mt-[46px] px-5 font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const ChevronUp = ({ className }: { className?: string }): JSX.Element => (
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
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
    strokeLinecap="round"
    aria-hidden="true"
    className="h-[15px] w-[15px] shrink-0"
  >
    <circle cx="8" cy="8" r="7" />
    <path d="M8 7.2v4M8 4.6v.8" />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 14 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-[16px] w-[14px] shrink-0 text-[#b5b5b5]"
  >
    <circle cx="7" cy="8" r="2.2" />
    <path d="M7 1.2v2M7 12.8v2M1.4 8h2M10.6 8h2M3 4l1.4 1.4M9.6 10.6 11 12M11 4 9.6 5.4M4.4 10.6 3 12" />
  </svg>
);
