import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#1a1a1a] p-5 w-full max-w-xs rounded-lg font-sans"
    >
      {/* Header row */}
      <div className="flex justify-between items-center">
        <span className="text-white font-bold text-lg">UI magician Agent</span>
        <FiSettings className="text-white" size={20} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 mt-2">
        <FiChevronUp className="text-[#c0592a]" size={16} />
        <span className="text-[#c0592a] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-8" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-white" size={18} />
        <span className="text-white font-bold text-lg">Add New Design</span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-2 mt-4">
        <span className="text-white text-sm">Personal Access Token</span>
        <FiInfo className="text-white" size={14} />
      </div>

      {/* Personal Access Token input */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded text-white px-3 py-2 mt-1 text-sm outline-none"
        style={{ color: "white", caretColor: "white" }}
        readOnly
      />

      {/* Design URL label */}
      <div className="flex items-center gap-2 mt-4">
        <span className="text-white text-sm">Design URL</span>
        <FiInfo className="text-white" size={14} />
      </div>

      {/* Design URL input */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded text-white px-3 py-2 mt-1 text-sm outline-none"
        style={{ color: "white", caretColor: "white" }}
        readOnly
      />

      {/* Buttons */}
      <div className="flex gap-3 mt-5">
        <button className="bg-[#c0592a] text-white rounded-lg px-5 py-2 font-medium text-sm flex-1">
          Awesome
        </button>
        <button className="bg-[#c0592a] text-white rounded-lg px-5 py-2 font-medium text-sm flex-1">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8">
        <span className="text-white font-bold text-lg">Recent Breakdowns</span>
      </div>
    </div>
  );
}
