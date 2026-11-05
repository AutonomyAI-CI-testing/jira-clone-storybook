import { HiOutlineInformationCircle } from "react-icons/hi";
import { RiArrowUpSLine, RiSettings3Line } from "react-icons/ri";

const buttonClass =
  "h-[37px] w-[85px] rounded bg-[#843A17] font-primary text-[11.5px] text-[#8c8078]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col bg-[#1C1D17] px-5 pt-5"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <RiSettings3Line size={16} className="text-[#b5b5b5]" />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
        <RiArrowUpSLine size={10} className="text-[#8b9291]" />
        <span className="font-primary text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[75px] flex items-center gap-[5px] pl-[6px]">
        <RiArrowUpSLine size={12} className="text-[#b2b2b1]" />
        <span className="font-primary-bold text-[13.5px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex items-center gap-[8px]">
        <span className="font-primary text-[11.5px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <HiOutlineInformationCircle size={15} className="text-[#a4a4a3]" />
      </div>

      <div className="mt-[12px] flex h-[36px] w-[211px] items-center border border-[#a5adad] bg-[#272822] pl-[19px] font-primary text-[11.5px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </div>

      <div className="mt-[11px] flex items-center gap-[8px]">
        <span className="font-primary text-[11.5px] text-[#a3a3a2]">
          Design URL
        </span>
        <HiOutlineInformationCircle size={15} className="text-[#a3a3a2]" />
      </div>

      <div className="mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] pl-5 font-primary text-[10.5px] text-[#71726e]">
        https://www.figma.com/file/:
      </div>

      <div className="mt-[22px] flex justify-end gap-[17px]">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <span className="mt-[47px] font-primary-bold text-[13.5px] text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
