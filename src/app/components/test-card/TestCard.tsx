// Color palette used throughout the component
const COLORS = {
  headerText: "#b5b5b5",
  headerBg: "#b5b5b5",
  collapsibleText: "#8b9291",
  addDesignText: "#b2b2b1",
  addDesignIcon: "#b2b2b1",
  labelText: "#a4a4a3",
  inputBorder: "#4a4a4a",
  inputBg: "#1a1a1a",
  tokenInputText: "#737470",
  urlInputText: "#71726e",
  buttonBg: "#a0522d",
  buttonText: "#8c8078",
  recentText: "#b0b0b0",
  urlLabelText: "#a3a3a2",
} as const;

// Info icon component - used for token and URL fields
const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    style={{ color }}
  >
    <circle cx="8" cy="8" r="7" />
    <path d="M8 5v3M8 11v0" strokeLinecap="round" />
  </svg>
);

// Chevron icon component - used for collapsible sections
const ChevronIcon = ({ color, className = "" }: { color: string; className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
    style={{ color }}
  >
    <polyline points="12 10 8 6 4 10" />
  </svg>
);

// Settings icon component - used in header
const SettingsIcon = ({ color }: { color: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    style={{ color }}
  >
    <circle cx="10" cy="10" r="3" />
    <path d="M10 2v3M10 15v3M2 10h3M15 10h3M4.22 4.22l2.12 2.12M13.66 13.66l2.12 2.12M4.22 15.78l2.12-2.12M13.66 6.34l2.12-2.12" />
  </svg>
);

export const TestCard = () => {
  return (
    <div id="testElem" className="min-h-screen bg-black p-5">
      <div className="mx-auto max-w-md">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-base font-semibold" style={{ color: COLORS.headerText }}>
            UI magician Agent
          </h1>
          <SettingsIcon color={COLORS.headerBg} />
        </div>

        {/* Collapsible section 1 */}
        <div className="mb-8 flex items-start gap-2">
          <ChevronIcon color={COLORS.headerText} className="mt-0.5 flex-shrink-0" />
          <p className="text-sm font-semibold" style={{ color: COLORS.collapsibleText }}>
            From entire frame to a singl...
          </p>
        </div>

        {/* Add New Design section */}
        <div className="mb-8 flex items-center gap-2">
          <ChevronIcon color={COLORS.addDesignIcon} className="flex-shrink-0" />
          <h2 className="text-base font-semibold" style={{ color: COLORS.addDesignText }}>
            Add New Design
          </h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm font-semibold" style={{ color: COLORS.labelText }}>
              Personal Access Token
            </label>
            <InfoIcon color={COLORS.labelText} />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
            className="w-full border px-3 py-2 text-sm font-semibold"
            style={{
              borderColor: COLORS.inputBorder,
              backgroundColor: COLORS.inputBg,
              color: COLORS.tokenInputText,
            }}
            readOnly
          />
        </div>

        {/* Design URL */}
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm font-semibold" style={{ color: COLORS.urlLabelText }}>
              Design URL
            </label>
            <InfoIcon color={COLORS.urlLabelText} />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full border px-3 py-2 text-sm font-semibold"
            style={{
              borderColor: COLORS.inputBorder,
              backgroundColor: COLORS.inputBg,
              color: COLORS.urlInputText,
            }}
            readOnly
          />
        </div>

        {/* Buttons */}
        <div className="mb-12 flex gap-4">
          <button
            className="flex-1 rounded py-2 text-center text-sm font-semibold"
            style={{
              backgroundColor: COLORS.buttonBg,
              color: COLORS.buttonText,
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 rounded py-2 text-center text-sm font-semibold"
            style={{
              backgroundColor: COLORS.buttonBg,
              color: COLORS.buttonText,
            }}
          >
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns */}
        <div>
          <h3 className="text-base font-semibold" style={{ color: COLORS.recentText }}>
            Recent Breakdowns
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
