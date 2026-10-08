import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

// Both action buttons share the same look in the design.
const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col overflow-auto bg-[#000000] px-[20px] pt-[20px] pb-[20px] text-left font-[Inter,sans-serif]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings className="text-[#b5b5b5]" size={16} />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <FiChevronUp className="shrink-0 text-[#8b9291]" size={10} />
      <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[60px] flex items-center gap-[5px]">
      <FiChevronUp className="shrink-0 text-[#b2b2b1]" size={12} />
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[12px] flex items-center gap-[8px]">
      <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <FiInfo className="shrink-0 text-[#a4a4a3]" size={15} />
    </div>
    <input
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-[6px] h-[36px] w-[211px] border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] font-semibold text-[#737470] outline-none placeholder:text-[#737470]"
    />

    <div className="mt-[11px] flex items-center gap-[8px]">
      <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <FiInfo className="shrink-0 text-[#a3a3a2]" size={15} />
    </div>
    <input
      type="text"
      placeholder="https://www.figma.com/file/:"
      className="mt-[6px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-[20px] text-[10.5px] font-semibold leading-[12.71px] text-[#71726e] outline-none placeholder:text-[#71726e]"
    />

    <div className="mt-[24px] flex items-center gap-[17px]">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <div className="mt-[50px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
