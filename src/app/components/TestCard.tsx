import { HiChevronUp, HiOutlineInformationCircle } from "react-icons/hi";
import { MdSettings } from "react-icons/md";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] overflow-hidden bg-[#1C1D17] font-['Inter',sans-serif] font-semibold"
    >
      <div className="h-[9px] w-full bg-[#161613]" />

      <div className="px-5 pb-[62px] pt-[11px]">
        {/* Header */}
        <div className="flex items-start justify-between">
          <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
            UI magician Agent
          </span>
          <MdSettings size={16} className="text-[#b5b5b5]" />
        </div>

        {/* Collapsible row */}
        <div className="mt-[18px] flex items-center gap-2">
          <HiChevronUp size={12} className="text-[#8b9291]" />
          <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
            From entire frame to a singl...
          </span>
        </div>

        {/* Add New Design */}
        <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
          <HiChevronUp size={14} className="text-[#b2b2b1]" />
          <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mt-[28px] flex items-center gap-[24px]">
          <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <HiOutlineInformationCircle size={15} className="text-[#a4a4a3]" />
        </div>
        <input
          readOnly
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-[12px] h-[36px] w-[211px] border border-[#a5adad] bg-[#272822] px-[18px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
        />

        {/* Design URL */}
        <div className="mt-[11px] flex items-center gap-[7px]">
          <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
            Design URL
          </span>
          <HiOutlineInformationCircle size={15} className="text-[#a3a3a2]" />
        </div>
        <input
          readOnly
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/:"
          className="mt-[11px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-[18px] text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
        />

        {/* Buttons */}
        <div className="mt-[22px] flex gap-[17px] pl-[24px]">
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

        {/* Recent Breakdowns */}
        <h2 className="mt-[46px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
