import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[320px] min-h-screen flex flex-col p-5 font-sans text-white"
      style={{ background: "#2a2a2a" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <FiSettings className="w-6 h-6 text-gray-400" />
      </div>

      {/* Hint row */}
      <div className="flex items-center gap-2 mb-10">
        <FiChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" />
        <span className="text-sm truncate" style={{ color: "#b87333" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <FiChevronUp className="w-4 h-4 text-white flex-shrink-0" />
          <h2 className="text-xl font-bold">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-300">Personal Access Token</label>
            <FiInfo className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full bg-transparent border border-gray-500 rounded px-3 py-3 text-sm text-gray-400 placeholder-gray-500 outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-300">Design URL</label>
            <FiInfo className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full bg-transparent border border-gray-500 rounded px-3 py-3 text-sm text-gray-400 placeholder-gray-500 outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            className="py-3 px-4 rounded-lg font-semibold text-white text-sm"
            style={{ background: "#a0522d" }}
          >
            Awesome
          </button>
          <button
            className="py-3 px-4 rounded-lg font-semibold text-white text-sm"
            style={{ background: "#a0522d" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <h2 className="text-xl font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
