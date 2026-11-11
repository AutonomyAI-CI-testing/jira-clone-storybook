import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const labelClass =
  "text-[11.5px] font-semibold leading-[13.92px] tracking-normal";

const fieldClass =
  "w-full bg-[#272822] font-semibold outline-none placeholder:font-semibold";

export default function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#000000] px-5 pb-[62px] pt-5 font-['Inter',system-ui,sans-serif]"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings size={16} className="text-[#b5b5b5]" />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px]">
        <FiChevronUp size={10} className="shrink-0 text-[#8b9291]" />
        <span className={`${labelClass} text-[#8b9291]`}>
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[10px]">
        <FiChevronUp size={12} className="shrink-0 text-[#b2b2b1]" />
        <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex items-center justify-between">
        <label htmlFor="testElem-token" className={`${labelClass} text-[#a4a4a3]`}>
          Personal Access Token
        </label>
        <FiInfo size={15} className="shrink-0 text-[#a4a4a3]" />
      </div>
      <input
        id="testElem-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={`mt-3 h-9 border border-[#a5adad] px-[19px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470] ${fieldClass}`}
      />

      <div className="mt-[11px] flex items-center gap-[22px]">
        <label htmlFor="testElem-url" className={`${labelClass} text-[#a3a3a2]`}>
          Design URL
        </label>
        <FiInfo size={15} className="shrink-0 text-[#a3a3a2]" />
      </div>
      <input
        id="testElem-url"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className={`mt-[11px] h-[37px] border-2 border-[#929291] px-5 text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e] ${fieldClass}`}
      />

      <div className="mt-[22px] flex gap-[17px] pl-[24px]">
        <button
          type="button"
          className={`h-[37px] w-[85px] rounded bg-[#843a17] text-[#8c8078] ${labelClass}`}
        >
          Awesome
        </button>
        <button
          type="button"
          className={`h-[37px] w-[85px] rounded bg-[#843a17] text-[#8c8078] ${labelClass}`}
        >
          Prepare
        </button>
      </div>

      <div className="mt-[47px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
}
