// Color palette for the dark-themed card UI
const COLORS = {
  background: "#000000",
  headerText: "#b5b5b5",
  iconStroke: "#929291",
  secondaryText: "#8b9291",
  labelText: "#a4a4a3",
  inputBgDark: "#272822",
  inputBorderDark: "#929291",
  inputTextLight: "#737470",
  inputBorderLight: "#a5adad",
  inputTextLight2: "#71726e",
  sectionTitle: "#b2b2b1",
  buttonBg: "#843a17",
  buttonText: "#8c8078",
  recentBreakdownsText: "#b0b0b0",
  labelTextAlt: "#a3a3a2",
};

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-64 bg-[#000000] p-5">
      {/* Header: Title with Settings Icon */}
      <div className="mb-6 flex items-center justify-between">
        <h1
          className="text-sm font-semibold"
          style={{ color: COLORS.headerText }}
        >
          UI magician Agent
        </h1>
        {/* Settings Icon */}
        <svg
          className="h-4 w-4"
          fill="none"
          stroke={COLORS.iconStroke}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="8" />
          <path d="M12 9v6M9 12h6" strokeLinecap="round" />
        </svg>
      </div>

      {/* Collapsible Section 1: From entire frame to a singl... */}
      <div className="mb-8 flex items-center gap-2">
        {/* Chevron Up Icon */}
        <svg
          className="h-3 w-3 flex-shrink-0"
          fill="none"
          stroke={COLORS.iconStroke}
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            d="M19 15l-7-7-7 7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p
          className="text-xs font-semibold"
          style={{ color: COLORS.secondaryText }}
        >
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6 flex items-center gap-2">
        {/* Chevron Up Icon */}
        <svg
          className="h-3 w-3 flex-shrink-0"
          fill="none"
          stroke={COLORS.iconStroke}
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            d="M19 15l-7-7-7 7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2
          className="text-sm font-semibold"
          style={{ color: COLORS.sectionTitle }}
        >
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <label
            className="text-xs font-semibold"
            style={{ color: COLORS.labelText }}
          >
            Personal Access Token
          </label>
          {/* Info Icon */}
          <svg
            className="h-3.5 w-3.5 flex-shrink-0"
            fill="none"
            stroke={COLORS.iconStroke}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
          >
            <circle cx="12" cy="12" r="9" />
            <text
              x="12"
              y="16"
              textAnchor="middle"
              fill={COLORS.iconStroke}
              fontSize="8"
            >
              i
            </text>
          </svg>
        </div>
        <input
          type="password"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded px-3 py-2 text-xs font-semibold"
          style={{
            backgroundColor: COLORS.inputBgDark,
            border: `2px solid ${COLORS.inputBorderDark}`,
            color: COLORS.inputTextLight,
          }}
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <label
            className="text-xs font-semibold"
            style={{ color: COLORS.labelTextAlt }}
          >
            Design URL
          </label>
          {/* Info Icon */}
          <svg
            className="h-3.5 w-3.5 flex-shrink-0"
            fill="none"
            stroke={COLORS.iconStroke}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
          >
            <circle cx="12" cy="12" r="9" />
            <text
              x="12"
              y="16"
              textAnchor="middle"
              fill={COLORS.iconStroke}
              fontSize="8"
            >
              i
            </text>
          </svg>
        </div>
        <input
          type="url"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded px-3 py-2 text-xs font-semibold"
          style={{
            backgroundColor: COLORS.inputBgDark,
            border: `1px solid ${COLORS.inputBorderLight}`,
            color: COLORS.inputTextLight2,
          }}
          readOnly
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-8 flex gap-4">
        <button
          className="flex-1 rounded px-4 py-2 text-xs font-semibold"
          style={{
            backgroundColor: COLORS.buttonBg,
            color: COLORS.buttonText,
            borderRadius: "4px",
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded px-4 py-2 text-xs font-semibold"
          style={{
            backgroundColor: COLORS.buttonBg,
            color: COLORS.buttonText,
            borderRadius: "4px",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h3
        className="text-sm font-semibold"
        style={{ color: COLORS.recentBreakdownsText }}
      >
        Recent Breakdowns
      </h3>

      {/* Footer */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-gray-600 text-xs">© AutonomyAI</p>
      </div>
    </div>
  );
};
