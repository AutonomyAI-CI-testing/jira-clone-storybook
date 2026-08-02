import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#282420] w-[360px] min-h-screen p-5 font-sans text-white"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-2xl font-bold text-white">UI magician Agent</h1>
        <FiSettings size={24} className="text-gray-400" />
      </div>

      {/* Sub-row */}
      <div className="flex items-center gap-1 text-[#c97844] text-sm mb-10">
        <FiChevronUp size={16} />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-5">
          <FiChevronUp size={18} className="text-white" />
          <h2 className="text-xl font-bold text-white">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium text-white">
              Personal Access Token
            </span>
            <FiInfo size={16} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full bg-transparent border border-[#4a4540] rounded-md px-4 py-3 text-gray-400 placeholder-gray-500 text-sm focus:outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium text-white">Design URL</span>
            <FiInfo size={16} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full bg-transparent border border-[#4a4540] rounded-md px-4 py-3 text-gray-400 placeholder-gray-500 text-sm focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 bg-[#b85c2a] text-white font-semibold py-3 px-6 rounded-xl text-base">
            Awesome
          </button>
          <button className="flex-1 bg-[#b85c2a] text-white font-semibold py-3 px-6 rounded-xl text-base">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

export default TestCard;
