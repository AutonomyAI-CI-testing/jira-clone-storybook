export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#272822",
        fontFamily: "Inter, sans-serif",
        width: "254px",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Header row */}
      <div className="flex justify-between items-center">
        <span
          style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600 }}
        >
          UI magician Agent
        </span>
        <span style={{ color: "#b5b5b5", fontSize: "16px" }}>⚙</span>
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-2 mt-2">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          style={{ color: "#8b9291" }}
        >
          <polyline
            points="9 5 5 1 1 5"
            stroke="#8b9291"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
        <span style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600 }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div style={{ height: "40px" }} />

      {/* Add New Design heading */}
      <div className="flex items-center gap-2">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
        >
          <polyline
            points="9 5 5 1 1 5"
            stroke="#b2b2b1"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
        <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600 }}>
          Add New Design
        </span>
      </div>

      {/* Form section */}
      <div className="flex flex-col gap-3 mt-4">
        {/* Personal Access Token */}
        <div>
          <div className="flex items-center gap-1 mb-1">
            <span
              style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600 }}
            >
              Personal Access Token
            </span>
            <span style={{ color: "#a4a4a3", fontSize: "13px" }}>ⓘ</span>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full px-3 py-2 outline-none"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
              color: "#737470",
              fontSize: "11.5px",
              fontWeight: 600,
              fontFamily: "Inter, sans-serif",
            }}
          />
        </div>

        {/* Design URL */}
        <div>
          <div className="flex items-center gap-1 mb-1">
            <span
              style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600 }}
            >
              Design URL
            </span>
            <span style={{ color: "#a3a3a2", fontSize: "13px" }}>ⓘ</span>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full px-3 py-2 outline-none"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
              color: "#71726e",
              fontSize: "10.5px",
              fontWeight: 600,
              fontFamily: "Inter, sans-serif",
            }}
          />
        </div>
      </div>

      {/* Button row */}
      <div className="flex gap-3 mt-5">
        <button
          className="flex-1 py-2 font-semibold"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            borderRadius: "4px",
            fontSize: "11.5px",
            fontFamily: "Inter, sans-serif",
            border: "none",
            cursor: "default",
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2 font-semibold"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            borderRadius: "4px",
            fontSize: "11.5px",
            fontFamily: "Inter, sans-serif",
            border: "none",
            cursor: "default",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div
        className="mt-8"
        style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600 }}
      >
        Recent Breakdowns
      </div>
    </div>
  );
};

export default TestCard;
