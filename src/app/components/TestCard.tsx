import { LuSettings, LuChevronUp, LuInfo } from "react-icons/lu";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-80 bg-[#2a2a2a] rounded-lg p-5 flex flex-col gap-4 text-white"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <LuSettings className="w-6 h-6 text-gray-300" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 text-[#b05a2f] text-sm">
        <LuChevronUp className="w-4 h-4" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center gap-2">
          <LuChevronUp className="w-4 h-4 text-white" />
          <h2 className="text-lg font-semibold">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-300">Personal Access Token</label>
            <LuInfo className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-500 focus:outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-300">Design URL</label>
            <LuInfo className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-500 focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-2">
          <button className="flex-1 bg-[#b05a2f] text-white font-semibold py-3 rounded-lg text-base">
            Awesome
          </button>
          <button className="flex-1 bg-[#b05a2f] text-white font-semibold py-3 rounded-lg text-base">
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
};

export default TestCard;
