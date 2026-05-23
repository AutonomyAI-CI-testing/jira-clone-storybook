import { useState } from "react";

// SVG icon components
const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1" />
    <text
      x="7.5"
      y="10"
      textAnchor="middle"
      fontSize="10"
      fontWeight="bold"
      fill="currentColor"
    >
      i
    </text>
  </svg>
);

const SettingsIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1" />
    <path
      d="M8 1v2M8 13v2M15 8h-2M3 8H1"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <path
      d="M12.1 3.9l-1.4 1.4M5.3 10.7l-1.4 1.4M12.1 12.1l-1.4-1.4M5.3 5.3l-1.4-1.4"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

// Styles for card container and layout
const CARD_STYLES: React.CSSProperties = {
  width: "280px",
  borderRadius: "2px",
  backgroundColor: "#1e1e1e",
  padding: "20px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.6)",
};

const HEADER_STYLES: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "16px",
};

const TITLE_STYLES: React.CSSProperties = {
  fontSize: "13.5px",
  fontWeight: 600,
  letterSpacing: "0.025em",
  color: "#d1d5db",
};

const ICON_BUTTON_STYLES: React.CSSProperties = {
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  color: "#9ca3af",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

// Section button styles: small for inactive sections, large for main sections
const SECTION_BUTTON_SMALL_STYLES: React.CSSProperties = {
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "11.5px",
  fontWeight: 600,
  color: "#6b7280",
  width: "100%",
  marginBottom: "16px",
};

const SECTION_BUTTON_LARGE_STYLES: React.CSSProperties = {
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "13.5px",
  fontWeight: 600,
  color: "#d1d5db",
  width: "100%",
  marginBottom: "16px",
};

const getChevronStyle = (expanded: boolean): React.CSSProperties => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "16px",
  height: "16px",
  fontSize: "10px",
  transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
  transition: "transform 0.2s",
});

const LABEL_STYLES: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "11.5px",
  fontWeight: 600,
  color: "#9ca3af",
  marginBottom: "8px",
};

const INPUT_STYLES: React.CSSProperties = {
  width: "100%",
  border: "1px solid #555555",
  backgroundColor: "#2a2a2a",
  padding: "10px 12px",
  fontSize: "12px",
  fontWeight: 400,
  color: "#888888",
  outline: "none",
  boxSizing: "border-box",
  borderRadius: "0",
};

const FIELD_WRAPPER_STYLES: React.CSSProperties = { marginBottom: "20px" };

const BUTTON_GROUP_STYLES: React.CSSProperties = {
  display: "flex",
  gap: "16px",
};

const ACTION_BUTTON_STYLES: React.CSSProperties = {
  flex: 1,
  borderRadius: "6px",
  backgroundColor: "#a0522d",
  padding: "10px 16px",
  fontSize: "12px",
  fontWeight: 600,
  color: "#e0c9b8",
  border: "none",
  cursor: "pointer",
};

const RECENT_SECTION_STYLES: React.CSSProperties = {
  marginTop: "48px",
  paddingTop: "24px",
};

const RECENT_TITLE_STYLES: React.CSSProperties = {
  fontSize: "13.5px",
  fontWeight: 600,
  color: "#d1d5db",
};

const FOOTER_STYLES: React.CSSProperties = {
  borderTop: "1px solid #d1d5db",
  paddingTop: "12px",
  textAlign: "center",
  fontSize: "14px",
  color: "#9ca3af",
  marginTop: "24px",
};

type ExpandedSection = "frame-section" | "design-section" | null;

export const TestCard = (): JSX.Element => {
  // Track which section is currently expanded; starts with "design-section" shown
  const [expandedSection, setExpandedSection] =
    useState<ExpandedSection>("design-section");

  const toggleSection = (section: "frame-section" | "design-section") => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div style={CARD_STYLES}>
      {/* Header */}
      <div style={HEADER_STYLES}>
        <h1 style={TITLE_STYLES}>UI magician Agent</h1>
        <button style={ICON_BUTTON_STYLES} aria-label="Settings">
          <SettingsIcon />
        </button>
      </div>

      {/* Collapsible Section: From entire frame to a singl... */}
      <button
        onClick={() => toggleSection("frame-section")}
        style={SECTION_BUTTON_SMALL_STYLES}
      >
        <span style={getChevronStyle(expandedSection === "frame-section")}>
          ▲
        </span>
        <span>From entire frame to a singl...</span>
      </button>

      {/* Collapsible Section: Add New Design */}
      <button
        onClick={() => toggleSection("design-section")}
        style={SECTION_BUTTON_LARGE_STYLES}
      >
        <span style={getChevronStyle(expandedSection === "design-section")}>
          ▲
        </span>
        <span>Add New Design</span>
      </button>

      {/* Content shown when design-section is expanded */}
      {expandedSection === "design-section" && (
        <>
          {/* Personal Access Token Field */}
          <div style={FIELD_WRAPPER_STYLES}>
            <label style={LABEL_STYLES}>
              <span>Personal Access Token</span>
              <button
                style={ICON_BUTTON_STYLES}
                aria-label="Info about Personal Access Token"
              >
                <InfoIcon />
              </button>
            </label>
            <input
              type="password"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              style={INPUT_STYLES}
            />
          </div>

          {/* Design URL Field */}
          <div style={FIELD_WRAPPER_STYLES}>
            <label style={LABEL_STYLES}>
              <span>Design URL</span>
              <button
                style={ICON_BUTTON_STYLES}
                aria-label="Info about Design URL"
              >
                <InfoIcon />
              </button>
            </label>
            <input
              type="url"
              placeholder="https://www.figma.com/file/:"
              style={INPUT_STYLES}
            />
          </div>

          {/* Action Buttons */}
          <div style={BUTTON_GROUP_STYLES}>
            <button style={ACTION_BUTTON_STYLES}>Awesome</button>
            <button style={ACTION_BUTTON_STYLES}>Prepare</button>
          </div>
        </>
      )}

      {/* Recent Breakdowns Section */}
      <div style={RECENT_SECTION_STYLES}>
        <h2 style={RECENT_TITLE_STYLES}>Recent Breakdowns</h2>
      </div>

      {/* Footer Section */}
      <div style={FOOTER_STYLES}>© AutonomyAI</div>
    </div>
  );
};
