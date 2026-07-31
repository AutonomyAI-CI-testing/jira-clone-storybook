import { FiSettings, FiInfo, FiChevronUp } from "react-icons/fi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] text-white w-[380px] min-h-screen mx-auto p-5 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <FiSettings className="text-gray-300 text-xl" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 mb-10 text-[#b87c4e]">
        <FiChevronUp className="text-sm" />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design */}
      <div className="mb-2">
        <div className="flex items-center gap-2 mb-5">
          <FiChevronUp className="text-white text-base" />
          <h2 className="text-lg font-bold text-white">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm text-gray-300">Personal Access Token</label>
            <FiInfo className="text-gray-400 text-sm" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full bg-transparent border border-gray-500 rounded px-3 py-3 text-gray-400 placeholder-gray-500 text-sm focus:outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm text-gray-300">Design URL</label>
            <FiInfo className="text-gray-400 text-sm" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full bg-transparent border border-gray-500 rounded px-3 py-3 text-gray-400 placeholder-gray-500 text-sm focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 bg-[#b05a2a] text-white font-semibold py-3 px-4 rounded-lg text-base">
            Awesome
          </button>
          <button className="flex-1 bg-[#b05a2a] text-white font-semibold py-3 px-4 rounded-lg text-base">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <h2 className="text-lg font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
