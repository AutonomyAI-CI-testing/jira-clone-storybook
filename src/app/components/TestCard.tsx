import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { BsChevronUp } from "react-icons/bs";

export function TestCard() {
  return (
    <div id="testElem" style={{ backgroundColor: "#2a2a2a" }} className="w-[375px] min-h-screen p-5 text-white font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <AiOutlineSetting size={24} className="text-gray-300" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-8">
        <BsChevronUp size={14} className="text-gray-400" />
        <span className="text-sm" style={{ color: "#a08060" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <BsChevronUp size={16} className="text-white" />
          <h2 className="text-lg font-bold">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm text-gray-200">Personal Access Token</label>
            <AiOutlineInfoCircle size={16} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full px-3 py-3 rounded border border-gray-600 text-gray-400 placeholder-gray-500 text-sm outline-none"
            style={{ backgroundColor: "#333" }}
            readOnly
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm text-gray-200">Design URL</label>
            <AiOutlineInfoCircle size={16} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full px-3 py-3 rounded border border-gray-600 text-gray-400 placeholder-gray-500 text-sm outline-none"
            style={{ backgroundColor: "#333" }}
            readOnly
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            className="flex-1 py-3 rounded-lg text-white font-semibold text-base"
            style={{ backgroundColor: "#c0622a" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-3 rounded-lg text-white font-semibold text-base"
            style={{ backgroundColor: "#c0622a" }}
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

export default TestCard;
