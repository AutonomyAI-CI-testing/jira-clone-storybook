import { IoSettingsOutline, IoChevronUp, IoInformationCircleOutline } from "react-icons/io5";

export function TestCard(): JSX.Element {
  return (
    <div id="testElem" className="min-h-screen w-full bg-[#2a2a2a] p-6">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-white">UI magician Agent</span>
        <IoSettingsOutline size={24} className="text-white" />
      </div>

      {/* Subline */}
      <div className="mt-3 flex items-center gap-2">
        <IoChevronUp size={16} className="text-[#b85c30]" />
        <span className="text-sm text-[#b85c30]">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="mt-12" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <IoChevronUp size={20} className="text-white" />
        <span className="text-xl font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-6">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm font-semibold text-white">Personal Access Token</span>
          <IoInformationCircleOutline size={18} className="text-white opacity-70" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded border border-[#444] bg-[#1e1e1e] px-4 py-3 text-sm text-gray-400 placeholder-gray-500 outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mt-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm font-semibold text-white">Design URL</span>
          <IoInformationCircleOutline size={18} className="text-white opacity-70" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded border border-[#555] bg-[#1e1e1e] px-4 py-3 text-sm text-gray-400 placeholder-gray-500 outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button className="flex-1 rounded-xl bg-[#b85c30] py-4 text-base font-semibold text-white">
          Awesome
        </button>
        <button className="flex-1 rounded-xl bg-[#b85c30] py-4 text-base font-semibold text-white">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-12">
        <span className="text-xl font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
}
