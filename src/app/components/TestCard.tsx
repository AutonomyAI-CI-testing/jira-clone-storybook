import { FaCog, FaChevronUp, FaInfoCircle } from "react-icons/fa";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#1a1a1a] p-4 font-sans"
      style={{ width: "254px" }}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
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

      {/* Spacer */}
      <div className="mt-8" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <FaChevronUp className="text-[#b2b2b1] text-sm" />
        <span className="text-[#b2b2b1] text-lg font-bold">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-4">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-[#a4a4a3] text-sm">Personal Access Token</span>
          <FaInfoCircle className="text-[#a4a4a3] text-xs" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-[#272822] border border-[#929291] rounded text-[#737470] placeholder-[#737470] w-full p-2 text-sm outline-none"
        />
      </div>

      {/* Design URL field */}
      <div className="mt-3">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-[#a3a3a2] text-sm">Design URL</span>
          <FaInfoCircle className="text-[#a3a3a2] text-xs" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-[#272822] border border-[#a5adad] rounded text-[#71726e] placeholder-[#71726e] w-full p-2 text-sm outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-5 justify-center">
        <button className="bg-[#843a17] text-[#8c8078] rounded-lg px-6 py-2 font-medium">
          Awesome
        </button>
        <button className="bg-[#843a17] text-[#8c8078] rounded-lg px-6 py-2 font-medium">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8">
        <span className="text-[#b0b0b0] text-lg font-semibold">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
