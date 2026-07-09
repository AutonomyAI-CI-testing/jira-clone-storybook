import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { FaChevronUp } from "react-icons/fa";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] text-white w-80 p-5 rounded-lg flex flex-col gap-5"
    >
      {/* Header row */}
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold">UI magician Agent</span>
        <AiOutlineSetting className="text-2xl text-gray-300" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        <FaChevronUp className="text-xs text-[#c17b4e]" />
        <span className="text-[#c17b4e] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mt-2">
        <FaChevronUp className="text-base text-white" />
        <span className="text-xl font-bold">Add New Design</span>
      </div>

      {/* Form fields */}
      <div className="flex flex-col gap-4">
        {/* Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-zinc-200">
              Personal Access Token
            </label>
            <AiOutlineInfoCircle className="text-zinc-400 text-base" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="bg-zinc-800 border border-zinc-600 text-zinc-400 placeholder-zinc-500 rounded px-3 py-2 text-sm w-full outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-zinc-200">Design URL</label>
            <AiOutlineInfoCircle className="text-zinc-400 text-base" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="bg-zinc-800 border border-zinc-600 text-zinc-400 placeholder-zinc-500 rounded px-3 py-2 text-sm w-full outline-none"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 bg-[#b85c2a] text-white font-semibold rounded-lg py-3 px-4">
          Awesome
        </button>
        <button className="flex-1 bg-[#b85c2a] text-white font-semibold rounded-lg py-3 px-4">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-xl font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
}
