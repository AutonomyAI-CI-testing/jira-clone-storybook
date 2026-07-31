import { Settings, ChevronUp, Info } from "lucide-react";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#222220] text-white min-h-screen w-full max-w-sm mx-auto p-5 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <Settings className="w-6 h-6 text-gray-400" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 text-[#c8794a] text-sm mb-10">
        <ChevronUp className="w-4 h-4" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <ChevronUp className="w-5 h-5 text-white" />
          <h2 className="text-lg font-semibold text-white">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm text-gray-300">
              Personal Access Token
            </label>
            <Info className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-3 text-gray-400 text-sm placeholder-gray-500 focus:outline-none"
            readOnly
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm text-gray-300">Design URL</label>
            <Info className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-3 text-gray-400 text-sm placeholder-gray-500 focus:outline-none"
            readOnly
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            className="flex-1 text-white font-medium py-3 rounded-lg"
            style={{ backgroundColor: "#b05a2f" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 text-white font-medium py-3 rounded-lg"
            style={{ backgroundColor: "#b05a2f" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
