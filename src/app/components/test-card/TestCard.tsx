// Color constants for consistent styling
const COLORS = {
  primary: "#b5b5b5",
  secondary: "#b2b2b1",
  tertiary: "#a3a3a2",
  border: "#3a3a3a",
  icon: "#737470",
  buttonDefault: "#8b5a3c",
  buttonHover: "#9d6840",
};

// Gear icon component
const GearIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    style={{ color: COLORS.primary }}
  >
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1" />
    <path
      d="M8 10c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2 0.9 2 2 2z"
      fill="currentColor"
    />
  </svg>
);

// Chevron/arrow icon component - used for collapsible sections
const ChevronIcon = ({ color = COLORS.primary }: { color?: string }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    style={{ color }}
  >
    <path
      d="M2 4l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

// Info icon component - used in form labels
const InfoIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    style={{ color: COLORS.icon }}
  >
    <circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeWidth="1" />
    <text
      x="7"
      y="9"
      textAnchor="middle"
      className="text-xs"
      fill="currentColor"
    >
      i
    </text>
  </svg>
);

// Button hover effect handler factory
const createButtonHoverHandler = (
  defaultColor: string,
  hoverColor: string
): ((e: React.MouseEvent<HTMLButtonElement>) => void) => {
  return (e) => {
    e.currentTarget.style.backgroundColor = hoverColor;
  };
};

const createButtonLeaveHandler = (
  defaultColor: string
): ((e: React.MouseEvent<HTMLButtonElement>) => void) => {
  return (e) => {
    e.currentTarget.style.backgroundColor = defaultColor;
  };
};

export const TestCard = () => {
  return (
    <div id="testElem" className="bg-black p-6 w-full max-w-md mx-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-sm font-semibold" style={{ color: COLORS.primary }}>
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      {/* Collapsible Section */}
      <div
        className="border-b pb-4 mb-4"
        style={{ borderColor: COLORS.border }}
      >
        <div className="flex items-center gap-2 cursor-pointer">
          <ChevronIcon />
          <span className="text-xs font-semibold" style={{ color: COLORS.secondary }}>
            From entire frame to a singl...
          </span>
        </div>
      </div>

      {/* Add New Design Section */}
      <div className="border-b pb-4 mb-6" style={{ borderColor: COLORS.border }}>
        <div className="flex items-center gap-2 cursor-pointer">
          <ChevronIcon />
          <span className="text-xs font-semibold" style={{ color: COLORS.secondary }}>
            Add New Design
          </span>
        </div>
      </div>

      {/* Form Section */}
      <div className="space-y-4 mb-6">
        {/* Personal Access Token Field */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <label
              className="text-xs font-semibold"
              style={{ color: COLORS.tertiary }}
            >
              Personal Access Token
            </label>
            <InfoIcon />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-black border px-3 py-2 text-xs text-gray-400 placeholder-gray-600 focus:outline-none"
            style={{
              borderColor: COLORS.border,
              color: COLORS.primary,
            }}
          />
        </div>

        {/* Design URL Field */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <label
              className="text-xs font-semibold"
              style={{ color: COLORS.tertiary }}
            >
              Design URL
            </label>
            <InfoIcon />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-black border px-3 py-2 text-xs text-gray-400 placeholder-gray-600 focus:outline-none"
            style={{
              borderColor: COLORS.border,
              color: COLORS.primary,
            }}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-6">
        <button
          className="flex-1 px-4 py-2 text-xs font-semibold text-white rounded transition-colors"
          style={{ backgroundColor: COLORS.buttonDefault }}
          onMouseEnter={createButtonHoverHandler(COLORS.buttonDefault, COLORS.buttonHover)}
          onMouseLeave={createButtonLeaveHandler(COLORS.buttonDefault)}
        >
          Awesome
        </button>
        <button
          className="flex-1 px-4 py-2 text-xs font-semibold text-white rounded transition-colors"
          style={{ backgroundColor: COLORS.buttonDefault }}
          onMouseEnter={createButtonHoverHandler(COLORS.buttonDefault, COLORS.buttonHover)}
          onMouseLeave={createButtonLeaveHandler(COLORS.buttonDefault)}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div>
        <h2 className="text-xs font-semibold" style={{ color: COLORS.secondary }}>
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
