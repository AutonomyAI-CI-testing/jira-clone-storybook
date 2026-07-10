import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#1e1e1c] text-white min-h-screen w-full max-w-sm mx-auto p-5 flex flex-col gap-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold">UI magician Agent</span>
        <FiSettings className="text-white text-xl" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-[#c17a4a] text-sm" />
        <span className="text-[#c17a4a] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-white text-xl" />
        <span className="text-2xl font-bold">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium">Personal Access Token</span>
          <FiInfo className="text-gray-400 text-sm" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#2a2a28] border border-[#3a3a38] text-gray-400 placeholder-gray-500 rounded px-3 py-3 text-sm outline-none"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium">Design URL</span>
          <FiInfo className="text-gray-400 text-sm" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#2a2a28] border border-[#3a3a38] text-gray-400 placeholder-gray-500 rounded px-3 py-3 text-sm outline-none"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 justify-center mt-2">
        <button className="bg-[#b85c28] text-white font-semibold px-8 py-3 rounded-lg">
          Awesome
        </button>
        <button className="bg-[#b85c28] text-white font-semibold px-8 py-3 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-6">
        <span className="text-2xl font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
}
