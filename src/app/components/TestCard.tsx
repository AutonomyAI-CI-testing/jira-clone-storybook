import React from "react";

/**
 * TestCard - A smoke test component matching its Figma design.
 * 
 * Root: #testElem
 * Width: ~254px
 * Bg: #1a1a17
 */
const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="font-sans p-5 flex flex-col gap-5 select-none"
      style={{
        backgroundColor: "#1a1a17",
        width: "254px",
        minHeight: "508px",
      }}
    >
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <span
          className="text-[#b5b5b5] text-[13.5px] font-semibold tracking-tight"
          style={{ color: "#b5b5b5" }}
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
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Sub-item Row */}
      <div className="flex items-center gap-2 -mt-2">
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8b9291"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span
          className="text-[#8b9291] text-[11.5px] font-semibold truncate leading-tight"
          style={{ color: "#8b9291" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="mt-8 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#b2b2b1"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span
            className="text-[#b2b2b1] text-[13.5px] font-semibold"
            style={{ color: "#b2b2b1" }}
          >
            Add New Design
          </span>
        </div>

        {/* PAT Input */}
        <div className="flex flex-col gap-1.5 mt-2">
          <div className="flex items-center gap-1.5">
            <span
              className="text-[#a4a4a3] text-[11.5px] font-semibold"
              style={{ color: "#a4a4a3" }}
            >
              Personal Access Token
            </span>
            <svg
              width="12"
              height="12"
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
          <div
            className="bg-[#272822] border border-[#a5adad] rounded-[1px] px-3 py-2 flex items-center"
            style={{ backgroundColor: "#272822", borderColor: "#a5adad" }}
          >
            <span
              className="text-[#737470] text-[11.5px] font-semibold truncate"
              style={{ color: "#737470" }}
            >
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* URL Input */}
        <div className="flex flex-col gap-1.5 mt-1">
          <div className="flex items-center gap-1.5">
            <span
              className="text-[#a3a3a2] text-[11.5px] font-semibold"
              style={{ color: "#a3a3a2" }}
            >
              Design URL
            </span>
            <svg
              width="12"
              height="12"
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
          <div
            className="bg-[#272822] border-[2px] border-[#929291] rounded-[1px] px-3 py-2 flex items-center"
            style={{ backgroundColor: "#272822", borderColor: "#929291" }}
          >
            <span
              className="text-[#71726e] text-[10.5px] font-semibold truncate"
              style={{ color: "#71726e" }}
            >
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          <button
            className="flex-1 bg-[#843a17] text-[#8c8078] py-2 rounded-[2px] text-[11.5px] font-semibold"
            style={{ backgroundColor: "#843a17", color: "#8c8078" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 bg-[#843a17] text-[#8c8078] py-2 rounded-[2px] text-[11.5px] font-semibold"
            style={{ backgroundColor: "#843a17", color: "#8c8078" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-auto pb-2">
        <span
          className="text-[#b0b0b0] text-[13.5px] font-semibold"
          style={{ color: "#b0b0b0" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
