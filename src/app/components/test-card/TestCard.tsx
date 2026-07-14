import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[320px] min-h-screen p-5 flex flex-col gap-4"
      style={{ backgroundColor: "#2a2a2a", color: "#ffffff" }}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold text-white">UI magician Agent</span>
        <FiSettings className="text-white text-xl" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2">
        <FiChevronUp style={{ color: "#c8884a" }} />
        <span className="text-sm" style={{ color: "#c8884a" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-white text-lg font-bold" />
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-white font-medium">
            Personal Access Token
          </span>
          <FiInfo className="text-gray-400 text-sm" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full px-3 py-2 rounded text-sm text-gray-400 outline-none"
          style={{ backgroundColor: "#3a3a3a", border: "1px solid #555" }}
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-white font-medium">Design URL</span>
          <FiInfo className="text-gray-400 text-sm" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full px-3 py-2 rounded text-sm text-gray-400 outline-none"
          style={{ backgroundColor: "#3a3a3a", border: "1px solid #555" }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-2">
        <button
          className="flex-1 py-3 rounded-lg text-white font-semibold text-base"
          style={{ backgroundColor: "#8b4513" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-3 rounded-lg text-white font-semibold text-base"
          style={{ backgroundColor: "#8b4513" }}
        >
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Recent Breakdowns */}
      <div>
        <span className="text-lg font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
}

export default TestCard;
