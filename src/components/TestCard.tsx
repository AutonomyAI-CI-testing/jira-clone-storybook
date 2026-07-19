import { HiOutlineCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

const W = "#ffffff";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="min-h-screen p-6"
      style={{ backgroundColor: "#2a2a2a" }}
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold" style={{ color: W }}>
          UI magician Agent
        </h1>
        <HiOutlineCog size={24} style={{ color: W }} />
      </div>

      {/* 2. Subtitle row */}
      <div className="mt-3 flex items-center gap-2">
        <HiChevronUp size={16} style={{ color: W }} />
        <span className="text-sm" style={{ color: "#c17a4a" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Spacer */}
      <div style={{ height: "64px" }} />

      {/* 4. Add New Design header */}
      <div className="mb-5 flex items-center gap-3">
        <HiChevronUp size={20} style={{ color: W }} />
        <h2 className="text-lg font-bold" style={{ color: W }}>
          Add New Design
        </h2>
      </div>

      {/* 5. Personal Access Token field */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm font-medium" style={{ color: W }}>
            Personal Access Token
          </span>
          <HiInformationCircle size={16} style={{ color: W, opacity: 0.7 }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border p-3 text-sm outline-none"
          style={{
            backgroundColor: "#1e1e1e",
            borderColor: "#4a4a4a",
            color: "#9ca3af",
          }}
          readOnly
        />
      </div>

      {/* 6. Design URL field */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm font-medium" style={{ color: W }}>
            Design URL
          </span>
          <HiInformationCircle size={16} style={{ color: W, opacity: 0.7 }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border p-3 text-sm outline-none"
          style={{
            backgroundColor: "#1e1e1e",
            borderColor: "#4a4a4a",
            color: "#9ca3af",
          }}
          readOnly
        />
      </div>

      {/* 7. Two buttons */}
      <div className="mt-6 flex gap-4">
        <button
          className="flex-1 rounded-lg px-6 py-3 font-semibold"
          style={{ backgroundColor: "#c1622e", color: W }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg px-6 py-3 font-semibold"
          style={{ backgroundColor: "#c1622e", color: W }}
        >
          Prepare
        </button>
      </div>

      {/* 8. Recent Breakdowns */}
      <div className="mt-10">
        <h2 className="text-xl font-bold" style={{ color: W }}>
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
}
