import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-screen flex-col bg-[#2a2a2a] p-5 font-sans"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-white">UI magician Agent</h1>
        <FiSettings className="text-white" size={22} />
      </div>

      {/* Subrow */}
      <div className="mt-3 flex items-center gap-2">
        <FiChevronUp className="text-[#d97706]" size={16} />
        <span className="text-sm text-[#d97706]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-10" />

      {/* Add New Design section header */}
      <div className="flex items-center gap-3">
        <FiChevronUp className="text-white" size={18} />
        <h2 className="text-xl font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token label */}
      <div className="mt-5 flex items-center gap-2">
        <span className="text-sm font-medium text-white">
          Personal Access Token
        </span>
        <FiInfo className="text-[#9ca3af]" size={15} />
      </div>

      {/* Personal Access Token input */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-2 w-full rounded border border-[#5a5a5a] bg-[#1e1e1e] px-3 py-2 text-sm text-[#9ca3af] placeholder:text-[#6b7280] focus:outline-none"
        readOnly
      />

      {/* Design URL label */}
      <div className="mt-4 flex items-center gap-2">
        <span className="text-sm font-medium text-white">Design URL</span>
        <FiInfo className="text-[#9ca3af]" size={15} />
      </div>

      {/* Design URL input */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-2 w-full rounded border border-[#5a5a5a] bg-[#1e1e1e] px-3 py-2 text-sm text-[#9ca3af] placeholder:text-[#6b7280] focus:outline-none"
        readOnly
      />

      {/* Buttons row */}
      <div className="mt-6 flex gap-4">
        <button
          type="button"
          className="flex-1 rounded-xl bg-[#b45309] py-3 text-sm font-semibold text-white"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-xl bg-[#b45309] py-3 text-sm font-semibold text-white"
        >
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="h-10" />

      {/* Recent Breakdowns heading */}
      <h2 className="text-xl font-bold text-white">Recent Breakdowns</h2>
    </div>
  );
};
