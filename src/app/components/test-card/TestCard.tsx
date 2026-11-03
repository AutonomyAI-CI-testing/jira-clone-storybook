/**
 * TestCard — a self-contained recreation of the "UI magician Agent" Figma panel.
 *
 * Smoke test: the values below are measured from the design's extracted style
 * guide and approximate it. The palette is the design's own (a fixed dark
 * surface), not the app's semantic theme tokens, so this card does not follow
 * the light/dark/lava/lime themes.
 */

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-4 w-[14px] text-[#b5b5b5]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpSmall = () => (
  <svg
    viewBox="0 0 8 5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="ml-[5px] h-[5px] w-[8px] text-[#8b9291]"
  >
    <path d="M1 4 4 1l3 3" />
  </svg>
);

const ChevronUpLarge = () => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="ml-[8px] h-[8px] w-[12px] text-[#b2b2b1]"
  >
    <path d="M1.5 6.5 6 2l4.5 4.5" />
  </svg>
);

const InfoIcon = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    aria-hidden="true"
    className={className}
  >
    <circle cx="8" cy="8" r="7" />
    <path d="M8 7.2v4.4" strokeLinecap="round" />
    <circle cx="8" cy="4.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#131313] px-[18px] pt-[20px] pb-[62px] font-primary text-[11.5px] leading-[14px] text-[#a4a4a3]"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      <div className="mt-[18px] flex items-center">
        <ChevronUpSmall />
        <span className="ml-[9px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center">
        <ChevronUpLarge />
        <span className="ml-[5px] font-primary-bold text-[13.5px] leading-[16px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex items-center">
        <span className="text-[#a4a4a3]">Personal Access Token</span>
        <InfoIcon className="ml-[37px] h-[15px] w-[15px] text-[#a4a4a3]" />
      </div>

      <div className="mt-[8px] flex h-[39px] items-center border border-[#a5adad] bg-[#272822] pl-[21px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </div>

      <div className="mt-[10px] flex items-center">
        <span className="text-[#a3a3a2]">Design URL</span>
        <InfoIcon className="ml-[17px] h-[15px] w-[15px] text-[#a3a3a2]" />
      </div>

      <div className="mt-[7px] flex h-[41px] items-center border-2 border-[#929291] bg-[#272822] pl-[22px] text-[10.5px] text-[#71726e]">
        https://www.figma.com/file/:
      </div>

      <div className="mt-[19px] ml-[25px] flex gap-[15px]">
        <div className="flex h-[40px] w-[87px] items-center justify-center rounded-[4px] bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]">
          Awesome
        </div>
        <div className="flex h-[40px] w-[87px] items-center justify-center rounded-[4px] bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]">
          Prepare
        </div>
      </div>

      <div className="mt-[45px] font-primary-bold text-[13.5px] leading-[16px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
