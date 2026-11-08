import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Static, self-contained replica of the "UI magician Agent" Figma frame.
 * Takes no props and holds no state.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="h-[508px] w-[254px] overflow-hidden bg-black font-[Inter] text-[#b5b5b5]"
  >
    <div className="h-[9px] w-full bg-[#151515]" />

    <div className="px-5">
      <div className="flex items-center justify-between pt-[11px]">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <HiOutlineCog size={16} className="text-[#b5b5b5]" />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <HiChevronUp size={12} className="text-[#8b9291]" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-2">
        <HiChevronUp size={14} className="text-[#b2b2b1]" />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex items-center gap-2">
        <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <HiOutlineInformationCircle size={15} className="text-[#a4a4a3]" />
      </div>
      <input
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[12px] h-[36px] w-[211px] border border-[#a5adad] bg-[#272822] pl-[19px] text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470]"
      />

      <div className="mt-[11px] flex items-center gap-2">
        <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <HiOutlineInformationCircle size={15} className="text-[#a3a3a2]" />
      </div>
      <input
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] pl-[19px] text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
      />

      <div className="ml-[24px] mt-[22px] flex gap-[17px]">
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

      <h2 className="mt-[47px] text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  </div>
);
