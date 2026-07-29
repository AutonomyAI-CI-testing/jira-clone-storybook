import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { HiChevronUp } from "react-icons/hi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#2b2b2b] text-white w-[320px] min-h-screen p-5 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-lg font-bold">UI magician Agent</h1>
        <AiOutlineSetting className="w-6 h-6 text-gray-400" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 text-[#c97a50] text-sm mb-12">
        <HiChevronUp className="w-4 h-4 flex-shrink-0" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div>
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-5">
          <HiChevronUp className="w-4 h-4 flex-shrink-0" />
          <h2 className="text-base font-bold">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium">Personal Access Token</span>
            <AiOutlineInfoCircle className="w-4 h-4 text-gray-400 flex-shrink-0" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-3 text-gray-400 text-sm placeholder-gray-500 focus:outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium">Design URL</span>
            <AiOutlineInfoCircle className="w-4 h-4 text-gray-400 flex-shrink-0" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-3 text-gray-400 text-sm placeholder-gray-500 focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 bg-[#b85c2a] text-white font-semibold py-3 rounded-lg">
            Awesome
          </button>
          <button className="flex-1 bg-[#b85c2a] text-white font-semibold py-3 rounded-lg">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <h2 className="text-base font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

export default TestCard;
