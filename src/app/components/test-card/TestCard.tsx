import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-full max-w-sm flex-col gap-4 rounded-xl p-5 text-white"
      style={{ background: "#1e1e1e" }}
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">UI magician Agent</span>
        <HiOutlineCog size={22} className="text-white" />
      </div>

      {/* 2. Subtitle row */}
      <div className="flex items-center gap-1">
        <HiChevronUp size={16} style={{ color: "#a07850" }} />
        <span className="text-sm" style={{ color: "#a07850" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Spacer */}
      <div className="h-8" />

      {/* 4. Section header */}
      <div className="flex items-center gap-2">
        <HiChevronUp size={20} className="text-white" />
        <span className="text-xl font-bold text-white">Add New Design</span>
      </div>

      {/* 5. Personal Access Token label */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-white">
          Personal Access Token
        </span>
        <HiOutlineInformationCircle size={18} className="text-white" />
      </div>

      {/* 6. Token input */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full rounded px-3 py-2 text-sm text-gray-400 outline-none placeholder:text-gray-500"
        style={{
          background: "#2a2a2a",
          border: "1px solid #444",
        }}
        readOnly
      />

      {/* 7. Design URL label */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-white">Design URL</span>
        <HiOutlineInformationCircle size={18} className="text-white" />
      </div>

      {/* 8. URL input */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="w-full rounded px-3 py-2 text-sm text-gray-400 outline-none placeholder:text-gray-500"
        style={{
          background: "#2a2a2a",
          border: "1px solid #444",
        }}
        readOnly
      />

      {/* 9. Action buttons */}
      <div className="flex gap-3">
        <button
          className="flex-1 rounded-lg px-6 py-3 text-sm font-semibold text-white"
          style={{ background: "#c1501a" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg px-6 py-3 text-sm font-semibold text-white"
          style={{ background: "#c1501a" }}
        >
          Prepare
        </button>
      </div>

      {/* 10. Footer */}
      <div className="mt-2">
        <span className="text-xl font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
