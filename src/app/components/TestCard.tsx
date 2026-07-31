import { IoSettingsOutline, IoChevronUp, IoInformationCircleOutline } from "react-icons/io5";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="bg-[#2a2a2a] text-gray-200 p-5 rounded-lg w-[300px] font-sans"
  >
    {/* Header row */}
    <div className="flex items-center justify-between mb-3">
      <h1 className="text-lg font-bold text-white">UI magician Agent</h1>
      <IoSettingsOutline className="text-gray-300 w-5 h-5" />
    </div>

    {/* Subtitle row */}
    <div className="flex items-center gap-1 mb-8 text-[#c1622a] text-sm">
      <IoChevronUp className="w-4 h-4" />
      <span>From entire frame to a singl...</span>
    </div>

    {/* Add New Design section */}
    <div>
      <div className="flex items-center gap-2 mb-4">
        <IoChevronUp className="w-4 h-4 text-white" />
        <h2 className="text-base font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-sm text-gray-300">Personal Access Token</span>
          <IoInformationCircleOutline className="w-4 h-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-transparent border border-gray-500 rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-600 focus:outline-none"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mb-5">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-sm text-gray-300">Design URL</span>
          <IoInformationCircleOutline className="w-4 h-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-transparent border border-gray-500 rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-600 focus:outline-none"
          readOnly
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        <button className="flex-1 bg-[#b85c28] hover:bg-[#a04e20] text-white font-semibold py-2 px-4 rounded-lg">
          Awesome
        </button>
        <button className="flex-1 bg-[#b85c28] hover:bg-[#a04e20] text-white font-semibold py-2 px-4 rounded-lg">
          Prepare
        </button>
      </div>
    </div>

    {/* Recent Breakdowns */}
    <div className="mt-8">
      <h2 className="text-base font-bold text-white">Recent Breakdowns</h2>
    </div>
  </div>
);

export default TestCard;
