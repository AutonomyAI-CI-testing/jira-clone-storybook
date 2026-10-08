import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1e1e1e] px-5 pt-5 pb-16 font-['Inter',sans-serif]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings
        size={16}
        aria-hidden="true"
        className="shrink-0 text-[#cfcfcf]"
      />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <FiChevronUp
        size={10}
        aria-hidden="true"
        className="shrink-0 text-[#8b9291]"
      />
      <span className="min-w-0 truncate text-[11.5px] leading-[13.92px] font-semibold text-[#8b9291]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <FiChevronUp
        size={14}
        aria-hidden="true"
        className="shrink-0 text-[#b2b2b1]"
      />
      <span className="text-[13.5px] leading-[16.34px] font-semibold text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-7">
      <div className="flex items-center gap-2">
        <span className="text-[11.5px] leading-[13.92px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <FiInfo
          size={15}
          aria-hidden="true"
          className="shrink-0 text-[#a4a4a3]"
        />
      </div>
      <input
        type="text"
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-[36px] w-full rounded-[2px] border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] font-semibold text-[#737470] outline-none placeholder:text-[#737470]"
      />
    </div>

    <div className="mt-[11px]">
      <div className="flex items-center gap-2">
        <span className="text-[11.5px] leading-[13.92px] font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <FiInfo
          size={15}
          aria-hidden="true"
          className="shrink-0 text-[#a3a3a2]"
        />
      </div>
      <input
        type="text"
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className="mt-3 h-[37px] w-full rounded-[2px] border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] font-semibold text-[#71726e] outline-none placeholder:text-[#71726e]"
      />
    </div>

    <div className="mt-[22px] flex gap-[17px] pl-6">
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

    <p className="mt-[46px] text-[13.5px] leading-[16.34px] font-semibold text-[#b0b0b0]">
      Recent Breakdowns
    </p>
  </div>
);

export default TestCard;
