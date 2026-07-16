export function TestCard() {
  const GearIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#cccccc"
      strokeWidth="2"
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
      stroke="#cccccc"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );

  const ChevronUp = ({ color = "#cccccc" }: { color?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
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
      style={{ backgroundColor: "#1e1e1e", minHeight: "100vh" }}
      className="p-5 font-sans"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-white font-bold text-xl">UI magician Agent</span>
        <GearIcon />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 mb-8">
        <ChevronUp color="#b07050" />
        <span style={{ color: "#b07050" }} className="text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-6">
        <ChevronUp color="#ffffff" />
        <span className="text-white font-bold text-lg">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span style={{ color: "#e0e0e0" }} className="text-sm font-medium">
            Personal Access Token
          </span>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            backgroundColor: "#2a2a2a",
            borderColor: "#4a4a4a",
            color: "#e0e0e0",
          }}
          className="w-full border rounded px-3 py-2 text-sm outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span style={{ color: "#e0e0e0" }} className="text-sm font-medium">
            Design URL
          </span>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={{
            backgroundColor: "#2a2a2a",
            borderColor: "#4a4a4a",
            color: "#e0e0e0",
          }}
          className="w-full border rounded px-3 py-2 text-sm outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-10">
        <button
          style={{ backgroundColor: "#a0522d" }}
          className="flex-1 py-3 rounded-lg text-white font-semibold text-base"
        >
          Awesome
        </button>
        <button
          style={{ backgroundColor: "#a0522d" }}
          className="flex-1 py-3 rounded-lg text-white font-semibold text-base"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-white font-bold text-lg">Recent Breakdowns</span>
      </div>
    </div>
  );
}
