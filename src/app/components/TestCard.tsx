import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#1e1e1e] min-h-screen w-full p-5 font-sans">

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-white font-bold text-xl">UI magician Agent</h1>
        <FiSettings className="text-gray-400" size={22} />
      </div>

      {/* Collapsible row */}
      <div className="flex items-center gap-2 mb-10">
        <FiChevronUp className="text-gray-400" size={16} />
        <span className="text-[#b07a5a] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Section header */}
      <div className="flex items-center gap-2 mb-5">
        <FiChevronUp className="text-white" size={18} />
        <h2 className="text-white font-bold text-lg">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-white text-sm font-medium">Personal Access Token</label>
          <FiInfo className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#2a2a2a] border border-gray-600 rounded px-3 py-2.5 text-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400"
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-white text-sm font-medium">Design URL</label>
          <FiInfo className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#2a2a2a] border border-gray-500 rounded px-3 py-2.5 text-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-10 justify-center">
        <button className="bg-[#b5451b] hover:bg-[#9e3c17] text-white font-semibold text-sm px-8 py-3 rounded-lg transition-colors">
          Awesome
        </button>
        <button className="bg-[#b5451b] hover:bg-[#9e3c17] text-white font-semibold text-sm px-8 py-3 rounded-lg transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-white font-bold text-lg">Recent Breakdowns</h2>
    </div>
  );
};

export default TestCard;
