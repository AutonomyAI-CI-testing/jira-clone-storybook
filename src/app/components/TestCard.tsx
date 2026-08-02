import { HiCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#282828] text-white min-h-screen w-full max-w-xs p-5 font-sans flex flex-col gap-4"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <HiCog className="w-6 h-6 text-gray-300" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 text-[#b85c38] text-sm">
        <HiChevronUp className="w-4 h-4 flex-shrink-0" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-4 mt-6">
        <div className="flex items-center gap-2">
          <HiChevronUp className="w-4 h-4 text-white" />
          <h2 className="text-lg font-semibold">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <label className="text-sm text-gray-200">Personal Access Token</label>
            <HiInformationCircle className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxx"
            className="w-full bg-transparent border border-[#555] rounded px-3 py-2.5 text-gray-400 text-sm placeholder-gray-600 focus:outline-none"
            readOnly
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <label className="text-sm text-gray-200">Design URL</label>
            <HiInformationCircle className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-transparent border border-[#555] rounded px-3 py-2.5 text-gray-400 text-sm placeholder-gray-600 focus:outline-none"
            readOnly
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-1">
          <button className="flex-1 bg-[#b85c38] hover:bg-[#a05030] text-white font-medium py-3 rounded-xl">
            Awesome
          </button>
          <button className="flex-1 bg-[#b85c38] hover:bg-[#a05030] text-white font-medium py-3 rounded-xl">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

export default TestCard;
