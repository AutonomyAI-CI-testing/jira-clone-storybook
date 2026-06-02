import { useState } from "react";

// Styling constants for reusable UI elements
const INFO_ICON_STYLE = {
  color: "var(--DarkNeutral700)",
  border: "1px solid var(--DarkNeutral600)",
};

const INPUT_STYLE = {
  backgroundColor: "var(--DarkNeutral100)",
  borderColor: "var(--DarkNeutral300A)",
  color: "var(--DarkNeutral900)",
};

const BUTTON_STYLE = {
  backgroundColor: "#c17a56",
  color: "#8c8078",
};

export const TestCard = () => {
  const [personalAccessToken, setPersonalAccessToken] = useState("");
  const [designUrl, setDesignUrl] = useState("");

  return (
    <div
      id="testElem"
      className="w-full max-w-md rounded-lg bg-elevation-surface-sunken p-6"
      style={{ backgroundColor: "var(--DarkNeutral0)" }}
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1
          className="text-sm font-semibold"
          style={{ color: "var(--DarkNeutral900)" }}
        >
          UI magician Agent
        </h1>
        <button
          className="flex h-6 w-6 items-center justify-center rounded hover:opacity-80"
          style={{ color: "var(--DarkNeutral700)" }}
          aria-label="Settings"
        >
          ⚙️
        </button>
      </div>

      {/* Collapsible Section */}
      <div className="mb-6">
        <button
          className="flex w-full items-center justify-between rounded py-2 hover:opacity-80"
          style={{ color: "var(--DarkNeutral900)" }}
        >
          <span className="text-xs font-semibold">
            From entire frame to a singl...
          </span>
          <span style={{ color: "var(--DarkNeutral700)" }}>›</span>
        </button>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6">
        <button
          className="flex w-full items-center justify-between rounded py-2 hover:opacity-80"
          style={{ color: "var(--DarkNeutral900)" }}
        >
          <span className="text-sm font-semibold">Add New Design</span>
          <span style={{ color: "var(--DarkNeutral700)" }}>›</span>
        </button>
      </div>

      {/* Form Section */}
      <div className="space-y-4">
        {/* Personal Access Token */}
        <div>
          <label
            htmlFor="token"
            className="mb-2 flex items-center gap-1 text-xs font-semibold"
            style={{ color: "var(--DarkNeutral800)" }}
          >
            Personal Access Token
            <span
              className="flex h-4 w-4 items-center justify-center rounded-full text-xs"
              style={INFO_ICON_STYLE}
            >
              ℹ
            </span>
          </label>
          <input
            id="token"
            type="password"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            value={personalAccessToken}
            onChange={(e) => setPersonalAccessToken(e.target.value)}
            className="focus:border-blue-500 w-full rounded border px-3 py-2 text-xs outline-none transition-colors"
            style={INPUT_STYLE}
          />
        </div>

        {/* Design URL */}
        <div>
          <label
            htmlFor="url"
            className="mb-2 flex items-center gap-1 text-xs font-semibold"
            style={{ color: "var(--DarkNeutral800)" }}
          >
            Design URL
            <span
              className="flex h-4 w-4 items-center justify-center rounded-full text-xs"
              style={INFO_ICON_STYLE}
            >
              ℹ
            </span>
          </label>
          <input
            id="url"
            type="url"
            placeholder="https://www.figma.com/..."
            value={designUrl}
            onChange={(e) => setDesignUrl(e.target.value)}
            className="focus:border-blue-500 w-full rounded border px-3 py-2 text-xs outline-none transition-colors"
            style={INPUT_STYLE}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-3">
        <button
          className="flex-1 rounded px-4 py-2 text-xs font-semibold transition-opacity hover:opacity-90 active:opacity-75"
          style={BUTTON_STYLE}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded px-4 py-2 text-xs font-semibold transition-opacity hover:opacity-90 active:opacity-75"
          style={BUTTON_STYLE}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="mt-6 border-t border-opacity-20 pt-6">
        <h3
          className="text-xs font-semibold"
          style={{ color: "var(--DarkNeutral900)" }}
        >
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
