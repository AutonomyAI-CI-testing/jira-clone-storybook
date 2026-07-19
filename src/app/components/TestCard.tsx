export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full p-5 font-primary"
      style={{ backgroundColor: "#1c1c1c" }}
    >
      {/* Header row */}
      <div className="mb-3 flex items-center justify-between">
        <span className="font-primary-bold text-xl text-white">
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#aaaaaa"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="mb-10 flex items-center gap-2">
        {/* Chevron up icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#aaaaaa"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span style={{ color: "#c47a4a" }} className="text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mb-5 flex items-center gap-2">
        {/* Chevron up icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="font-primary-bold text-lg text-white">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm text-white">Personal Access Token</span>
          {/* Info circle icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#aaaaaa"
            strokeWidth="2"
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
          readOnly
          className="w-full rounded border px-3 py-2 text-sm outline-none"
          style={{
            backgroundColor: "#2a2a2a",
            borderColor: "#555555",
            color: "#cccccc",
          }}
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm text-white">Design URL</span>
          {/* Info circle icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#aaaaaa"
            strokeWidth="2"
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
          readOnly
          className="w-full rounded border px-3 py-2 text-sm outline-none"
          style={{
            backgroundColor: "#2a2a2a",
            borderColor: "#777777",
            color: "#cccccc",
          }}
        />
      </div>

      {/* Buttons row */}
      <div className="mb-10 flex gap-4">
        <button
          type="button"
          className="flex-1 rounded-lg px-4 py-3 text-sm text-white"
          style={{ backgroundColor: "#b5451b" }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-lg px-4 py-3 text-sm text-white"
          style={{ backgroundColor: "#b5451b" }}
        >
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div>
        <span className="font-primary-bold text-lg text-white">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
