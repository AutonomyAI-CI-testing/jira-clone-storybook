export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2a2a" }}
      className="w-full max-w-[360px] rounded-lg px-5 py-6"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9fadbc"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label="Settings"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="mt-3 flex items-center gap-2">
        <span style={{ color: "#9fadbc" }} className="text-sm">
          ^
        </span>
        <span style={{ color: "#b65c02" }} className="text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-10" />

      {/* Add New Design section header */}
      <div className="mb-5 flex items-center gap-2">
        <span className="text-base text-white">^</span>
        <span className="text-base font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token label */}
      <div className="mb-2 flex items-center gap-2">
        <span className="text-sm text-white">Personal Access Token</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9fadbc"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label="Info"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>

      {/* Personal Access Token input */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
        style={{
          backgroundColor: "#1d2125",
          border: "1px solid #454f59",
          color: "#9fadbc",
        }}
        className="mb-4 w-full rounded px-3 py-3 text-sm focus:outline-none"
      />

      {/* Design URL label */}
      <div className="mb-2 flex items-center gap-2">
        <span className="text-sm text-white">Design URL</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9fadbc"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label="Info"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>

      {/* Design URL input */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
        style={{
          backgroundColor: "#1d2125",
          border: "1px solid #596773",
          color: "#9fadbc",
        }}
        className="mb-6 w-full rounded px-3 py-3 text-sm focus:outline-none"
      />

      {/* Buttons */}
      <div className="flex justify-center gap-4">
        <button
          type="button"
          style={{ backgroundColor: "#c1622a" }}
          className="rounded-xl px-6 py-3 text-sm font-bold text-white"
        >
          Awesome
        </button>
        <button
          type="button"
          style={{ backgroundColor: "#c1622a" }}
          className="rounded-xl px-6 py-3 text-sm font-bold text-white"
        >
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="h-10" />

      {/* Footer */}
      <div className="text-base font-bold text-white">Recent Breakdowns</div>
    </div>
  );
}
