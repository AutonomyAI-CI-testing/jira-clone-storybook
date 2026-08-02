import { IoSettingsOutline, IoChevronUp, IoInformationCircleOutline } from "react-icons/io5";

export const TestCard = () => (
  <div id="testElem" className="bg-[#2a2a2a] max-w-sm w-full min-h-screen p-6 flex flex-col gap-6 text-white font-sans">
    {/* Header row */}
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
      <IoSettingsOutline className="w-6 h-6 text-gray-400" />
    </div>

    {/* Subtitle row */}
    <div className="flex items-center gap-2 text-[#c17a4a] text-sm -mt-4">
      <IoChevronUp className="w-4 h-4 flex-shrink-0" />
      <span>From entire frame to a singl...</span>
    </div>

    {/* Add New Design section */}
    <div className="flex flex-col gap-5">
      {/* Section heading */}
      <div className="flex items-center gap-2">
        <IoChevronUp className="w-4 h-4 text-white" />
        <h2 className="text-lg font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5">
          <label className="text-sm text-gray-300">Personal Access Token</label>
          <IoInformationCircleOutline className="w-4 h-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full bg-transparent border border-gray-600 rounded px-3 py-3 text-gray-400 placeholder-gray-600 text-sm focus:outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5">
          <label className="text-sm text-gray-300">Design URL</label>
          <IoInformationCircleOutline className="w-4 h-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full bg-transparent border border-gray-600 rounded px-3 py-3 text-gray-400 placeholder-gray-600 text-sm focus:outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="flex-1 bg-[#b35a2a] hover:bg-[#c96830] text-white font-semibold py-3 rounded-lg">
          Awesome
        </button>
        <button className="flex-1 bg-[#b35a2a] hover:bg-[#c96830] text-white font-semibold py-3 rounded-lg">
          Prepare
        </button>
      </div>
    </div>

    {/* Recent Breakdowns */}
    <div>
      <h2 className="text-lg font-bold text-white">Recent Breakdowns</h2>
    </div>
  </div>
);

export default TestCard;
