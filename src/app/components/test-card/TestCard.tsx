export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2b2b26", width: "254px", fontFamily: "Inter, sans-serif" }}
      className="p-5 flex flex-col gap-3"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600 }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            stroke="#b5b5b5"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M11.3 9.3c.1-.2.1-.5.1-.8s0-.6-.1-.8l1.7-1.3c.2-.1.2-.4.1-.5l-1.6-2.8c-.1-.2-.3-.2-.5-.1l-2 .8c-.4-.3-.9-.6-1.4-.7L7.3.5C7.3.3 7.1.2 7 .2H3.9c-.2 0-.3.1-.4.3L3.3 3c-.5.2-1 .4-1.4.7l-2-.8c-.2-.1-.4 0-.5.1L-.2 5.8c-.1.2 0 .4.1.5l1.7 1.3c0 .3-.1.5-.1.8s0 .6.1.8L-.1 10.5c-.2.1-.2.4-.1.5l1.6 2.8c.1.2.3.2.5.1l2-.8c.4.3.9.6 1.4.7l.2 2.5c0 .2.2.3.4.3h3.2c.2 0 .3-.1.4-.3l.2-2.5c.5-.2 1-.4 1.4-.7l2 .8c.2.1.4 0 .5-.1l1.6-2.8c.1-.2 0-.4-.1-.5l-1.7-1.2Z"
            stroke="#b5b5b5"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      {/* Sub-row: small chevron + muted text */}
      <div className="flex items-center gap-2">
        {/* Small chevron-up */}
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 4L4 1L7 4" stroke="#8b9291" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600 }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-2" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        {/* Chevron-up */}
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 7L6 2L11 7" stroke="#b2b2b1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600 }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1 mt-1">
        <div className="flex items-center gap-2">
          <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600 }}>
            Personal Access Token
          </span>
          {/* Info circle */}
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
            <text x="7.5" y="11" textAnchor="middle" style={{ fill: "#a4a4a3", fontSize: "9px", fontWeight: 700 }}>i</text>
          </svg>
        </div>
        <input
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            color: "#737470",
            fontSize: "11.5px",
            fontWeight: 600,
            padding: "9px 10px",
            outline: "none",
            width: "100%",
            boxSizing: "border-box",
          }}
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1 mt-1">
        <div className="flex items-center gap-2">
          <span style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600 }}>
            Design URL
          </span>
          {/* Info circle */}
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
            <text x="7.5" y="11" textAnchor="middle" style={{ fill: "#a3a3a2", fontSize: "9px", fontWeight: 700 }}>i</text>
          </svg>
        </div>
        <input
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            color: "#71726e",
            fontSize: "10.5px",
            fontWeight: 600,
            padding: "9px 10px",
            outline: "none",
            width: "100%",
            boxSizing: "border-box",
          }}
          placeholder="https://www.figma.com/file/:"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-1">
        <button
          style={{
            backgroundColor: "#843a17",
            borderRadius: "4px",
            color: "#8c8078",
            fontSize: "11.5px",
            fontWeight: 600,
            padding: "10px 0",
            flex: 1,
            border: "none",
            cursor: "default",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            backgroundColor: "#843a17",
            borderRadius: "4px",
            color: "#8c8078",
            fontSize: "11.5px",
            fontWeight: 600,
            padding: "10px 0",
            flex: 1,
            border: "none",
            cursor: "default",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <span style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600 }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
