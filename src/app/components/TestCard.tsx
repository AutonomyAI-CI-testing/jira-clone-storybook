import { useState } from "react";

export const TestCard = () => {
  const [token, setToken] = useState("");
  const [designUrl, setDesignUrl] = useState("");

  return (
    <div
      id="testElem"
      className="flex flex-col overflow-auto"
      style={{
        width: "254px",
        minHeight: "508px",
        background: "#1a1a18",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span
          className="font-semibold"
          style={{ color: "#b5b5b5", fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="14"
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
      <div className="flex items-center gap-2 px-5 pb-8">
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path d="M1 4L4 1L7 4" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span
          className="font-semibold truncate"
          style={{ color: "#8b9291", fontSize: "11.5px", lineHeight: "13.92px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="px-4 flex-1">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-5">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span
            className="font-semibold"
            style={{ color: "#b2b2b1", fontSize: "13.5px", lineHeight: "16.34px" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="font-semibold"
              style={{ color: "#a4a4a3", fontSize: "11.5px", lineHeight: "13.92px" }}
            >
              Personal Access Token
            </span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a4a4a3" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div
            className="w-full rounded px-3 py-2"
            style={{ background: "#272822", border: "1px solid #a5adad" }}
          >
            <input
              type="text"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="w-full bg-transparent font-semibold outline-none"
              style={{ color: "#737470", fontSize: "11.5px", lineHeight: "13.92px" }}
            />
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="font-semibold"
              style={{ color: "#a3a3a2", fontSize: "11.5px", lineHeight: "13.92px" }}
            >
              Design URL
            </span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a3a3a2" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div
            className="w-full rounded px-3 py-2"
            style={{ background: "#272822", border: "2px solid #929291" }}
          >
            <input
              type="text"
              placeholder="https://www.figma.com/file/:"
              value={designUrl}
              onChange={(e) => setDesignUrl(e.target.value)}
              className="w-full bg-transparent font-semibold outline-none"
              style={{ color: "#71726e", fontSize: "11.5px", lineHeight: "13.92px" }}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-center mb-8">
          <button
            type="button"
            className="font-semibold"
            style={{
              background: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              lineHeight: "13.92px",
              borderRadius: "4px",
              width: "85px",
              height: "37px",
            }}
          >
            Awesome
          </button>
          <button
            type="button"
            className="font-semibold"
            style={{
              background: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              lineHeight: "13.92px",
              borderRadius: "4px",
              width: "85px",
              height: "37px",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pb-5">
        <span
          className="font-semibold"
          style={{ color: "#b0b0b0", fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
