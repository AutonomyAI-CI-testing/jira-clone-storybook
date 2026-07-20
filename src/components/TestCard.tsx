import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1e1e1e", color: "#e0e0e0", minHeight: "100vh" }}
      className="flex flex-col p-5"
    >
      {/* Header row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
        <h1
          className="text-xl font-bold"
          style={{ color: "#f0f0f0" }}
        >
          UI magician Agent
        </h1>
        <FiSettings size={22} style={{ color: "#c0c0c0" }} />
      </div>

      {/* Collapsed sub-row */}
      <div className="flex items-center gap-2 mb-6">
        <FiChevronUp size={16} style={{ color: "#9a7a60" }} />
        <span className="text-sm" style={{ color: "#9a7a60" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-5">
        <FiChevronUp size={18} style={{ color: "#e0e0e0" }} />
        <h2 className="text-xl font-bold" style={{ color: "#e0e0e0" }}>
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label
            className="text-sm font-bold"
            style={{ color: "#d0d0d0" }}
            htmlFor="pat-input"
          >
            Personal Access Token
          </label>
          <FiInfo size={16} style={{ color: "#a0a0a0" }} />
        </div>
        <input
          id="pat-input"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className="w-full rounded p-3 text-sm"
          style={{
            backgroundColor: "#2a2a2a",
            border: "1px solid #4a4a4a",
            color: "#c0c0c0",
            outline: "none",
          }}
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label
            className="text-sm font-bold"
            style={{ color: "#d0d0d0" }}
            htmlFor="url-input"
          >
            Design URL
          </label>
          <FiInfo size={16} style={{ color: "#a0a0a0" }} />
        </div>
        <input
          id="url-input"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded p-3 text-sm"
          style={{
            backgroundColor: "#2a2a2a",
            border: "1px solid #6a6a6a",
            color: "#c0c0c0",
            outline: "none",
          }}
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-4 justify-center mb-8">
        <button
          className="flex-1 rounded-lg p-3 text-sm font-bold cursor-pointer"
          style={{ backgroundColor: "#b5451b", color: "#f0ece8" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg p-3 text-sm font-bold cursor-pointer"
          style={{ backgroundColor: "#9e3d17", color: "#f0ece8" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-xl font-bold" style={{ color: "#e0e0e0" }}>
        Recent Breakdowns
      </h2>
    </div>
  );
}
