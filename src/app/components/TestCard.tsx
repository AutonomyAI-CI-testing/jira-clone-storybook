import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { FaChevronUp } from "react-icons/fa";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] text-white w-[320px] p-5 rounded-lg flex flex-col gap-4"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">UI magician Agent</span>
        <AiOutlineSetting className="text-gray-300 text-xl" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        <FaChevronUp className="text-[#c17b4e] text-sm" />
        <span className="text-[#c17b4e] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mt-2">
        <FaChevronUp className="text-white text-sm" />
        <span className="text-lg font-bold">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1 text-sm text-gray-300">
          <span>Personal Access Token</span>
          <AiOutlineInfoCircle className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-[#383838] border border-[#555] rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-500 outline-none w-full"
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1 text-sm text-gray-300">
          <span>Design URL</span>
          <AiOutlineInfoCircle className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-[#383838] border border-[#555] rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-500 outline-none w-full"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 justify-center mt-1">
        <button className="bg-[#b85c2a] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#a04e22]">
          Awesome
        </button>
        <button className="bg-[#b85c2a] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#a04e22]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-2">
        <span className="text-lg font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
}

export default TestCard;
