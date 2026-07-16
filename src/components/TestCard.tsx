import { AiOutlineInfoCircle, AiOutlineSetting } from "react-icons/ai";
import { HiChevronUp } from "react-icons/hi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-full max-w-xs rounded-lg p-5"
      style={{ backgroundColor: "#2a2a2a" }}
    >
      {/* Header row */}
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xl font-bold text-white">UI magician Agent</span>
        <AiOutlineSetting size={22} color="#ffffff" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1">
        <HiChevronUp size={16} style={{ color: "#c47a45" }} />
        <span className="text-sm" style={{ color: "#c47a45" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-8" />

      {/* Section heading */}
      <div className="mb-4 flex items-center gap-2">
        <HiChevronUp size={18} color="#ffffff" />
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token label */}
      <div className="mb-1 flex items-center gap-1">
        <span className="text-sm text-white">Personal Access Token</span>
        <AiOutlineInfoCircle size={16} color="#9ca3af" />
      </div>

      {/* PAT input */}
      <input
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mb-3 w-full rounded border border-gray-600 px-3 py-2 text-sm text-gray-300 placeholder-gray-500 outline-none"
        style={{ backgroundColor: "#3a3a3a" }}
      />

      {/* Design URL label */}
      <div className="mb-1 flex items-center gap-1">
        <span className="text-sm text-white">Design URL</span>
        <AiOutlineInfoCircle size={16} color="#9ca3af" />
      </div>

      {/* URL input */}
      <input
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mb-5 w-full rounded border border-gray-600 px-3 py-2 text-sm text-gray-300 placeholder-gray-500 outline-none"
        style={{ backgroundColor: "#3a3a3a" }}
      />

      {/* Buttons row */}
      <div className="mb-8 flex justify-center gap-4">
        <button
          type="button"
          className="cursor-pointer rounded-lg border-none px-6 py-3 font-semibold text-white"
          style={{ backgroundColor: "#a0522d" }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="cursor-pointer rounded-lg border-none px-6 py-3 font-semibold text-white"
          style={{ backgroundColor: "#a0522d" }}
        >
          Prepare
        </button>
      </div>

      {/* Footer heading */}
      <span className="text-xl font-bold text-white">Recent Breakdowns</span>
    </div>
  );
}
