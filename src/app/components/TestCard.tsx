import { FiSettings, FiInfo, FiChevronUp } from "react-icons/fi";

const C = {
  bg: "#1a1a1a",
  inputBg: "#272822",
  inputBorder: "#929291",
  btnBg: "#843a17",
  btnText: "#d4c4b8",
  title: "#b5b5b5",
  subtitle: "#8b9291",
  label: "#a4a4a3",
  placeholder: "#737470",
  footer: "#b0b0b0",
} as const;

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: C.bg, color: C.title, maxWidth: 400, margin: "2rem auto", borderRadius: 8, padding: "1.25rem", fontFamily: "sans-serif" }}
    >
      {/* Header row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <h2 style={{ fontSize: "1.15rem", fontWeight: 600, color: C.title, margin: 0 }}>UI magician Agent</h2>
        <FiSettings style={{ color: C.title, fontSize: "1.25rem" }} />
      </div>

      {/* Subtitle row */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
        <FiChevronUp style={{ color: C.subtitle }} />
        <p style={{ fontSize: "0.85rem", color: C.subtitle, margin: 0 }}>From entire frame to a singl...</p>
      </div>

      {/* Add New Design section */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
        <FiChevronUp style={{ color: C.title }} />
        <h3 style={{ fontSize: "1rem", fontWeight: 600, color: C.title, margin: 0 }}>Add New Design</h3>
      </div>

      {/* Personal Access Token */}
      <div style={{ marginBottom: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.4rem" }}>
          <label htmlFor="pat" style={{ fontSize: "0.85rem", color: C.label, fontWeight: 600 }}>Personal Access Token</label>
          <FiInfo style={{ color: C.label, fontSize: "0.9rem" }} />
        </div>
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: 4,
            backgroundColor: C.inputBg,
            border: `2px solid ${C.inputBorder}`,
            color: C.title,
            fontSize: "0.85rem",
            boxSizing: "border-box",
            outline: "none",
          }}
        />
      </div>

      {/* Design URL */}
      <div style={{ marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.4rem" }}>
          <label htmlFor="url" style={{ fontSize: "0.85rem", color: C.label, fontWeight: 600 }}>Design URL</label>
          <FiInfo style={{ color: C.label, fontSize: "0.9rem" }} />
        </div>
        <input
          type="text"
          id="url"
          placeholder="https://www.figma.com/file/:"
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: 4,
            backgroundColor: C.inputBg,
            border: `2px solid ${C.inputBorder}`,
            color: C.title,
            fontSize: "0.85rem",
            boxSizing: "border-box",
            outline: "none",
          }}
        />
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", marginBottom: "1.5rem" }}>
        <button
          style={{
            padding: "0.5rem 1.5rem",
            borderRadius: 8,
            backgroundColor: C.btnBg,
            color: C.btnText,
            fontWeight: 600,
            fontSize: "0.9rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            padding: "0.5rem 1.5rem",
            borderRadius: 8,
            backgroundColor: C.btnBg,
            color: C.btnText,
            fontWeight: 600,
            fontSize: "0.9rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div>
        <p style={{ fontWeight: 600, color: C.footer, margin: 0 }}>Recent Breakdowns</p>
      </div>
    </div>
  );
};
