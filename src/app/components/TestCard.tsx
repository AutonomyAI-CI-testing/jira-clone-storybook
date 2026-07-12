export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1e1e1e", minHeight: "100vh" }}
      className="p-5 font-sans"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <span style={{ color: "#ffffff" }} className="text-xl font-bold">
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-10">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a07040"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span style={{ color: "#a07040" }} className="text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-3 mb-6">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <h2 style={{ color: "#ffffff" }} className="text-2xl font-bold">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-1 flex items-center gap-2">
        <label style={{ color: "#cccccc" }} className="text-sm font-semibold">
          Personal Access Token
        </label>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#888888"
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
        style={{
          backgroundColor: "#2a2a2a",
          borderColor: "#555555",
          color: "#888888",
        }}
        className="w-full rounded border px-3 py-3 text-sm mb-4 outline-none"
      />

      {/* Design URL */}
      <div className="mb-1 flex items-center gap-2">
        <label style={{ color: "#cccccc" }} className="text-sm font-semibold">
          Design URL
        </label>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#888888"
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
        style={{
          backgroundColor: "#2a2a2a",
          borderColor: "#555555",
          color: "#888888",
        }}
        className="w-full rounded border px-3 py-3 text-sm mb-6 outline-none"
      />

      {/* Buttons */}
      <div className="flex gap-4 mb-10 justify-center">
        <button
          style={{ backgroundColor: "#b5522a" }}
          className="flex-1 rounded-lg px-6 py-3 text-white font-semibold text-sm"
        >
          Awesome
        </button>
        <button
          style={{ backgroundColor: "#b5522a" }}
          className="flex-1 rounded-lg px-6 py-3 text-white font-semibold text-sm"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 style={{ color: "#ffffff" }} className="text-xl font-bold">
        Recent Breakdowns
      </h2>
    </div>
  );
};
