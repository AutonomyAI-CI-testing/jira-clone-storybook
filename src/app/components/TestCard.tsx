import { BiChevronUp, BiInfoCircle } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="h-[508px] w-[254px] bg-[#1C1D17] px-[20px] pt-[20px]"
    >
      <div className="flex items-start justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <IoSettingsOutline size={16} className="text-[#b5b5b5]" />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
        <BiChevronUp size={10} className="text-[#8b9291]" />
        <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
        <BiChevronUp size={14} className="text-[#b2b2b1]" />
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex items-center gap-[23px]">
        <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <BiInfoCircle size={15} className="text-[#a4a4a3]" />
      </div>
      <div className="mt-[12px] flex h-[36px] w-full items-center border border-[#A5ADAD] bg-[#272822] px-[19px]">
        <span className="font-primary text-[11.5px] leading-[13.92px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      <div className="mt-[11px] flex items-center gap-[10px]">
        <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <BiInfoCircle size={15} className="text-[#a3a3a2]" />
      </div>
      <div className="mt-[11px] flex h-[37px] w-full items-center border border-[#929291] bg-[#272822] px-[20px]">
        <span className="font-primary text-[10.5px] leading-[12.71px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      <div className="ml-[24px] mt-[22px] flex gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843A17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843A17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
