export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-w-[300px] flex-col bg-[#1a1a1a] p-5"
    style={{ width: "254px", minHeight: "508px" }}
  >
    {/* 1. Header row: title + gear icon */}
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
          stroke="#b5b5b5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.17 10a6.17 6.17 0 0 0-.06-.83l1.8-1.41a.43.43 0 0 0 .1-.55l-1.7-2.94a.43.43 0 0 0-.52-.19l-2.12.85a6.13 6.13 0 0 0-1.43-.83l-.32-2.25A.42.42 0 0 0 11.5 2h-3.4a.42.42 0 0 0-.42.36l-.32 2.25a6.13 6.13 0 0 0-1.43.83L3.81 4.59a.43.43 0 0 0-.52.19L1.59 7.72a.42.42 0 0 0 .1.55l1.8 1.41A6.24 6.24 0 0 0 3.43 10c0 .28.02.56.06.83l-1.8 1.41a.43.43 0 0 0-.1.55l1.7 2.94c.11.2.35.27.52.19l2.12-.85c.44.32.92.59 1.43.83l.32 2.25c.05.2.22.35.43.35h3.38c.2 0 .38-.14.43-.35l.32-2.25a6.13 6.13 0 0 0 1.43-.83l2.12.85c.2.08.42 0 .52-.19l1.7-2.94a.42.42 0 0 0-.1-.55l-1.8-1.41c.04-.27.06-.55.06-.83Z"
          stroke="#b5b5b5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>

    {/* 2. Collapsible row: chevron-up + muted text */}
    <div className="mt-4 flex items-center gap-2">
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7L6 2L11 7"
          stroke="#8b9291"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* 3. Spacer */}
    <div className="h-12" />

    {/* 4. Section row: chevron-up + "Add New Design" */}
    <div className="flex items-center gap-2">
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7L6 2L11 7"
          stroke="#b2b2b1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* 5. Personal Access Token label + info icon */}
    <div className="mt-5 flex items-center gap-2">
      <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="7" cy="7" r="6" stroke="#a4a4a3" strokeWidth="1.2" />
        <text
          x="7"
          y="10.5"
          textAnchor="middle"
          fontSize="8"
          fontWeight="700"
          fill="#a4a4a3"
          fontFamily="sans-serif"
        >
          i
        </text>
      </svg>
    </div>

    {/* 6. Token input field */}
    <input
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      readOnly
      className="mt-2 w-full rounded border border-[#444] bg-[#2a2a2a] px-3 py-2 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470] outline-none"
    />

    {/* 7. Design URL label + info icon */}
    <div className="mt-4 flex items-center gap-2">
      <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="7" cy="7" r="6" stroke="#a3a3a2" strokeWidth="1.2" />
        <text
          x="7"
          y="10.5"
          textAnchor="middle"
          fontSize="8"
          fontWeight="700"
          fill="#a3a3a2"
          fontFamily="sans-serif"
        >
          i
        </text>
      </svg>
    </div>

    {/* 8. URL input field */}
    <input
      type="text"
      placeholder="https://www.figma.com/file/:"
      readOnly
      className="mt-2 w-full rounded border border-[#444] bg-[#2a2a2a] px-3 py-2 text-[11.5px] font-semibold text-[#71726e] placeholder-[#71726e] outline-none"
    />

    {/* 9. Two buttons side by side */}
    <div className="mt-5 flex gap-3">
      <button className="flex-1 rounded-lg bg-[#a0522d] px-6 py-3 text-[11.5px] font-semibold text-[#8c8078]">
        Awesome
      </button>
      <button className="flex-1 rounded-lg bg-[#a0522d] px-6 py-3 text-[11.5px] font-semibold text-[#8c8078]">
        Prepare
      </button>
    </div>

    {/* 10. Spacer */}
    <div className="h-10" />

    {/* 11. Recent Breakdowns heading */}
    <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
