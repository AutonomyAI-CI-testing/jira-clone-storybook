const GearIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.1" />
    <path d="M19.1 14.6a1.5 1.5 0 0 0 .3 1.65l.05.05a1.8 1.8 0 1 1-2.55 2.55l-.05-.05a1.5 1.5 0 0 0-1.65-.3 1.5 1.5 0 0 0-.9 1.37V20a1.8 1.8 0 1 1-3.6 0v-.08a1.5 1.5 0 0 0-.98-1.37 1.5 1.5 0 0 0-1.65.3l-.05.05a1.8 1.8 0 1 1-2.55-2.55l.05-.05a1.5 1.5 0 0 0 .3-1.65 1.5 1.5 0 0 0-1.37-.9H4a1.8 1.8 0 1 1 0-3.6h.08a1.5 1.5 0 0 0 1.37-.98 1.5 1.5 0 0 0-.3-1.65l-.05-.05a1.8 1.8 0 1 1 2.55-2.55l.05.05a1.5 1.5 0 0 0 1.65.3h.07a1.5 1.5 0 0 0 .9-1.37V4a1.8 1.8 0 1 1 3.6 0v.08a1.5 1.5 0 0 0 .9 1.37 1.5 1.5 0 0 0 1.65-.3l.05-.05a1.8 1.8 0 1 1 2.55 2.55l-.05.05a1.5 1.5 0 0 0-.3 1.65v.07a1.5 1.5 0 0 0 1.37.9H20a1.8 1.8 0 1 1 0 3.6h-.08a1.5 1.5 0 0 0-1.37.9Z" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9.6" />
    <path d="M12 11.2v5.4" />
    <path d="M12 7.6h.01" strokeWidth="2.6" />
  </svg>
);

const ChevronUp = ({
  width,
  height,
}: {
  width: number;
  height: number;
}): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 10"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M2 8 8 2l6 6" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[#1a1a1a] px-5 pt-5 font-primary text-[#b5b5b5]"
  >
    <div className="flex items-start justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16px]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
      <ChevronUp width={8} height={5} />
      <span className="min-w-0 truncate font-primary-bold text-[11.5px] leading-[14px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2 text-[#b2b2b1]">
      <ChevronUp width={12} height={8} />
      <span className="font-primary-bold text-[13.5px] leading-[16px]">
        Add New Design
      </span>
    </div>

    <div className="mt-7 flex items-center gap-2 text-[#a4a4a3]">
      <label
        htmlFor="testcard-token"
        className="font-primary-bold text-[11.5px] leading-[14px]"
      >
        Personal Access Token
      </label>
      <InfoIcon />
    </div>
    <input
      id="testcard-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full rounded-none border border-[#a5adad] bg-[#272822] px-3 font-primary-bold text-[11.5px] text-[#737470] placeholder:text-[#737470]"
    />

    <div className="mt-3 flex items-center gap-2 text-[#a3a3a2]">
      <label
        htmlFor="testcard-url"
        className="font-primary-bold text-[11.5px] leading-[14px]"
      >
        Design URL
      </label>
      <InfoIcon />
    </div>
    <input
      id="testcard-url"
      type="text"
      placeholder="https://www.figma.com/file/"
      className="mt-3 h-9 w-full rounded-none border-2 border-[#929291] bg-[#272822] px-3 font-primary-bold text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex justify-end gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
