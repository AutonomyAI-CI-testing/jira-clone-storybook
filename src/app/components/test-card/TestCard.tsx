import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full max-w-sm bg-[#2a2a2a] p-5 font-sans text-white"
    >
      {/* Header row */}
      <div className="mb-1 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <FiSettings className="text-gray-400" size={22} />
      </div>

      {/* Subtitle row */}
      <div className="mb-10 flex items-center gap-1">
        <FiChevronUp className="text-[#c1692b]" size={16} />
        <span className="text-sm text-[#c1692b]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mb-5 flex items-center gap-2">
        <FiChevronUp className="text-white" size={18} />
        <h2 className="text-lg font-semibold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-3">
        <div className="mb-1 flex items-center gap-2">
          <label className="text-sm font-medium text-gray-300">
            Personal Access Token
          </label>
          <FiInfo className="text-gray-400" size={15} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#555] bg-[#333] px-3 py-2 text-sm text-gray-300 placeholder-gray-500 outline-none focus:border-[#777]"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="mb-1 flex items-center gap-2">
          <label className="text-sm font-medium text-gray-300">
            Design URL
          </label>
          <FiInfo className="text-gray-400" size={15} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#777] bg-[#333] px-3 py-2 text-sm text-gray-300 placeholder-gray-500 outline-none focus:border-[#999]"
          readOnly
        />
      </div>

      {/* Buttons row */}
      <div className="mb-10 flex gap-3">
        <button className="flex-1 rounded-lg bg-[#b85c28] px-4 py-3 text-sm font-semibold text-white hover:bg-[#c96430]">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b85c28] px-4 py-3 text-sm font-semibold text-white hover:bg-[#c96430]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-lg font-bold text-white">Recent Breakdowns</h2>
    </div>
  );
};
