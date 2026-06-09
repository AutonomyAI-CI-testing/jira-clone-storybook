import React from "react";

// Production constants for themed colors and spacing
const COLORS = {
  bg: "#1e1e1e",
  inputBg: "#272822",
  primary: "#9b4a1f",
  primaryHover: "#b05a2f",
  subtitle: "#a0522d",
};

/**
 * TestCard component for managing Figma design integrations.
 * Features access token management and design URL inputs.
 */
export const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="text-white p-6 max-w-xs rounded-lg shadow-lg"
      style={{ backgroundColor: COLORS.bg }}
    >
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">UI magician Agent</h2>
        <button
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Settings"
        >
          ⚙
        </button>
      </div>

      {/* Subtitle Row - Breadcrumb style information */}
      <div className="flex items-center text-sm mb-6">
        <span className="text-gray-400 mr-2" aria-hidden="true">
          ^
        </span>
        <p style={{ color: COLORS.subtitle }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section Header */}
      <div className="flex items-center mb-4">
        <span className="text-gray-400 mr-2" aria-hidden="true">
          ^
        </span>
        <h3 className="text-base font-semibold">Add New Design</h3>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <label
            htmlFor="personalAccessToken"
            className="text-gray-300 text-sm font-semibold mr-2"
          >
            Personal Access Token
          </label>
          <span
            className="text-gray-500 text-xs cursor-help"
            title="Your Figma personal access token"
          >
            (i)
          </span>
        </div>
        <input
          type="text"
          id="personalAccessToken"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="border border-gray-600 text-gray-400 rounded px-3 py-2 w-full text-sm focus:outline-none focus:border-blue-500"
          style={{ backgroundColor: COLORS.inputBg }}
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <label
            htmlFor="designURL"
            className="text-gray-300 text-sm font-semibold mr-2"
          >
            Design URL
          </label>
          <span
            className="text-gray-500 text-xs cursor-help"
            title="Link to your Figma file"
          >
            (i)
          </span>
        </div>
        <input
          type="text"
          id="designURL"
          placeholder="https://www.figma.com/file/:"
          className="border border-gray-600 text-gray-400 rounded px-3 py-2 w-full text-sm focus:outline-none focus:border-blue-500"
          style={{ backgroundColor: COLORS.inputBg }}
        />
      </div>

      {/* Action Buttons - Distinct primary actions for the agent */}
      <div className="flex justify-between gap-4 mb-6">
        <button
          className="flex-1 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
          style={{ backgroundColor: COLORS.primary }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = COLORS.primaryHover)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = COLORS.primary)
          }
        >
          Awesome
        </button>
        <button
          className="flex-1 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
          style={{ backgroundColor: COLORS.primary }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = COLORS.primaryHover)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = COLORS.primary)
          }
        >
          Prepare
        </button>
      </div>

      {/* Bottom Section - Lists previously processed items */}
      <div>
        <h3 className="text-base font-semibold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
