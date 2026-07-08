import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { FaChevronUp } from "react-icons/fa";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] text-white w-[320px] rounded-xl p-5 flex flex-col gap-5"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">UI magician Agent</span>
        <AiOutlineSetting className="text-gray-400 text-xl" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        <FaChevronUp className="text-[#c17b4e] text-xs" />
        <span className="text-[#c17b4e] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <FaChevronUp className="text-white text-xs" />
        <span className="text-lg font-bold">Add New Design</span>
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
          className="bg-[#383838] border border-[#555] text-gray-400 placeholder-gray-500 rounded-md px-3 py-2 text-sm w-full outline-none"
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
          className="bg-[#383838] border border-[#555] text-gray-400 placeholder-gray-500 rounded-md px-3 py-2 text-sm w-full outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 bg-[#b85c2a] text-white font-semibold rounded-lg py-3 text-sm">
          Awesome
        </button>
        <button className="flex-1 bg-[#b85c2a] text-white font-semibold rounded-lg py-3 text-sm">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-lg font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
}
