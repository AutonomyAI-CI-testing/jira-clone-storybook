import { BsChevronUp } from "react-icons/bs";
import { MdOutlineInfo, MdOutlineSettings } from "react-icons/md";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1C1D17] font-primary-bold text-[#b5b5b5]"
    >
      <div className="h-[9px] w-full bg-[#161613]" />

      <div className="px-[20px] pb-[62px] pt-[11px]">
        <div className="flex items-center justify-between">
          <span className="text-[13.5px] leading-[16.34px]">
            UI magician Agent
          </span>
          <MdOutlineSettings
            size={16}
            aria-hidden="true"
            className="shrink-0 text-[#b5b5b5]"
          />
        </div>

        <div className="mt-[18px] flex items-center gap-[9px]">
          <BsChevronUp
            size={10}
            aria-hidden="true"
            className="shrink-0 text-[#8b9291]"
          />
          <span className="min-w-0 truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
            From entire frame to a singl...
          </span>
        </div>

        <div className="mt-[77px] flex items-center gap-[5px]">
          <BsChevronUp
            size={12}
            aria-hidden="true"
            className="shrink-0 text-[#b2b2b1]"
          />
          <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        <div className="mt-[28px] flex items-center gap-[14px]">
          <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <MdOutlineInfo
            size={15}
            aria-hidden="true"
            className="shrink-0 text-[#a4a4a3]"
          />
        </div>
        <div className="mt-[12px] flex h-[36px] items-center border border-[color:#a5adad] bg-[#272822] px-[18px]">
          <span className="text-[11.5px] leading-[13.92px] text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>

        <div className="mt-[11px] flex items-center gap-[10px]">
          <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
            Design URL
          </span>
          <MdOutlineInfo
            size={15}
            aria-hidden="true"
            className="shrink-0 text-[#a3a3a2]"
          />
        </div>
        <div className="mt-[11px] flex h-[37px] items-center border-2 border-[color:#929291] bg-[#272822] px-[18px]">
          <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>

        <div className="mt-[22px] flex justify-end gap-[17px]">
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
          >
            Prepare
          </button>
        </div>

        <div className="mt-[46px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
          Recent Breakdowns
        </div>
      </div>
    </div>
  );
};
