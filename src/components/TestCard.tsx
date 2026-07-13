import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export function TestCard() {
  return (
    <div id="testElem" className="bg-[#2a2a2a] min-h-screen p-6 font-sans">
      {/* 1. Header row */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-white font-bold text-lg">UI magician Agent</span>
        <HiOutlineCog className="text-gray-400" size={24} />
      </div>

      {/* 2. Collapsed row */}
      <div className="flex items-center gap-2 mb-1">
        <HiChevronUp className="text-gray-400" size={16} />
        <span className="text-[#c1622a] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Spacer */}
      <div className="h-10" />

      {/* 4. Add New Design section header */}
      <div className="flex items-center gap-2 mb-5">
        <HiChevronUp className="text-gray-400" size={20} />
        <span className="text-white font-bold text-xl">Add New Design</span>
      </div>

      {/* 5. Personal Access Token label */}
      <div className="flex items-center gap-1 mb-2">
        <label className="text-white text-sm">Personal Access Token</label>
        <HiOutlineInformationCircle className="text-gray-400" size={16} />
      </div>

      {/* 6. Personal Access Token input */}
      <input
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full bg-[#1e1e1e] border border-gray-600 rounded px-3 py-2 text-gray-400 text-sm placeholder-gray-500 outline-none mb-4"
      />

      {/* 7. Design URL label */}
      <div className="flex items-center gap-1 mb-2">
        <label className="text-white text-sm">Design URL</label>
        <HiOutlineInformationCircle className="text-gray-400" size={16} />
      </div>

      {/* 8. Design URL input */}
      <input
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="w-full bg-[#1e1e1e] border border-gray-600 rounded px-3 py-2 text-gray-400 text-sm placeholder-gray-500 outline-none mb-6"
      />

      {/* 9. Action buttons */}
      <div className="flex gap-4">
        <button
          type="button"
          className="flex-1 bg-[#c1622a] text-white font-semibold py-3 rounded-xl"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 bg-[#c1622a] text-white font-semibold py-3 rounded-xl"
        >
          Prepare
        </button>
      </div>

      {/* 10. Recent Breakdowns heading */}
      <h2 className="text-white font-bold text-xl mt-10">Recent Breakdowns</h2>
    </div>
  );
}
