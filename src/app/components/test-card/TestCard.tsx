import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 *
 * Deliberately self-contained: it takes no props and holds no state, and the
 * frame's fixed dark palette is written as arbitrary values because those
 * colours have no semantic role in this repo's five themes.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col overflow-hidden bg-[#000000] px-[20px] pt-[20px] font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <RiSettings3Line aria-hidden className="shrink-0 text-[#b5b5b5]" size={16} />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <RiArrowUpSLine aria-hidden className="shrink-0 text-[#8b9291]" size={16} />
      <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[76px] flex items-center gap-[11px]">
      <RiArrowUpSLine aria-hidden className="shrink-0 text-[#b2b2b1]" size={20} />
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center gap-[33px]">
      <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <RiInformationLine aria-hidden className="shrink-0 text-[#a4a4a3]" size={15} />
    </div>

    <input
      aria-label="Personal Access Token"
      className="mt-[12px] h-9 w-full rounded-none border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      readOnly
      type="text"
    />

    <div className="mt-[11px] flex items-center gap-[23px]">
      <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <RiInformationLine aria-hidden className="shrink-0 text-[#a3a3a2]" size={15} />
    </div>

    <input
      aria-label="Design URL"
      className="mt-[11px] h-[37px] w-full rounded-none border-2 border-[#929291] bg-[#272822] px-[20px] text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
      placeholder="https://www.figma.com/file/:"
      readOnly
      type="text"
    />

    <div className="mt-[22px] flex gap-[17px] pl-[24px]">
      <button
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
        type="button"
      >
        Awesome
      </button>
      <button
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
        type="button"
      >
        Prepare
      </button>
    </div>

    <span className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
