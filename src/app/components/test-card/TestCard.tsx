import { IoSettingsOutline, IoChevronUp } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      className="bg-[#1a1a1a] min-h-screen w-full max-w-sm px-5 py-6 font-sans"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-white text-xl font-semibold">UI magician Agent</span>
        <IoSettingsOutline className="text-gray-400" size={24} />
      </div>

      {/* 2. Collapsed row */}
      <div className="flex items-center gap-2 mb-10">
        <IoChevronUp className="text-[#c8956c]" size={16} />
        <span className="text-[#c8956c] text-sm">From entire frame to a singl...</span>
      </div>

      {/* 3. Add New Design heading */}
      <div className="flex items-center gap-2 mb-6">
        <IoChevronUp className="text-white" size={18} />
        <span className="text-white text-lg font-semibold">Add New Design</span>
      </div>

      {/* 4. Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-gray-300 text-sm font-medium">Personal Access Token</span>
          <AiOutlineInfoCircle className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className="w-full bg-[#2a2a2a] border border-[#555] rounded px-3 py-2 text-gray-300 placeholder-gray-500 text-sm outline-none focus:border-[#888]"
          readOnly
        />
      </div>

      {/* 5. Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-gray-300 text-sm font-medium">Design URL</span>
          <AiOutlineInfoCircle className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#2a2a2a] border border-[#888] rounded px-3 py-2 text-gray-300 placeholder-gray-500 text-sm outline-none focus:border-[#aaa]"
          readOnly
        />
      </div>

      {/* 6. Buttons */}
      <div className="flex gap-4 mb-10">
        <button className="flex-1 bg-[#9B4E1F] hover:bg-[#b05a25] text-white font-semibold py-3 rounded-xl transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#8B4513] hover:bg-[#9e4f16] text-white font-semibold py-3 rounded-xl transition-colors">
          Prepare
        </button>
      </div>

      {/* 7. Recent Breakdowns */}
      <div>
        <span className="text-white text-lg font-semibold">Recent Breakdowns</span>
      </div>
    </div>
  );
}
