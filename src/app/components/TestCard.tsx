/**
 * TestCard
 *
 * A self-contained reproduction of the "UI magician Agent" panel from the
 * attached Figma frame. Smoke test only: it takes no props, holds no state,
 * and nothing else in the app imports it.
 */

const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ width, height }: ChevronUpIconProps) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d={`M1 ${height - 1}L${width / 2} 1L${width - 1} ${height - 1}`} />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="7.5" cy="7.5" r="6.75" strokeWidth="1" />
    <path d="M7.5 7v4" strokeWidth="1" strokeLinecap="round" />
    <circle cx="7.5" cy="4.4" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-black px-5 pt-5 pb-6 font-primary"
  >
    <div className="flex items-center justify-between text-[#b5b5b5]">
      <span className="font-primary-bold text-[13.5px] leading-[16.34px]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
      <ChevronUpIcon width={8} height={5} />
      <span className="text-[11.5px] leading-[13.92px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[86px] flex items-center gap-2 text-[#b2b2b1]">
      <ChevronUpIcon width={12} height={8} />
      <span className="font-primary-bold text-[13.5px] leading-[16.34px]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center gap-2 text-[#a4a4a3]">
      <span className="text-[11.5px] leading-[13.92px]">
        Personal Access Token
      </span>
      <InfoIcon />
    </div>
    <input
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-[211px] border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]"
    />

    <div className="mt-3 flex items-center gap-2 text-[#a3a3a2]">
      <span className="text-[11.5px] leading-[13.92px]">Design URL</span>
      <InfoIcon />
    </div>
    <input
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-3 h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-[19px] text-[10.5px] text-[#71726e] outline-none placeholder:text-[#71726e]"
    />

    <div className="mt-6 flex gap-[17px] pl-6">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <div className="mt-[46px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);

interface ChevronUpIconProps {
  width: number;
  height: number;
}
