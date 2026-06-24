/**
 * Constants for Figma design colors to ensure consistency and readability.
 */
const COLORS = {
  BACKGROUND: '#272822',
  HEADER_TEXT: '#b5b5b5',
  MUTED_TEXT: '#8b9291',
  SECTION_HEADER: '#b2b2b1',
  LABEL: '#a4a4a3',
  PLACEHOLDER: '#737470',
  BORDER_THIN: '#a5adad',
  BORDER_THICK: '#929291',
  BUTTON_BG: '#843a17',
  BUTTON_TEXT: '#8c8078',
  FOOTER_TEXT: '#b0b0b0',
} as const;

/**
 * Shared SVG icons extracted for clarity and reuse.
 */
const SettingsIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke={COLORS.HEADER_TEXT}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .3 1.5l.6 3a2 2 0 0 1-2.2 2h-2.1a1.65 1.65 0 0 0-1.5.3L12 21.6a2 2 0 0 1-2 0l-2.1-.6a1.65 1.65 0 0 0-1.5-.3H3.2a2 2 0 0 1-2-2.2l.6-3a1.65 1.65 0 0 0 .3-1.5L2.4 12a2 2 0 0 1 0-2l-.6-2.1a1.65 1.65 0 0 0-.3-1.5l-.6-3a2 2 0 0 1 2.2-2h2.1a1.65 1.65 0 0 0 1.5-.3l2.1-.6a2 2 0 0 1 2 0l2.1.6a1.65 1.65 0 0 0 1.5.3h2.1a2 2 0 0 1 2.2 2l-.6 3a1.65 1.65 0 0 0-.3 1.5L21.6 12a2 2 0 0 1 0 2l.6 2.1z"></path>
  </svg>
);

const ChevronUpIcon = ({ color }: { color: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

const InfoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke={COLORS.LABEL}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-1"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

/**
 * TestCard component: A standalone UI replication of the Figma design.
 * Used for visual verification of the "UI magician Agent" panel.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] p-4"
      style={{ backgroundColor: COLORS.BACKGROUND }}
    >
      {/* Header section with title and settings icon */}
      <div className="flex justify-between items-center mb-4">
        <span
          className="font-semibold text-[13.5px]"
          style={{ color: COLORS.HEADER_TEXT }}
        >
          UI magician Agent
        </span>
        <SettingsIcon />
      </div>

      {/* Collapsed/Informational row */}
      <div className="flex items-center mb-6">
        <ChevronUpIcon color={COLORS.MUTED_TEXT} />
        <span
          className="ml-2 text-[11.5px] font-semibold"
          style={{ color: COLORS.MUTED_TEXT }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Primary section header */}
      <div className="flex items-center mb-4">
        <ChevronUpIcon color={COLORS.SECTION_HEADER} />
        <span
          className="ml-2 font-semibold text-[13.5px]"
          style={{ color: COLORS.SECTION_HEADER }}
        >
          Add New Design
        </span>
      </div>

      {/* Form Fields: Hardcoded for demo/verification purposes */}
      <div className="space-y-4 mb-6">
        {/* Personal Access Token Field */}
        <div>
          <div className="flex items-center mb-1">
            <label
              htmlFor="pat"
              className="text-[11.5px] font-semibold"
              style={{ color: COLORS.LABEL }}
            >
              Personal Access Token
            </label>
            <InfoIcon />
          </div>
          <input
            type="text"
            id="pat"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 rounded text-[11.5px] font-semibold"
            style={{
              backgroundColor: COLORS.BACKGROUND,
              border: `1px solid ${COLORS.BORDER_THIN}`,
              color: COLORS.PLACEHOLDER,
            }}
          />
        </div>

        {/* Design URL Field */}
        <div>
          <div className="flex items-center mb-1">
            <label
              htmlFor="designUrl"
              className="text-[11.5px] font-semibold"
              style={{ color: COLORS.LABEL }}
            >
              Design URL
            </label>
            <InfoIcon />
          </div>
          <input
            type="text"
            id="designUrl"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 rounded text-[11.5px] font-semibold"
            style={{
              backgroundColor: COLORS.BACKGROUND,
              border: `2px solid ${COLORS.BORDER_THICK}`,
              color: COLORS.PLACEHOLDER,
            }}
          />
        </div>
      </div>

      {/* Action Buttons: Visual-only triggers */}
      <div className="flex justify-between space-x-3 mb-6">
        <button
          className="flex-1 py-2 font-semibold text-[11.5px] rounded-lg transition-opacity hover:opacity-90"
          style={{
            backgroundColor: COLORS.BUTTON_BG,
            color: COLORS.BUTTON_TEXT,
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2 font-semibold text-[11.5px] rounded-lg transition-opacity hover:opacity-90"
          style={{
            backgroundColor: COLORS.BUTTON_BG,
            color: COLORS.BUTTON_TEXT,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Footer Section Title */}
      <h3
        className="font-semibold text-[13.5px]"
        style={{ color: COLORS.FOOTER_TEXT }}
      >
        Recent Breakdowns
      </h3>
    </div>
  );
};

