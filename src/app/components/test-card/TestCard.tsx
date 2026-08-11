export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] overflow-hidden font-sans"
      style={{ backgroundColor: "#1c1c1a" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span className="text-[13.5px] font-semibold" style={{ color: "#b5b5b5" }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
            stroke="#b5b5b5"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M13.2 6.6l-.6-1.04-1.12.46a4.5 4.5 0 0 0-.77-.44l-.18-1.18H5.45l-.18 1.18c-.28.12-.54.27-.77.44L3.38 5.56l-.6 1.04 1 .72a4.5 4.5 0 0 0 0 1.36l-1 .72.6 1.04 1.12-.46c.23.17.49.32.77.44l.18 1.18h5.08l.18-1.18c.28-.12.54-.27.77-.44l1.12.46.6-1.04-1-.72a4.5 4.5 0 0 0 0-1.36l1-.72Z"
            stroke="#b5b5b5"
            strokeWidth="1.1"
            fill="none"
          />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-5">
        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 4.5L4 1.5L7 4.5" stroke="#8b9291" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[11.5px] font-semibold truncate" style={{ color: "#8b9291" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Gap between top section and Add New Design */}
      <div className="h-5" />

      {/* Add New Design heading */}
      <div className="flex items-center gap-2 px-5 mb-4">
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 2L6 7L11 2" stroke="#b2b2b1" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[13.5px] font-semibold" style={{ color: "#b2b2b1" }}>
          Add New Design
        </span>
      </div>

      {/* Form fields */}
      <div className="px-5">
        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-[11.5px] font-semibold" style={{ color: "#a4a4a3" }}>
              Personal Access Token
            </span>
            {/* Info icon */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
              <path d="M7.5 6.5v4" stroke="#a4a4a3" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="7.5" cy="4.5" r="0.7" fill="#a4a4a3" />
            </svg>
          </div>
          <div
            className="flex items-center px-3 py-2.5 rounded"
            style={{ backgroundColor: "#272822", border: "1px solid #a5adad" }}
          >
            <span className="text-[11.5px] font-semibold" style={{ color: "#737470" }}>
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-[11.5px] font-semibold" style={{ color: "#a3a3a2" }}>
              Design URL
            </span>
            {/* Info icon */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
              <path d="M7.5 6.5v4" stroke="#a3a3a2" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="7.5" cy="4.5" r="0.7" fill="#a3a3a2" />
            </svg>
          </div>
          <div
            className="flex items-center px-3 py-2.5 rounded"
            style={{ backgroundColor: "#272822", border: "2px solid #929291" }}
          >
            <span className="text-[10.5px] font-semibold" style={{ color: "#71726e" }}>
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-7">
          <button
            className="flex-1 flex items-center justify-center py-2.5 rounded text-[11.5px] font-semibold"
            style={{ backgroundColor: "#843a17", color: "#8c8078", borderRadius: "4px" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 flex items-center justify-center py-2.5 rounded text-[11.5px] font-semibold"
            style={{ backgroundColor: "#843a17", color: "#8c8078", borderRadius: "4px" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pb-6">
        <span className="text-[13.5px] font-semibold" style={{ color: "#b0b0b0" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
