/**
 * Smoke-test component: reproduces the dark "UI magician Agent" panel from the
 * attached Figma frame. Self-contained (no props) and deliberately approximate.
 * Colours are written as Tailwind arbitrary values because `tailwind.config.js`
 * replaces `theme.colors`, so the stock palette does not exist here.
 */
export const TestCard = () => {
  return (
    <div id="testElem">
      <div className="flex w-[254px] flex-col bg-[#1C1D17] p-5 font-primary">
        {/* Title row */}
        <div className="flex items-center justify-between">
          <span className="text-[13.5px] leading-[16.34px] text-[#B5B5B5]">
            UI magician Agent
          </span>
          <span className="text-[#A4A4A3]">
            <GearIcon />
          </span>
        </div>

        {/* Collapsed summary row */}
        <div className="mt-[18px] flex items-center gap-2 text-[#8B9291]">
          <ChevronUp width={8} height={5} />
          <span className="text-[11.5px] leading-[13.92px]">
            From entire frame to a singl...
          </span>
        </div>

        {/* Section heading */}
        <div className="mt-[77px] flex items-center gap-2 text-[#B2B2B1]">
          <ChevronUp width={12} height={8} />
          <span className="text-[13.5px] leading-[16.34px]">Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="mt-[28px] flex items-center justify-between">
          <span className="text-[11.5px] leading-[13.92px] text-[#A4A4A3]">
            Personal Access Token
          </span>
          <span className="text-[#A4A4A3]">
            <InfoIcon />
          </span>
        </div>
        <input
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 h-9 w-full border border-[#A5ADAD] bg-[#272822] px-3 text-[11.5px] leading-[13.92px] text-[#737470] outline-none placeholder:text-[#737470]"
        />

        {/* Design URL */}
        <div className="mt-3 flex items-center gap-2 text-[#A3A3A2]">
          <span className="text-[11.5px] leading-[13.92px]">Design URL</span>
          <InfoIcon />
        </div>
        <input
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/:"
          className="mt-3 h-9 w-full border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] leading-[12.71px] text-[#71726E] outline-none placeholder:text-[#71726E]"
        />

        {/* Actions */}
        <div className="mt-[22px] ml-6 flex gap-[17px]">
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843A17] text-[11.5px] leading-[13.92px] text-[#8C8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843A17] text-[11.5px] leading-[13.92px] text-[#8C8078]"
          >
            Prepare
          </button>
        </div>

        {/* Footer heading */}
        <div className="mt-[46px] text-[13.5px] leading-[16.34px] text-[#B0B0B0]">
          Recent Breakdowns
        </div>
      </div>
    </div>
  );
};

const ChevronUp = ({ width, height }: { width: number; height: number }) => (
  <svg
    aria-hidden="true"
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={`M1 ${height - 1}L${width / 2} 1L${width - 1} ${height - 1}`}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7.5" cy="7.5" r="6.75" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M7.5 6.8v3.4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.7" r="0.9" fill="currentColor" />
  </svg>
);

const GearIcon = () => (
  <svg
    aria-hidden="true"
    width={14}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
