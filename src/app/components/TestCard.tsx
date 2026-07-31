import { AiOutlineInfoCircle, AiOutlineSetting } from "react-icons/ai";
import { FiChevronUp } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2420" }}
      className="w-80 min-h-screen flex flex-col p-5 font-sans text-white"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-xl font-semibold">UI magician Agent</h1>
        <AiOutlineSetting className="text-gray-400 text-2xl" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 mb-10" style={{ color: "#c4703e" }}>
        <FiChevronUp className="text-sm" />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-5">
          <FiChevronUp className="text-white text-base" />
          <h2 className="text-lg font-semibold">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium">Personal Access Token</span>
            <AiOutlineInfoCircle className="text-gray-400 text-base" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            style={{ backgroundColor: "#1e1a18" }}
            className="w-full border border-gray-600 rounded px-3 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-gray-400"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium">Design URL</span>
            <AiOutlineInfoCircle className="text-gray-400 text-base" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            style={{ backgroundColor: "#1e1a18" }}
            className="w-full border border-gray-600 rounded px-3 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-gray-400"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            style={{ backgroundColor: "#b85c2a" }}
            className="flex-1 text-white font-medium py-3 px-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            Awesome
          </button>
          <button
            style={{ backgroundColor: "#b85c2a" }}
            className="flex-1 text-white font-medium py-3 px-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

export default TestCard;
