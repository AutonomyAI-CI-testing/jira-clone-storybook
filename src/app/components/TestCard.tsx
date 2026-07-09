import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { FaChevronUp } from "react-icons/fa";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] text-white w-[320px] min-h-screen px-5 py-5 flex flex-col gap-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold">UI magician Agent</span>
        <AiOutlineSetting className="text-gray-400 text-2xl" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        <FaChevronUp className="text-[#c17b4e] text-xs" />
        <span className="text-[#c17b4e] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mt-4">
        <FaChevronUp className="text-white text-sm" />
        <span className="text-xl font-bold">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-300">Personal Access Token</span>
          <AiOutlineInfoCircle className="text-gray-400 text-base" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-[#383838] border border-[#555] rounded text-gray-400 text-sm px-3 py-3 w-full placeholder-gray-500 outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-300">Design URL</span>
          <AiOutlineInfoCircle className="text-gray-400 text-base" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-[#383838] border border-[#555] rounded text-gray-400 text-sm px-3 py-3 w-full placeholder-gray-500 outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 justify-center">
        <button className="bg-[#b85c2a] text-white font-semibold py-3 px-8 rounded-lg">
          Awesome
        </button>
        <button className="bg-[#b85c2a] text-white font-semibold py-3 px-8 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <span className="text-xl font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
}
