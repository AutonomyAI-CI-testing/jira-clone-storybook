export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex flex-col w-[254px] min-h-[508px] bg-[#1e1e1a] px-5 py-5"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold leading-[16px]">
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="7" cy="7" r="2" stroke="#b5b5b5" strokeWidth="1.1" />
          <circle cx="7" cy="7" r="5.5" stroke="#b5b5b5" strokeWidth="1.1" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
            const r = (deg * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={7 + 3.8 * Math.cos(r)}
                y1={7 + 3.8 * Math.sin(r)}
                x2={7 + 5.3 * Math.cos(r)}
                y2={7 + 5.3 * Math.sin(r)}
                stroke="#b5b5b5"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            );
          })}
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-10">
        <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 5L4.5 1.5L8 5" stroke="#8b9291" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[#8b9291] text-[11.5px] font-semibold leading-[14px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design heading */}
      <div className="flex items-center gap-2 mb-4">
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 6.5L6 1.5L11 6.5" stroke="#b2b2b1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[#b2b2b1] text-[13.5px] font-semibold leading-[16px]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-1.5 mb-1.5">
        <span className="text-[#a4a4a3] text-[11.5px] font-semibold leading-[14px]">
          Personal Access Token
        </span>
        <InfoIcon color="#a4a4a3" />
      </div>

      {/* Token input */}
      <div className="mb-3 bg-[#272822] border border-[#a5adad] rounded px-3 py-2.5">
        <span className="text-[#737470] text-[11.5px] font-semibold leading-[14px]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL label */}
      <div className="flex items-center gap-1.5 mb-1.5">
        <span className="text-[#a3a3a2] text-[11.5px] font-semibold leading-[14px]">
          Design URL
        </span>
        <InfoIcon color="#a3a3a2" />
      </div>

      {/* URL input */}
      <div className="mb-4 bg-[#272822] rounded px-3 py-2.5" style={{ border: "2px solid #929291" }}>
        <span className="text-[#71726e] text-[10.5px] font-semibold leading-[13px]">
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-6">
        <button
          className="flex-1 text-[#8c8078] text-[11.5px] font-semibold py-2.5 rounded"
          style={{ backgroundColor: "#843a17", borderRadius: 4 }}
        >
          Awesome
        </button>
        <button
          className="flex-1 text-[#8c8078] text-[11.5px] font-semibold py-2.5 rounded"
          style={{ backgroundColor: "#843a17", borderRadius: 4 }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-auto pt-4">
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold leading-[16px]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

const InfoIcon = ({ color }: { color: string }) => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7.5" cy="7.5" r="6.5" stroke={color} strokeWidth="1" />
    <text x="7.5" y="11.2" textAnchor="middle" fill={color} fontSize="8" fontWeight="600" fontFamily="Inter, sans-serif">
      i
    </text>
  </svg>
);

export default TestCard;
