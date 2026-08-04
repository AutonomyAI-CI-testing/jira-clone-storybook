import { IoSettingsOutline } from "react-icons/io5";
import { HiChevronUp } from "react-icons/hi";
import { FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] text-white min-h-screen w-full max-w-sm mx-auto p-6 flex flex-col gap-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <IoSettingsOutline className="w-6 h-6 text-gray-400" />
      </div>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-[#c07850]">
        <HiChevronUp className="w-4 h-4" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center gap-2">
          <HiChevronUp className="w-5 h-5 text-white" />
          <h2 className="text-lg font-semibold text-white">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-300">Personal Access Token</label>
            <FiInfo className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-[#3a3a3a] border border-[#555] text-gray-300 placeholder-gray-500 rounded px-3 py-3 text-sm outline-none focus:border-[#c07850]"
            readOnly
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-300">Design URL</label>
            <FiInfo className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-[#3a3a3a] border border-[#555] text-gray-300 placeholder-gray-500 rounded px-3 py-3 text-sm outline-none focus:border-[#c07850]"
            readOnly
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-2">
          <button className="flex-1 bg-[#b85c2a] hover:bg-[#a04e22] text-white font-semibold py-3 rounded-lg transition-colors">
            Awesome
          </button>
          <button className="flex-1 bg-[#b85c2a] hover:bg-[#a04e22] text-white font-semibold py-3 rounded-lg transition-colors">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

export default TestCard;
