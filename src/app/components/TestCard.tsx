import { IoSettingsOutline, IoChevronUp } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function TestCard() {
  return (
    <div id="testElem" className="bg-[#2a2a2a] rounded-lg p-5 w-[300px] flex flex-col gap-4">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-white font-bold text-lg">UI magician Agent</span>
        <IoSettingsOutline className="text-white text-xl" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 text-[#c47a50] text-sm">
        <IoChevronUp className="text-[#c47a50]" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mt-2">
        <IoChevronUp className="text-white text-lg" />
        <span className="text-white font-bold text-base">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <label className="text-white text-sm font-medium">Personal Access Token</label>
          <AiOutlineInfoCircle className="text-gray-400 text-sm" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          readOnly
          className="bg-[#1e1e1e] border border-gray-600 rounded px-3 py-2 text-gray-400 text-sm placeholder-gray-500 w-full outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <label className="text-white text-sm font-medium">Design URL</label>
          <AiOutlineInfoCircle className="text-gray-400 text-sm" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="bg-[#1e1e1e] border border-gray-600 rounded px-3 py-2 text-gray-400 text-sm placeholder-gray-500 w-full outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 justify-center mt-1">
        <button className="bg-[#b05a2f] text-white font-semibold rounded-lg px-6 py-3 flex-1">
          Awesome
        </button>
        <button className="bg-[#b05a2f] text-white font-semibold rounded-lg px-6 py-3 flex-1">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-2">
        <span className="text-white font-bold text-base">Recent Breakdowns</span>
      </div>
    </div>
  );
}
