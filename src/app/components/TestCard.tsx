import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Static reproduction of the "UI magician Agent" panel from the reference
 * Figma frame. Self-contained: no props, no data, no state.
 */
export const TestCard = () => (
  <div id="testElem" className="bg-black p-1">
    <div className="w-[254px] rounded-[8px] bg-[#1e1e1e] px-5 pt-5 pb-12">
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <HiOutlineCog aria-hidden="true" className="text-[16px] text-[#b5b5b5]" />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <HiOutlineChevronUp
          aria-hidden="true"
          className="text-[12px] text-[#b2b2b1]"
        />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-1.5">
        <HiOutlineChevronUp
          aria-hidden="true"
          className="text-[14px] text-[#b2b2b1]"
        />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex items-center gap-5">
        <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <HiOutlineInformationCircle
          aria-hidden="true"
          className="text-[15px] text-[#a4a4a3]"
        />
      </div>
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full rounded-none border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470]"
      />

      <div className="mt-[11px] flex items-center gap-5">
        <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <HiOutlineInformationCircle
          aria-hidden="true"
          className="text-[15px] text-[#a3a3a2]"
        />
      </div>
      <input
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] h-[37px] w-full rounded-none border-2 border-[#929291] bg-[#272822] px-[19px] text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
      />

      <div className="mt-[22px] ml-[24px] flex gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-[47px] text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  </div>
);
