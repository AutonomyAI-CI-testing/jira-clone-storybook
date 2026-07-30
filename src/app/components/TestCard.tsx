export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex flex-col w-[253px] rounded-lg p-4 gap-3"
      style={{ backgroundColor: "#2a2a2a", color: "#e0d6cc" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-semibold text-base" style={{ color: "#e0d6cc" }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e0d6cc"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1">
        {/* Chevron up */}
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b07040"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-sm" style={{ color: "#b07040" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Divider space */}
      <div className="h-3" />

      {/* Add New Design heading */}
      <div className="flex items-center gap-2">
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e0d6cc"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="font-semibold text-base" style={{ color: "#e0d6cc" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <span className="text-sm" style={{ color: "#e0d6cc" }}>
            Personal Access Token
          </span>
          {/* Info icon */}
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a09080"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded px-3 py-2 text-sm outline-none"
          style={{
            backgroundColor: "transparent",
            border: "1px solid #555",
            color: "#a09080",
          }}
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <span className="text-sm" style={{ color: "#e0d6cc" }}>
            Design URL
          </span>
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a09080"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded px-3 py-2 text-sm outline-none"
          style={{
            backgroundColor: "transparent",
            border: "1px solid #666",
            color: "#a09080",
          }}
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-1">
        <button
          className="flex-1 py-2 rounded-lg text-sm font-medium"
          style={{ backgroundColor: "#b05a28", color: "#f0e0d0" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2 rounded-lg text-sm font-medium"
          style={{ backgroundColor: "#a04e20", color: "#f0e0d0" }}
        >
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Recent Breakdowns */}
      <div>
        <span className="font-semibold text-base" style={{ color: "#e0d6cc" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
