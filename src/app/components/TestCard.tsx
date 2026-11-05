import { HiInformationCircle } from "react-icons/hi";
import { MdKeyboardArrowUp, MdSettings } from "react-icons/md";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1C1D17] pb-[62px] font-['Inter',sans-serif]"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <MdSettings size={16} className="text-[#b5b5b5]" aria-hidden="true" />
      </div>

      {/* Collapsible summary row */}
      <div className="mt-[18px] flex items-center gap-[9px] pl-[23px]">
        <MdKeyboardArrowUp
          size={12}
          className="text-[#8b9291]"
          aria-hidden="true"
        />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[77px] flex items-center gap-[5px] pl-[26px]">
        <MdKeyboardArrowUp
          size={14}
          className="text-[#b2b2b1]"
          aria-hidden="true"
        />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-7 flex items-center gap-[19px] px-5 text-[11.5px] font-semibold text-[#a4a4a3]">
        <span>Personal Access Token</span>
        <HiInformationCircle size={15} aria-hidden="true" />
      </div>
      <input
        type="text"
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="ml-5 mt-3 h-[36px] w-[211px] border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470]"
      />

      {/* Design URL */}
      <div className="mt-[11px] flex items-center gap-[19px] px-5 text-[11.5px] font-semibold text-[#a3a3a2]">
        <span>Design URL</span>
        <HiInformationCircle size={15} aria-hidden="true" />
      </div>
      <input
        type="text"
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="ml-5 mt-[11px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
      />

      {/* Actions */}
      <div className="mt-[22px] flex gap-[17px] pl-[44px]">
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

      {/* Recent Breakdowns */}
      <h2 className="mt-[47px] px-5 text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
