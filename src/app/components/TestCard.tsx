import cx from "classix";

const GearIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    className="h-4 w-4 shrink-0 text-[#b5b5b5]"
  >
    <circle
      cx="8"
      cy="8"
      r="2.6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
    />
    <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
      <line x1="8" y1="1.4" x2="8" y2="3.2" />
      <line x1="8" y1="12.8" x2="8" y2="14.6" />
      <line x1="1.4" y1="8" x2="3.2" y2="8" />
      <line x1="12.8" y1="8" x2="14.6" y2="8" />
      <line x1="3.3" y1="3.3" x2="4.6" y2="4.6" />
      <line x1="11.4" y1="11.4" x2="12.7" y2="12.7" />
      <line x1="12.7" y1="3.3" x2="11.4" y2="4.6" />
      <line x1="4.6" y1="11.4" x2="3.3" y2="12.7" />
    </g>
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 12 8"
    fill="none"
    className={cx("shrink-0", className)}
  >
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className }: { className: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    className={cx("h-[15px] w-[15px] shrink-0", className)}
  >
    <circle
      cx="8"
      cy="8"
      r="6.4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <circle cx="8" cy="4.9" r="0.9" fill="currentColor" />
    <line
      x1="8"
      y1="7.3"
      x2="8"
      y2="11.3"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-black px-5 py-5 font-primary text-[11.5px] leading-[13.92px] text-[#b5b5b5]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[13.5px] leading-[16.34px]">
        UI magician Agent
      </h1>
      <GearIcon />
    </div>

    <div className="mt-3 flex items-center gap-2 text-[#8b9291]">
      <ChevronUpIcon className="h-[5px] w-2" />
      <span className="min-w-0 truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-14 flex items-center gap-2 text-[#b2b2b1]">
      <ChevronUpIcon className="h-2 w-3" />
      <h2 className="font-primary-bold text-[13.5px] leading-[16.34px]">
        Add New Design
      </h2>
    </div>

    <div className="mt-6">
      <div className="flex items-center gap-2 text-[#a4a4a3]">
        <label htmlFor="testElem-token">Personal Access Token</label>
        <InfoIcon className="text-[#a4a4a3]" />
      </div>
      <input
        id="testElem-token"
        name="testElem-token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-2 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]"
      />
    </div>

    <div className="mt-3">
      <div className="flex items-center gap-2 text-[#a3a3a2]">
        <label htmlFor="testElem-design-url">Design URL</label>
        <InfoIcon className="text-[#a3a3a2]" />
      </div>
      <input
        id="testElem-design-url"
        name="testElem-design-url"
        placeholder="https://www.figma.com/file/:"
        className="mt-2 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[19px] text-[10.5px] text-[#71726e] outline-none placeholder:text-[#71726e]"
      />
    </div>

    <div className="ml-6 mt-7 flex gap-[17px]">
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

    <h2 className="mt-12 font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
