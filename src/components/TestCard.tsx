import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] text-white min-h-screen p-5 max-w-sm mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <FiSettings className="text-gray-400 text-xl" />
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-2 mb-8">
        <FiChevronUp className="text-[#c8744a] text-sm" />
        <span className="text-[#c8744a] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-5">
        <FiChevronUp className="text-white text-lg" />
        <h2 className="text-xl font-bold">Add New Design</h2>
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
          className="w-full bg-[#3a3a3a] border border-[#555] text-gray-300 placeholder-gray-500 rounded px-3 py-2 text-sm outline-none"
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
          className="w-full bg-[#3a3a3a] border border-[#555] text-gray-300 placeholder-gray-500 rounded px-3 py-2 text-sm outline-none"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-10">
        <button className="bg-[#b5522a] text-white font-semibold px-6 py-3 rounded-lg flex-1">
          Awesome
        </button>
        <button className="bg-[#b5522a] text-white font-semibold px-6 py-3 rounded-lg flex-1">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-xl font-bold">Recent Breakdowns</h2>
    </div>
  );
};

export default TestCard;
