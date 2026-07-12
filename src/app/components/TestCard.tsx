import { HiChevronUp, HiInformationCircle, HiOutlineCog } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="min-h-screen bg-[#2a2a2a] p-6">
      {/* Header row */}
      <div className="mb-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <HiOutlineCog className="text-white" size={24} />
      </div>

      {/* Subtitle row */}
      <div className="mb-12 flex items-center gap-2">
        <HiChevronUp className="text-white" size={16} />
        <span className="text-[#c8703d]">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mb-6 flex items-center gap-2">
        <HiChevronUp className="text-white" size={20} />
        <h2 className="text-xl font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-sm text-gray-300">Personal Access Token</label>
          <HiInformationCircle className="text-gray-400" size={18} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-gray-600 bg-[#1a1a1a] p-2 text-gray-400 placeholder-gray-500 outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-sm text-gray-300">Design URL</label>
          <HiInformationCircle className="text-gray-400" size={18} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-gray-600 bg-[#1a1a1a] p-2 text-gray-400 placeholder-gray-500 outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="mb-12 flex gap-4">
        <button className="rounded-xl bg-[#8B4513] px-6 py-3 font-semibold text-white">
          Awesome
        </button>
        <button className="rounded-xl bg-[#8B4513] px-6 py-3 font-semibold text-white">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <h2 className="text-xl font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};
