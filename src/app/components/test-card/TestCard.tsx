
import type { JSX } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { RiArrowUpSLine } from 'react-icons/ri';

const S = {
  card:       { backgroundColor: "#2a2a2a", color: "#e8e0d8", padding: "16px", width: "280px", fontFamily: "sans-serif" } as React.CSSProperties,
  headerRow:  { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" } as React.CSSProperties,
  title:      { fontWeight: "bold", color: "#e8e0d8", fontSize: "16px" } as React.CSSProperties,
  gear:       { color: "#888", fontSize: "18px" } as React.CSSProperties,
  collapsed:  { display: "flex", alignItems: "center", gap: "6px", color: "#a0714f", fontSize: "13px", marginBottom: "16px" } as React.CSSProperties,
  section:    { marginBottom: "24px" } as React.CSSProperties,
  sectionHdr: { display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px" } as React.CSSProperties,
  sectionLbl: { fontWeight: "bold", color: "#e8e0d8", fontSize: "15px" } as React.CSSProperties,
  fieldWrap:  { marginBottom: "10px" } as React.CSSProperties,
  labelRow:   { display: "flex", alignItems: "center", gap: "4px", fontSize: "13px", color: "#c8bfb5", marginBottom: "4px" } as React.CSSProperties,
  input:      { width: "100%", boxSizing: "border-box" as const, backgroundColor: "#252525", border: "1px solid #444", borderRadius: "6px", padding: "8px", color: "#c8bfb5", fontSize: "13px" } as React.CSSProperties,
  btnRow:     { display: "flex", gap: "8px", paddingTop: "8px" } as React.CSSProperties,
  btn:        { flex: 1, padding: "8px 0", borderRadius: "8px", backgroundColor: "#b85c2c", color: "#fff", fontWeight: 600, fontSize: "14px", border: "none", cursor: "pointer" } as React.CSSProperties,
  footer:     { paddingTop: "16px" } as React.CSSProperties,
  footerHdr:  { fontWeight: "bold", color: "#e8e0d8", fontSize: "15px" } as React.CSSProperties,
};

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" style={S.card}>
      {/* Header */}
      <div style={S.headerRow}>
        <span style={S.title}>UI magician Agent</span>
        <IoSettingsOutline style={S.gear} />
      </div>

      {/* Collapsed section row */}
      <div style={S.collapsed}>
        <RiArrowUpSLine style={{ fontSize: "18px" }} />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div style={S.section}>
        <div style={S.sectionHdr}>
          <RiArrowUpSLine style={{ fontSize: "18px", color: "#e8e0d8" }} />
          <span style={S.sectionLbl}>Add New Design</span>
        </div>

        <div style={S.fieldWrap}>
          <label style={S.labelRow}>
            Personal Access Token <AiOutlineInfoCircle style={{ fontSize: "13px" }} />
          </label>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            style={S.input}
          />
        </div>

        <div style={S.fieldWrap}>
          <label style={S.labelRow}>
            Design URL <AiOutlineInfoCircle style={{ fontSize: "13px" }} />
          </label>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            style={S.input}
          />
        </div>

        <div style={S.btnRow}>
          <button style={S.btn}>Awesome</button>
          <button style={S.btn}>Prepare</button>
        </div>
      </div>

      {/* Recent Breakdowns heading */}
      <div style={S.footer}>
        <h3 style={S.footerHdr}>Recent Breakdowns</h3>
      </div>
    </div>
  );
};
