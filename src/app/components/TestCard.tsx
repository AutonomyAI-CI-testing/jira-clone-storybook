import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#1e1e1e] text-white w-[320px] min-h-screen p-5 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-semibold">UI magician Agent</h1>
        <IoSettingsOutline className="text-gray-300 text-2xl" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 text-[#c17a50] text-sm mb-10">
        <FiChevronUp className="text-base" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div>
        {/* Section header */}
        <div className="flex items-center gap-2 mb-5">
          <FiChevronUp className="text-white text-base" />
          <h2 className="text-lg font-semibold">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <label className="text-sm text-gray-200">Personal Access Token</label>
            <AiOutlineInfoCircle className="text-gray-400 text-base" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-500 outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <label className="text-sm text-gray-200">Design URL</label>
            <AiOutlineInfoCircle className="text-gray-400 text-base" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-500 outline-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 bg-[#b5532a] hover:bg-[#c45e30] text-white font-medium py-3 rounded-xl">
            Awesome
          </button>
          <button className="flex-1 bg-[#b5532a] hover:bg-[#c45e30] text-white font-medium py-3 rounded-xl">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold">Recent Breakdowns</h2>
      </div>
    </div>
  );
}
