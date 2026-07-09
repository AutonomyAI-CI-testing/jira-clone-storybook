export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1c1d17", minHeight: "100vh" }}
      className="p-5 font-sans"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold" style={{ color: "#e8e8e8" }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#929291"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Chevron subtitle row */}
      <div className="mt-3 flex items-center gap-2">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="#b5703a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="2 8 6 4 10 8" />
        </svg>
        <span className="text-sm" style={{ color: "#b5703a" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-10 flex items-center gap-2">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="#e8e8e8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="2 8 6 4 10 8" />
        </svg>
        <span className="text-base font-bold" style={{ color: "#e8e8e8" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-5">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm" style={{ color: "#c8c8c8" }}>
            Personal Access Token
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#929291"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="8" />
            <line x1="12" y1="12" x2="12" y2="16" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded px-3 py-2 text-sm"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #929291",
            color: "#929291",
          }}
        />
      </div>

      {/* Design URL field */}
      <div className="mt-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm" style={{ color: "#c8c8c8" }}>
            Design URL
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#929291"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="8" />
            <line x1="12" y1="12" x2="12" y2="16" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded px-3 py-2 text-sm"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #929291",
            color: "#929291",
          }}
        />
      </div>

      {/* Buttons row */}
      <div className="mt-6 flex gap-4">
        <button
          type="button"
          className="flex-1 rounded-xl py-3 text-sm font-semibold"
          style={{ backgroundColor: "#843a17", color: "#e8e8e8" }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-xl py-3 text-sm font-semibold"
          style={{ backgroundColor: "#843a17", color: "#e8e8e8" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div className="mt-10">
        <span className="text-base font-bold" style={{ color: "#e8e8e8" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
