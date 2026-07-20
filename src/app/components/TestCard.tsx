import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#1e1e1e] min-h-screen w-full max-w-sm p-5 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-white font-bold text-lg">UI magician Agent</h1>
        <FiSettings className="text-gray-400" size={22} />
      </div>

      {/* Collapsible row */}
      <div className="flex items-center gap-2 mb-8">
        <FiChevronUp className="text-gray-400" size={16} />
        <span className="text-[#b07a60] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section Header: Add New Design */}
      <div className="flex items-center gap-2 mb-5">
        <FiChevronUp className="text-white" size={18} />
        <h2 className="text-white font-bold text-xl">Add New Design</h2>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-white text-sm font-medium">
            Personal Access Token
          </label>
          <FiInfo className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#2a2a2a] border border-gray-500 rounded text-gray-400 placeholder-gray-500 text-sm px-3 py-3 outline-none focus:border-gray-400"
        />
      </div>

      {/* Design URL field */}
      <div className="mb-7">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-white text-sm font-medium">Design URL</label>
          <FiInfo className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#2a2a2a] border border-gray-500 rounded text-gray-400 placeholder-gray-500 text-sm px-3 py-3 outline-none focus:border-gray-400"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-10 justify-center">
        <button className="bg-[#b5451b] hover:bg-[#c94f1f] text-white font-semibold text-sm px-8 py-3 rounded-lg transition-colors">
          Awesome
        </button>
        <button className="bg-[#b5451b] hover:bg-[#c94f1f] text-white font-semibold text-sm px-8 py-3 rounded-lg transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <h2 className="text-white font-bold text-xl">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
