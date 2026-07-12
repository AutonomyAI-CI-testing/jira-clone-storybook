import { HiCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] text-white min-h-screen p-6 w-full max-w-sm mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <HiCog className="text-gray-400 text-2xl" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 mb-10">
        <HiChevronUp className="text-[#c97a4a] text-lg" />
        <span className="text-[#c97a4a] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mb-6">
        <HiChevronUp className="text-white text-lg" />
        <h2 className="text-lg font-semibold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm text-gray-300">Personal Access Token</label>
          <HiInformationCircle className="text-gray-400 text-base" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#1e1e1e] border border-[#444] rounded px-3 py-2 text-gray-400 placeholder-gray-500 text-sm outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm text-gray-300">Design URL</label>
          <HiInformationCircle className="text-gray-400 text-base" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#1e1e1e] border border-[#444] rounded px-3 py-2 text-gray-400 placeholder-gray-500 text-sm outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-10">
        <button className="flex-1 bg-[#9e4e1e] hover:bg-[#b05a28] text-white font-semibold py-3 rounded-lg">
          Awesome
        </button>
        <button className="flex-1 bg-[#9e4e1e] hover:bg-[#b05a28] text-white font-semibold py-3 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-lg font-semibold text-white">Recent Breakdowns</h2>
    </div>
  );
};
