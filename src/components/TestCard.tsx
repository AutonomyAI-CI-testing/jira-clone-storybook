import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex flex-col p-5"
      style={{ backgroundColor: "#1e1e1e", minHeight: "100vh", fontFamily: "sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold" style={{ color: "#e8e8e8" }}>
          UI magician Agent
        </span>
        <IoSettingsOutline size={24} style={{ color: "#e8e8e8" }} />
      </div>

      {/* Subtitle row */}
      <div className="mt-2 flex items-center gap-1">
        <FiChevronUp size={16} style={{ color: "#b06030", flexShrink: 0 }} />
        <span className="truncate text-sm" style={{ color: "#b06030" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-10" />

      {/* Add New Design heading */}
      <div className="flex items-center gap-2">
        <FiChevronUp size={18} style={{ color: "#e8e8e8" }} />
        <span className="text-xl font-bold" style={{ color: "#e8e8e8" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-5">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm font-semibold" style={{ color: "#c8c8c8" }}>
            Personal Access Token
          </span>
          <FiInfo size={16} style={{ color: "#888" }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded p-3 text-sm outline-none"
          style={{
            backgroundColor: "#2a2a2a",
            border: "1px solid #444",
            color: "#888",
          }}
        />
      </div>

      {/* Design URL */}
      <div className="mt-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm font-semibold" style={{ color: "#c8c8c8" }}>
            Design URL
          </span>
          <FiInfo size={16} style={{ color: "#888" }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded p-3 text-sm outline-none"
          style={{
            backgroundColor: "#2a2a2a",
            border: "1px solid #888",
            color: "#888",
          }}
        />
      </div>

      {/* Action buttons */}
      <div className="mt-6 flex gap-4">
        <button
          className="flex-1 rounded-lg py-3 text-base font-bold"
          style={{ backgroundColor: "#b5541c", color: "#f0ddd0" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg py-3 text-base font-bold"
          style={{ backgroundColor: "#b5541c", color: "#f0ddd0" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10 text-xl font-bold" style={{ color: "#e8e8e8" }}>
        Recent Breakdowns
      </div>
    </div>
  );
};
