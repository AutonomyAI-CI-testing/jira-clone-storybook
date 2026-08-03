import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { FiChevronUp } from "react-icons/fi";

export default function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] text-white min-h-screen w-full max-w-sm mx-auto p-5 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <AiOutlineSetting className="w-6 h-6 text-gray-400" />
      </div>

      {/* Hint row */}
      <div className="flex items-center gap-1 mb-10">
        <FiChevronUp className="w-4 h-4 text-[#b87333]" />
        <span className="text-[#b87333] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-5">
          <FiChevronUp className="w-4 h-4 text-white" />
          <h2 className="text-xl font-bold text-white">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm text-gray-300 font-medium">Personal Access Token</label>
            <AiOutlineInfoCircle className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full bg-transparent border border-gray-500 rounded px-3 py-3 text-gray-400 text-sm placeholder-gray-500 outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm text-gray-300 font-medium">Design URL</label>
            <AiOutlineInfoCircle className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full bg-transparent border border-gray-500 rounded px-3 py-3 text-gray-400 text-sm placeholder-gray-500 outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-[#a0522d] hover:bg-[#8b4513] text-white font-semibold py-3 px-6 rounded-lg flex-1">
            Awesome
          </button>
          <button className="bg-[#a0522d] hover:bg-[#8b4513] text-white font-semibold py-3 px-6 rounded-lg flex-1">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
}
