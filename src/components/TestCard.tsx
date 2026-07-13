import { HiChevronUp, HiOutlineCog, HiInformationCircle } from "react-icons/hi";

export function TestCard() {
  return (
    <div id="testElem" className="bg-[#2a2a2a] min-h-screen p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <HiOutlineCog className="text-gray-400" size={24} />
      </div>

      <div className="flex items-center gap-2 mb-8">
        <HiChevronUp className="text-gray-400" size={16} />
        <span className="text-sm text-[#c1622a]">From entire frame to a singl...</span>
      </div>

      <div className="h-6" />

      <div className="flex items-center gap-2 mb-6">
        <HiChevronUp className="text-gray-400" size={18} />
        <span className="text-xl font-bold text-white">Add New Design</span>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm text-white">Personal Access Token</span>
        <HiInformationCircle className="text-gray-400" size={18} />
      </div>
      <input
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full rounded border border-gray-600 bg-[#1e1e1e] px-3 py-2 text-sm text-gray-400 placeholder-gray-500 outline-none mb-4"
      />

      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm text-white">Design URL</span>
        <HiInformationCircle className="text-gray-400" size={18} />
      </div>
      <input
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="w-full rounded border border-gray-600 bg-[#1e1e1e] px-3 py-2 text-sm text-gray-400 placeholder-gray-500 outline-none mb-6"
      />

      <div className="flex gap-4 mb-8">
        <button
          type="button"
          className="flex-1 rounded-xl bg-[#c1622a] py-3 text-sm font-semibold text-white"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-xl bg-[#c1622a] py-3 text-sm font-semibold text-white"
        >
          Prepare
        </button>
      </div>

      <h2 className="text-xl font-bold text-white">Recent Breakdowns</h2>
    </div>
  );
}
