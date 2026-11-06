import { MdInfoOutline, MdSettings } from "react-icons/md";
import { RiArrowDropUpLine } from "react-icons/ri";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1C1D17] px-5 pb-[62px] pt-5 font-primary-bold"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <MdSettings size={16} className="text-[#b5b5b5]" aria-hidden="true" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <RiArrowDropUpLine
        size={14}
        className="text-[#b5b5b5]"
        aria-hidden="true"
      />
      <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[7px]">
      <RiArrowDropUpLine
        size={16}
        className="text-[#b2b2b1]"
        aria-hidden="true"
      />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center gap-2">
      <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <MdInfoOutline size={15} className="text-[#a4a4a3]" aria-hidden="true" />
    </div>

    <div className="mt-3 flex h-9 w-[211px] items-center border border-[#a5adad] bg-[#272822] px-[18px]">
      <span className="text-[11.5px] leading-[13.92px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </span>
    </div>

    <div className="mt-3 flex items-center gap-2">
      <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <MdInfoOutline size={15} className="text-[#a3a3a2]" aria-hidden="true" />
    </div>

    <div className="mt-3 flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] px-[17px]">
      <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
        https://www.figma.com/file/:
      </span>
    </div>

    <div className="mt-6 flex gap-[17px] pl-6">
      <button
        type="button"
        className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <div className="mt-[46px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
