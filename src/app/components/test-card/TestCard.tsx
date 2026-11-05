import { BsChevronUp } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";

/**
 * Static panel reproduced from the Figma frame "Test Page - Simple" (node 2-2).
 * Self-contained: no props, no state, no data.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col bg-[#1C1D17] font-primary"
    >
      <div className="h-[9px] w-full bg-[#161613]" />

      <div className="flex flex-1 flex-col px-5">
        <div className="mt-[11px] flex items-start justify-between">
          <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
            UI magician Agent
          </span>
          <MdOutlineSettings size={16} className="text-[#b5b5b5]" />
        </div>

        <div className="mt-[18px] flex items-center gap-2">
          <BsChevronUp size={8} className="text-[#8b9291]" />
          <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
            From entire frame to a singl...
          </span>
        </div>

        <div className="mt-[75px] flex items-center gap-1.5">
          <BsChevronUp size={12} className="text-[#b2b2b1]" />
          <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        <div className="mt-[28px] flex items-center gap-3">
          <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <HiOutlineInformationCircle size={15} className="text-[#a4a4a3]" />
        </div>
        <div className="mt-[12px] flex h-[36px] w-[211px] items-center border border-[#a5adad] bg-[#272822] px-[19px]">
          <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>

        <div className="mt-[11px] flex items-center gap-3">
          <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
            Design URL
          </span>
          <HiOutlineInformationCircle size={15} className="text-[#a3a3a2]" />
        </div>
        <div className="mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] px-5">
          <span className="font-primary-bold text-[10.5px] leading-[12.71px] text-[#71726e]">
            https://www.figma.com/file/
          </span>
        </div>

        <div className="mt-[22px] flex gap-[17px] pl-6">
          <div className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17]">
            <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]">
              Awesome
            </span>
          </div>
          <div className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17]">
            <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]">
              Prepare
            </span>
          </div>
        </div>

        <div className="mt-[46px]">
          <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
            Recent Breakdowns
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
