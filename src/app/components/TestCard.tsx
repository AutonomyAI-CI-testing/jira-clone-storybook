import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2a2a", minWidth: "320px", maxWidth: "480px" }}
      className="w-full p-5"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-white text-xl font-bold">UI magician Agent</h1>
        <FiSettings className="text-white" size={22} aria-label="Settings" />
      </div>

      {/* 2. Chevron + muted amber subtext */}
      <div className="flex items-center gap-2 mb-8">
        <FiChevronUp size={14} style={{ color: "#c17f4a" }} />
        <span className="text-sm" style={{ color: "#c17f4a" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Spacer */}
      <div className="h-6" />

      {/* 4. Add New Design section heading */}
      <div className="flex items-center gap-2 mb-5">
        <FiChevronUp size={16} className="text-white" />
        <h2 className="text-white text-lg font-bold">Add New Design</h2>
      </div>

      {/* 5. Personal Access Token label + info icon */}
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor="pat-input" className="text-white text-sm font-semibold">
          Personal Access Token
        </label>
        <FiInfo size={16} className="text-white opacity-70" />
      </div>

      {/* 6. PAT text input */}
      <input
        id="pat-input"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
        className="w-full mb-4 px-3 py-2 rounded text-sm"
        style={{
          backgroundColor: "#3a3a3a",
          border: "1px solid #6b6b6b",
          color: "#999",
          outline: "none",
        }}
      />

      {/* 7. Design URL label + info icon */}
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor="url-input" className="text-white text-sm font-semibold">
          Design URL
        </label>
        <FiInfo size={16} className="text-white opacity-70" />
      </div>

      {/* 8. URL text input */}
      <input
        id="url-input"
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
        className="w-full mb-6 px-3 py-2 rounded text-sm"
        style={{
          backgroundColor: "#3a3a3a",
          border: "1px solid #6b6b6b",
          color: "#999",
          outline: "none",
        }}
      />

      {/* 9. Two action buttons */}
      <div className="flex gap-4 justify-center mb-8">
        <button
          type="button"
          className="px-6 py-3 rounded-lg text-white font-semibold text-sm"
          style={{ backgroundColor: "#b5522a", minWidth: "130px" }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="px-6 py-3 rounded-lg text-white font-semibold text-sm"
          style={{ backgroundColor: "#b5522a", minWidth: "130px" }}
        >
          Prepare
        </button>
      </div>

      {/* 10. Recent Breakdowns heading */}
      <h2 className="text-white text-lg font-bold">Recent Breakdowns</h2>
    </div>
  );
}
