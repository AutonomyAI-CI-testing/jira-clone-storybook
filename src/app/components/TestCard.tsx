import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] p-6 min-w-[300px] max-w-[380px] w-full rounded-lg"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="text-white font-bold text-xl">UI magician Agent</span>
        <FiSettings className="text-white text-xl" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 mt-2">
        <FiChevronUp className="text-[#c87941] text-sm" />
        <span className="text-[#c87941] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mt-8">
        <FiChevronUp className="text-white text-lg" />
        <span className="text-white font-bold text-lg">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-white text-sm">Personal Access Token</span>
          <FiInfo className="text-white text-sm" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#333333] border border-[#555555] rounded text-gray-400 placeholder-gray-500 p-2 text-sm outline-none"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mt-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-white text-sm">Design URL</span>
          <FiInfo className="text-white text-sm" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#333333] border border-[#555555] rounded text-gray-400 placeholder-gray-500 p-2 text-sm outline-none"
          readOnly
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-5">
        <button className="bg-[#a0522d] text-white rounded px-6 py-2 font-medium text-sm hover:bg-[#8b4423] transition-colors">
          Awesome
        </button>
        <button className="bg-[#a0522d] text-white rounded px-6 py-2 font-medium text-sm hover:bg-[#8b4423] transition-colors">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <span className="text-white font-bold text-lg">Recent Breakdowns</span>
      </div>
    </div>
  );
}

export default TestCard;
