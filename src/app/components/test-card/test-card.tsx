import { useState } from "react";

// Color palette for consistency across the dark-themed UI
const COLORS = {
  background: "#000000",
  primary: "#b5b5b5",
  secondary: "#8b9291",
  tertiary: "#a4a4a3",
  inputText: "#737470",
  inputBorder: "#333333",
  buttonBg: "#a0704f",
  buttonBgHover: "#b87d52",
  buttonText: "#8c8078",
  recentText: "#b0b0b0",
};

export const TestCard = () => {
  const [tokenValue, setTokenValue] = useState("");
  const [urlValue, setUrlValue] = useState("");

  return (
    <div className="text-white min-h-screen p-6 font-sans" style={{ backgroundColor: COLORS.background }}>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-gray-300 text-lg font-bold" style={{ color: COLORS.primary }}>
          UI magician Agent
        </h1>
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
          <path d="M12 8v.01M12 12v.01M12 16v.01" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Collapsible Section - Non-interactive placeholder */}
      <div className="mb-8">
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M7.707 7.707a1 1 0 0 0 0 1.414l4.586 4.586a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0-1.414-1.414L12 11.586 8.707 8.293a1 1 0 0 0-1.414 1.414z" clipRule="evenodd" />
          </svg>
          <span
            className="text-sm font-semibold"
            style={{ color: COLORS.secondary }}
          >
            From entire frame to a singl...
          </span>
        </div>
      </div>

      {/* Add New Design Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M7.707 7.707a1 1 0 0 0 0 1.414l4.586 4.586a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0-1.414-1.414L12 11.586 8.707 8.293a1 1 0 0 0-1.414 1.414z" clipRule="evenodd" />
          </svg>
          <h2 className="text-lg font-bold" style={{ color: COLORS.primary }}>
            Add New Design
          </h2>
        </div>

        {/* Personal Access Token Field */}
        <div className="mb-6">
          <label className="flex items-center gap-2 mb-2 text-sm font-semibold" style={{ color: COLORS.tertiary }}>
            Personal Access Token
            <svg
              className="w-4 h-4 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <text x="10" y="12" fontSize="10" textAnchor="middle" fill="currentColor">i</text>
            </svg>
          </label>
          <input
            type="password"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            value={tokenValue}
            onChange={(e) => setTokenValue(e.target.value)}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded text-sm focus:outline-none focus:border-gray-500"
            style={{
              color: COLORS.inputText,
              borderColor: COLORS.inputBorder,
            }}
          />
        </div>

        {/* Design URL Field */}
        <div className="mb-6">
          <label className="flex items-center gap-2 mb-2 text-sm font-semibold" style={{ color: COLORS.tertiary }}>
            Design URL
            <svg
              className="w-4 h-4 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <text x="10" y="12" fontSize="10" textAnchor="middle" fill="currentColor">i</text>
            </svg>
          </label>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            value={urlValue}
            onChange={(e) => setUrlValue(e.target.value)}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded text-sm focus:outline-none focus:border-gray-500"
            style={{
              color: COLORS.inputText,
              borderColor: COLORS.inputBorder,
            }}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {/* Action buttons with consistent color scheme */}
          <button
            className="flex-1 px-4 py-3 rounded font-semibold text-sm transition-colors"
            style={{
              backgroundColor: COLORS.buttonBg,
              color: COLORS.buttonText,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.buttonBgHover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.buttonBg)}
          >
            Awesome
          </button>
          <button
            className="flex-1 px-4 py-3 rounded font-semibold text-sm transition-colors"
            style={{
              backgroundColor: COLORS.buttonBg,
              color: COLORS.buttonText,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.buttonBgHover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.buttonBg)}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="mt-12">
        <h3 className="text-lg font-bold" style={{ color: COLORS.recentText }}>
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
