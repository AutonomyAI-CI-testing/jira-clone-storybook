import React from "react";
import {
  IoSettingsOutline,
  IoChevronUp,
  IoInformationCircleOutline,
} from "react-icons/io5";

/**
 * Design token approximate colors for the dark theme.
 * Using inline styles for specific hex values as required by project constraints.
 */
const COLORS = {
  PANEL_BG: "#282828",
  INPUT_BG: "#1e1e1e",
  BORDER: "#555",
  DIVIDER: "#4b5563",
  MUTED: "#9ca3af",
  PRIMARY_BUTTON: "#A0522D", // Earthy orange-brown variant
};

const styles = {
  root: {
    backgroundColor: COLORS.PANEL_BG,
    color: "#ffffff",
  } as React.CSSProperties,
  muted: { color: COLORS.MUTED } as React.CSSProperties,
  divider: {
    borderBottom: `1px solid ${COLORS.DIVIDER}`,
    marginBottom: "1rem",
  } as React.CSSProperties,
  input: {
    backgroundColor: COLORS.INPUT_BG,
    border: `1px solid ${COLORS.BORDER}`,
    color: "#ffffff",
    width: "100%",
    padding: "0.5rem",
    borderRadius: "0.375rem",
    fontSize: "0.875rem",
    outline: "none",
  } as React.CSSProperties,
  button: {
    flex: 1,
    padding: "0.5rem 1rem",
    backgroundColor: COLORS.PRIMARY_BUTTON,
    color: "#ffffff",
    fontWeight: 600,
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer",
  } as React.CSSProperties,
};

/**
 * TestCard component approximates a UI panel from a Figma design.
 * It is used for visual verification and testing of the magician agent's output.
 * Root element has id="testElem" as per functional requirements.
 */
export const TestCard = () => {
  return (
    <div id="testElem" style={styles.root} className="w-64 p-4 rounded-lg">
      {/* Header row: Agent identity and settings */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">UI magician Agent</h2>
        <IoSettingsOutline
          style={styles.muted}
          className="text-lg"
          aria-label="Settings"
        />
      </div>

      {/* Status section with collapsible indicator */}
      <div className="flex items-center mb-4" style={styles.muted}>
        <IoChevronUp className="mr-2" />
        <p className="truncate text-sm">From entire frame to a singl...</p>
      </div>

      <div style={styles.divider} aria-hidden="true" />

      {/* Action section header */}
      <div className="flex items-center mb-4">
        <IoChevronUp className="mr-2" />
        <h3 className="font-bold">Add New Design</h3>
      </div>

      {/* Personal Access Token input: used for Figma API authentication */}
      <div className="mb-4">
        <div className="flex items-center text-sm mb-1" style={styles.muted}>
          <label htmlFor="pat">Personal Access Token</label>
          <IoInformationCircleOutline className="ml-1" title="Figma PAT" />
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={styles.input}
        />
      </div>

      {/* Design URL input: link to the Figma file to be processed */}
      <div className="mb-6">
        <div className="flex items-center text-sm mb-1" style={styles.muted}>
          <label htmlFor="design-url">Design URL</label>
          <IoInformationCircleOutline className="ml-1" title="Figma URL" />
        </div>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={styles.input}
        />
      </div>

      {/* Primary action buttons */}
      <div className="flex gap-2 mb-6">
        <button style={styles.button}>Awesome</button>
        <button style={styles.button}>Prepare</button>
      </div>

      <h3 className="font-bold text-md mb-2">Recent Breakdowns</h3>
    </div>
  );
};
