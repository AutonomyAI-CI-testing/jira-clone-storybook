import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] text-white w-80 min-h-screen p-5 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <FiSettings className="text-gray-400 w-5 h-5" />
      </div>

      {/* Hint row */}
      <div className="flex items-center gap-1 mb-10">
        <FiChevronUp className="text-[#b87333] w-4 h-4 flex-shrink-0" />
        <span className="text-[#b87333] text-sm truncate">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-5">
          <FiChevronUp className="text-white w-4 h-4 flex-shrink-0" />
          <span className="text-lg font-bold text-white">Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-1 mb-2">
            <label className="text-sm text-gray-300">
              Personal Access Token
            </label>
            <FiInfo className="text-gray-400 w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full bg-transparent border border-gray-500 rounded px-3 py-3 text-gray-400 text-sm placeholder-gray-500 outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-1 mb-2">
            <label className="text-sm text-gray-300">Design URL</label>
            <FiInfo className="text-gray-400 w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full bg-transparent border border-gray-500 rounded px-3 py-3 text-gray-400 text-sm placeholder-gray-500 outline-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="bg-[#a0522d] hover:bg-[#8b4513] text-white font-semibold py-3 rounded-lg flex-1 transition-colors">
            Awesome
          </button>
          <button className="bg-[#a0522d] hover:bg-[#8b4513] text-white font-semibold py-3 rounded-lg flex-1 transition-colors">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-lg font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};

export default TestCard;
