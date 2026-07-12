import { HiChevronUp, HiInformationCircle, HiOutlineCog } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="min-h-screen bg-zinc-800 p-6">
      {/* Header row */}
      <div className="mb-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <HiOutlineCog className="text-zinc-400" size={24} />
      </div>

      {/* Subtitle row */}
      <div className="mb-12 flex items-center gap-2 text-orange-600">
        <HiChevronUp size={16} />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mb-6 flex items-center gap-2 text-white">
        <HiChevronUp size={20} />
        <h2 className="text-2xl font-semibold">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-sm font-medium text-zinc-300">
            Personal Access Token
          </label>
          <HiInformationCircle className="text-zinc-400" size={18} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-zinc-600 bg-zinc-700 px-4 py-3 text-sm text-zinc-400 placeholder-zinc-500 outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-sm font-medium text-zinc-300">Design URL</label>
          <HiInformationCircle className="text-zinc-400" size={18} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-zinc-600 bg-zinc-700 px-4 py-3 text-sm text-zinc-400 placeholder-zinc-500 outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="mb-12 flex gap-4">
        <button className="flex-1 rounded-lg bg-orange-700 px-6 py-3 text-sm font-semibold text-white">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-orange-700 px-6 py-3 text-sm font-semibold text-white">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <h2 className="text-xl font-semibold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
