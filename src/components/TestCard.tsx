// Color palette for dark theme UI
const COLORS = {
  cardBg: "#2a2a2a",
  headerText: "#b5b5b5",
  collapsedText: "#8b9291",
  designText: "#b2b2b1",
  labelText: "#a4a4a3",
  buttonBg: "#a0522d",
  buttonText: "#d4b8a8",
  inputBg: "#1e1e1e",
  inputBorder: "#555",
  inputText: "#737470",
  recentBreakdownsText: "#b0b0b0",
};

// Layout and spacing constants
const SIZES = {
  cardMaxWidth: "280px",
  gearIconSize: "22px",
  collapseIconSize: "16px",
  addDesignIconSize: "18px",
  infoIconSize: "15px",
  inputPadding: "8px 12px",
  buttonPadding: "10px 0",
  cardPadding: "20px",
};

// Shared SVG props for icon styling
const iconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

// InfoIcon component - reused in form labels
const InfoIcon = ({ color }: { color: string }) => (
  <svg
    {...iconProps}
    stroke={color}
    style={{
      width: SIZES.infoIconSize,
      height: SIZES.infoIconSize,
      flexShrink: 0,
    }}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

// ChevronUpIcon component - reused for collapsible sections
const ChevronUpIcon = ({ color, size }: { color: string; size: string }) => (
  <svg
    {...iconProps}
    stroke={color}
    strokeWidth="2.5"
    style={{ width: size, height: size, flexShrink: 0 }}
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

// GearIcon component - used in header
const GearIcon = () => (
  <svg
    {...iconProps}
    stroke={COLORS.headerText}
    style={{
      width: SIZES.gearIconSize,
      height: SIZES.gearIconSize,
      flexShrink: 0,
    }}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

// FormInput component - shared styling for PAT and Design URL inputs
const FormInput = ({
  id,
  placeholder,
}: {
  id: string;
  placeholder: string;
}) => (
  <input
    type="text"
    id={id}
    placeholder={placeholder}
    style={{
      width: "100%",
      backgroundColor: COLORS.inputBg,
      border: `1px solid ${COLORS.inputBorder}`,
      borderRadius: "6px",
      padding: SIZES.inputPadding,
      fontSize: "12px",
      color: COLORS.inputText,
      outline: "none",
      boxSizing: "border-box",
    }}
  />
);

// FormLabel component - shared styling for form field labels
const FormLabel = ({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: string;
}) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "6px",
      marginTop: "14px",
      marginBottom: "6px",
    }}
  >
    <label
      htmlFor={htmlFor}
      style={{
        color: COLORS.labelText,
        fontSize: "13px",
        fontWeight: 600,
      }}
    >
      {children}
    </label>
    <InfoIcon color={COLORS.labelText} />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: COLORS.cardBg,
        fontFamily: "sans-serif",
        maxWidth: SIZES.cardMaxWidth,
        width: "100%",
        borderRadius: "8px",
        padding: SIZES.cardPadding,
      }}
    >
      {/* Header with title and settings icon */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            color: COLORS.headerText,
            fontSize: "18px",
            fontWeight: 700,
            margin: 0,
          }}
        >
          UI magician Agent
        </h2>
        <GearIcon />
      </div>

      {/* Collapsed section indicator */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginTop: "12px",
        }}
      >
        <ChevronUpIcon
          color={COLORS.collapsedText}
          size={SIZES.collapseIconSize}
        />
        <p
          style={{
            color: COLORS.collapsedText,
            fontSize: "13px",
            fontWeight: 600,
            margin: 0,
          }}
        >
          From entire frame to a singl...
        </p>
      </div>

      {/* Spacer for vertical rhythm */}
      <div style={{ marginTop: "24px" }} />

      {/* Add new design section */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <ChevronUpIcon
          color={COLORS.designText}
          size={SIZES.addDesignIconSize}
        />
        <p
          style={{
            color: COLORS.designText,
            fontSize: "17px",
            fontWeight: 600,
            margin: 0,
          }}
        >
          Add New Design
        </p>
      </div>

      {/* Form inputs for authentication and design reference */}
      <div
        style={{
          marginTop: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <div style={{ marginBottom: "6px" }}>
          <FormLabel htmlFor="pat">Personal Access Token</FormLabel>
          <FormInput id="pat" placeholder="figd_xxxxxxxxxxxxxxxxxx" />
        </div>

        <FormLabel htmlFor="design-url">Design URL</FormLabel>
        <FormInput id="design-url" placeholder="https://www.figma.com/file/:" />
      </div>

      {/* Action buttons */}
      <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
        <button
          style={{
            flex: 1,
            backgroundColor: COLORS.buttonBg,
            color: COLORS.buttonText,
            border: "none",
            borderRadius: "8px",
            padding: SIZES.buttonPadding,
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            flex: 1,
            backgroundColor: COLORS.buttonBg,
            color: COLORS.buttonText,
            border: "none",
            borderRadius: "8px",
            padding: SIZES.buttonPadding,
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Section for viewing recent designs */}
      <h3
        style={{
          marginTop: "32px",
          color: COLORS.recentBreakdownsText,
          fontSize: "17px",
          fontWeight: 600,
        }}
      >
        Recent Breakdowns
      </h3>
    </div>
  );
};

export default TestCard;
