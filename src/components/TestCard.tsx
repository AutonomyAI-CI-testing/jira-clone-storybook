import { HiOutlineCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2b2b2b", color: "#e5e5e5", minHeight: "100vh" }}
      className="flex flex-col p-5 font-sans"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between mb-3">
        <span style={{ color: "#ffffff" }} className="text-xl font-bold">
          UI magician Agent
        </span>
        <HiOutlineCog style={{ color: "#a0a0a0" }} className="text-2xl" />
      </div>

      {/* 2. Muted text row */}
      <div className="flex items-center gap-2 mb-2">
        <HiChevronUp style={{ color: "#b07a5a" }} className="text-base flex-shrink-0" />
        <span style={{ color: "#b07a5a" }} className="text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Spacer */}
      <div className="my-8" />

      {/* 4. Add New Design row */}
      <div className="flex items-center gap-2 mb-5">
        <HiChevronUp style={{ color: "#ffffff" }} className="text-base flex-shrink-0" />
        <span style={{ color: "#ffffff" }} className="text-xl font-bold">
          Add New Design
        </span>
      </div>

      {/* 5. Personal Access Token label */}
      <div className="flex items-center gap-2 mb-2">
        <span style={{ color: "#c8c8c8" }} className="text-sm font-semibold">
          Personal Access Token
        </span>
        <HiInformationCircle style={{ color: "#888888" }} className="text-base" />
      </div>

      {/* 6. Token input field */}
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        style={{
          backgroundColor: "#3a3a3a",
          border: "1px solid #555555",
          color: "#888888",
        }}
        className="w-full rounded px-3 py-3 text-sm mb-4 outline-none"
      />

      {/* 7. Design URL label */}
      <div className="flex items-center gap-2 mb-2">
        <span style={{ color: "#c8c8c8" }} className="text-sm font-semibold">
          Design URL
        </span>
        <HiInformationCircle style={{ color: "#888888" }} className="text-base" />
      </div>

      {/* 8. URL input field */}
      <input
        readOnly
        placeholder="https://www.figma.com/file/:"
        style={{
          backgroundColor: "#3a3a3a",
          border: "1px solid #777777",
          color: "#888888",
        }}
        className="w-full rounded px-3 py-3 text-sm mb-6 outline-none"
      />

      {/* 9. Buttons */}
      <div className="flex gap-4 justify-center mb-10">
        <button
          type="button"
          style={{ backgroundColor: "#b85c2a" }}
          className="flex-1 py-3 rounded-xl text-white font-semibold text-base"
        >
          Awesome
        </button>
        <button
          type="button"
          style={{ backgroundColor: "#b85c2a" }}
          className="flex-1 py-3 rounded-xl text-white font-semibold text-base"
        >
          Prepare
        </button>
      </div>

      {/* 10. Recent Breakdowns heading */}
      <div>
        <span style={{ color: "#ffffff" }} className="text-xl font-bold">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
