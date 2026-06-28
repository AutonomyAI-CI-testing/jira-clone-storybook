
// Figma-exact colors as constants to keep the component clean and maintainable
const COLORS = {
  bg: "#2a2a2a",
  header: "#b5b5b5",
  subtitle: "#8b9291",
  heading: "#b2b2b1",
  label: "#a4a4a3",
  labelAlt: "#a3a3a2",
  placeholder: "#737470",
  placeholderAlt: "#71726e",
  btnBg: "#b5541a",
  btnText: "#8c8078",
  footer: "#b0b0b0",
  border: "#555",
} as const;

/**
 * TestCard component
 * Reproduces a "UI magician Agent" panel from Figma design.
 * All values are hardcoded as per smoke test requirements.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: COLORS.bg }}
      className="p-4 flex flex-col gap-4 rounded-lg w-full max-w-[320px]"
    >
      {/* Header section with agent title and settings */}
      <div className="flex justify-between items-center">
        <h2 style={{ color: COLORS.header, fontSize: "13.5px", fontWeight: "600" }}>
          UI magician Agent
        </h2>
        <span role="img" aria-label="settings" className="text-sm">
          ⚙️
        </span>
      </div>

      {/* Collapsible-style subtitle section */}
      <div className="flex items-center gap-2">
        <span style={{ color: COLORS.subtitle }} className="text-[10px]">
          ▲
        </span>
        <p style={{ color: COLORS.subtitle, fontSize: "11.5px", fontWeight: "600" }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Main design configuration section */}
      <div className="flex items-center gap-2 mt-2">
        <span style={{ color: COLORS.heading }} className="text-[10px]">
          ▲
        </span>
        <h3 style={{ color: COLORS.heading, fontSize: "13.5px", fontWeight: "600" }}>
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token mapping to Figma's figd_ placeholder */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1">
          <label style={{ color: COLORS.label, fontSize: "11.5px", fontWeight: "600" }}>
            Personal Access Token
          </label>
          <span role="img" aria-label="info" className="text-[10px]">
            ℹ️
          </span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            backgroundColor: COLORS.bg,
            color: COLORS.placeholder,
            borderColor: COLORS.border,
            borderWidth: "1px",
          }}
          className="p-2 rounded outline-none focus:border-gray-400 transition-colors"
        />
      </div>

      {/* Design URL input section */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1">
          <label style={{ color: COLORS.labelAlt, fontSize: "11.5px", fontWeight: "600" }}>
            Design URL
          </label>
          <span role="img" aria-label="info" className="text-[10px]">
            ℹ️
          </span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={{
            backgroundColor: COLORS.bg,
            color: COLORS.placeholderAlt,
            borderColor: COLORS.border,
            borderWidth: "1px",
          }}
          className="p-2 rounded outline-none focus:border-gray-400 transition-colors"
        />
      </div>

      {/* Action buttons row */}
      <div className="flex gap-4 mt-2">
        <button
          style={{
            backgroundColor: COLORS.btnBg,
            color: COLORS.btnText,
            fontSize: "11.5px",
            fontWeight: "600",
          }}
          className="flex-1 p-2 rounded-lg hover:opacity-90 transition-opacity"
        >
          Awesome
        </button>
        <button
          style={{
            backgroundColor: COLORS.btnBg,
            color: COLORS.btnText,
            fontSize: "11.5px",
            fontWeight: "600",
          }}
          className="flex-1 p-2 rounded-lg hover:opacity-90 transition-opacity"
        >
          Prepare
        </button>
      </div>

      {/* Footer list indicator */}
      <h3 style={{ color: COLORS.footer, fontSize: "13.5px", fontWeight: "600" }} className="mt-2">
        Recent Breakdowns
      </h3>
    </div>
  );
};

