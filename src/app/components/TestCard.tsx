import { HiChevronUp, HiOutlineCog, HiInformationCircle } from "react-icons/hi";

export default function TestCard(): JSX.Element {
  return (
    <div id="testElem" className="bg-[#2a2a2a] text-white min-h-screen p-5 w-full max-w-sm">
      {/* Header row */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <HiOutlineCog className="text-gray-400 text-2xl" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-8">
        <HiChevronUp className="text-gray-400 text-lg flex-shrink-0" />
        <span className="text-[#9e9e9e] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Section heading */}
      <div className="flex items-center gap-2 mb-6">
        <HiChevronUp className="text-white text-lg flex-shrink-0" />
        <h2 className="text-lg font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm text-gray-300">Personal Access Token</label>
          <HiInformationCircle className="text-gray-400 text-base flex-shrink-0" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#1e1e1e] border border-[#4a4a4a] rounded px-3 py-3 text-sm text-gray-400 placeholder-gray-500 outline-none"
          readOnly
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm text-gray-300">Design URL</label>
          <HiInformationCircle className="text-gray-400 text-base flex-shrink-0" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#1e1e1e] border border-[#4a4a4a] rounded px-3 py-3 text-sm text-gray-400 placeholder-gray-500 outline-none"
          readOnly
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-4 mb-8">
        <button className="flex-1 bg-[#c1622f] hover:bg-[#a8541a] text-white font-semibold py-3 px-4 rounded-lg transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#c1622f] hover:bg-[#a8541a] text-white font-semibold py-3 px-4 rounded-lg transition-colors">
          Prepare
        </button>
      </div>

      {/* Footer heading */}
      <h2 className="text-xl font-bold text-white">Recent Breakdowns</h2>
    </div>
  );
}
