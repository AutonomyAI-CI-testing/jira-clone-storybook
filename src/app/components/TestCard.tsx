import { FaCog, FaChevronUp, FaInfoCircle } from "react-icons/fa";

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1e1e1e", minWidth: "320px", maxWidth: "420px" }}
      className="text-white w-full p-5 flex flex-col gap-5 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">UI magician Agent</h1>
        <FaCog className="text-gray-400 text-2xl" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2" style={{ color: "#c27d50" }}>
        <FaChevronUp className="text-xs flex-shrink-0" />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Add New Design section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <FaChevronUp className="text-sm" />
          <h2 className="text-xl font-semibold">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-300">Personal Access Token</span>
            <FaInfoCircle className="text-gray-400 text-sm" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full bg-transparent border border-gray-600 rounded-md px-3 py-3 text-gray-400 placeholder-gray-500 text-sm outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-300">Design URL</span>
            <FaInfoCircle className="text-gray-400 text-sm" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full bg-transparent border border-gray-600 rounded-md px-3 py-3 text-gray-400 placeholder-gray-500 text-sm outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-1">
          <button
            style={{ backgroundColor: "#b5541e" }}
            className="flex-1 text-white font-medium py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            Awesome
          </button>
          <button
            style={{ backgroundColor: "#b5541e" }}
            className="flex-1 text-white font-medium py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Recent Breakdowns */}
      <h2 className="text-xl font-semibold">Recent Breakdowns</h2>
    </div>
  );
}

export default TestCard;
