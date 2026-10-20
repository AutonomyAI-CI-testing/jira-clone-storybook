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
    viewBox="0 0 8 5"
    fill="none"
    preserveAspectRatio="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M1 4L4 1L7 4"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.6" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M7.5 6.9V10.6"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.6" r="0.85" fill="currentColor" />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7" cy="8" r="4.6" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="7" cy="8" r="1.9" stroke="currentColor" strokeWidth="1.3" />
    <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M11.6 8H13" />
      <path d="M10.25 11.25L11.24 12.24" />
      <path d="M7 12.6V14" />
      <path d="M3.75 11.25L2.76 12.24" />
      <path d="M2.4 8H1" />
      <path d="M3.75 4.75L2.76 3.76" />
      <path d="M7 3.4V2" />
      <path d="M10.25 4.75L11.24 3.76" />
    </g>
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[#1e1e1e] px-5 pb-5 pt-5 font-primary-bold"
  >
    <div className="flex items-center justify-between text-[#b5b5b5]">
      <span className="text-[13.5px]">UI magician Agent</span>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
      <ChevronUp width={8} height={5} />
      <span className="text-[11.5px]">From entire frame to a singl...</span>
    </div>

    <div className="mt-[77px] flex items-center gap-2 text-[#b2b2b1]">
      <ChevronUp width={12} height={8} />
      <span className="text-[13.5px]">Add New Design</span>
    </div>

    <div className="mt-7 flex items-center gap-3 text-[#a4a4a3]">
      <label htmlFor="testCardToken" className="text-[11.5px]">
        Personal Access Token
      </label>
      <InfoIcon />
    </div>
    <input
      id="testCardToken"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-4 text-[11.5px] text-[#737470] placeholder:text-[#737470]"
    />

    <div className="mt-3 flex items-center gap-3 text-[#a3a3a2]">
      <label htmlFor="testCardUrl" className="text-[11.5px]">
        Design URL
      </label>
      <InfoIcon />
    </div>
    <input
      id="testCardUrl"
      readOnly
      placeholder="https://www.figma.com/file/:"
      className="mt-3 h-9 w-full border-2 border-[#929291] bg-[#272822] px-4 text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex justify-center gap-4">
      <button
        type="button"
        className="h-9 w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-9 w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <div className="mt-[47px] text-[13.5px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
