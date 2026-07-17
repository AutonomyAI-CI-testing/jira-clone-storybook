import { LuSettings, LuChevronUp, LuInfo } from "react-icons/lu";

export const TestCard = (): JSX.Element => {
  const bg = { backgroundColor: "#2a2a2a" };
  const inputStyle: React.CSSProperties = {
    backgroundColor: "#3a3a3a",
    border: "1px solid #555555",
    color: "#e8e8e8",
    borderRadius: "6px",
    padding: "10px 14px",
    width: "100%",
    outline: "none",
    fontSize: "14px",
  };
  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#a84b20",
    color: "#f5ede8",
    border: "none",
    borderRadius: "10px",
    padding: "12px 24px",
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",
    flex: 1,
  };
  const amberText = { color: "#c87941" };
  const whiteText = { color: "#e8e8e8" };
  const sectionGap: React.CSSProperties = { marginBottom: "24px" };

  return (
    <div
      id="testElem"
      style={{
        ...bg,
        minHeight: "100vh",
        padding: "28px 20px",
        maxWidth: "420px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "12px",
        }}
      >
        <span style={{ ...whiteText, fontSize: "22px", fontWeight: 700 }}>
          UI magician Agent
        </span>
        <LuSettings size={22} style={{ color: "#a8a8a8" }} />
      </div>

      {/* Subtitle row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          ...sectionGap,
        }}
      >
        <LuChevronUp size={16} style={{ color: "#c87941", flexShrink: 0 }} />
        <span style={{ ...amberText, fontSize: "14px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div style={{ height: "32px" }} />

      {/* Add New Design section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "24px",
        }}
      >
        <LuChevronUp size={18} style={{ ...whiteText }} />
        <span style={{ ...whiteText, fontSize: "18px", fontWeight: 700 }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div style={{ marginBottom: "16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "8px",
          }}
        >
          <span style={{ ...whiteText, fontSize: "14px", fontWeight: 500 }}>
            Personal Access Token
          </span>
          <LuInfo size={16} style={{ color: "#a8a8a8" }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          style={{ ...inputStyle, color: "#888" }}
        />
      </div>

      {/* Design URL */}
      <div style={{ marginBottom: "24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "8px",
          }}
        >
          <span style={{ ...whiteText, fontSize: "14px", fontWeight: 500 }}>
            Design URL
          </span>
          <LuInfo size={16} style={{ color: "#a8a8a8" }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          style={{ ...inputStyle, color: "#888" }}
        />
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "16px", marginBottom: "40px" }}>
        <button style={buttonStyle}>Awesome</button>
        <button style={buttonStyle}>Prepare</button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span style={{ ...whiteText, fontSize: "18px", fontWeight: 700 }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
