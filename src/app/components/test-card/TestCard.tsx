import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full max-w-sm bg-[#2a2a2a] px-5 py-6"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <FiSettings size={22} className="text-white" />
      </div>

      {/* 2. Collapsed row */}
      <div className="mt-4 flex items-center gap-2">
        <FiChevronUp size={16} className="text-[#b85c38]" />
        <span className="text-sm text-[#b85c38]">
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Add New Design section heading */}
      <div className="mt-10 flex items-center gap-2">
        <FiChevronUp size={20} className="text-white" />
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* 4. Personal Access Token label */}
      <div className="mt-5 flex items-center gap-2">
        <span className="text-sm font-medium text-[#d4d4d4]">
          Personal Access Token
        </span>
        <FiInfo size={16} className="text-[#9ca3af]" />
      </div>

      {/* 5. Input: Personal Access Token */}
      <input
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-2 w-full rounded border border-[#555555] bg-[#3a3a3a] px-3 py-2.5 text-sm text-[#9ca3af] placeholder-[#6b7280] outline-none"
      />

      {/* 6. Design URL label */}
      <div className="mt-4 flex items-center gap-2">
        <span className="text-sm font-medium text-[#d4d4d4]">Design URL</span>
        <FiInfo size={16} className="text-[#9ca3af]" />
      </div>

      {/* 7. Input: Design URL */}
      <input
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-2 w-full rounded border border-[#6b6b6b] bg-[#3a3a3a] px-3 py-2.5 text-sm text-[#9ca3af] placeholder-[#6b7280] outline-none"
      />

      {/* 8. Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          type="button"
          className="flex-1 rounded-lg bg-[#b85c38] px-4 py-3 text-sm font-semibold text-white"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-lg bg-[#9e4e30] px-4 py-3 text-sm font-semibold text-white"
        >
          Prepare
        </button>
      </div>

      {/* 9. Recent Breakdowns heading */}
      <div className="mt-10">
        <span className="text-lg font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
}
