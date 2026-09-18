import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded-[3px] bg-[#161511] px-5 py-5 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings className="h-4 w-4 text-[#b5b5b5]" aria-hidden />
      </div>

      {/* Collapsible hint row */}
      <div className="mt-[15px] flex items-center gap-2">
        <FiChevronUp className="h-3 w-3 text-[#8b9291]" aria-hidden />
        <span className="truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-[75px] flex items-center gap-2">
        <FiChevronUp className="h-3 w-3 text-[#b2b2b1]" aria-hidden />
        <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-6 flex items-center gap-2">
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <FiInfo className="h-3 w-3 text-[#a4a4a3]" aria-hidden />
      </div>
      <div className="mt-2 rounded-[2px] border-2 border-[#929291] bg-[#272822] px-3 py-3">
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL */}
      <div className="mt-4 flex items-center gap-2">
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <FiInfo className="h-3 w-3 text-[#a3a3a2]" aria-hidden />
      </div>
      <div className="mt-2 rounded-[2px] border border-[#a5adad] bg-[#272822] px-3 py-3">
        <span className="text-[10.5px] font-semibold leading-[12.71px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Actions */}
      <div className="mt-4 flex justify-center gap-4">
        <button
          type="button"
          className="rounded bg-[#843a17] px-5 py-2.5 text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded bg-[#843a17] px-5 py-2.5 text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-[75px]">
        <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
