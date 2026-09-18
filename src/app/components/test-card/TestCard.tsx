import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { FaChevronUp } from "react-icons/fa";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="max-w-sm rounded bg-[#1c1d17] p-5 font-sans text-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[15px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <AiOutlineSetting className="text-xl text-[#b5b5b5]" />
      </div>

      {/* Collapsible hint row */}
      <div className="mt-4 flex items-center gap-2">
        <FaChevronUp className="text-xs text-[#8b9291]" />
        <span className="text-xs font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-8 flex items-center gap-2">
        <FaChevronUp className="text-xs text-[#b2b2b1]" />
        <span className="text-[15px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-4">
        <div className="mb-1 flex items-center gap-1">
          <span className="text-xs font-semibold text-[#a4a4a3]">
            Personal Access Token
          </span>
          <AiOutlineInfoCircle className="text-xs text-[#a4a4a3]" />
        </div>
        <div className="rounded border border-[#a5adad] bg-[#272822] px-3 py-2 text-xs text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </div>
      </div>

      {/* Design URL */}
      <div className="mt-4">
        <div className="mb-1 flex items-center gap-1">
          <span className="text-xs font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <AiOutlineInfoCircle className="text-xs text-[#a3a3a2]" />
        </div>
        <div className="rounded border-2 border-[#929291] bg-[#272822] px-3 py-2 text-xs text-[#71726e]">
          https://www.figma.com/file/:
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-3">
        <div className="flex-1 rounded bg-[#843a17] px-4 py-2 text-center text-xs font-semibold text-[#8c8078]">
          Awesome
        </div>
        <div className="flex-1 rounded bg-[#843a17] px-4 py-2 text-center text-xs font-semibold text-[#8c8078]">
          Prepare
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8">
        <span className="text-[15px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
