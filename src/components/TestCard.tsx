export function TestCard() {
  const GearIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9ca3af"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );

  const InfoIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9ca3af"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );

  const ChevronUp = ({ size = 16 }: { size?: number }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );

  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1e1e1e", color: "#ffffff", fontFamily: "sans-serif" }}
      className="w-full max-w-sm min-h-screen p-5 flex flex-col gap-4"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold" style={{ color: "#ffffff" }}>
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2" style={{ color: "#b07050" }}>
        <ChevronUp size={14} />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="mt-4" />

      {/* Add New Design section heading */}
      <div className="flex items-center gap-2">
        <span style={{ color: "#ffffff" }}>
          <ChevronUp size={16} />
        </span>
        <span className="text-base font-bold" style={{ color: "#ffffff" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium" style={{ color: "#d1d5db" }}>
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            backgroundColor: "#2a2a2a",
            border: "1px solid #4a4a4a",
            color: "#9ca3af",
            borderRadius: "4px",
            padding: "10px 12px",
            fontSize: "14px",
            width: "100%",
            outline: "none",
          }}
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium" style={{ color: "#d1d5db" }}>
            Design URL
          </label>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={{
            backgroundColor: "#2a2a2a",
            border: "1px solid #6b7280",
            color: "#9ca3af",
            borderRadius: "4px",
            padding: "10px 12px",
            fontSize: "14px",
            width: "100%",
            outline: "none",
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 justify-center mt-2">
        <button
          type="button"
          style={{
            backgroundColor: "#a0522d",
            color: "#f5f0eb",
            borderRadius: "8px",
            padding: "12px 28px",
            fontSize: "15px",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
            flex: 1,
          }}
        >
          Awesome
        </button>
        <button
          type="button"
          style={{
            backgroundColor: "#a0522d",
            color: "#f5f0eb",
            borderRadius: "8px",
            padding: "12px 28px",
            fontSize: "15px",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
            flex: 1,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="mt-6" />

      {/* Recent Breakdowns */}
      <div>
        <span className="text-xl font-bold" style={{ color: "#ffffff" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
