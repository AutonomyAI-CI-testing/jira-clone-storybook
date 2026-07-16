import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export default function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#222222] min-h-screen w-full p-5 font-sans text-white"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xl font-bold text-white">UI magician Agent</span>
        <FiSettings size={22} className="text-white opacity-80" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-10">
        <FiChevronUp size={16} className="text-white opacity-60" />
        <span className="text-[#c0622a] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-6">
        <FiChevronUp size={18} className="text-white" />
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-4 mb-6">
        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="text-sm text-white font-medium">
              Personal Access Token
            </label>
            <FiInfo size={15} className="text-white opacity-60" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-[#2e2e2e] border border-[#484848] rounded-md px-3 py-3 text-sm text-gray-300 placeholder-gray-500 outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="text-sm text-white font-medium">Design URL</label>
            <FiInfo size={15} className="text-white opacity-60" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-[#2e2e2e] border border-[#585858] rounded-md px-3 py-3 text-sm text-gray-300 placeholder-gray-500 outline-none"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 justify-center mb-10">
        <button className="flex-1 bg-[#b04a20] text-white font-semibold py-3 px-6 rounded-xl text-sm">
          Awesome
        </button>
        <button className="flex-1 bg-[#b04a20] text-white font-semibold py-3 px-6 rounded-xl text-sm">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-4">
        <span className="text-lg font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
}
