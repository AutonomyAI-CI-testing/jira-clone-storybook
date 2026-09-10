import { HiOutlineCog, HiChevronUp } from "react-icons/hi";
import { FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-64 flex-col gap-6 bg-[#1C1D17] p-5 text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <HiOutlineCog size={18} className="text-[#b5b5b5]" />
      </div>

      <div className="flex items-center gap-2">
        <HiChevronUp size={14} className="text-[#8b9291]" />
        <span className="truncate text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <HiChevronUp size={16} className="text-[#b2b2b1]" />
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <span className="text-[11.5px] text-[#a4a4a3]">
              Personal Access Token
            </span>
            <FiInfo size={12} className="text-[#a4a4a3]" />
          </div>
          <div className="rounded-[2px] border-2 border-[#929291] bg-[#272822] px-3 py-2.5">
            <span className="text-[11.5px] text-[#737470]">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <span className="text-[11.5px] text-[#a3a3a2]">Design URL</span>
            <FiInfo size={12} className="text-[#a3a3a2]" />
          </div>
          <div className="rounded-[2px] border border-[#A5ADAD] bg-[#272822] px-3 py-2.5">
            <span className="text-[11.5px] text-[#71726e]">
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        <div className="flex gap-4 pt-2">
          <button
            type="button"
            disabled
            className="h-[37px] w-[85px] cursor-default rounded-[4px] bg-[#843A17] text-[11.5px] font-semibold text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            disabled
            className="h-[37px] w-[85px] cursor-default rounded-[4px] bg-[#843A17] text-[11.5px] font-semibold text-[#8c8078]"
          >
            Prepare
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-4">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
        <div className="h-24" />
      </div>
    </div>
  );
};
