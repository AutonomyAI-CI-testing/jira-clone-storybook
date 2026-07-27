export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[320px] min-h-screen p-5 flex flex-col gap-4"
      style={{ backgroundColor: "#282424", color: "#e8e0d8" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold" style={{ color: "#e8e0d8" }}>
          UI magician Agent
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e8e0d8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Collapsed section row */}
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a07060"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-sm" style={{ color: "#a07060" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-4" />

      {/* Add New Design header */}
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e8e0d8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-base font-bold" style={{ color: "#e8e0d8" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <label className="text-sm" style={{ color: "#e8e0d8" }}>
            Personal Access Token
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a07060"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded px-3 py-2 text-sm outline-none"
          style={{
            backgroundColor: "#1e1b1b",
            border: "1px solid #3a3232",
            color: "#a07060",
          }}
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <label className="text-sm" style={{ color: "#e8e0d8" }}>
            Design URL
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a07060"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded px-3 py-2 text-sm outline-none"
          style={{
            backgroundColor: "#1e1b1b",
            border: "1px solid #3a3232",
            color: "#a07060",
          }}
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mt-2">
        <button
          className="flex-1 py-3 rounded-lg text-sm font-semibold"
          style={{ backgroundColor: "#b5522a", color: "#e8e0d8" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-3 rounded-lg text-sm font-semibold"
          style={{ backgroundColor: "#b5522a", color: "#e8e0d8" }}
        >
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="mt-4" />

      {/* Recent Breakdowns */}
      <span className="text-lg font-bold" style={{ color: "#e8e0d8" }}>
        Recent Breakdowns
      </span>
    </div>
  );
};

export default TestCard;
