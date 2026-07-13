import { IoSettingsOutline } from "react-icons/io5";
import { HiChevronUp } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#1a1a1a] text-white min-h-screen p-5 flex flex-col gap-6 max-w-sm mx-auto"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <IoSettingsOutline className="text-gray-400 text-2xl" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        <HiChevronUp className="text-[#c87941] text-lg" />
        <span className="text-[#c87941] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="mt-4" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <HiChevronUp className="text-white text-lg" />
        <h2 className="text-lg font-bold">Add New Design</h2>
      </div>

      {/* Personal Access Token field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-200">Personal Access Token</label>
          <AiOutlineInfoCircle className="text-gray-400 text-base" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className="bg-[#2a2a2a] border border-[#444] rounded text-gray-400 text-sm px-3 py-3 w-full outline-none placeholder:text-gray-500"
        />
      </div>

      {/* Design URL field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-200">Design URL</label>
          <AiOutlineInfoCircle className="text-gray-400 text-base" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-[#2a2a2a] border border-[#444] rounded text-gray-400 text-sm px-3 py-3 w-full outline-none placeholder:text-gray-500"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          type="button"
          className="bg-[#c1542a] text-white font-semibold rounded-lg px-6 py-3 flex-1"
        >
          Awesome
        </button>
        <button
          type="button"
          className="bg-[#c1542a] text-white font-semibold rounded-lg px-6 py-3 flex-1"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <h3 className="text-lg font-bold">Recent Breakdowns</h3>
      </div>
    </div>
  );
}
