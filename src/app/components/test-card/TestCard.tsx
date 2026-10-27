const GearGlyph = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-full w-full"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpGlyph = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-full w-full"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoGlyph = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-full w-full"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4M12 8h.01" />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="relative h-[508px] w-[254px] bg-[#000000] font-['Inter',sans-serif] font-semibold antialiased"
    >
      <span className="absolute left-[20px] top-[20px] text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <span className="absolute left-[216px] top-[20px] h-[16px] w-[14px] text-[#b5b5b5]">
        <GearGlyph />
      </span>

      <span className="absolute left-[23px] top-[57px] h-[5px] w-[8px] text-[#8b9291]">
        <ChevronUpGlyph />
      </span>
      <span className="absolute left-[40px] top-[54px] text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>

      <span className="absolute left-[26px] top-[150px] h-[8px] w-[12px] text-[#b2b2b1]">
        <ChevronUpGlyph />
      </span>
      <span className="absolute left-[43px] top-[145px] text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>

      <span className="absolute left-[20px] top-[189px] text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <span className="absolute left-[173px] top-[187px] h-[15px] w-[15px] text-[#a4a4a3]">
        <InfoGlyph />
      </span>

      <div className="absolute left-[20px] top-[215px] flex h-[36px] w-[211px] items-center border border-[#a5adad] bg-[#272822]">
        <span className="pl-[19px] text-[11.5px] leading-[13.92px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      <span className="absolute left-[20px] top-[262px] text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <span className="absolute left-[100px] top-[260px] h-[15px] w-[15px] text-[#a3a3a2]">
        <InfoGlyph />
      </span>

      <div className="absolute left-[20px] top-[287px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822]">
        <span className="pl-[20px] text-[10.5px] leading-[12.71px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      <button
        type="button"
        className="absolute left-[44px] top-[347px] flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="absolute left-[146px] top-[346px] flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>

      <span className="absolute left-[20px] top-[430px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
