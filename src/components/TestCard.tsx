import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";

export function TestCard() {
  const cardBg: React.CSSProperties = {
    backgroundColor: "#2a2a2a",
    minHeight: "100vh",
    padding: "20px",
    maxWidth: "360px",
    fontFamily: "sans-serif",
  };

  const mutedOrange: React.CSSProperties = { color: "#c4713d" };
  const white: React.CSSProperties = { color: "#e8e8e8" };
  const inputStyle: React.CSSProperties = {
    backgroundColor: "#333333",
    border: "1px solid #555555",
    borderRadius: "6px",
    padding: "10px 12px",
    color: "#888888",
    width: "100%",
    outline: "none",
    fontSize: "14px",
  };
  const btnStyle: React.CSSProperties = {
    backgroundColor: "#b5451b",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    padding: "12px 24px",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "15px",
    flex: 1,
  };

  return (
    <div id="testElem" style={cardBg}>
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span style={{ ...white, fontWeight: 700, fontSize: "18px" }}>
          UI magician Agent
        </span>
        <AiOutlineSetting size={24} style={white} />
      </div>

      {/* Caret + subtitle row */}
      <div className="flex items-center gap-2 mb-2 pl-1">
        <span style={mutedOrange}>^</span>
        <span style={{ ...mutedOrange, fontSize: "14px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div style={{ height: "40px" }} />

      {/* Add New Design section header */}
      <div className="flex items-center gap-2 mb-5">
        <span style={{ ...white, fontSize: "16px" }}>^</span>
        <span style={{ ...white, fontWeight: 700, fontSize: "18px" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-2">
          <span style={{ ...white, fontSize: "14px" }}>
            Personal Access Token
          </span>
          <AiOutlineInfoCircle size={18} style={{ color: "#888888" }} />
        </div>
        <input
          style={inputStyle}
          type="password"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-2">
          <span style={{ ...white, fontSize: "14px" }}>Design URL</span>
          <AiOutlineInfoCircle size={18} style={{ color: "#888888" }} />
        </div>
        <input
          style={inputStyle}
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-8">
        <button style={btnStyle}>Awesome</button>
        <button style={btnStyle}>Prepare</button>
      </div>

      {/* Recent Breakdowns */}
      <div style={{ ...white, fontWeight: 700, fontSize: "18px" }}>
        Recent Breakdowns
      </div>
    </div>
  );
}

export default TestCard;
