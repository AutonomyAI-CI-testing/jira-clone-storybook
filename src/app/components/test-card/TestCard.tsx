const GearIcon = (): JSX.Element => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="12" cy="12" r="7.5" />
    <path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M19.4 4.6l-2.1 2.1M6.7 17.3l-2.1 2.1" />
  </svg>
);

const ChevronUpIcon = ({
  width = 10,
  height = 6,
}: {
  width?: number;
  height?: number;
}): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 10 6"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 5 5 1l4 4" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="7" />
    <path d="M8 7.2v4" strokeLinecap="round" />
    <circle cx="8" cy="4.9" r="0.7" fill="currentColor" stroke="none" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 pt-5 font-primary text-white"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-[13.5px] font-primary-bold text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <span className="text-[#b5b5b5]">
          <GearIcon />
        </span>
      </div>

      <div className="mt-4 flex items-center gap-3 text-[#8b9291]">
        <ChevronUpIcon />
        <span className="truncate text-[11.5px] font-primary-bold">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-14 flex items-center gap-3 text-[#b2b2b1]">
        <ChevronUpIcon width={12} height={8} />
        <h3 className="text-[13.5px] font-primary-bold">Add New Design</h3>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2 text-[#a4a4a3]">
          <span className="text-[11.5px] font-primary-bold">
            Personal Access Token
          </span>
          <InfoIcon />
        </div>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-2 h-9 w-full border border-[#a5adad] bg-[#272822] px-4 text-[11.5px] font-primary-bold text-[#737470] placeholder:text-[#737470] focus:outline-none"
        />
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-2 text-[#a3a3a2]">
          <span className="text-[11.5px] font-primary-bold">Design URL</span>
          <InfoIcon />
        </div>
        <input
          readOnly
          placeholder="https://www.figma.com/file/"
          className="mt-2 h-9 w-full border-2 border-[#929291] bg-[#272822] px-4 text-[10.5px] font-primary-bold text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
        />
      </div>

      <div className="mt-6 flex gap-[17px]">
        <button
          type="button"
          className="flex-1 rounded-[4px] bg-[#843a17] py-3 text-[11.5px] font-primary-bold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-[4px] bg-[#843a17] py-3 text-[11.5px] font-primary-bold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <h3 className="mt-auto pb-5 text-[13.5px] font-primary-bold text-[#b0b0b0]">
        Recent Breakdowns
      </h3>
    </div>
  );
};

export default TestCard;
