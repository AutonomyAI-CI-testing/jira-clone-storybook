// SVG icon for settings (gear icon)
const SettingsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="text-gray-500"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m2.12 2.12l4.24 4.24M1 12h6m6 0h6m-17.78 7.78l4.24-4.24m2.12-2.12l4.24-4.24" />
  </svg>
);

// SVG icon for collapsible sections (chevron up icon)
const ChevronIcon = ({ color = "#b5b5b5" }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="flex-shrink-0"
    style={{ color }}
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

// SVG icon for info tooltip
const InfoIcon = ({ color = "#a4a4a3" }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="flex-shrink-0"
    style={{ color }}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

// Field label with optional info icon
const FieldLabel = ({ label, color = "#a4a4a3", showInfo = true }) => (
  <div className="flex items-center gap-2 mb-2">
    <label className="text-[11.5px] font-bold" style={{ color }}>
      {label}
    </label>
    {showInfo && <InfoIcon color={color} />}
  </div>
);

// Disabled input field
const DisabledInput = ({ placeholder, textColor, borderColor }) => (
  <input
    type="text"
    placeholder={placeholder}
    className="w-full bg-black border border-gray-600 px-3 py-2 text-[11.5px] font-bold"
    style={{
      color: textColor,
      borderColor,
    }}
    disabled
  />
);

// Collapsible section with chevron and text
const CollapsibleSection = ({ text, textSize = "text-[11.5px]", textColor = "#8b9291" }) => (
  <div className="flex items-center gap-3 mb-12">
    <ChevronIcon />
    <span className={`${textSize} font-bold`} style={{ color: textColor }}>
      {text}
    </span>
  </div>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-full max-w-xs bg-black p-5 text-white font-[Inter]"
    >
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-[13.5px] font-bold" style={{ color: "#b5b5b5" }}>
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsible Section 1 */}
      <CollapsibleSection text="From entire frame to a singl..." textColor="#8b9291" />

      {/* Add New Design Section */}
      <CollapsibleSection text="Add New Design" textSize="text-[13.5px]" textColor="#b2b2b1" />

      {/* Personal Access Token Field */}
      <div className="mb-6">
        <FieldLabel label="Personal Access Token" color="#a4a4a3" />
        <DisabledInput
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          textColor="#737470"
          borderColor="#444"
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-8">
        <FieldLabel label="Design URL" color="#a3a3a2" />
        <DisabledInput
          placeholder="https://www.figma.com/file/:"
          textColor="#71726e"
          borderColor="#444"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-12">
        {["Awesome", "Prepare"].map((label) => (
          <button
            key={label}
            className="flex-1 py-2 px-4 rounded text-[11.5px] font-bold"
            style={{
              backgroundColor: "#a85a3a",
              color: "#8c8078",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Recent Breakdowns Footer */}
      <div>
        <h2 className="text-[13.5px] font-bold" style={{ color: "#b0b0b0" }}>
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};

export default TestCard;
