/**
 * TestCard — a self-contained replica of the "UI magician Agent" panel from the
 * Figma smoke-test frame. Dark surface, two labelled inputs and a pair of
 * rust-coloured actions. It takes no props and reads no app state.
 */
export const TestCard = () => {
  return (
    <div id="testElem" className="w-[254px] bg-[#1a1a1a] px-5 pb-[62px] pt-5">
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px]">
        <ChevronUpIcon className="h-[5px] w-[8px] text-[#8b9291]" />
        <p className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px]">
        <ChevronUpIcon className="h-[8px] w-[12px] text-[#b2b2b1]" />
        <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      <div className="mt-[28px] flex items-center gap-[18px]">
        <label
          htmlFor="test-card-token"
          className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <InfoIcon />
      </div>

      <input
        id="test-card-token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        className="mt-[12px] h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] font-primary-bold text-[11.5px] leading-[13.92px] text-[#b5b5b5] outline-none placeholder:text-[#737470] focus:outline-2 focus:outline-border-brand"
      />

      <div className="mt-[11px] flex items-center gap-[18px]">
        <label
          htmlFor="test-card-design-url"
          className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <InfoIcon />
      </div>

      <input
        id="test-card-design-url"
        placeholder="https://www.figma.com/file/"
        className="mt-[11px] h-9 w-full border border-[#929291] bg-[#272822] px-[19px] font-primary-bold text-[10.5px] leading-[12.71px] text-[#b5b5b5] outline-none placeholder:text-[#71726e] focus:outline-2 focus:outline-border-brand"
      />

      <div className="mt-[22px] flex gap-[17px] pl-6">
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

      <h2 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M1 6.5L6 1.5L11 6.5" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    aria-hidden="true"
    className="h-[15px] w-[15px] text-[#a4a4a3]"
  >
    <circle cx="7.5" cy="7.5" r="7" />
    <path d="M7.5 6.75v3.25" />
    <path d="M7.5 4.6v0.01" />
  </svg>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-4 w-[14px] text-[#b5b5b5]"
  >
    <circle cx="12" cy="12" r="3.25" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6h.09A1.65 1.65 0 0 0 10.6 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

TestCard.displayName = "TestCard";
