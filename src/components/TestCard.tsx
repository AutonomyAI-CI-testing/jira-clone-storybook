export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#2a2a2a",
        width: "254px",
        minHeight: "508px",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        fontFamily: "Inter, sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "8px",
        }}
      >
        <span
          style={{
            color: "#b5b5b5",
            fontWeight: 600,
            fontSize: "13.5px",
            lineHeight: "16.34px",
          }}
        >
          UI magician Agent
        </span>
        <span
          style={{
            color: "#b5b5b5",
            fontSize: "18px",
            lineHeight: 1,
          }}
        >
          ⚙
        </span>
      </div>

      {/* Subtitle row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "40px",
        }}
      >
        <span
          style={{
            color: "#8b9291",
            fontSize: "11px",
            fontWeight: 600,
            lineHeight: 1,
          }}
        >
          ∧
        </span>
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

      {/* Add New Design row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "20px",
        }}
      >
        <span
          style={{
            color: "#b2b2b1",
            fontSize: "13px",
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          ∧
        </span>
        <span
          style={{
            color: "#b2b2b1",
            fontSize: "13.5px",
            fontWeight: 700,
            lineHeight: "16.34px",
          }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "8px",
        }}
      >
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
        <span
          style={{
            color: "#a4a4a3",
            fontSize: "14px",
            lineHeight: 1,
          }}
        >
          ⓘ
        </span>
      </div>

      {/* Personal Access Token input */}
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        style={{
          width: "100%",
          backgroundColor: "#1c1c1c",
          border: "1px solid #3a3a3a",
          borderRadius: "4px",
          color: "#737470",
          fontSize: "11.5px",
          fontWeight: 600,
          padding: "8px 12px",
          marginBottom: "16px",
          outline: "none",
          boxSizing: "border-box",
          fontFamily: "inherit",
        }}
      />

      {/* Design URL label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "8px",
        }}
      >
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
        <span
          style={{
            color: "#a3a3a2",
            fontSize: "14px",
            lineHeight: 1,
          }}
        >
          ⓘ
        </span>
      </div>

      {/* Design URL input */}
      <input
        readOnly
        placeholder="https://www.figma.com/file/:"
        style={{
          width: "100%",
          backgroundColor: "#1c1c1c",
          border: "1px solid #3a3a3a",
          borderRadius: "4px",
          color: "#71726e",
          fontSize: "10.5px",
          fontWeight: 600,
          padding: "8px 12px",
          marginBottom: "20px",
          outline: "none",
          boxSizing: "border-box",
          fontFamily: "inherit",
        }}
      />

      {/* Button row */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        <button
          style={{
            flex: 1,
            backgroundColor: "#b5541c",
            color: "#e8d4c8",
            border: "none",
            borderRadius: "8px",
            padding: "10px 20px",
            fontSize: "11.5px",
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            flex: 1,
            backgroundColor: "#b5541c",
            color: "#e8d4c8",
            border: "none",
            borderRadius: "8px",
            padding: "10px 20px",
            fontSize: "11.5px",
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Footer */}
      <span
        style={{
          color: "#b0b0b0",
          fontSize: "13.5px",
          fontWeight: 700,
          lineHeight: "16.34px",
        }}
      >
        Recent Breakdowns
      </span>
    </div>
  );
};
