const ChevronUpGlyph = ({ className }: { className: string }) => {
  return (
    <svg
      viewBox="0 0 12 8"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <path
        d="M1 7 6 2l5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const GearGlyph = () => {
  return (
    <svg
      viewBox="0 0 14 16"
      fill="none"
      aria-hidden="true"
      className="h-[16px] w-[14px] shrink-0 text-[#c4c4c4]"
    >
      <circle cx="7" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.3" />
      <circle
        cx="7"
        cy="8"
        r="5.4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeDasharray="1.9 1.5"
      />
    </svg>
  );
};

const InfoGlyph = () => {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
      className="h-[15px] w-[15px] shrink-0 text-[#c9c9c9]"
    >
      <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.1" />
      <path
        d="M7.5 6.8v3.6"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <circle cx="7.5" cy="4.6" r="0.85" fill="currentColor" />
    </svg>
  );
};

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="h-[508px] w-[254px] rounded-[12px] bg-[#0b0b0b] p-[8px] text-[11.5px] font-semibold [font-family:Inter,sans-serif]"
    >
      <div className="flex h-full flex-col rounded-[10px] bg-[#1c1c1c] px-[12px] py-[12px]">
        <div className="flex items-center justify-between">
          <span className="text-[13.5px] leading-[16px] text-[#b5b5b5]">
            UI magician Agent
          </span>
          <GearGlyph />
        </div>

        <div className="mt-[18px] flex items-center gap-[8px] text-[#8b9291]">
          <ChevronUpGlyph className="h-[5px] w-[8px]" />
          <span className="truncate">From entire frame to a singl...</span>
        </div>

        <div className="mt-[76px] flex items-center gap-[10px] text-[13.5px] leading-[16px] text-[#b2b2b1]">
          <ChevronUpGlyph className="h-[8px] w-[12px]" />
          <span>Add New Design</span>
        </div>

        <div className="mt-[28px]">
          <div className="flex items-center gap-[8px]">
            <label
              htmlFor="testElem-token"
              className="text-[11.5px] leading-[14px] text-[#a4a4a3]"
            >
              Personal Access Token
            </label>
            <InfoGlyph />
          </div>
          <input
            id="testElem-token"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxxxxx"
            className="mt-[12px] h-[36px] w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] font-semibold text-[#737470] outline-none"
          />
        </div>

        <div className="mt-[11px]">
          <div className="flex items-center gap-[8px]">
            <label
              htmlFor="testElem-design-url"
              className="text-[11.5px] leading-[14px] text-[#a3a3a2]"
            >
              Design URL
            </label>
            <InfoGlyph />
          </div>
          <input
            id="testElem-design-url"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[20px] text-[11.5px] font-semibold text-[#71726e] outline-none"
          />
        </div>

        <div className="mt-[22px] flex gap-[17px]">
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
          >
            Prepare
          </button>
        </div>

        <h2 className="mt-[47px] text-[13.5px] leading-[16px] text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
