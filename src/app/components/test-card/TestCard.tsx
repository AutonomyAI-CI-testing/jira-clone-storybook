import { FiSettings, FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#282828] text-white p-6 w-[380px] min-h-screen font-sans"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <FiSettings className="text-white text-xl" />
      </div>

      {/* Collapsed section */}
      <div className="flex items-center gap-2 mb-8">
        <FiChevronUp className="text-[#A0522D] text-sm" />
        <span className="text-[#A0522D] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-6">
        <FiChevronUp className="text-white text-lg font-bold" />
        <h2 className="text-lg font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm text-white font-medium">
            Personal Access Token
          </label>
          <AiOutlineInfoCircle className="text-gray-400 text-base" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#333333] border border-[#4a4a4a] rounded px-3 py-3 text-gray-400 text-sm placeholder-gray-500 outline-none"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm text-white font-medium">Design URL</label>
          <AiOutlineInfoCircle className="text-gray-400 text-base" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#333333] border border-[#4a4a4a] rounded px-3 py-3 text-gray-400 text-sm placeholder-gray-500 outline-none"
          readOnly
        />
      </div>

      {/* Action buttons */}
      <div className="flex justify-center gap-4 mb-10">
        <button className="bg-[#A0522D] hover:bg-[#8B4513] text-white font-semibold rounded-xl px-8 py-3">
          Awesome
        </button>
        <button className="bg-[#A0522D] hover:bg-[#8B4513] text-white font-semibold rounded-xl px-8 py-3">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <h2 className="text-lg font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

export default TestCard;
