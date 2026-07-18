import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] min-h-screen w-full p-6 font-sans"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-white font-bold text-xl">UI magician Agent</span>
        <FaCog className="text-white text-xl" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mt-1">
        <FaChevronUp className="text-amber-600 text-xs shrink-0" />
        <span className="text-amber-600 text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mt-12">
        <FaChevronUp className="text-white text-base shrink-0" />
        <span className="text-white font-bold text-2xl">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-6">
        <label className="flex items-center gap-2 text-white text-sm font-medium mb-2">
          Personal Access Token
          <FaInfoCircle className="text-gray-400 text-sm" />
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className="w-full bg-[#1a1a1a] border border-gray-600 rounded px-3 py-3 text-gray-400 text-sm outline-none placeholder-gray-600"
        />
      </div>

      {/* Design URL */}
      <div className="mt-5">
        <label className="flex items-center gap-2 text-white text-sm font-medium mb-2">
          Design URL
          <FaInfoCircle className="text-gray-400 text-sm" />
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#1a1a1a] border border-gray-500 rounded px-3 py-3 text-gray-400 text-sm outline-none placeholder-gray-600"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8 justify-center">
        <button className="bg-[#b45309] text-white font-semibold rounded-xl px-8 py-3 text-base">
          Awesome
        </button>
        <button className="bg-[#b45309] text-white font-semibold rounded-xl px-8 py-3 text-base">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-12">
        <span className="text-white font-bold text-xl">Recent Breakdowns</span>
      </div>
    </div>
  );
};

export default TestCard;
