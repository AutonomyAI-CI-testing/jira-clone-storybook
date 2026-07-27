import { IoSettingsOutline, IoChevronUp, IoInformationCircleOutline } from "react-icons/io5";

export function TestCard() {
  return (
    <div id="testElem" className="bg-[#2a2a2a] text-white min-h-screen w-full max-w-sm p-5 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <IoSettingsOutline className="text-gray-300 text-2xl" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 text-[#b5461e] mb-10">
        <IoChevronUp className="text-sm" />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-5">
        <IoChevronUp className="text-white text-lg" />
        <h2 className="text-lg font-bold">Add New Design</h2>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm text-gray-200">Personal Access Token</label>
          <IoInformationCircleOutline className="text-gray-400 text-base" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full bg-[#3a3a3a] border border-gray-600 rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-500 outline-none"
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm text-gray-200">Design URL</label>
          <IoInformationCircleOutline className="text-gray-400 text-base" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full bg-[#3a3a3a] border border-gray-600 rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-500 outline-none"
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-4 mb-10">
        <button className="flex-1 bg-[#b5461e] text-white font-semibold py-3 rounded-lg">
          Awesome
        </button>
        <button className="flex-1 bg-[#b5461e] text-white font-semibold py-3 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-lg font-bold">Recent Breakdowns</h2>
    </div>
  );
}

export default TestCard;
