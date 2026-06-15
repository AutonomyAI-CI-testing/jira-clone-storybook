
import type { JSX } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { RiArrowUpSLine } from 'react-icons/ri';

/**
 * TestCard component
 * A self-contained UI panel approximating a "UI Magician Agent" design.
 * Uses inline styles for precise color matching and layout as per the requirements.
 */

const COLORS = {
  bg: "#2a2a2a",
  inputBg: "#252525",
  textHeader: "#e8e0d8",
  textMuted: "#a0714f",
  textLabel: "#c8bfb5",
  border: "#444",
  accent: "#b85c2c",
  gearIcon: "#888",
};

const S = {
  card: {
    backgroundColor: COLORS.bg,
    color: COLORS.textHeader,
    padding: "16px",
    width: "280px",
    fontFamily: "sans-serif",
    borderRadius: "8px",
  } as React.CSSProperties,
  headerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "16px",
  } as React.CSSProperties,
  title: {
    fontWeight: "bold",
    color: COLORS.textHeader,
    fontSize: "16px",
  } as React.CSSProperties,
  gear: {
    color: COLORS.gearIcon,
    fontSize: "18px",
  } as React.CSSProperties,
  collapsed: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: COLORS.textMuted,
    fontSize: "13px",
    marginBottom: "16px",
  } as React.CSSProperties,
  section: {
    marginBottom: "24px",
  } as React.CSSProperties,
  sectionHdr: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginBottom: "12px",
  } as React.CSSProperties,
  sectionLbl: {
    fontWeight: "bold",
    color: COLORS.textHeader,
    fontSize: "15px",
  } as React.CSSProperties,
  fieldWrap: {
    marginBottom: "10px",
  } as React.CSSProperties,
  labelRow: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "13px",
    color: COLORS.textLabel,
    marginBottom: "4px",
  } as React.CSSProperties,
  input: {
    width: "100%",
    boxSizing: "border-box" as const,
    backgroundColor: COLORS.inputBg,
    border: `1px solid ${COLORS.border}`,
    borderRadius: "6px",
    padding: "8px",
    color: COLORS.textLabel,
    fontSize: "13px",
    outline: "none",
  } as React.CSSProperties,
  btnRow: {
    display: "flex",
    gap: "8px",
    paddingTop: "8px",
  } as React.CSSProperties,
  btn: {
    flex: 1,
    padding: "8px 0",
    borderRadius: "8px",
    backgroundColor: COLORS.accent,
    color: "#fff",
    fontWeight: 600,
    fontSize: "14px",
    border: "none",
    cursor: "pointer",
  } as React.CSSProperties,
  footer: {
    paddingTop: "16px",
    borderTop: `1px solid ${COLORS.border}`,
  } as React.CSSProperties,
  footerHdr: {
    fontWeight: "bold",
    color: COLORS.textHeader,
    fontSize: "15px",
  } as React.CSSProperties,
};

const FormField = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div style={S.fieldWrap}>
    <label style={S.labelRow}>
      {label} <AiOutlineInfoCircle style={{ fontSize: "13px" }} />
    </label>
    <input type="text" placeholder={placeholder} style={S.input} />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" style={S.card}>
      {/* Header section with brand title and settings */}
      <div style={S.headerRow}>
        <span style={S.title}>UI magician Agent</span>
        <IoSettingsOutline style={S.gear} />
      </div>

      {/* Breadcrumb or status line showing scope */}
      <div style={S.collapsed}>
        <RiArrowUpSLine style={{ fontSize: "18px" }} />
        <span>From entire frame to a singl...</span>
      </div>

      <div style={S.section}>
        {/* Collapsible section toggle */}
        <div style={S.sectionHdr}>
          <RiArrowUpSLine style={{ fontSize: "18px", color: COLORS.textHeader }} />
          <span style={S.sectionLbl}>Add New Design</span>
        </div>

        <FormField label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxx" />
        <FormField label="Design URL" placeholder="https://www.figma.com/file/:" />

        {/* Primary action buttons */}
        <div style={S.btnRow}>
          <button style={S.btn} type="button">
            Awesome
          </button>
          <button style={S.btn} type="button">
            Prepare
          </button>
        </div>
      </div>

      {/* History/Recent activity section */}
      <div style={S.footer}>
        <h3 style={S.footerHdr}>Recent Breakdowns</h3>
      </div>
    </div>
  );
};
