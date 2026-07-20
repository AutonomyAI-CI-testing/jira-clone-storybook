import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="min-h-screen bg-[#2a2a2a] p-5 font-sans text-white">
      {/* Header row */}
      <div className="mb-3 flex items-center justify-between">
        <h1 className="text-lg font-bold">UI magician Agent</h1>
        <FiSettings size={22} className="text-gray-300" />
      </div>

      {/* Subtitle row */}
      <div className="mb-10 flex items-center gap-2">
        <FiChevronUp size={16} className="text-gray-400" />
        <span className="text-sm text-[#c4763c]">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section heading */}
      <div className="mb-5 flex items-center gap-2">
        <FiChevronUp size={18} className="text-white" />
        <h2 className="text-base font-semibold">Add New Design</h2>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <div className="mb-1.5 flex items-center gap-2">
          <label className="text-sm text-gray-200">Personal Access Token</label>
          <FiInfo size={15} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded border border-gray-600 bg-[#333333] px-3 py-2.5 text-sm text-gray-300 placeholder:text-gray-500 outline-none focus:border-gray-400"
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <div className="mb-1.5 flex items-center gap-2">
          <label className="text-sm text-gray-200">Design URL</label>
          <FiInfo size={15} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded border border-gray-600 bg-[#333333] px-3 py-2.5 text-sm text-gray-300 placeholder:text-gray-500 outline-none focus:border-gray-400"
        />
      </div>

      {/* Action buttons */}
      <div className="mb-12 flex gap-4">
        <button className="flex-1 rounded-lg bg-[#a0522d] py-3 text-sm font-semibold text-white hover:bg-[#b5622f] active:bg-[#8a4626]">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#a0522d] py-3 text-sm font-semibold text-white hover:bg-[#b5622f] active:bg-[#8a4626]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <h2 className="text-base font-semibold">Recent Breakdowns</h2>
    </div>
  );
};
