import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[#000000] px-[20px] py-[20px] font-['Inter',sans-serif] font-semibold"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings aria-hidden className="h-[16px] w-[14px] text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <FiChevronUp
        aria-hidden
        className="h-[5px] w-[8px] shrink-0 text-[#8b9291]"
      />
      <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[75px] flex items-center gap-[11px]">
      <FiChevronUp
        aria-hidden
        className="h-[8px] w-[12px] shrink-0 text-[#b2b2b1]"
      />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px]">
      <div className="flex items-center gap-[23px]">
        <label
          htmlFor="testElem-token"
          className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <FiInfo aria-hidden className="h-[15px] w-[15px] text-[#a4a4a3]" />
      </div>
      <input
        id="testElem-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[12px] h-[36px] w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#737470] outline-none placeholder:text-[#737470]"
      />
    </div>

    <div className="mt-[11px]">
      <div className="flex items-center gap-[20px]">
        <label
          htmlFor="testElem-url"
          className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <FiInfo aria-hidden className="h-[15px] w-[15px] text-[#a3a3a2]" />
      </div>
      <input
        id="testElem-url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[20px] text-[10.5px] leading-[12.71px] text-[#71726e] outline-none placeholder:text-[#71726e]"
      />
    </div>

    <div className="mt-[22px] flex gap-[17px] pl-[24px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-[46px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
