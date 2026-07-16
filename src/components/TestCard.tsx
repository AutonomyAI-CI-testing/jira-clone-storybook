import { IoSettingsOutline, IoChevronUp } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1e1e1e", color: "#ffffff" }}
      className="flex flex-col w-full max-w-sm p-4 font-sans"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <IoSettingsOutline size={22} style={{ color: "#a0a0a0" }} />
      </div>

      {/* 2. Chevron row — muted amber text */}
      <div className="flex items-center gap-2 mb-8">
        <IoChevronUp size={14} style={{ color: "#b07040" }} />
        <span className="text-sm" style={{ color: "#b07040" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Add New Design section heading */}
      <div className="flex items-center gap-2 mb-5">
        <IoChevronUp size={16} className="text-white" />
        <span className="text-base font-bold text-white">Add New Design</span>
      </div>

      {/* 4. Personal Access Token */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-1">
          <label className="text-sm font-semibold" style={{ color: "#d0d0d0" }}>
            Personal Access Token
          </label>
          <AiOutlineInfoCircle size={16} style={{ color: "#888888" }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded px-3 py-2 text-sm outline-none border"
          style={{
            backgroundColor: "#2e2e2e",
            borderColor: "#4a4a4a",
            color: "#888888",
          }}
        />
      </div>

      {/* 5. Design URL */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-1">
          <label className="text-sm font-semibold" style={{ color: "#d0d0d0" }}>
            Design URL
          </label>
          <AiOutlineInfoCircle size={16} style={{ color: "#888888" }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded px-3 py-2 text-sm outline-none border"
          style={{
            backgroundColor: "#2e2e2e",
            borderColor: "#4a4a4a",
            color: "#888888",
          }}
        />
      </div>

      {/* 6. Action buttons */}
      <div className="flex gap-4 mb-8">
        <button
          className="flex-1 rounded-lg py-3 text-sm font-semibold text-white"
          style={{ backgroundColor: "#b5451b" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg py-3 text-sm font-semibold text-white"
          style={{ backgroundColor: "#b5451b" }}
        >
          Prepare
        </button>
      </div>

      {/* 7. Recent Breakdowns */}
      <div>
        <span className="text-base font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
}
