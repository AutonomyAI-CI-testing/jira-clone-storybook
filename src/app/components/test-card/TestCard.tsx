import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#282420] rounded-xl p-5 w-[320px] flex flex-col gap-4 text-white"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <FiSettings className="text-gray-400 w-6 h-6" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 text-[#c17a4a] text-sm">
        <FiChevronUp className="w-4 h-4" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-2" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="w-5 h-5 text-white" />
        <h2 className="text-lg font-bold">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1.5">
          <label className="text-sm font-medium text-white">Personal Access Token</label>
          <FiInfo className="w-4 h-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-transparent border border-gray-600 rounded-md px-3 py-2.5 text-sm text-gray-400 placeholder-gray-600 focus:outline-none focus:border-gray-400 w-full"
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1.5">
          <label className="text-sm font-medium text-white">Design URL</label>
          <FiInfo className="w-4 h-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-transparent border border-gray-600 rounded-md px-3 py-2.5 text-sm text-gray-400 placeholder-gray-600 focus:outline-none focus:border-gray-400 w-full"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-1">
        <button className="flex-1 bg-[#b85c2a] hover:bg-[#c96633] text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#b85c2a] hover:bg-[#c96633] text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="h-2" />

      {/* Recent Breakdowns */}
      <h2 className="text-lg font-bold">Recent Breakdowns</h2>
    </div>
  );
};

export default TestCard;
