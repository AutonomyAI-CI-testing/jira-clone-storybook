import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] text-white min-h-screen w-full max-w-[506px] mx-auto px-5 py-6 font-sans"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <IoSettingsOutline className="w-6 h-6 text-gray-300" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 mb-10">
        <FiChevronUp className="w-4 h-4 text-[#d97041]" />
        <span className="text-[#d97041] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-5">
          <FiChevronUp className="w-4 h-4 text-white" />
          <h2 className="text-lg font-semibold">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm text-gray-300">Personal Access Token</label>
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
            <label className="text-sm text-gray-300">Design URL</label>
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
          <button className="flex-1 bg-[#b85c2c] hover:bg-[#a04f24] text-white font-semibold py-3 rounded-lg transition-colors">
            Awesome
          </button>
          <button className="flex-1 bg-[#9a4e25] hover:bg-[#8c4320] text-white font-semibold py-3 rounded-lg transition-colors">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

export default TestCard;
