import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1e1e1a", minHeight: "100vh", padding: "16px" }}
    >
      <div
        style={{
          backgroundColor: "#272822",
          borderRadius: "8px",
          padding: "20px 16px",
          maxWidth: "320px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* 1. Header row */}
        <div className="flex items-center justify-between mb-3">
          <span style={{ color: "#b5b5b5", fontWeight: 700, fontSize: "15px" }}>
            UI magician Agent
          </span>
          <FiSettings size={20} style={{ color: "#b5b5b5" }} />
        </div>

        {/* 2. Subtitle row */}
        <div className="flex items-center gap-2 mb-8">
          <FiChevronUp size={14} style={{ color: "#c17a4a" }} />
          <span style={{ color: "#c17a4a", fontSize: "12px", fontWeight: 600 }}>
            From entire frame to a singl...
          </span>
        </div>

        {/* 3. Section header */}
        <div className="flex items-center gap-2 mb-5">
          <FiChevronUp size={16} style={{ color: "#b2b2b1" }} />
          <span style={{ color: "#b2b2b1", fontWeight: 700, fontSize: "15px" }}>
            Add New Design
          </span>
        </div>

        {/* 4. Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-2">
            <span style={{ color: "#a4a4a3", fontSize: "12px", fontWeight: 600 }}>
              Personal Access Token
            </span>
            <FiInfo size={14} style={{ color: "#a4a4a3" }} />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full px-3 py-2 outline-none"
            style={{
              backgroundColor: "#272822",
              border: "1.5px solid #4a4a47",
              borderRadius: "4px",
              color: "#737470",
              fontSize: "12px",
              fontWeight: 600,
            }}
          />
        </div>

        {/* 5. Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <span style={{ color: "#a4a4a3", fontSize: "12px", fontWeight: 600 }}>
              Design URL
            </span>
            <FiInfo size={14} style={{ color: "#a4a4a3" }} />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full px-3 py-2 outline-none"
            style={{
              backgroundColor: "#272822",
              border: "1.5px solid #a5adad",
              borderRadius: "4px",
              color: "#737470",
              fontSize: "12px",
              fontWeight: 600,
            }}
          />
        </div>

        {/* 6. Buttons */}
        <div className="flex gap-3 justify-center mb-8">
          <button
            className="flex-1 py-2 px-4"
            style={{
              backgroundColor: "#843a17",
              color: "#d4a896",
              borderRadius: "6px",
              fontWeight: 600,
              fontSize: "12px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2 px-4"
            style={{
              backgroundColor: "#843a17",
              color: "#d4a896",
              borderRadius: "6px",
              fontWeight: 600,
              fontSize: "12px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Prepare
          </button>
        </div>

        {/* 7. Recent Breakdowns */}
        <div>
          <span style={{ color: "#b0b0b0", fontWeight: 700, fontSize: "15px" }}>
            Recent Breakdowns
          </span>
        </div>
      </div>
    </div>
  );
};
