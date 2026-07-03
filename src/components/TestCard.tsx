import { HiCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col p-5 w-64 font-sans"
      style={{ backgroundColor: "#1c1c1c", minHeight: "508px" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold" style={{ color: "#b5b5b5" }}>
          UI magician Agent
        </span>
        <HiCog size={20} style={{ color: "#b5b5b5" }} />
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-2 mb-2">
        <HiChevronUp size={16} style={{ color: "#8b9291" }} />
        <span className="text-xs font-semibold" style={{ color: "#8b9291" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div style={{ height: "40px" }} />

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-4">
        <HiChevronUp size={16} style={{ color: "#b2b2b1" }} />
        <span className="text-sm font-semibold" style={{ color: "#b2b2b1" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-semibold" style={{ color: "#a3a3a2" }}>
            Personal Access Token
          </span>
          <HiInformationCircle size={16} style={{ color: "#a3a3a2" }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded px-3 py-2 text-xs font-semibold border outline-none"
          style={{
            backgroundColor: "#2a2a2a",
            borderColor: "#3a3a3a",
            color: "#737470",
          }}
        />
      </div>

      {/* Design URL field */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-semibold" style={{ color: "#a3a3a2" }}>
            Design URL
          </span>
          <HiInformationCircle size={16} style={{ color: "#a3a3a2" }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded px-3 py-2 text-xs font-semibold border outline-none"
          style={{
            backgroundColor: "#2a2a2a",
            borderColor: "#3a3a3a",
            color: "#71726e",
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 justify-center mb-8">
        <button
          type="button"
          className="flex-1 rounded-lg py-2 text-xs font-semibold"
          style={{ backgroundColor: "#b5522a", color: "#ffffff" }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-lg py-2 text-xs font-semibold"
          style={{ backgroundColor: "#b5522a", color: "#ffffff" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns footer */}
      <div>
        <span className="text-sm font-semibold" style={{ color: "#b0b0b0" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
