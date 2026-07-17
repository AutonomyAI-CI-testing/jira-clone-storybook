import { LuSettings, LuChevronUp, LuInfo } from "react-icons/lu";

export const TestCard = (): JSX.Element => {
  const inputStyle: React.CSSProperties = {
    backgroundColor: "#333333",
    border: "1px solid #555555",
    borderRadius: "6px",
    color: "#e8e8e8",
    padding: "10px 14px",
    width: "100%",
    outline: "none",
    fontSize: "14px",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#9a4a1a",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    padding: "12px 24px",
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",
    flex: 1,
  };

  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2a2a", color: "#e8e8e8", minHeight: "100vh" }}
      className="p-6"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold" style={{ color: "#e8e8e8" }}>
          UI magician Agent
        </span>
        <LuSettings size={22} style={{ color: "#e8e8e8" }} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mt-3">
        <LuChevronUp size={16} style={{ color: "#c87941" }} />
        <span className="text-sm" style={{ color: "#c87941" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design + form */}
      <div className="mt-10">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-6">
          <LuChevronUp size={18} style={{ color: "#e8e8e8" }} />
          <span className="text-lg font-bold" style={{ color: "#e8e8e8" }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold" style={{ color: "#e8e8e8" }}>
              Personal Access Token
            </span>
            <LuInfo size={16} style={{ color: "#aaaaaa" }} />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            style={inputStyle}
            readOnly
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold" style={{ color: "#e8e8e8" }}>
              Design URL
            </span>
            <LuInfo size={16} style={{ color: "#aaaaaa" }} />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            style={inputStyle}
            readOnly
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mb-10">
          <button style={buttonStyle}>Awesome</button>
          <button style={buttonStyle}>Prepare</button>
        </div>

        {/* Recent Breakdowns */}
        <div>
          <span className="text-lg font-bold" style={{ color: "#e8e8e8" }}>
            Recent Breakdowns
          </span>
        </div>
      </div>
    </div>
  );
};
