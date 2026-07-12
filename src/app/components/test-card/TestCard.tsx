import { IoSettingsOutline } from "react-icons/io5";
import { RiArrowUpSLine } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function TestCard() {
  return (
    <div id="testElem" className="bg-[#2a2a2a] min-h-screen w-full p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-white font-bold text-xl">UI magician Agent</h1>
        <IoSettingsOutline className="text-white text-2xl" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2">
        <RiArrowUpSLine className="text-[#d4875a] text-lg" />
        <span className="text-[#d4875a] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <RiArrowUpSLine className="text-white text-2xl" />
        <h2 className="text-white font-bold text-2xl">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-white text-sm font-medium">Personal Access Token</label>
          <AiOutlineInfoCircle className="text-white text-base" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#333] border border-[#555] rounded text-gray-400 placeholder-gray-500 px-3 py-3 text-sm outline-none"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-white text-sm font-medium">Design URL</label>
          <AiOutlineInfoCircle className="text-white text-base" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#333] border border-[#555] rounded text-gray-400 placeholder-gray-500 px-3 py-3 text-sm outline-none"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-2">
        <button className="flex-1 bg-[#a0522d] text-white font-semibold py-4 rounded-xl hover:bg-[#8b4523] transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#a0522d] text-white font-semibold py-4 rounded-xl hover:bg-[#8b4523] transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-6">
        <h2 className="text-white font-bold text-2xl">Recent Breakdowns</h2>
      </div>
    </div>
  );
}
