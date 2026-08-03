import { IoSettingsOutline } from "react-icons/io5";
import { LuChevronUp } from "react-icons/lu";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#2a2520] text-white w-80 rounded-lg p-5 flex flex-col gap-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">UI magician Agent</h2>
        <IoSettingsOutline className="text-gray-300 w-5 h-5" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1.5 text-[#c07a4a] text-sm">
        <LuChevronUp className="w-4 h-4 shrink-0" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      {/* Add New Design */}
      <div className="flex flex-col gap-4 mt-2">
        <div className="flex items-center gap-1.5">
          <LuChevronUp className="w-4 h-4 shrink-0" />
          <h3 className="text-base font-semibold">Add New Design</h3>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <label className="text-sm font-medium">Personal Access Token</label>
            <AiOutlineInfoCircle className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full bg-transparent border border-[#4a4540] rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-500 focus:outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <label className="text-sm font-medium">Design URL</label>
            <AiOutlineInfoCircle className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full bg-transparent border border-[#4a4540] rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-500 focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-[#b85c2c] hover:bg-[#a04e24] text-white font-medium py-2.5 rounded-lg transition-colors">
            Awesome
          </button>
          <button className="flex-1 bg-[#b85c2c] hover:bg-[#a04e24] text-white font-medium py-2.5 rounded-lg transition-colors">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-2">
        <h3 className="text-base font-semibold">Recent Breakdowns</h3>
      </div>
    </div>
  );
}
