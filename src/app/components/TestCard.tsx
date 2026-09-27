export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col gap-5 bg-black px-5 py-5 text-white"
    >
      <div className="flex items-start justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      <div className="flex items-center gap-2">
        <ChevronIcon className="rotate-180" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-6 flex items-center gap-2">
        <ChevronIcon />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <label
            htmlFor="test-card-token"
            className="text-[11.5px] font-semibold text-[#a4a4a3]"
          >
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        <input
          id="test-card-token"
          readOnly
          defaultValue="figd_xxxxxxxxxxxxxxxxxx"
          className="h-9 w-full rounded-none border border-[#a5adad] bg-[#272822] px-2 text-[11.5px] font-semibold text-[#737470]"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <label
            htmlFor="test-card-design-url"
            className="text-[11.5px] font-semibold text-[#a3a3a2]"
          >
            Design URL
          </label>
          <InfoIcon />
        </div>
        <input
          id="test-card-design-url"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="h-[37px] w-full rounded-none border-2 border-[#929291] bg-[#272822] px-2 text-[10.5px] font-semibold text-[#71726e]"
        />
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <span className="mt-6 text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 16 16"
    className={`h-[15px] w-[15px] shrink-0 ${className ?? ""}`}
    fill="none"
    stroke="#b5b5b5"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 10l4-4 4 4" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 16 16"
    className="h-[15px] w-[15px] shrink-0"
    fill="none"
    stroke="#a4a4a3"
    strokeWidth="1.4"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="6.25" />
    <path d="M8 7.25v4" strokeLinecap="round" />
    <circle cx="8" cy="4.9" r="0.8" fill="#a4a4a3" stroke="none" />
  </svg>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 16 16"
    className="h-4 w-4 shrink-0"
    fill="none"
    stroke="#b5b5b5"
    strokeWidth="1.4"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="2.2" />
    <path d="M8 1.5l1.1 1.6 1.9-.4.5 1.9 1.8.7-.9 1.7.9 1.7-1.8.7-.5 1.9-1.9-.4L8 14.5l-1.1-1.6-1.9.4-.5-1.9-1.8-.7.9-1.7-.9-1.7 1.8-.7.5-1.9 1.9.4z" />
  </svg>
);
