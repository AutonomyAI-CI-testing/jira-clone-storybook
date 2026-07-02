import { IoSettingsOutline } from "react-icons/io5";
import { BiChevronUp } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      className="bg-[#2a2520] p-5 w-full max-w-xs"
    >
      {/* Header row */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <IoSettingsOutline className="text-[#b5b5b5] text-base" />
      </div>

      {/* Subtext row */}
      <div className="flex items-center gap-1 mb-8">
        <BiChevronUp className="text-[#8b9291] text-sm" />
        <span className="text-xs font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-1 mb-4">
        <BiChevronUp className="text-[#b2b2b1] text-sm" />
        <span className="text-sm font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-3">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-xs font-semibold text-[#a4a4a3]">
            Personal Access Token
          </span>
          <AiOutlineInfoCircle className="text-[#a4a4a3] text-xs" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#272822] border border-[#a5adad] p-2 text-xs text-[#737470] placeholder-[#737470] outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mb-5">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-xs font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <AiOutlineInfoCircle className="text-[#a3a3a2] text-xs" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#272822] border-2 border-[#929291] p-2 text-xs text-[#71726e] placeholder-[#71726e] outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-8">
        <button
          className="bg-[#843a17] text-xs font-semibold text-[#8c8078] px-5 py-2 rounded"
        >
          Awesome
        </button>
        <button
          className="bg-[#843a17] text-xs font-semibold text-[#8c8078] px-5 py-2 rounded"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-sm font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
