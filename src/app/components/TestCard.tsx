import { IoSettingsOutline } from "react-icons/io5";
import { HiChevronUp } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] text-white min-h-screen w-full max-w-sm mx-auto p-5 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <IoSettingsOutline className="w-7 h-7 text-gray-400" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 text-[#c0783a] text-sm mb-8">
        <HiChevronUp className="w-4 h-4" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-5">
          <HiChevronUp className="w-4 h-4 text-[#c0783a]" />
          <h2 className="text-lg font-bold text-white">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-sm font-semibold text-white">Personal Access Token</span>
            <AiOutlineInfoCircle className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full bg-[#3a3a3a] border border-[#555] text-gray-400 text-sm rounded px-3 py-3 placeholder-gray-500 outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-sm font-semibold text-white">Design URL</span>
            <AiOutlineInfoCircle className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full bg-[#3a3a3a] border border-[#555] text-gray-400 text-sm rounded px-3 py-3 placeholder-gray-500 outline-none"
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-4">
          <button className="flex-1 bg-[#b5541e] hover:bg-[#c46025] text-white font-semibold py-3 rounded-lg text-sm transition-colors">
            Awesome
          </button>
          <button className="flex-1 bg-[#b5541e] hover:bg-[#c46025] text-white font-semibold py-3 rounded-lg text-sm transition-colors">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <h2 className="text-lg font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
}
