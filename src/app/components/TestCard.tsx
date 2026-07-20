import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="min-h-screen bg-[#1e1e1e] p-5 text-white">
      {/* Header row */}
      <div className="mb-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <FiSettings size={22} className="text-gray-300" />
      </div>

      {/* Collapsible indicator row */}
      <div className="mb-8 flex items-center gap-2">
        <FiChevronUp size={16} className="text-gray-400" />
        <span className="text-sm text-[#b07040]">
          From entire frame to a singl...
        </span>
      </div>

      {/* "Add New Design" section header */}
      <div className="mb-6 flex items-center gap-2">
        <FiChevronUp size={18} className="text-white" />
        <h2 className="text-lg font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token input */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-sm font-medium text-gray-200">
            Personal Access Token
          </label>
          <FiInfo size={15} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-gray-600 bg-[#2a2a2a] px-3 py-3 text-sm text-gray-300 placeholder-gray-500 outline-none focus:border-gray-400"
        />
      </div>

      {/* Design URL input */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-sm font-medium text-gray-200">
            Design URL
          </label>
          <FiInfo size={15} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-gray-500 bg-[#2a2a2a] px-3 py-3 text-sm text-gray-300 placeholder-gray-500 outline-none focus:border-gray-400"
        />
      </div>

      {/* Action buttons */}
      <div className="mb-10 flex gap-3">
        <button className="flex-1 rounded-lg bg-[#b5451b] py-3 text-sm font-semibold text-white">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b5451b] py-3 text-sm font-semibold text-white">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns footer */}
      <div>
        <h2 className="text-lg font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};
