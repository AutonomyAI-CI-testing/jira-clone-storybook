import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-[#1e1e1e] p-5 font-sans text-white"
    >
      {/* Header row */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <FiSettings className="text-gray-400" size={22} />
      </div>

      {/* Collapsible row */}
      <div className="mb-8 flex items-center gap-2">
        <FiChevronUp className="text-white" size={16} />
        <span className="text-sm text-[#b07a5a]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mb-6" />

      {/* Section header */}
      <div className="mb-6 flex items-center gap-2">
        <FiChevronUp className="text-white" size={18} />
        <h2 className="text-lg font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-5">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-sm font-medium text-gray-300">
            Personal Access Token
          </label>
          <FiInfo className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-gray-600 bg-[#2a2a2a] px-3 py-3 text-sm text-gray-400 placeholder-gray-500 outline-none focus:border-gray-500"
        />
      </div>

      {/* Design URL field */}
      <div className="mb-7">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-sm font-medium text-gray-300">
            Design URL
          </label>
          <FiInfo className="text-gray-400" size={16} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-gray-600 bg-[#2a2a2a] px-3 py-3 text-sm text-gray-400 placeholder-gray-500 outline-none focus:border-gray-500"
        />
      </div>

      {/* Button row */}
      <div className="mb-10 flex gap-4">
        <button className="flex-1 rounded-lg bg-[#b5451b] px-6 py-3 text-sm font-semibold text-white hover:bg-[#9e3c17] active:bg-[#8a3313]">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b5451b] px-6 py-3 text-sm font-semibold text-white hover:bg-[#9e3c17] active:bg-[#8a3313]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns label */}
      <h2 className="text-lg font-bold text-white">Recent Breakdowns</h2>
    </div>
  );
};

export default TestCard;
