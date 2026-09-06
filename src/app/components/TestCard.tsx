export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] min-h-screen bg-[#1a1a17] px-5 py-5"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span
          className="font-semibold text-[#b5b5b5]"
          style={{ fontSize: "13.5px" }}
        >
          UI magician Agent
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          stroke="#8b9291"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="1 5 5 1 9 5" />
        </svg>
        <span
          className="font-semibold text-[#8b9291]"
          style={{ fontSize: "11.5px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-16" />

      {/* Add New Design row */}
      <div className="flex items-center gap-2 mb-5">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          stroke="#b2b2b1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="1 5 5 1 9 5" />
        </svg>
        <span
          className="font-semibold text-[#b2b2b1]"
          style={{ fontSize: "13.5px" }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-2 flex items-center gap-2">
        <span
          className="font-semibold text-[#a4a4a3]"
          style={{ fontSize: "11.5px" }}
        >
          Personal Access Token
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a4a4a3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>
      <div className="mb-3 rounded border border-[#a5adad] bg-[#272822] px-3 py-2.5">
        <span
          className="font-semibold text-[#737470]"
          style={{ fontSize: "11.5px" }}
        >
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL */}
      <div className="mb-2 flex items-center gap-2">
        <span
          className="font-semibold text-[#a3a3a2]"
          style={{ fontSize: "11.5px" }}
        >
          Design URL
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a3a3a2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>
      <div className="mb-5 rounded border-2 border-[#929291] bg-[#272822] px-3 py-2.5">
        <span
          className="font-semibold text-[#71726e]"
          style={{ fontSize: "10.5px" }}
        >
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Buttons row */}
      <div className="mb-8 flex gap-3">
        <button
          className="flex-1 rounded bg-[#843a17] py-2.5 font-semibold text-[#8c8078]"
          style={{ fontSize: "11.5px" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded bg-[#843a17] py-2.5 font-semibold text-[#8c8078]"
          style={{ fontSize: "11.5px" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8">
        <span
          className="font-semibold text-[#b0b0b0]"
          style={{ fontSize: "13.5px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
