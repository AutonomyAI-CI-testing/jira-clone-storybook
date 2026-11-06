import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineSettings } from "react-icons/md";
import { RiArrowUpSLine } from "react-icons/ri";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1C1D17] px-5 pb-[62px] pt-5 font-primary-bold"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <MdOutlineSettings size={16} className="text-[#b5b5b5]" />
      </div>

      <div className="mt-[18px] flex items-center gap-2 text-[11.5px] leading-[13.92px] text-[#8b9291]">
        <RiArrowUpSLine size={14} />
        <span>From entire frame to a singl...</span>
      </div>

      <div className="mt-[77px] flex items-center gap-2 text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        <RiArrowUpSLine size={14} />
        <span>Add New Design</span>
      </div>

      <div className="mt-[28px] flex items-center gap-2 text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        <span>Personal Access Token</span>
        <AiOutlineInfoCircle size={15} />
      </div>

      <div className="mt-3 flex h-9 w-[211px] items-center border border-[#a5adad] bg-[#272822] px-5 text-[11.5px] leading-[13.92px] text-[#737470]">
        <span>figd_xxxxxxxxxxxxxxxxxx</span>
      </div>

      <div className="mt-[11px] flex items-center gap-2 text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        <span>Design URL</span>
        <AiOutlineInfoCircle size={15} />
      </div>

      <div className="mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] leading-[12.71px] text-[#71726e]">
        <span>https://www.figma.com/file/:</span>
      </div>

      <div className="mt-[22px] flex justify-end gap-[17px]">
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

      <div className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
