import { HiOutlineCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="font-sans text-sm"
      style={{ background: "#272822", width: "254px", padding: "20px 16px", borderRadius: "6px" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-base" style={{ color: "#b5b5b5" }}>
          UI magician Agent
        </span>
        <HiOutlineCog size={22} style={{ color: "#b5b5b5" }} />
      </div>

      {/* Collapsible subtitle row */}
      <div className="flex items-center gap-1 mb-6" style={{ color: "#8b9291" }}>
        <HiChevronUp size={16} />
        <span className="text-xs">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section header */}
      <div className="flex items-center gap-1 mb-4">
        <HiChevronUp size={18} style={{ color: "#b5b5b5" }} />
        <span className="font-bold text-base" style={{ color: "#d4d4d4" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-1 flex items-center gap-1">
        <span style={{ color: "#a4a4a3" }}>Personal Access Token</span>
        <HiInformationCircle size={16} style={{ color: "#a4a4a3" }} />
      </div>
      <input
        className="w-full rounded mb-3 px-3 py-2 text-xs outline-none"
        style={{
          background: "#272822",
          border: "1px solid #929291",
          color: "#737470",
        }}
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
      />

      {/* Design URL field */}
      <div className="mb-1 flex items-center gap-1">
        <span style={{ color: "#a4a4a3" }}>Design URL</span>
        <HiInformationCircle size={16} style={{ color: "#a4a4a3" }} />
      </div>
      <input
        className="w-full rounded mb-5 px-3 py-2 text-xs outline-none"
        style={{
          background: "#272822",
          border: "1px solid #a5adad",
          color: "#737470",
        }}
        placeholder="https://www.figma.com/file/:"
        readOnly
      />

      {/* Buttons */}
      <div className="flex gap-3 mb-8 justify-center">
        <button
          className="rounded px-6 py-2 font-semibold text-sm"
          style={{ background: "#843a17", color: "#e8d5c8" }}
        >
          Awesome
        </button>
        <button
          className="rounded px-6 py-2 font-semibold text-sm"
          style={{ background: "#843a17", color: "#e8d5c8" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="font-bold text-base" style={{ color: "#d4d4d4" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
