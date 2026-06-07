export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#1c1d17] px-5 pt-5 pb-8 w-[254px] min-h-[508px]"
    >
      {/* Header row */}
      <div className="flex justify-between items-center mb-[14px]">
        <span
          className="text-[#b5b5b5] font-semibold"
          style={{ fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtext row */}
      <div className="flex items-center gap-[9px]">
        {/* Chevron-up icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="5"
          viewBox="0 0 12 8"
          fill="none"
          stroke="#8b9291"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="10 6 6 2 2 6" />
        </svg>
        <span
          className="text-[#8b9291] font-semibold"
          style={{ fontSize: "11.5px", lineHeight: "13.92px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer between subtext and Add New Design */}
      <div className="mt-[73px]" />

      {/* Add New Design section header */}
      <div className="flex items-center gap-[9px] mb-[18px]">
        {/* Chevron-up icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          stroke="#b2b2b1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="10 6 6 2 2 6" />
        </svg>
        <span
          className="text-[#b2b2b1] font-semibold"
          style={{ fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-[18px]">
        <div className="flex items-center gap-[8px] mb-[8px]">
          <span
            className="text-[#a4a4a3] font-semibold"
            style={{ fontSize: "11.5px", lineHeight: "13.92px" }}
          >
            Personal Access Token
          </span>
          {/* Info circle icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 20 20"
            fill="none"
            stroke="#a4a4a3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="10" cy="10" r="9" />
            <line x1="10" y1="9" x2="10" y2="14" />
            <circle cx="10" cy="6.5" r="0.5" fill="#a4a4a3" strokeWidth="1" />
          </svg>
        </div>
        {/* Input with 2px solid #929291 border (Design URL uses 1px #a5adad) */}
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#272822] px-[19px] py-[10px] outline-none"
          style={{
            border: "2px solid #929291",
            fontSize: "11.5px",
            lineHeight: "13.92px",
            color: "#737470",
            fontWeight: 600,
          }}
        />
      </div>

      {/* Design URL field */}
      <div className="mb-[20px]">
        <div className="flex items-center gap-[8px] mb-[8px]">
          <span
            className="text-[#a3a3a2] font-semibold"
            style={{ fontSize: "11.5px", lineHeight: "13.92px" }}
          >
            Design URL
          </span>
          {/* Info circle icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 20 20"
            fill="none"
            stroke="#a4a4a3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="10" cy="10" r="9" />
            <line x1="10" y1="9" x2="10" y2="14" />
            <circle cx="10" cy="6.5" r="0.5" fill="#a4a4a3" strokeWidth="1" />
          </svg>
        </div>
        {/* Input with 1px solid #a5adad border */}
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#272822] px-[19px] py-[10px] outline-none"
          style={{
            border: "1px solid #a5adad",
            fontSize: "10.5px",
            lineHeight: "12.71px",
            color: "#71726e",
            fontWeight: 600,
          }}
        />
      </div>

      {/* Button row */}
      <div className="flex gap-[16px] justify-center mb-[52px]">
        <button
          className="font-semibold"
          style={{
            background: "#843a17",
            borderRadius: "4px",
            width: "85px",
            height: "37px",
            fontSize: "11.5px",
            lineHeight: "13.92px",
            color: "#8c8078",
            fontWeight: 600,
          }}
        >
          Awesome
        </button>
        <button
          className="font-semibold"
          style={{
            background: "#843a17",
            borderRadius: "4px",
            width: "85px",
            height: "37px",
            fontSize: "11.5px",
            lineHeight: "13.92px",
            color: "#8c8078",
            fontWeight: 600,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <span
        className="text-[#b0b0b0] font-semibold"
        style={{ fontSize: "13.5px", lineHeight: "16.34px" }}
      >
        Recent Breakdowns
      </span>
    </div>
  );
};
