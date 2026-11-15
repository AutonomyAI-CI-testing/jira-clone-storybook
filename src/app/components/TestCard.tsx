import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const actionButtonClass =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]";

/**
 * Smoke-test card reproducing the "UI magician Agent" Figma frame.
 * Self-contained: no props, no state, no data.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1c1c1c] p-5 font-primary text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16.34px]">
        UI magician Agent
      </span>
      <HiOutlineCog size={16} />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
      <HiOutlineChevronUp size={10} />
      <span className="text-[11.5px] leading-[13.92px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[62px] flex items-center gap-[5px] text-[#b2b2b1]">
      <HiOutlineChevronUp size={14} />
      <span className="font-primary-bold text-[13.5px] leading-[16.34px]">
        Add New Design
      </span>
    </div>

    <div className="mt-[10px] flex items-center gap-3 text-[#a4a4a3]">
      <span className="text-[11.5px] leading-[13.92px]">
        Personal Access Token
      </span>
      <HiOutlineInformationCircle size={15} />
    </div>
    <input
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[18px] text-[11.5px] leading-[13.92px] text-[#737470] outline-none placeholder:text-[#737470]"
    />

    <div className="mt-[9px] flex items-center gap-3 text-[#a3a3a2]">
      <span className="text-[11.5px] leading-[13.92px]">Design URL</span>
      <HiOutlineInformationCircle size={15} />
    </div>
    <input
      type="text"
      placeholder="https://www.figma.com/file/:"
      className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[18px] text-[10.5px] leading-[12.71px] text-[#71726e] outline-none placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex gap-4 pl-6">
      <button type="button" className={actionButtonClass}>
        Awesome
      </button>
      <button type="button" className={actionButtonClass}>
        Prepare
      </button>
    </div>

    <div className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
