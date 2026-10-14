import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col bg-[#000000] px-5 pt-5 font-primary-bold text-[11.5px] leading-[13.92px]"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings size={16} className="text-[#b5b5b5]" />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px]">
        <FiChevronUp size={12} className="text-[#8b9291]" />
        <span className="text-[#8b9291]">From entire frame to a singl...</span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px]">
        <FiChevronUp size={14} className="text-[#b2b2b1]" />
        <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex items-center gap-3">
        <span className="text-[#a4a4a3]">Personal Access Token</span>
        <FiInfo size={15} className="text-[#a4a4a3]" />
      </div>
      <div className="mt-3 flex h-9 w-full items-center border border-[#a5adad] bg-[#272822] px-[19px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </div>

      <div className="mt-3 flex items-center gap-3">
        <span className="text-[#a3a3a2]">Design URL</span>
        <FiInfo size={15} className="text-[#a3a3a2]" />
      </div>
      <div className="mt-3 flex h-[37px] w-full items-center border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] leading-[12.71px] text-[#71726e]">
        https://www.figma.com/file/:
      </div>

      <div className="mt-[22px] flex gap-[17px] pl-6">
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <span className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
