import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#272822",
        fontFamily: "Inter, sans-serif",
        padding: "24px",
        maxWidth: "390px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            color: "#b5b5b5",
            fontSize: "13.5px",
            fontWeight: 600,
            lineHeight: "16.34px",
          }}
        >
          UI magician Agent
        </span>
        <FiSettings color="#b5b5b5" size={20} />
      </div>

      {/* Subtitle row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginTop: "8px",
        }}
      >
        <FiChevronUp color="#8b9291" size={12} />
        <span
          style={{
            color: "#8b9291",
            fontSize: "11.5px",
            fontWeight: 600,
            lineHeight: "13.92px",
          }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div style={{ marginTop: "32px" }} />

      {/* Add New Design section header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <FiChevronUp color="#b2b2b1" size={18} />
        <span
          style={{
            color: "#b2b2b1",
            fontSize: "13.5px",
            fontWeight: 600,
            lineHeight: "16.34px",
          }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          marginTop: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span
            style={{
              color: "#a4a4a3",
              fontSize: "11.5px",
              fontWeight: 600,
              lineHeight: "13.92px",
            }}
          >
            Personal Access Token
          </span>
          <FiInfo color="#a4a4a3" size={14} />
        </div>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            width: "100%",
            backgroundColor: "#1e1e1a",
            border: "2px solid #929291",
            color: "#737470",
            fontSize: "11.5px",
            fontWeight: 600,
            padding: "8px 12px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Design URL field */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          marginTop: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span
            style={{
              color: "#a3a3a2",
              fontSize: "11.5px",
              fontWeight: 600,
              lineHeight: "13.92px",
            }}
          >
            Design URL
          </span>
          <FiInfo color="#a3a3a2" size={14} />
        </div>
        <input
          readOnly
          placeholder="https://www.figma.com/file/:"
          style={{
            width: "100%",
            backgroundColor: "#1e1e1a",
            border: "1px solid #a5adad",
            color: "#71726e",
            fontSize: "11.5px",
            fontWeight: 600,
            padding: "8px 12px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Button row */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginTop: "24px",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            backgroundColor: "#843a17",
            color: "#e8c8b0",
            fontSize: "11.5px",
            fontWeight: 500,
            padding: "10px 24px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            backgroundColor: "#843a17",
            color: "#e8c8b0",
            fontSize: "11.5px",
            fontWeight: 500,
            padding: "10px 24px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div style={{ marginTop: "40px" }}>
        <span
          style={{
            color: "#b0b0b0",
            fontSize: "13.5px",
            fontWeight: 600,
            lineHeight: "16.34px",
          }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
