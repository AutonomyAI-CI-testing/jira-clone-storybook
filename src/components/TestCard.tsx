export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#2a2a2a",
        fontFamily: "sans-serif",
        maxWidth: "280px",
        width: "100%",
        borderRadius: "8px",
        padding: "20px",
      }}
    >
      {/* Header Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            color: "#b5b5b5",
            fontSize: "18px",
            fontWeight: 700,
            margin: 0,
          }}
        >
          UI magician Agent
        </h2>
        {/* Gear Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "22px", height: "22px", flexShrink: 0 }}
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Collapsed Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginTop: "12px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8b9291"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "16px", height: "16px", flexShrink: 0 }}
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <p
          style={{
            color: "#8b9291",
            fontSize: "13px",
            fontWeight: 600,
            margin: 0,
          }}
        >
          From entire frame to a singl...
        </p>
      </div>

      {/* Spacer */}
      <div style={{ marginTop: "24px" }} />

      {/* Add New Design Row */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b2b2b1"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "18px", height: "18px", flexShrink: 0 }}
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <p
          style={{
            color: "#b2b2b1",
            fontSize: "17px",
            fontWeight: 600,
            margin: 0,
          }}
        >
          Add New Design
        </p>
      </div>

      {/* Form Section */}
      <div
        style={{
          marginTop: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        {/* Personal Access Token */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "6px",
          }}
        >
          <label
            htmlFor="pat"
            style={{ color: "#a4a4a3", fontSize: "13px", fontWeight: 600 }}
          >
            Personal Access Token
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a4a4a3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: "15px", height: "15px", flexShrink: 0 }}
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            width: "100%",
            backgroundColor: "#1e1e1e",
            border: "1px solid #555",
            borderRadius: "6px",
            padding: "8px 12px",
            fontSize: "12px",
            color: "#737470",
            outline: "none",
            boxSizing: "border-box",
          }}
        />

        {/* Design URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginTop: "14px",
            marginBottom: "6px",
          }}
        >
          <label
            htmlFor="design-url"
            style={{ color: "#a4a4a3", fontSize: "13px", fontWeight: 600 }}
          >
            Design URL
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a4a4a3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: "15px", height: "15px", flexShrink: 0 }}
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <input
          type="text"
          id="design-url"
          placeholder="https://www.figma.com/file/:"
          style={{
            width: "100%",
            backgroundColor: "#1e1e1e",
            border: "1px solid #555",
            borderRadius: "6px",
            padding: "8px 12px",
            fontSize: "12px",
            color: "#737470",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Buttons Row */}
      <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
        <button
          style={{
            flex: 1,
            backgroundColor: "#a0522d",
            color: "#d4b8a8",
            border: "none",
            borderRadius: "8px",
            padding: "10px 0",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            flex: 1,
            backgroundColor: "#a0522d",
            color: "#d4b8a8",
            border: "none",
            borderRadius: "8px",
            padding: "10px 0",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Heading */}
      <h3
        style={{
          marginTop: "32px",
          color: "#b0b0b0",
          fontSize: "17px",
          fontWeight: 600,
        }}
      >
        Recent Breakdowns
      </h3>
    </div>
  );
};

export default TestCard;

