import { HiChevronUp } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] text-white w-72 rounded-lg p-5 font-sans"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-lg font-bold text-white">UI magician Agent</h1>
        <IoSettingsOutline className="text-gray-400 text-xl" />
      </div>

      {/* Hint row */}
      <div className="flex items-center gap-1 mb-8">
        <HiChevronUp className="text-[#b87333] text-sm" />
        <span className="text-[#b87333] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-4">
          <HiChevronUp className="text-white text-base" />
          <h2 className="text-base font-bold text-white">Add New Design</h2>
        </div>

        {/* Personal Access Token field */}
        <div className="mb-3">
          <div className="flex items-center gap-1 mb-1">
            <label className="text-sm text-gray-300">Personal Access Token</label>
            <AiOutlineInfoCircle className="text-gray-400 text-sm" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-500 outline-none"
          />
        </div>

        {/* Design URL field */}
        <div className="mb-5">
          <div className="flex items-center gap-1 mb-1">
            <label className="text-sm text-gray-300">Design URL</label>
            <AiOutlineInfoCircle className="text-gray-400 text-sm" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-500 outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-[#a0522d] hover:bg-[#8b4513] text-white font-semibold py-3 rounded-lg text-sm">
            Awesome
          </button>
          <button className="flex-1 bg-[#a0522d] hover:bg-[#8b4513] text-white font-semibold py-3 rounded-lg text-sm">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-6">
        <h2 className="text-base font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
}
