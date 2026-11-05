import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col overflow-hidden bg-[#1C1D17] font-['Inter',sans-serif] text-[11.5px] font-semibold text-[#b5b5b5]"
  >
    <div className="h-[9px] w-full shrink-0 bg-[#161613]" />

    <div className="flex flex-col px-5 pt-[11px]">
      {/* Title row */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings size={16} className="shrink-0 text-[#b5b5b5]" />
      </div>

      {/* Collapsed row */}
      <div className="mt-[18px] flex items-center gap-[9px]">
        <FiChevronUp size={10} className="shrink-0 text-[#8b9291]" />
        <span className="truncate leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section heading */}
      <div className="mt-[77px] flex items-center gap-[11px]">
        <FiChevronUp size={12} className="shrink-0 text-[#b2b2b1]" />
        <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal access token */}
      <div className="mt-[28px] flex items-center justify-between">
        <span className="leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <FiInfo size={15} className="shrink-0 text-[#a4a4a3]" />
      </div>
      <div className="mt-[12px] flex h-[36px] w-full items-center border border-[#a5adad] bg-[#272822] px-[19px]">
        <span className="truncate leading-[13.92px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design url */}
      <div className="mt-[11px] flex items-center justify-between">
        <span className="leading-[13.92px] text-[#a3a3a2]">Design URL</span>
        <FiInfo size={15} className="shrink-0 text-[#a3a3a2]" />
      </div>
      <div className="mt-[11px] flex h-[37px] w-full items-center border-2 border-[#929291] bg-[#272822] px-[18px]">
        <span className="truncate text-[10.5px] leading-[12.71px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Actions */}
      <div className="mt-[22px] flex justify-center gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Trailing heading */}
      <div className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  </div>
);
