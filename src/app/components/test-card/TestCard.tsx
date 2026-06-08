// Color palette for the dark-themed UI magician card
const COLORS = {
  // Main background
  background: "#2c2c2c",
  // Text colors
  headerText: "#b5b5b5",
  subtitleText: "#8b9291",
  sectionHeadingText: "#b2b2b1",
  labelText: "#a4a4a3",
  inputText: "#e0c9bb",
  footerText: "#b0b0b0",
  // Input styles
  inputBackground: "#3a3a3a",
  inputBorder: "#555",
  // Button styles
  buttonBackground: "#b05a2a",
  buttonText: "#e0c9bb",
};

// Font sizes for consistent typography
const FONT_SIZES = {
  header: "13.5px",
  subtitle: "11.5px",
  sectionHeading: "13.5px",
  label: "11.5px",
  input: "11.5px",
  button: "11.5px",
  footer: "13.5px",
};

const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: COLORS.background }}
      className="font-sans w-80 p-4 text-white"
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <span
          className="text-base font-bold"
          style={{ color: COLORS.headerText, fontSize: FONT_SIZES.header }}
        >
          UI magician Agent
        </span>
        <span className="text-lg" style={{ color: COLORS.headerText }}>
          ⚙
        </span>
      </div>

      {/* Subtitle */}
      <div className="mb-6 flex items-center gap-2">
        <span className="text-sm" style={{ color: COLORS.subtitleText }}>
          ∧
        </span>
        <span
          className="font-bold"
          style={{ color: COLORS.subtitleText, fontSize: FONT_SIZES.subtitle }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Section Heading */}
      <div className="mb-4 flex items-center gap-2">
        <span className="text-sm" style={{ color: COLORS.sectionHeadingText }}>
          ∧
        </span>
        <span
          className="font-bold"
          style={{
            color: COLORS.sectionHeadingText,
            fontSize: FONT_SIZES.sectionHeading,
          }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <div className="mb-1 flex items-center gap-2">
          <label
            htmlFor="pat-input"
            className="font-bold"
            style={{ color: COLORS.labelText, fontSize: FONT_SIZES.label }}
          >
            Personal Access Token
          </label>
          <span className="text-xs" style={{ color: COLORS.labelText }}>
            ⓘ
          </span>
        </div>
        <input
          id="pat-input"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border p-2 focus:outline-none focus:ring-1"
          style={{
            backgroundColor: COLORS.inputBackground,
            borderColor: COLORS.inputBorder,
            color: COLORS.inputText,
            fontSize: FONT_SIZES.input,
          }}
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <div className="mb-1 flex items-center gap-2">
          <label
            htmlFor="url-input"
            className="font-bold"
            style={{ color: COLORS.labelText, fontSize: FONT_SIZES.label }}
          >
            Design URL
          </label>
          <span className="text-xs" style={{ color: COLORS.labelText }}>
            ⓘ
          </span>
        </div>
        <input
          id="url-input"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border p-2 focus:outline-none focus:ring-1"
          style={{
            backgroundColor: COLORS.inputBackground,
            borderColor: COLORS.inputBorder,
            color: COLORS.inputText,
            fontSize: FONT_SIZES.input,
          }}
        />
      </div>

      {/* Buttons */}
      <div className="mb-6 flex gap-4">
        <button
          className="flex-1 rounded p-2 font-bold"
          style={{
            backgroundColor: COLORS.buttonBackground,
            color: COLORS.buttonText,
            fontSize: FONT_SIZES.button,
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded p-2 font-bold"
          style={{
            backgroundColor: COLORS.buttonBackground,
            color: COLORS.buttonText,
            fontSize: FONT_SIZES.button,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div>
        <h3
          className="font-bold"
          style={{ color: COLORS.footerText, fontSize: FONT_SIZES.footer }}
        >
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};

export default TestCard;
