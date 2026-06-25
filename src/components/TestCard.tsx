import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { HiChevronUp, HiInformationCircle } from "react-icons/hi";

/**
 * TestCard component replicates a Figma design connection settings panel.
 * Designed as a self-contained smoke test for visual styling.
 */

// Colors and styles based on Figma design tokens
const COLORS = {
  background: "#2a2a2a",
  inputBg: "#1e1e1e",
  headerText: "#d0d0d0",
  mutedText: "#8b9a8a",
  secondaryText: "#d0d0ce",
  labelColor: "#b0b0ae",
  inputBorder: "#4a4a4a",
  placeholder: "#737470",
  buttonBg: "#7a3d1e",
  buttonText: "#e0b89a",
} as const;

export const TestCard = (): JSX.Element => {
  const inputStyle: React.CSSProperties = {
    display: "block",
    width: "100%",
    padding: "14px 12px",
    marginBottom: "20px",
    borderRadius: "6px",
    border: `1px solid ${COLORS.inputBorder}`,
    backgroundColor: COLORS.inputBg,
    color: COLORS.placeholder,
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
  };

  const buttonStyle: React.CSSProperties = {
    flex: 1,
    padding: "14px 0",
    borderRadius: "10px",
    backgroundColor: COLORS.buttonBg,
    color: COLORS.buttonText,
    fontWeight: 600,
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
  };

  const sectionRowStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    marginBottom: "8px",
  };

  const labelStyle: React.CSSProperties = {
    color: COLORS.labelColor,
    fontSize: "15px",
    marginRight: "8px",
  };

  return (
    <div
      id="testElem"
      style={{
        backgroundColor: COLORS.background,
        minHeight: "100vh",
        width: "100%",
        padding: "32px 24px",
        boxSizing: "border-box",
        fontFamily: "sans-serif",
      }}
    >
      {/* Header Row: Title and Settings Gear */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <h2
          style={{
            color: COLORS.headerText,
            fontSize: "22px",
            fontWeight: 700,
            margin: 0,
          }}
        >
          UI magician Agent
        </h2>
        <AiOutlineSetting
          style={{ color: COLORS.headerText, fontSize: "26px", flexShrink: 0 }}
        />
      </div>

      {/* Collapsible Meta Data Row */}
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "40px" }}
      >
        <HiChevronUp
          style={{ color: COLORS.mutedText, fontSize: "18px", marginRight: "8px" }}
        />
        <span style={{ color: COLORS.mutedText, fontSize: "14px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section Heading */}
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "24px" }}
      >
        <HiChevronUp
          style={{
            color: COLORS.secondaryText,
            fontSize: "20px",
            marginRight: "10px",
          }}
        />
        <h3
          style={{
            color: COLORS.secondaryText,
            fontSize: "20px",
            fontWeight: 700,
            margin: 0,
          }}
        >
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token Field */}
      <div style={sectionRowStyle}>
        <span style={labelStyle}>Personal Access Token</span>
        <HiInformationCircle style={{ color: COLORS.labelColor, fontSize: "17px" }} />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        style={inputStyle}
      />

      {/* Design URL Field */}
      <div style={sectionRowStyle}>
        <span style={labelStyle}>Design URL</span>
        <HiInformationCircle style={{ color: COLORS.labelColor, fontSize: "17px" }} />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        style={{ ...inputStyle, marginBottom: "32px" }}
      />

      {/* Action Buttons: Principal CTAs for the form */}
      <div style={{ display: "flex", gap: "16px", marginBottom: "48px" }}>
        <button style={buttonStyle}>Awesome</button>
        <button style={buttonStyle}>Prepare</button>
      </div>

      {/* Bottom Section: Historical/Recent activity breakdown */}
      <h3
        style={{
          color: COLORS.headerText,
          fontSize: "20px",
          fontWeight: 700,
          margin: 0,
        }}
      >
        Recent Breakdowns
      </h3>
    </div>
  );
};

