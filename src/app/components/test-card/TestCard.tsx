import { IoSettingsOutline } from "react-icons/io5";
import { HiChevronUp, HiInformationCircle } from "react-icons/hi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#232323] text-white w-80 min-h-screen p-5 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between mt-2 mb-3">
        <h1 className="text-lg font-bold text-white">UI magician Agent</h1>
        <IoSettingsOutline className="w-6 h-6 text-gray-300" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 text-[#c07a52] text-sm mb-10">
        <HiChevronUp className="w-4 h-4" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design */}
      <div className="flex flex-col gap-5">
        {/* Section heading */}
        <div className="flex items-center gap-2">
          <HiChevronUp className="w-5 h-5 text-white" />
          <h2 className="text-lg font-bold text-white">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-300">Personal Access Token</label>
            <HiInformationCircle className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-3 text-sm text-gray-400 placeholder-gray-500 focus:outline-none focus:border-gray-400"
            readOnly
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-300">Design URL</label>
            <HiInformationCircle className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-3 text-sm text-gray-400 placeholder-gray-500 focus:outline-none focus:border-gray-400"
            readOnly
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-[#a0522d] hover:bg-[#8b4513] text-white font-semibold py-3 rounded-lg text-sm transition-colors">
            Awesome
          </button>
          <button className="flex-1 bg-[#a0522d] hover:bg-[#8b4513] text-white font-semibold py-3 rounded-lg text-sm transition-colors">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <h2 className="text-lg font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
}
