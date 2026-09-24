import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test component: a static reproduction of the "UI magician Agent"
 * panel from the attached Figma frame. Self-contained — no props, no state.
 */
export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 py-5 font-primary"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings size={15} color="#b5b5b5" aria-hidden />
      </div>

      {/* Collapsed section summary */}
      <div className="mt-4 flex items-center gap-2">
        <FiChevronUp size={10} color="#8b9291" aria-hidden />
        <span className="truncate font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[76px] flex items-center gap-2">
        <FiChevronUp size={12} color="#b2b2b1" aria-hidden />
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-7 flex items-center gap-2">
        <label
          htmlFor="testcard-token"
          className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <FiInfo size={15} color="#a4a4a3" aria-hidden />
      </div>
      <input
        id="testcard-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-2 text-[11.5px] leading-[13.92px] text-[#737470] outline-none placeholder:text-[#737470]"
      />

      {/* Design URL */}
      <div className="mt-3 flex items-center gap-2">
        <label
          htmlFor="testcard-design-url"
          className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <FiInfo size={15} color="#a3a3a2" aria-hidden />
      </div>
      <input
        id="testcard-design-url"
        readOnly
        placeholder="https://www.figma.com/file/"
        className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-2 text-[10.5px] leading-[12.71px] text-[#71726e] outline-none placeholder:text-[#71726e]"
      />

      {/* Actions */}
      <div className="mt-[22px] ml-6 flex gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-[46px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
}

export default TestCard;
