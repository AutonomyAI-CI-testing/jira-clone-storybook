import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { BsChevronUp } from "react-icons/bs";

export function TestCard() {
  return (
    <div id="testElem" style={{ backgroundColor: "#2a2a2a" }} className="min-h-screen w-full p-6 text-white font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <AiOutlineSetting className="text-gray-300 text-2xl" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-10">
        <BsChevronUp className="text-amber-700 text-sm" />
        <span className="text-amber-700 text-sm truncate">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <BsChevronUp className="text-white text-base" />
          <h2 className="text-lg font-bold">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm text-gray-200">Personal Access Token</label>
            <AiOutlineInfoCircle className="text-gray-400 text-base" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            style={{ backgroundColor: "#3a3a3a", borderColor: "#666" }}
            className="w-full px-3 py-3 rounded border text-gray-400 placeholder-gray-500 text-sm outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm text-gray-200">Design URL</label>
            <AiOutlineInfoCircle className="text-gray-400 text-base" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            style={{ backgroundColor: "#3a3a3a", borderColor: "#666" }}
            className="w-full px-3 py-3 rounded border text-gray-400 placeholder-gray-500 text-sm outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            style={{ backgroundColor: "#c0622a" }}
            className="flex-1 py-3 rounded-xl text-white font-semibold text-sm"
          >
            Awesome
          </button>
          <button
            style={{ backgroundColor: "#c0622a" }}
            className="flex-1 py-3 rounded-xl text-white font-semibold text-sm"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8">
        <h2 className="text-lg font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
}
