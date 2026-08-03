import { useState } from "react";

function SettingsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#9ca3af"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      />
      <path
        stroke="#9ca3af"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" stroke="#9ca3af" strokeWidth="1.5" />
      <path
        stroke="#9ca3af"
        strokeWidth="2"
        strokeLinecap="round"
        d="M12 11v5"
      />
      <circle cx="12" cy="7.5" r="0.75" fill="#9ca3af" />
    </svg>
  );
}

function ChevronUpIcon({ color = "#9ca3af" }: { color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 15l-6-6-6 6"
      />
    </svg>
  );
}

export const TestCard = (): JSX.Element => {
  const [token, setToken] = useState("");
  const [designUrl, setDesignUrl] = useState("");

  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1e1e1e", color: "#d1d5db" }}
      className="w-64 min-h-screen p-5 flex flex-col"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <h1
          className="text-base font-bold"
          style={{ color: "#e5e7eb" }}
        >
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-10">
        <ChevronUpIcon color="#b45309" />
        <span className="text-xs truncate" style={{ color: "#b45309" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-4">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-1">
          <ChevronUpIcon color="#e5e7eb" />
          <h2 className="text-sm font-semibold" style={{ color: "#e5e7eb" }}>
            Add New Design
          </h2>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5">
            <label
              className="text-xs font-medium"
              style={{ color: "#d1d5db" }}
            >
              Personal Access Token
            </label>
            <InfoIcon />
          </div>
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full px-3 py-2.5 text-xs rounded"
            style={{
              backgroundColor: "#2a2a2a",
              border: "1px solid #3f3f3f",
              color: "#9ca3af",
              outline: "none",
            }}
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5">
            <label
              className="text-xs font-medium"
              style={{ color: "#d1d5db" }}
            >
              Design URL
            </label>
            <InfoIcon />
          </div>
          <input
            type="text"
            value={designUrl}
            onChange={(e) => setDesignUrl(e.target.value)}
            placeholder="https://www.figma.com/file/:"
            className="w-full px-3 py-2.5 text-xs rounded"
            style={{
              backgroundColor: "#2a2a2a",
              border: "1px solid #3f3f3f",
              color: "#9ca3af",
              outline: "none",
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-1">
          <button
            className="flex-1 py-2.5 rounded-lg text-xs font-semibold"
            style={{ backgroundColor: "#b45309", color: "#f9fafb" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2.5 rounded-lg text-xs font-semibold"
            style={{ backgroundColor: "#92400e", color: "#f9fafb" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <h2 className="text-sm font-semibold" style={{ color: "#e5e7eb" }}>
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};

export default TestCard;
