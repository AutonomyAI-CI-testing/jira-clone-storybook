import { FiChevronUp, FiInfo } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="p-5 font-sans"
      style={{ backgroundColor: "#1e1e1e", minHeight: "100vh" }}
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold" style={{ color: "#ffffff" }}>
          UI magician Agent
        </span>
        <IoSettingsOutline size={24} style={{ color: "#cccccc" }} />
      </div>

      {/* 2. Subtitle row */}
      <div className="mt-3 flex items-center gap-1">
        <FiChevronUp size={14} style={{ color: "#b06030" }} />
        <span className="truncate text-sm" style={{ color: "#b06030" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Spacer */}
      <div className="mt-10" />

      {/* 4. Section heading */}
      <div className="flex items-center gap-2">
        <FiChevronUp size={18} style={{ color: "#ffffff" }} />
        <span className="text-xl font-bold" style={{ color: "#ffffff" }}>
          Add New Design
        </span>
      </div>

      {/* 5. Personal Access Token */}
      <div className="mt-5">
        <div className="mb-1 flex items-center gap-2">
          <span className="text-sm font-bold" style={{ color: "#cccccc" }}>
            Personal Access Token
          </span>
          <FiInfo size={16} style={{ color: "#888888" }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded p-3 text-sm outline-none"
          style={{
            backgroundColor: "#2a2a2a",
            border: "1px solid #444",
            color: "#aaaaaa",
          }}
        />
      </div>

      {/* 6. Design URL */}
      <div className="mt-4">
        <div className="mb-1 flex items-center gap-2">
          <span className="text-sm font-bold" style={{ color: "#cccccc" }}>
            Design URL
          </span>
          <FiInfo size={16} style={{ color: "#888888" }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded p-3 text-sm outline-none"
          style={{
            backgroundColor: "#2a2a2a",
            border: "1px solid #444",
            color: "#aaaaaa",
          }}
        />
      </div>

      {/* 7. Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          className="flex-1 rounded-lg py-3 font-bold"
          style={{ backgroundColor: "#b5541c", color: "#f0ddd0" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg py-3 font-bold"
          style={{ backgroundColor: "#b5541c", color: "#f0ddd0" }}
        >
          Prepare
        </button>
      </div>

      {/* 8. Recent Breakdowns */}
      <div className="mt-10 text-xl font-bold" style={{ color: "#ffffff" }}>
        Recent Breakdowns
      </div>
    </div>
  );
};
