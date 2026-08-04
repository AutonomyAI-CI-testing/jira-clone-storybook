import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-full max-w-sm flex-col gap-5 bg-[#282828] p-6 font-sans"
    >
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-white">UI magician Agent</span>
        <FiSettings className="text-xl text-gray-400" />
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-sm text-[#b05a28]" />
        <span className="text-sm text-[#b05a28]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mt-4">
        <FiChevronUp className="text-lg text-white" />
        <span className="text-2xl font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token Field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-300">Personal Access Token</label>
          <FiInfo className="text-sm text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#555] bg-[#333] px-3 py-2 text-sm text-gray-400 placeholder-gray-500 outline-none"
          readOnly
        />
      </div>

      {/* Design URL Field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-300">Design URL</label>
          <FiInfo className="text-sm text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#555] bg-[#333] px-3 py-2 text-sm text-gray-400 placeholder-gray-500 outline-none"
          readOnly
        />
      </div>

      {/* Button Row */}
      <div className="flex gap-3">
        <button className="flex-1 rounded-lg bg-[#c1622f] py-3 text-sm font-semibold text-white">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#c1622f] py-3 text-sm font-semibold text-white">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <span className="text-xl font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
