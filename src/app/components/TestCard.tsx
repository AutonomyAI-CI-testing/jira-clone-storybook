import { FaChevronUp } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdSettings } from "react-icons/md";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#1C1D17] pb-[62px] font-primary text-[#b5b5b5]"
  >
    <div className="h-[9px] w-full bg-[#161613]" />

    <div className="flex flex-col px-[20px]">
      <div className="mt-[11px] flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16px]">
          UI magician Agent
        </span>
        <MdSettings size={16} aria-hidden="true" />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
        <FaChevronUp size={9} aria-hidden="true" />
        <span className="truncate font-primary-bold text-[11.5px] leading-[14px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
        <FaChevronUp size={12} aria-hidden="true" />
        <span className="font-primary-bold text-[13.5px] leading-[16px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex items-center gap-2">
        <span className="font-primary-bold text-[11.5px] leading-[14px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <IoInformationCircleOutline size={15} aria-hidden="true" />
      </div>

      <div className="mt-[11px] flex h-[36px] w-[211px] items-center border border-[#a5adad] bg-[#272822] pl-[19px]">
        <span className="font-primary-bold text-[11.5px] leading-[14px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      <div className="mt-[11px] flex items-center gap-2">
        <span className="font-primary-bold text-[11.5px] leading-[14px] text-[#a3a3a2]">
          Design URL
        </span>
        <IoInformationCircleOutline size={15} aria-hidden="true" />
      </div>

      <div className="mt-[10px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] pl-[18px]">
        <span className="font-primary-bold text-[10.5px] leading-[13px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      <div className="mt-[22px] flex gap-[17px] pl-[24px]">
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-[47px] font-primary-bold text-[13.5px] leading-[16px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  </div>
);
