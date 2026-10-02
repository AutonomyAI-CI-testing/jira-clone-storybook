import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 py-5 font-[Inter,ui-sans-serif,system-ui,sans-serif] font-semibold"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <FiSettings size={14} aria-hidden className="text-[#b5b5b5]" />
      </div>

      {/* Collapsed row */}
      <div className="mt-4 flex items-center gap-2">
        <FiChevronUp size={10} aria-hidden className="shrink-0 text-[#8b9291]" />
        <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section heading */}
      <div className="mt-20 flex items-center gap-2">
        <FiChevronUp size={12} aria-hidden className="shrink-0 text-[#b2b2b1]" />
        <h2 className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token */}
      <div className="mt-8 flex items-center gap-2">
        <label
          htmlFor="test-card-token"
          className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <FiInfo size={15} aria-hidden className="shrink-0 text-[#a4a4a3]" />
      </div>
      <input
        id="test-card-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-[37px] w-full border border-[#a5adad] bg-[#272822] px-4 text-[11.5px] leading-[13.92px] text-[#b5b5b5] outline-none placeholder:text-[#737470]"
      />

      {/* Design URL */}
      <div className="mt-7 flex items-center gap-2">
        <label
          htmlFor="test-card-url"
          className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <FiInfo size={15} aria-hidden className="shrink-0 text-[#a3a3a2]" />
      </div>
      <input
        id="test-card-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-4 text-[10.5px] leading-[12.71px] text-[#b5b5b5] outline-none placeholder:text-[#71726e]"
      />

      {/* Buttons */}
      <div className="mt-7 flex justify-center gap-4">
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

      {/* Footer heading */}
      <h2 className="mt-14 text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
}

export default TestCard;
