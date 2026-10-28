/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" Figma
 * panel, used as a pipeline smoke test. It takes no props, holds no state and
 * is deliberately outside the app's theme: the reference design's own palette
 * is used as literal values because no app token matches it.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-[#1c1c1c] px-5 py-5 font-primary text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] leading-[16px]">UI magician Agent</span>
        <GearIcon />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] text-[11.5px] leading-[14px] text-[#8b9291]">
        <ChevronUpIcon width={8} height={5} />
        <span>From entire frame to a singl...</span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px] text-[13.5px] leading-[16px] text-[#b2b2b1]">
        <ChevronUpIcon width={12} height={8} />
        <span>Add New Design</span>
      </div>

      <div className="mt-7 flex items-center gap-4 text-[11.5px] leading-[14px] text-[#a4a4a3]">
        <span>Personal Access Token</span>
        <InfoIcon />
      </div>
      <input
        type="text"
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] pl-[19px] text-[11.5px] text-[#737470] placeholder:text-[#737470]"
      />

      <div className="mt-3 flex items-center gap-4 text-[11.5px] leading-[14px] text-[#a3a3a2]">
        <span>Design URL</span>
        <InfoIcon />
      </div>
      <input
        type="text"
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] pl-5 text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
      />

      <div className="mt-[22px] ml-6 flex gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-[46px] text-[13.5px] leading-[16px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};

const GearIcon = () => {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-[#d4d4d4]"
    >
      <circle
        cx="7"
        cy="8"
        r="5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeDasharray="1.7 1.7"
        strokeLinecap="round"
      />
      <circle cx="7" cy="8" r="2.1" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
};

const ChevronUpIcon = ({ width, height }: ChevronProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 8"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M1 6.5L6 1.5L11 6.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const InfoIcon = () => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-[#c9c9c9]"
    >
      <circle cx="7.5" cy="7.5" r="6.4" stroke="currentColor" strokeWidth="1.1" />
      <path
        d="M7.5 6.9V11"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="7.5" cy="4.4" r="0.9" fill="currentColor" />
    </svg>
  );
};

interface ChevronProps {
  width: number;
  height: number;
}
