import { IoSettingsOutline } from "react-icons/io5";
import { HiChevronUp } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-[#1a1a1a] px-6 py-6 font-sans"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <IoSettingsOutline className="text-gray-400" size={22} />
      </div>

      {/* Subtitle row */}
      <div className="mt-3 flex items-center gap-1">
        <HiChevronUp className="text-gray-400" size={18} />
        <span className="text-sm text-[#c2673a]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-10" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <HiChevronUp className="text-white" size={20} />
        <h2 className="text-xl font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mt-5">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm font-medium text-gray-300">
            Personal Access Token
          </span>
          <AiOutlineInfoCircle className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#444] bg-[#2a2a2a] px-3 py-2 text-sm text-gray-300 placeholder-gray-500 outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mt-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm font-medium text-gray-300">Design URL</span>
          <AiOutlineInfoCircle className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#444] bg-[#2a2a2a] px-3 py-2 text-sm text-gray-300 placeholder-gray-500 outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-center gap-4">
        <button className="rounded-xl bg-[#b5451b] px-8 py-3 text-sm font-semibold text-white">
          Awesome
        </button>
        <button className="rounded-xl bg-[#b5451b] px-8 py-3 text-sm font-semibold text-white">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
}
