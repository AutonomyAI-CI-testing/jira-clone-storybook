import { IoSettingsOutline, IoInformationCircleOutline } from "react-icons/io5";
import { LuChevronUp } from "react-icons/lu";

export function TestCard() {
  return (
    <div id="testElem" className="bg-[#282828] min-h-screen p-6 font-sans max-w-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-white text-xl font-bold">UI magician Agent</h1>
        <IoSettingsOutline className="text-white text-2xl" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 mb-8">
        <LuChevronUp className="text-[#c4713a] text-base" />
        <span className="text-[#c4713a] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mb-6">
        <LuChevronUp className="text-white text-base" />
        <h2 className="text-white text-lg font-bold">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-white text-sm">Personal Access Token</span>
          <IoInformationCircleOutline className="text-white text-base" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#1e1e1e] border border-[#555] text-gray-400 text-sm rounded px-3 py-3 placeholder-gray-500 outline-none"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-white text-sm">Design URL</span>
          <IoInformationCircleOutline className="text-white text-base" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#1e1e1e] border border-[#555] text-gray-400 text-sm rounded px-3 py-3 placeholder-gray-500 outline-none"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-10">
        <button className="flex-1 bg-[#b85c28] text-white font-semibold py-3 rounded-lg">
          Awesome
        </button>
        <button className="flex-1 bg-[#b85c28] text-white font-semibold py-3 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-white text-xl font-bold">Recent Breakdowns</h2>
    </div>
  );
}
