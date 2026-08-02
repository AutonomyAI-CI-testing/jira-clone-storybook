import { HiCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#282420] min-h-screen w-full max-w-[390px] mx-auto text-white px-5 py-6 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-2xl font-bold text-white">UI magician Agent</h1>
        <HiCog className="text-gray-400 w-7 h-7" />
      </div>

      {/* Sub-row */}
      <div className="flex items-center gap-1 text-[#c17a4a] text-sm mb-10">
        <HiChevronUp className="w-4 h-4" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-5">
        <HiChevronUp className="text-white w-5 h-5" />
        <h2 className="text-xl font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium text-white">Personal Access Token</span>
          <HiInformationCircle className="text-gray-400 w-4 h-4" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 text-gray-400 placeholder-gray-600 text-sm focus:outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mb-7">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium text-white">Design URL</span>
          <HiInformationCircle className="text-gray-400 w-4 h-4" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 text-gray-400 placeholder-gray-600 text-sm focus:outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-10">
        <button className="flex-1 bg-[#b85c2a] text-white font-semibold py-3 rounded-xl text-base">
          Awesome
        </button>
        <button className="flex-1 bg-[#b85c2a] text-white font-semibold py-3 rounded-xl text-base">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <h2 className="text-xl font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

export default TestCard;
