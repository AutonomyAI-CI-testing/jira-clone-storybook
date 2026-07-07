export const TestCard = () => (
  <div id="testElem" className="bg-[#2a2a2a] p-5 w-[254px] font-sans">
    {/* Header */}
    <div className="flex items-center justify-between mb-3">
      <span className="text-[#b5b5b5] font-semibold text-base">
        UI magician Agent
      </span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#b5b5b5"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    </div>

    {/* Subtitle */}
    <div className="flex items-center gap-2 mb-8">
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#8b9291"
        strokeWidth="2.5"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
      <span className="text-[#8b9291] text-sm">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <div className="flex items-center gap-2 mb-5">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#b2b2b1"
        strokeWidth="2.5"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
      <span className="text-[#b2b2b1] font-semibold text-lg">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mb-3">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[#a4a4a3] text-sm font-medium">
          Personal Access Token
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a4a4a3"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <input
        className="w-full bg-[#272822] border border-[#a5adad] text-[#737470] placeholder-[#737470] text-sm px-3 py-2 rounded"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
      />
    </div>

    {/* Design URL */}
    <div className="mb-5">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[#a4a4a3] text-sm font-medium">Design URL</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a4a4a3"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <input
        className="w-full bg-[#272822] border-2 border-[#929291] text-[#71726e] placeholder-[#71726e] text-sm px-3 py-2 rounded"
        placeholder="https://www.figma.com/file/:"
        readOnly
      />
    </div>

    {/* Buttons */}
    <div className="flex gap-3 mb-8">
      <button className="flex-1 bg-[#843a17] text-[#8c8078] font-semibold py-3 rounded-[4px] text-sm">
        Awesome
      </button>
      <button className="flex-1 bg-[#843a17] text-[#8c8078] font-semibold py-3 rounded-[4px] text-sm">
        Prepare
      </button>
    </div>

    {/* Footer */}
    <div>
      <span className="text-[#b0b0b0] font-semibold text-lg">
        Recent Breakdowns
      </span>
    </div>
  </div>
);
