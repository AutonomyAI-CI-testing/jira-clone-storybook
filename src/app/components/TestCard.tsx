import { HiOutlineInformationCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiArrowUpSLine } from "react-icons/ri";

const labelClass = "font-primary-bold text-[11.5px] leading-[13.92px]";
const placeholderClass = "font-primary text-[11.5px] leading-[13.92px]";
const fieldClass = "mt-[11px] flex w-full items-center bg-[#272822]";
const buttonClass =
  "flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-[#1C1D17] font-primary"
    >
      <div className="h-[9px] w-full bg-[#161613]" />

      <div className="flex flex-col px-5 pb-[60px]">
        <div className="mt-[11px] flex items-center justify-between">
          <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
            UI magician Agent
          </span>
          <IoSettingsOutline
            size={16}
            className="text-[#b5b5b5]"
            aria-hidden="true"
          />
        </div>

        <div className="mt-[18px] flex items-center gap-[9px]">
          <RiArrowUpSLine
            size={12}
            className="shrink-0 text-[#8b9291]"
            aria-hidden="true"
          />
          <span className="truncate font-primary text-[11.5px] leading-[13.92px] text-[#8b9291]">
            From entire frame to a singl...
          </span>
        </div>

        <div className="mt-[83px] flex items-center gap-[5px]">
          <RiArrowUpSLine
            size={14}
            className="shrink-0 text-[#b2b2b1]"
            aria-hidden="true"
          />
          <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        <div className="mt-[28px] flex items-center gap-[28px]">
          <span className={`${labelClass} text-[#a4a4a3]`}>
            Personal Access Token
          </span>
          <HiOutlineInformationCircle
            size={15}
            className="shrink-0 text-[#a4a4a3]"
            aria-hidden="true"
          />
        </div>

        <div
          className={`${fieldClass} h-[36px] border border-[#a5adad] px-[19px]`}
        >
          <span className={`${placeholderClass} text-[#737470]`}>
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>

        <div className="mt-[11px] flex items-center gap-[18px]">
          <span className={`${labelClass} text-[#a3a3a2]`}>Design URL</span>
          <HiOutlineInformationCircle
            size={15}
            className="shrink-0 text-[#a3a3a2]"
            aria-hidden="true"
          />
        </div>

        <div
          className={`${fieldClass} h-[37px] border-2 border-[#929291] px-[20px]`}
        >
          <span className="font-primary text-[10.5px] leading-[12.71px] text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>

        <div className="mt-[22px] flex justify-end gap-[17px]">
          <div className={buttonClass}>
            <span className={`${labelClass} text-[#8c8078]`}>Awesome</span>
          </div>
          <div className={buttonClass}>
            <span className={`${labelClass} text-[#8c8078]`}>Prepare</span>
          </div>
        </div>

        <div className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
          Recent Breakdowns
        </div>
      </div>
    </div>
  );
};

export default TestCard;
