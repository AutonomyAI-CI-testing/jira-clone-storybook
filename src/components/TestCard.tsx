export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col w-full max-w-sm p-5 gap-5"
      style={{ backgroundColor: "#2a2a2a", minHeight: "100vh", color: "#fff" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-300"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Chevron row with subtitle */}
      <div className="flex items-center gap-2">
        <ChevronUpIcon />
        <span className="text-sm" style={{ color: "#b8724a" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mt-2">
        <ChevronUpIcon className="text-white" />
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-200">
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full px-3 py-2 rounded text-sm text-gray-400 outline-none border"
          style={{
            backgroundColor: "#333",
            borderColor: "#555",
            color: "#aaa",
          }}
          readOnly
        />
      </div>

      {/* Design URL field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-200">
            Design URL
          </label>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full px-3 py-2 rounded text-sm outline-none border"
          style={{
            backgroundColor: "#333",
            borderColor: "#555",
            color: "#aaa",
          }}
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-2">
        <button
          className="flex-1 py-3 rounded-lg font-semibold text-white text-sm"
          style={{ backgroundColor: "#b85c38" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-3 rounded-lg font-semibold text-white text-sm"
          style={{ backgroundColor: "#b85c38" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <span className="text-lg font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
}

function ChevronUpIcon({ className = "text-gray-400" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-400"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

export default TestCard;
