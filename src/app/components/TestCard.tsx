import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Static reproduction of the "UI magician Agent" frame.
 * Smoke test only: self-contained, no props, approximate spacing and colour.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 pb-5 pt-5 font-['Inter',sans-serif] font-semibold"
    >
      <div className="flex items-start justify-between">
        <span className="text-[13.5px] leading-[16px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <IoSettingsOutline size={16} className="text-[#a5a5a5]" />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px]">
        <IoChevronUpOutline size={10} className="text-[#8b9291]" />
        <span className="truncate text-[11.5px] leading-[14px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[86px] flex items-center gap-[5px]">
        <IoChevronUpOutline size={12} className="text-[#b2b2b1]" />
        <span className="text-[13.5px] leading-[16px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex items-center gap-[8px]">
        <span className="text-[11.5px] leading-[14px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <IoInformationCircleOutline size={15} className="text-[#a4a4a3]" />
      </div>

      <div className="mt-[12px] flex h-[36px] items-center border border-[#a5adad] bg-[#272822] px-[19px]">
        <span className="text-[11.5px] leading-[14px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      <div className="mt-[11px] flex items-center gap-[8px]">
        <span className="text-[11.5px] leading-[14px] text-[#a3a3a2]">
          Design URL
        </span>
        <IoInformationCircleOutline size={15} className="text-[#a3a3a2]" />
      </div>

      <div className="mt-[11px] flex h-[37px] items-center border-2 border-[#929291] bg-[#272822] px-[18px]">
        <span className="text-[10.5px] leading-[13px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      <div className="mt-[22px] flex gap-[17px] pl-[4px]">
        <div className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17]">
          <span className="text-[11.5px] leading-[14px] text-[#8c8078]">
            Awesome
          </span>
        </div>
        <div className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17]">
          <span className="text-[11.5px] leading-[14px] text-[#8c8078]">
            Prepare
          </span>
        </div>
      </div>

      <div className="mt-[46px]">
        <span className="text-[13.5px] leading-[16px] text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
