import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { HiChevronUp } from "react-icons/hi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#1e1e1e] text-white p-5 rounded-lg max-w-sm w-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-bold text-lg">UI magician Agent</span>
        <AiOutlineSetting className="text-gray-400 text-xl" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 mt-2">
        <HiChevronUp className="text-gray-400 text-sm" />
        <span className="text-[#b05a2a] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-8">
        <div className="flex items-center gap-2 mb-5">
          <HiChevronUp className="text-white text-base" />
          <span className="font-bold text-base">Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-1 mb-1">
            <label className="text-sm text-gray-300">Personal Access Token</label>
            <AiOutlineInfoCircle className="text-gray-400 text-sm" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-500 focus:outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-1 mb-1">
            <label className="text-sm text-gray-300">Design URL</label>
            <AiOutlineInfoCircle className="text-gray-400 text-sm" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-500 focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-[#b05a2a] text-white font-medium py-3 rounded-lg">
            Awesome
          </button>
          <button className="flex-1 bg-[#b05a2a] text-white font-medium py-3 rounded-lg">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <span className="font-bold text-base">Recent Breakdowns</span>
      </div>
    </div>
  );
}
