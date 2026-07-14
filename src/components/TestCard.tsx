export const TestCard = (): JSX.Element => {
  const GearIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );

  const ChevronUpIcon = ({ size = 16 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );

  const InfoIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );

  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#1C1D17",
        color: "#e8e6e0",
        minHeight: "100vh",
        padding: "20px 16px",
        fontFamily: "sans-serif",
        maxWidth: "320px",
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <span style={{ fontWeight: "700", fontSize: "18px", color: "#ffffff" }}>
          UI magician Agent
        </span>
        <span style={{ color: "#a0a09a" }}>
          <GearIcon />
        </span>
      </div>

      {/* Subtitle row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "40px",
          color: "#b06030",
        }}
      >
        <ChevronUpIcon size={14} />
        <span style={{ fontSize: "13px", color: "#b87040" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "20px",
          color: "#ffffff",
        }}
      >
        <ChevronUpIcon size={16} />
        <span style={{ fontWeight: "700", fontSize: "18px" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "8px",
          color: "#c8c6be",
          fontSize: "13px",
          fontWeight: "600",
        }}
      >
        <span>Personal Access Token</span>
        <span style={{ color: "#808078" }}>
          <InfoIcon />
        </span>
      </div>

      {/* PAT input */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
        style={{
          width: "100%",
          boxSizing: "border-box",
          backgroundColor: "#272822",
          border: "1px solid #A5ADAD",
          borderRadius: "4px",
          color: "#909088",
          padding: "10px 12px",
          fontSize: "13px",
          marginBottom: "16px",
          outline: "none",
        }}
      />

      {/* Design URL label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "8px",
          color: "#c8c6be",
          fontSize: "13px",
          fontWeight: "600",
        }}
      >
        <span>Design URL</span>
        <span style={{ color: "#808078" }}>
          <InfoIcon />
        </span>
      </div>

      {/* Design URL input */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
        style={{
          width: "100%",
          boxSizing: "border-box",
          backgroundColor: "#272822",
          border: "2px solid #929291",
          borderRadius: "4px",
          color: "#909088",
          padding: "10px 12px",
          fontSize: "13px",
          marginBottom: "24px",
          outline: "none",
        }}
      />

      {/* Action buttons */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        <button
          style={{
            backgroundColor: "#843A17",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "12px 24px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            flex: "1",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            backgroundColor: "#843A17",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "12px 24px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            flex: "1",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div
        style={{
          fontWeight: "700",
          fontSize: "18px",
          color: "#ffffff",
          marginTop: "8px",
        }}
      >
        Recent Breakdowns
      </div>
    </div>
  );
};
