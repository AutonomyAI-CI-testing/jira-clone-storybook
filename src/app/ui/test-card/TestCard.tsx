export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded bg-[#000000] p-3 font-['Inter',sans-serif]"
    >
      {/* Title bar */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.02a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.02a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.02a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Collapsible section 1 (static) */}
      <div className="mt-3 flex items-center gap-2">
        <ChevronUpIcon color="#8b9291" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-6 flex items-center gap-2">
        <ChevronUpIcon color="#b2b2b1" />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-4 flex items-center gap-1">
        <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <InfoIcon color="#a4a4a3" />
      </div>
      <input
        readOnly
        type="text"
        value=""
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-1 w-full rounded border border-[#a5adad] bg-[#272822] p-2 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470] focus:outline-none"
      />

      <div className="mt-3 flex items-center gap-1">
        <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <InfoIcon color="#a3a3a2" />
      </div>
      <input
        readOnly
        type="text"
        value=""
        placeholder="https://www.figma.com/file/:"
        className="mt-1 w-full rounded border-2 border-[#929291] bg-[#272822] p-2 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
      />

      <div className="mt-4 flex items-center gap-2">
        <button
          type="button"
          className="rounded-[4px] bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-[4px] bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section */}
      <div className="mt-8">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

const ChevronUpIcon = ({ color }: { color: string }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="3"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);
