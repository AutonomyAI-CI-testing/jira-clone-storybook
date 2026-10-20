const ChevronUpIcon = ({ width, height }: IconProps): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d={`M1 ${height - 1} L${width / 2} 1 L${width - 1} ${height - 1}`}
      stroke="currentColor"
      strokeWidth="1"
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
    <circle cx="7.5" cy="7.5" r="6.75" stroke="currentColor" strokeWidth="1" />
    <circle cx="7.5" cy="4.75" r="0.9" fill="currentColor" />
    <path
      d="M7.5 6.9V10.8"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

const SettingsIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
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
  <div id="testElem" className="w-[254px] bg-[#000000] px-5 py-5 font-primary-bold">
    <div className="flex items-center justify-between text-[#b5b5b5]">
      <span className="text-[13.5px] leading-[16.34px]">UI magician Agent</span>
      <SettingsIcon />
    </div>

    <div className="mt-5 flex items-center gap-2 text-[#8b9291]">
      <ChevronUpIcon width={8} height={5} />
      <span className="truncate text-[11.5px] leading-[13.92px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-3 text-[#b2b2b1]">
      <ChevronUpIcon width={12} height={8} />
      <span className="text-[13.5px] leading-[16.34px]">Add New Design</span>
    </div>

    <div className="mt-10 flex items-center gap-3 text-[#a4a4a3]">
      <span className="text-[11.5px] leading-[13.92px]">
        Personal Access Token
      </span>
      <InfoIcon />
    </div>
    <input
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      aria-label="Personal Access Token"
      className="mt-3 w-full border border-[#a5adad] bg-[#272822] px-3 py-2 text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]"
    />

    <div className="mt-3 flex items-center gap-3 text-[#a3a3a2]">
      <span className="text-[11.5px] leading-[13.92px]">Design URL</span>
      <InfoIcon />
    </div>
    <input
      type="text"
      placeholder="https://www.figma.com/file/"
      aria-label="Design URL"
      className="mt-3 w-full border-2 border-[#929291] bg-[#272822] px-3 py-2 text-[10.5px] text-[#71726e] outline-none placeholder:text-[#71726e]"
    />

    <div className="mt-5 flex justify-end gap-4">
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

    <div className="mt-12 text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);

interface IconProps {
  width: number;
  height: number;
}
