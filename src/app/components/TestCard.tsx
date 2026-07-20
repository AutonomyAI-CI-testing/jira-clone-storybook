import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#1e1e1e] p-5 font-sans text-white w-full min-h-screen">
      {/* Header row */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-bold text-white">UI magician Agent</h1>
        <FiSettings className="text-gray-400" size={22} />
      </div>

      {/* Collapsible row */}
      <div className="flex items-center gap-2 mb-10">
        <FiChevronUp className="text-gray-400" size={16} />
        <span className="text-[#b07050] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Section header */}
      <div className="flex items-center gap-2 mb-5">
        <FiChevronUp className="text-white" size={18} />
        <h2 className="text-xl font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium text-gray-200">Personal Access Token</span>
          <FiInfo className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#2a2a2a] border border-gray-600 rounded px-3 py-3 text-sm text-gray-400 placeholder-gray-500 outline-none focus:border-gray-400"
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium text-gray-200">Design URL</span>
          <FiInfo className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#2a2a2a] border border-gray-500 rounded px-3 py-3 text-sm text-gray-400 placeholder-gray-500 outline-none focus:border-gray-400"
        />
      </div>

      {/* Button row */}
      <div className="flex gap-4 mb-10">
        <button className="flex-1 bg-[#b5451b] text-white font-semibold rounded-lg px-6 py-3 hover:bg-[#9e3c17] transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#b5451b] text-white font-semibold rounded-lg px-6 py-3 hover:bg-[#9e3c17] transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-lg font-bold text-white">Recent Breakdowns</h2>
    </div>
  );
};

export default TestCard;
