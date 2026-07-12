import { HiOutlineCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#242424] min-h-screen text-white px-5 py-6 font-sans">

      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-white">UI magician Agent</span>
        <HiOutlineCog size={26} className="text-gray-400" />
      </div>

      {/* Collapsed indicator row */}
      <div className="flex items-center gap-2 mt-3">
        <HiChevronUp size={16} className="text-[#b5541c]" />
        <span className="text-[#b5541c] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="mt-10" />

      {/* Add New Design section header */}
      <div className="flex items-center gap-2">
        <HiChevronUp size={20} className="text-white" />
        <span className="text-xl font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-6">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm font-medium text-gray-200">Personal Access Token</label>
          <HiInformationCircle size={18} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#2f2f2f] border border-zinc-600 rounded px-3 py-2 text-gray-400 placeholder-gray-600 text-sm outline-none focus:border-zinc-400"
          readOnly
        />
      </div>

      {/* Design URL field */}
      <div className="mt-5">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm font-medium text-gray-200">Design URL</label>
          <HiInformationCircle size={18} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#2f2f2f] border border-zinc-600 rounded px-3 py-2 text-gray-400 placeholder-gray-600 text-sm outline-none focus:border-zinc-400"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8 justify-center">
        <button className="flex-1 bg-[#b5541c] hover:bg-[#9e4918] text-white font-semibold rounded-lg py-3 transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#b5541c] hover:bg-[#9e4918] text-white font-semibold rounded-lg py-3 transition-colors">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-12">
        <span className="text-xl font-bold text-white">Recent Breakdowns</span>
      </div>

    </div>
  );
};
