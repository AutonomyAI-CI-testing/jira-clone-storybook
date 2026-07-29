import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { HiChevronUp } from "react-icons/hi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[253px] min-h-screen bg-[#2b2b2b] text-white font-sans flex flex-col px-4 pt-5 pb-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-base font-bold text-white">UI magician Agent</h1>
        <AiOutlineSetting className="text-gray-400 w-5 h-5" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 text-[#c97d50] text-sm mb-10">
        <HiChevronUp className="w-4 h-4 flex-shrink-0" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design */}
      <div className="flex items-center gap-2 mb-5">
        <HiChevronUp className="w-4 h-4 text-white flex-shrink-0" />
        <h2 className="text-sm font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-2">
          <span className="text-xs text-gray-200">Personal Access Token</span>
          <AiOutlineInfoCircle className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-xs text-gray-400 placeholder-gray-600 outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-1 mb-2">
          <span className="text-xs text-gray-200">Design URL</span>
          <AiOutlineInfoCircle className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-xs text-gray-400 placeholder-gray-600 outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-10">
        <button className="flex-1 bg-[#b85c30] hover:bg-[#a34e28] text-white font-semibold text-sm py-2.5 rounded-lg">
          Awesome
        </button>
        <button className="flex-1 bg-[#b85c30] hover:bg-[#a34e28] text-white font-semibold text-sm py-2.5 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-sm font-bold text-white">Recent Breakdowns</h2>
    </div>
  );
}
