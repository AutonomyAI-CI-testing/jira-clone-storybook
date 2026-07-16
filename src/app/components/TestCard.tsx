import { FaCog, FaChevronUp, FaInfoCircle } from "react-icons/fa";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#272822] min-h-screen w-full max-w-sm p-5 text-white"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <FaCog className="text-white text-xl" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 mt-1">
        <FaChevronUp className="text-[#B06040] text-sm" />
        <span className="text-[#B06040] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-12" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-4">
        <FaChevronUp className="text-white text-sm" />
        <h2 className="text-lg font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <label className="flex items-center gap-2 text-sm text-white mb-2">
          Personal Access Token
          <FaInfoCircle className="text-gray-400 text-sm" />
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-transparent border border-gray-500 rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-500 outline-none focus:border-gray-400"
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <label className="flex items-center gap-2 text-sm text-white mb-2">
          Design URL
          <FaInfoCircle className="text-gray-400 text-sm" />
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-transparent border border-gray-500 rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-500 outline-none focus:border-gray-400"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="bg-[#843A17] text-white font-semibold rounded-lg px-6 py-3 flex-1">
          Awesome
        </button>
        <button className="bg-[#843A17] text-white font-semibold rounded-lg px-6 py-3 flex-1">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-lg font-bold text-white mt-10">Recent Breakdowns</h2>
    </div>
  );
}

export default TestCard;
