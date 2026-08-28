export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#272822", width: "254px", fontFamily: "Inter, sans-serif" }}
      className="py-5"
    >
      {/* Section 1: Header row */}
      <div className="flex items-center justify-between px-5 mb-3">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px", lineHeight: "16.34px", fontWeight: 600 }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="7" cy="8" r="6.2" stroke="#b5b5b5" strokeWidth="1.2" />
          <circle cx="7" cy="8" r="2.2" stroke="#b5b5b5" strokeWidth="1.2" />
          <rect x="6.3" y="1" width="1.4" height="2" rx="0.5" fill="#b5b5b5" />
          <rect x="6.3" y="13" width="1.4" height="2" rx="0.5" fill="#b5b5b5" />
          <rect x="11.5" y="7.3" width="1.4" height="1.4" rx="0.5" fill="#b5b5b5" transform="rotate(90 11.5 7.3)" />
          <rect x="1.1" y="7.3" width="1.4" height="1.4" rx="0.5" fill="#b5b5b5" transform="rotate(90 1.1 7.3)" />
        </svg>
      </div>

      {/* Section 2: Subtitle row */}
      <div className="flex items-center gap-2 px-5 mb-12">
        {/* Small caret-up */}
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 4.5L4 1L7 4.5" stroke="#8b9291" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ color: "#8b9291", fontSize: "11.5px", lineHeight: "13.92px", fontWeight: 600 }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Section 4: Add New Design header */}
      <div className="flex items-center gap-2 px-5 mb-4">
        {/* Large caret-up */}
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 7L6 1L11 7" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ color: "#b2b2b1", fontSize: "13.5px", lineHeight: "16.34px", fontWeight: 600 }}>
          Add New Design
        </span>
      </div>

      {/* Section 5: Personal Access Token */}
      <div className="px-5 mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span style={{ color: "#a4a4a3", fontSize: "11.5px", lineHeight: "13.92px", fontWeight: 600 }}>
            Personal Access Token
          </span>
          {/* Info circle icon */}
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
            <path d="M7.5 6.5V11" stroke="#a4a4a3" strokeWidth="1.1" strokeLinecap="round" />
            <circle cx="7.5" cy="4.5" r="0.75" fill="#a4a4a3" />
          </svg>
        </div>
        {/* Static input */}
        <div
          className="w-full flex items-center px-3"
          style={{
            height: "37px",
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
          }}
        >
          <span style={{ color: "#737470", fontSize: "11.5px", lineHeight: "13.92px", fontWeight: 600 }}>
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Section 6: Design URL */}
      <div className="px-5 mb-4">
        <div className="flex items-center gap-2 mb-1">
          <span style={{ color: "#a3a3a2", fontSize: "11.5px", lineHeight: "13.92px", fontWeight: 600 }}>
            Design URL
          </span>
          {/* Info circle icon */}
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
            <path d="M7.5 6.5V11" stroke="#a3a3a2" strokeWidth="1.1" strokeLinecap="round" />
            <circle cx="7.5" cy="4.5" r="0.75" fill="#a3a3a2" />
          </svg>
        </div>
        {/* Static input */}
        <div
          className="w-full flex items-center px-3"
          style={{
            height: "37px",
            backgroundColor: "#272822",
            border: "2px solid #929291",
          }}
        >
          <span style={{ color: "#71726e", fontSize: "10.5px", lineHeight: "12.71px", fontWeight: 600 }}>
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Section 7: Buttons */}
      <div className="flex gap-3 px-5 mb-10">
        <button
          style={{
            backgroundColor: "#843a17",
            borderRadius: "4px",
            height: "37px",
            paddingLeft: "20px",
            paddingRight: "20px",
            border: "none",
            cursor: "default",
          }}
        >
          <span style={{ color: "#8c8078", fontSize: "11.5px", lineHeight: "13.92px", fontWeight: 600 }}>
            Awesome
          </span>
        </button>
        <button
          style={{
            backgroundColor: "#843a17",
            borderRadius: "4px",
            height: "37px",
            paddingLeft: "20px",
            paddingRight: "20px",
            border: "none",
            cursor: "default",
          }}
        >
          <span style={{ color: "#8c8078", fontSize: "11.5px", lineHeight: "13.92px", fontWeight: 600 }}>
            Prepare
          </span>
        </button>
      </div>

      {/* Section 9: Recent Breakdowns */}
      <div className="px-5">
        <span style={{ color: "#b0b0b0", fontSize: "13.5px", lineHeight: "16.34px", fontWeight: 600 }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
