// Color palette for the UI magician agent card
const COLORS = {
  headerText: "#b5b5b5",
  secondaryText: "#8b9291",
  labelText: "#a4a4a3",
  inputBg: "#1a1a1a",
  inputBorder: "#333",
  inputText: "#737470",
  designUrlText: "#71726e",
  addNewDesignText: "#b2b2b1",
  breakdownsHeading: "#b0b0b0",
  buttonBg: "#c97052",
  buttonText: "#8c8078",
  designUrlLabel: "#a3a3a2",
};

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-64 bg-black p-5 text-sm">
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between">
        <h1
          className="text-base font-semibold"
          style={{ color: COLORS.headerText }}
        >
          UI magician Agent
        </h1>
        <button
          className="flex items-center justify-center rounded-full p-1 hover:opacity-80"
          aria-label="Settings"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{ color: COLORS.headerText }}
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m2.98 2.98l4.24 4.24M1 12h6m6 0h6m-16.78 7.78l4.24-4.24m2.98-2.98l4.24-4.24" />
          </svg>
        </button>
      </div>

      {/* Collapsible Section 1 */}
      <div className="mb-8">
        <button
          className="flex items-center gap-2 py-1 hover:opacity-80"
          aria-label="Toggle section"
        >
          <span style={{ color: COLORS.headerText }} className="text-lg">
            ^
          </span>
          <span
            style={{ color: COLORS.secondaryText }}
            className="text-xs font-semibold"
          >
            From entire frame to a singl...
          </span>
        </button>
      </div>

      {/* Add New Design Section */}
      <div className="mb-8">
        <button
          className="flex items-center gap-2 py-2 hover:opacity-80"
          aria-label="Toggle Add New Design"
        >
          <span style={{ color: COLORS.headerText }} className="text-lg">
            ^
          </span>
          <span
            style={{ color: COLORS.addNewDesignText }}
            className="text-base font-semibold"
          >
            Add New Design
          </span>
        </button>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-5">
        <label
          className="mb-2 flex items-center gap-2 font-semibold"
          style={{ color: COLORS.labelText }}
        >
          Personal Access Token
          <span className="text-lg" style={{ color: COLORS.secondaryText }}>
            ⓘ
          </span>
        </label>
        <input
          type="password"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full border px-3 py-2 text-xs"
          style={{
            backgroundColor: COLORS.inputBg,
            borderColor: COLORS.inputBorder,
            color: COLORS.inputText,
          }}
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <label
          className="mb-2 flex items-center gap-2 font-semibold"
          style={{ color: COLORS.designUrlLabel }}
        >
          Design URL
          <span className="text-lg" style={{ color: COLORS.secondaryText }}>
            ⓘ
          </span>
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full border px-3 py-2 text-xs"
          style={{
            backgroundColor: COLORS.inputBg,
            borderColor: COLORS.inputBorder,
            color: COLORS.designUrlText,
          }}
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-8 flex gap-4">
        <button
          className="flex-1 rounded py-2 text-sm font-semibold transition-all hover:opacity-90"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded py-2 text-sm font-semibold transition-all hover:opacity-90"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="mb-6">
        <h2
          className="text-base font-semibold"
          style={{ color: COLORS.breakdownsHeading }}
        >
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer Section */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-xs" style={{ color: COLORS.headerText }}>
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
