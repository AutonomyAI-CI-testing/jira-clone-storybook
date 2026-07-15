import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiChevronUp } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

export function TestCard() {
  return (
    <div id="testElem" className="bg-[#252525] text-white p-5 w-[320px] font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-bold">UI magician Agent</span>
        <IoSettingsOutline className="text-white text-xl" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 text-[#c0703a] text-sm mb-8">
        <FiChevronUp className="text-base" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp className="text-white text-base" />
        <span className="text-lg font-bold">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-medium">Personal Access Token</span>
        <AiOutlineInfoCircle className="text-gray-400 text-base" />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full bg-[#333333] border border-[#555555] rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-500 mb-4 outline-none"
        readOnly
      />

      {/* Design URL */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-medium">Design URL</span>
        <AiOutlineInfoCircle className="text-gray-400 text-base" />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="w-full bg-[#333333] border border-[#666666] rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-500 mb-6 outline-none"
        readOnly
      />

      {/* Buttons */}
      <div className="flex gap-4 mb-8 justify-center">
        <button className="bg-[#a0522d] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#8b4513]">
          Awesome
        </button>
        <button className="bg-[#a0522d] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#8b4513]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="text-lg font-bold">Recent Breakdowns</div>
    </div>
  );
}
