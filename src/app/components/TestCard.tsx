import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div id="testElem">
      <div className="bg-[#282828] text-white w-[320px] min-h-screen p-5 flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">UI magician Agent</span>
          <FiSettings className="text-gray-400 text-xl" />
        </div>

        {/* Collapse row */}
        <div className="flex items-center gap-2">
          <FiChevronUp className="text-gray-400 text-sm" />
          <span className="text-[#c97a4a] text-sm">From entire frame to a singl...</span>
        </div>

        {/* Add New Design section */}
        <div className="flex flex-col gap-5 mt-4">
          <div className="flex items-center gap-2">
            <FiChevronUp className="text-white text-base" />
            <span className="text-lg font-bold">Add New Design</span>
          </div>

          {/* Personal Access Token */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-300 font-medium">Personal Access Token</label>
              <FiInfo className="text-gray-400 text-sm" />
            </div>
            <input
              type="text"
              placeholder="figd_xxxxxxxxxxxxxxxxx"
              readOnly
              className="bg-[#1e1e1e] border border-zinc-600 rounded px-3 py-2.5 text-sm text-gray-400 placeholder-gray-500 w-full outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-300 font-medium">Design URL</label>
              <FiInfo className="text-gray-400 text-sm" />
            </div>
            <input
              type="text"
              placeholder="https://www.figma.com/file/:"
              readOnly
              className="bg-[#1e1e1e] border border-zinc-600 rounded px-3 py-2.5 text-sm text-gray-400 placeholder-gray-500 w-full outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 mt-1">
            <button className="bg-[#b5521b] text-white text-sm font-semibold rounded-lg px-6 py-3 flex-1">
              Awesome
            </button>
            <button className="bg-[#b5521b] text-white text-sm font-semibold rounded-lg px-6 py-3 flex-1">
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div className="mt-4">
          <span className="text-lg font-bold">Recent Breakdowns</span>
        </div>
      </div>
    </div>
  );
}

export default TestCard;
