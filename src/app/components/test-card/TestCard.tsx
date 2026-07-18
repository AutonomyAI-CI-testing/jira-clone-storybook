import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RiArrowDropUpLine } from "react-icons/ri";

export function TestCard() {
  return (
    <div id="testElem" className="bg-[#2a2a2a] min-h-screen text-gray-200 p-6 font-sans">
      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xl font-bold text-gray-100">UI magician Agent</span>
        <IoSettingsOutline className="text-gray-400 text-2xl" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 text-[#c1622f]">
        <RiArrowDropUpLine className="text-xl" />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Vertical spacer */}
      <div className="mt-10" />

      {/* Add New Design section heading */}
      <div className="flex items-center gap-1 mb-5">
        <RiArrowDropUpLine className="text-gray-200 text-2xl" />
        <span className="text-lg font-bold text-gray-100">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-1">
          <label className="text-sm font-semibold text-gray-200">Personal Access Token</label>
          <AiOutlineInfoCircle className="text-gray-400 text-base" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#333333] border border-[#555] text-gray-400 placeholder-gray-500 rounded px-3 py-2 text-sm outline-none"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <label className="text-sm font-semibold text-gray-200">Design URL</label>
          <AiOutlineInfoCircle className="text-gray-400 text-base" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#333333] border border-[#555] text-gray-400 placeholder-gray-500 rounded px-3 py-2 text-sm outline-none"
          readOnly
        />
      </div>

      {/* Buttons row */}
      <div className="flex gap-4 justify-center mb-10">
        <button className="bg-[#c1622f] text-white font-semibold rounded-lg px-8 py-3 text-base">
          Awesome
        </button>
        <button className="bg-[#c1622f] text-white font-semibold rounded-lg px-8 py-3 text-base">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <span className="text-lg font-bold text-gray-100">Recent Breakdowns</span>
      </div>
    </div>
  );
}
