import { FaCog, FaChevronUp, FaInfoCircle } from "react-icons/fa";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#1a1a1a] w-64 rounded-lg p-4 flex flex-col"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-[#b5b5b5] font-semibold text-base">
          UI magician Agent
        </span>
        <FaCog className="text-[#b5b5b5] text-lg" />
      </div>

      {/* Chevron subtitle */}
      <div className="flex items-center gap-1 mt-1">
        <FaChevronUp className="text-[#8b9291] text-xs" />
        <span className="text-[#8b9291] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mt-8">
        <FaChevronUp className="text-[#b2b2b1] text-sm" />
        <span className="text-[#b2b2b1] font-semibold text-lg">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-4">
        <div className="flex items-center gap-1">
          <span className="text-[#a4a4a3] text-sm">Personal Access Token</span>
          <FaInfoCircle className="text-[#a4a4a3] text-xs" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-1 w-full bg-[#272822] border border-[#929291] rounded px-3 py-2 text-[#737470] placeholder:text-[#737470] text-sm outline-none"
        />
      </div>

      {/* Design URL field */}
      <div className="mt-3">
        <div className="flex items-center gap-1">
          <span className="text-[#a3a3a2] text-sm">Design URL</span>
          <FaInfoCircle className="text-[#a3a3a2] text-xs" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="mt-1 w-full bg-[#272822] border border-[#a5adad] rounded px-3 py-2 text-[#71726e] placeholder:text-[#71726e] text-sm outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-4 justify-center">
        <button className="bg-[#843a17] text-[#8c8078] rounded-lg px-6 py-2 font-medium text-sm">
          Awesome
        </button>
        <button className="bg-[#843a17] text-[#8c8078] rounded-lg px-6 py-2 font-medium text-sm">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8">
        <span className="text-[#b0b0b0] font-semibold text-lg">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
