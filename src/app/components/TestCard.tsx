// Smoke-test component: a single self-contained reproduction of the supplied
// Figma frame. No props, no state, no app imports. The Figma palette (dark
// browns and greys) has no counterpart in the repo's token set, so the frame's
// literal colours are written as Tailwind arbitrary values.
const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 py-5 font-primary"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Collapsed subtitle row */}
      <div className="mt-[14px] flex items-center gap-2">
        <ChevronUpIcon className="h-[5px] w-[8px] shrink-0" />
        <span className="font-primary-bold text-[11.5px] leading-[14px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[77px] flex items-center gap-2">
        <ChevronUpIcon className="h-[8px] w-[12px] shrink-0" />
        <span className="font-primary-bold text-[13.5px] leading-[16px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[26px]">
        <div className="flex items-center gap-2">
          <label
            htmlFor="testElem-token"
            className="font-primary-bold text-[11.5px] leading-[14px] text-[#a4a4a3]"
          >
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        <input
          id="testElem-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 h-9 w-[211px] border border-[#a5adad] bg-[#272822] px-[19px] font-primary-bold text-[11.5px] leading-[14px] text-[#737470] placeholder:text-[#737470]"
        />
      </div>

      {/* Design URL */}
      <div className="mt-3">
        <div className="flex items-center gap-2">
          <label
            htmlFor="testElem-design-url"
            className="font-primary-bold text-[11.5px] leading-[14px] text-[#a3a3a2]"
          >
            Design URL
          </label>
          <InfoIcon />
        </div>
        <input
          id="testElem-design-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="mt-3 h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-[19px] font-primary-bold text-[10.5px] leading-[13px] text-[#71726e] placeholder:text-[#71726e]"
        />
      </div>

      {/* Buttons */}
      <div className="mt-[22px] flex gap-[17px] pl-6">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-primary-bold text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-primary-bold text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const GearIcon = () => (
  <svg
    role="img"
    aria-label="Settings"
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <circle cx="7" cy="8" r="2.1" stroke="#b5b5b5" strokeWidth="1.1" />
    <g stroke="#b5b5b5" strokeWidth="1.1" strokeLinecap="round">
      <path d="M7 1.6v1.8" />
      <path d="M7 12.6v1.8" />
      <path d="M1.6 8h1.8" />
      <path d="M10.6 8h1.8" />
      <path d="M3.2 4.2l1.3 1.3" />
      <path d="M9.5 10.5l1.3 1.3" />
      <path d="M10.8 4.2l-1.3 1.3" />
      <path d="M4.5 10.5l-1.3 1.3" />
    </g>
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="#b5b5b5"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.6" stroke="#a4a4a3" strokeWidth="1" />
    <path
      d="M7.5 6.9v3.4"
      stroke="#a4a4a3"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.7" r="0.7" fill="#a4a4a3" />
  </svg>
);

export { TestCard };
export default TestCard;
