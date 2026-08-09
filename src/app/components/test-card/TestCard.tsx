export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{
        width: "254px",
        minHeight: "508px",
        background: "#272822",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span style={{ fontSize: "13.5px", fontWeight: 600, color: "#b5b5b5", lineHeight: "16.34px" }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="2.5" stroke="#b5b5b5" strokeWidth="1.2" />
          <path
            d="M8 1.5V3M8 13v1.5M1.5 8H3M13 8h1.5M3.4 3.4l1.06 1.06M11.54 11.54l1.06 1.06M3.4 12.6l1.06-1.06M11.54 4.46l1.06-1.06"
            stroke="#b5b5b5"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Subtitle with chevron */}
      <div className="flex items-center gap-2 px-5 pb-4">
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path d="M1 4L4 1L7 4" stroke="#8b9291" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ fontSize: "11.5px", fontWeight: 600, color: "#8b9291", lineHeight: "13.92px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Flexible spacer */}
      <div className="flex-1" />

      {/* Add New Design section */}
      <div className="px-5 pb-4">
        {/* Section title */}
        <div className="flex items-center gap-2 mb-4">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 6.5L6 1.5L11 6.5" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontSize: "13.5px", fontWeight: 600, color: "#b2b2b1", lineHeight: "16.34px" }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token label */}
        <div className="flex items-center gap-2 mb-1">
          <span style={{ fontSize: "11.5px", fontWeight: 600, color: "#a4a4a3", lineHeight: "13.92px" }}>
            Personal Access Token
          </span>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
            <path d="M7.5 7v4" stroke="#a4a4a3" strokeWidth="1" strokeLinecap="round" />
            <circle cx="7.5" cy="5" r="0.75" fill="#a4a4a3" />
          </svg>
        </div>

        {/* Token input box */}
        <div
          className="w-full mb-3"
          style={{
            background: "#272822",
            border: "1px solid #a5adad",
            padding: "10px 12px",
          }}
        >
          <span style={{ fontSize: "11.5px", fontWeight: 600, color: "#737470", lineHeight: "13.92px" }}>
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>

        {/* Design URL label */}
        <div className="flex items-center gap-2 mb-1">
          <span style={{ fontSize: "11.5px", fontWeight: 600, color: "#a3a3a2", lineHeight: "13.92px" }}>
            Design URL
          </span>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
            <path d="M7.5 7v4" stroke="#a3a3a2" strokeWidth="1" strokeLinecap="round" />
            <circle cx="7.5" cy="5" r="0.75" fill="#a3a3a2" />
          </svg>
        </div>

        {/* URL input box */}
        <div
          className="w-full mb-5"
          style={{
            background: "#272822",
            border: "2px solid #929291",
            padding: "10px 12px",
          }}
        >
          <span style={{ fontSize: "10.5px", fontWeight: 600, color: "#71726e", lineHeight: "12.71px" }}>
            https://www.figma.com/file/:
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-center">
          <button
            style={{
              width: "87px",
              height: "40px",
              background: "#843a17",
              borderRadius: "4px",
              border: "none",
              fontSize: "11.5px",
              fontWeight: 600,
              color: "#8c8078",
              cursor: "pointer",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Awesome
          </button>
          <button
            style={{
              width: "87px",
              height: "40px",
              background: "#843a17",
              borderRadius: "4px",
              border: "none",
              fontSize: "11.5px",
              fontWeight: 600,
              color: "#8c8078",
              cursor: "pointer",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 py-5">
        <span style={{ fontSize: "13.5px", fontWeight: 600, color: "#b0b0b0", lineHeight: "16.34px" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
