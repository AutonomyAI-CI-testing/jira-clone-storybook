import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

/**
 * Shared styles for the TestCard component.
 * Using a constant object for styles to keep the JSX clean and maintainable.
 */
const s = {
  card: {
    backgroundColor: "#2a2a2a",
    padding: "20px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "320px",
    fontFamily: "sans-serif",
  } as React.CSSProperties,
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  } as React.CSSProperties,
  title: {
    color: "#ffffff",
    fontWeight: 600,
    fontSize: "16px",
    margin: 0,
  } as React.CSSProperties,
  gearIcon: { color: "#9ca3af", fontSize: "20px" } as React.CSSProperties,
  subtitleRow: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    marginTop: "4px",
  } as React.CSSProperties,
  subtitleText: { color: "#c2845a", fontSize: "13px" } as React.CSSProperties,
  subtitleIcon: { color: "#9ca3af", fontSize: "13px" } as React.CSSProperties,
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "24px",
    marginBottom: "16px",
  } as React.CSSProperties,
  sectionTitle: {
    color: "#ffffff",
    fontWeight: 600,
    fontSize: "18px",
    margin: 0,
  } as React.CSSProperties,
  sectionIcon: { color: "#ffffff", fontSize: "18px" } as React.CSSProperties,
  formGroup: { marginBottom: "12px" } as React.CSSProperties,
  labelRow: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginBottom: "4px",
  } as React.CSSProperties,
  label: { color: "#d1d5db", fontSize: "13px" } as React.CSSProperties,
  infoIcon: { color: "#9ca3af", fontSize: "13px" } as React.CSSProperties,
  input: {
    backgroundColor: "#3a3a3a",
    border: "1px solid #555555",
    color: "#9ca3af",
    borderRadius: "4px",
    padding: "8px",
    width: "100%",
    fontSize: "13px",
    boxSizing: "border-box",
  } as React.CSSProperties,
  buttonRow: {
    display: "flex",
    gap: "12px",
    marginTop: "16px",
    justifyContent: "flex-end",
  } as React.CSSProperties,
  button: {
    backgroundColor: "#8B4513",
    color: "#ffffff",
    borderRadius: "8px",
    padding: "8px 24px",
    fontSize: "13px",
    fontWeight: 500,
    border: "none",
    cursor: "pointer",
  } as React.CSSProperties,
  recentHeading: {
    color: "#ffffff",
    fontWeight: 600,
    fontSize: "18px",
    marginTop: "32px",
    marginBottom: "8px",
  } as React.CSSProperties,
};

interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

/**
 * A reusable form field component for the TestCard.
 * Extracted to reduce duplication since both PAT and Design URL fields share the same structure.
 */
const FormField = ({ id, label, placeholder }: FormFieldProps) => (
  <div style={s.formGroup}>
    <div style={s.labelRow}>
      <label htmlFor={id} style={s.label}>
        {label}
      </label>
      <AiOutlineInfoCircle style={s.infoIcon} />
    </div>
    <input
      id={id}
      type="text"
      readOnly
      placeholder={placeholder}
      style={s.input}
    />
  </div>
);

/**
 * TestCard component displays a "UI magician Agent" interface with design configuration options.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" style={s.card}>
      {/* Brand Header */}
      <div style={s.headerRow}>
        <h2 style={s.title}>UI magician Agent</h2>
        <IoSettingsOutline style={s.gearIcon} />
      </div>

      {/* Breadcrumb-style subtitle */}
      <div style={s.subtitleRow}>
        <FiChevronUp style={s.subtitleIcon} />
        <span style={s.subtitleText}>From entire frame to a singl...</span>
      </div>

      {/* Configuration Section */}
      <div style={s.sectionHeader}>
        <FiChevronUp style={s.sectionIcon} />
        <h3 style={s.sectionTitle}>Add New Design</h3>
      </div>

      <FormField
        id="pat"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <FormField
        id="designUrl"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      {/* Action Buttons */}
      <div style={s.buttonRow}>
        <button style={s.button}>Awesome</button>
        <button style={s.button}>Prepare</button>
      </div>

      <h3 style={s.recentHeading}>Recent Breakdowns</h3>
    </div>
  );
};
