import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="min-h-screen bg-[#1e1e1e] p-6 font-sans">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <FiSettings className="text-gray-400" size={22} />
      </div>

      {/* Subtitle row */}
      <div className="mb-10 flex items-center gap-2">
        <FiChevronUp className="text-gray-400" size={16} />
        <span className="text-sm text-[#b45309]">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mb-6 flex items-center gap-2">
        <FiChevronUp className="text-white" size={20} />
        <h2 className="text-2xl font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-sm font-semibold text-gray-300">
            Personal Access Token
          </label>
          <FiInfo className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded-sm border border-gray-600 bg-[#2a2a2a] px-3 py-3 text-sm text-gray-400 placeholder-gray-500 outline-none"
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-sm font-semibold text-gray-300">Design URL</label>
          <FiInfo className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded-sm border border-gray-600 bg-[#2a2a2a] px-3 py-3 text-sm text-gray-400 placeholder-gray-500 outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="mb-12 flex gap-4">
        <button className="flex-1 rounded-lg bg-[#b45309] px-6 py-3 text-base font-semibold text-white">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#92400e] px-6 py-3 text-base font-semibold text-white">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <h2 className="text-xl font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};
