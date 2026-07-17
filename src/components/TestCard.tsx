import {
  IoSettingsOutline,
  IoChevronUp,
  IoInformationCircleOutline,
} from "react-icons/io5";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2a2a", color: "#d4d4d4" }}
      className="flex flex-col gap-4 p-5 w-full max-w-sm min-h-screen"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold" style={{ color: "#e0e0e0" }}>
          UI magician Agent
        </span>
        <IoSettingsOutline size={24} style={{ color: "#e0e0e0" }} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        <IoChevronUp size={16} style={{ color: "#c97d4e" }} />
        <span className="text-sm" style={{ color: "#c97d4e" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="py-4" />

      {/* Add New Design heading */}
      <div className="flex items-center gap-2">
        <IoChevronUp size={18} style={{ color: "#e0e0e0" }} />
        <span className="text-xl font-bold" style={{ color: "#e0e0e0" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold" style={{ color: "#c8c8c8" }}>
            Personal Access Token
          </span>
          <IoInformationCircleOutline size={18} style={{ color: "#c8c8c8" }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded px-3 py-2 text-sm"
          style={{
            backgroundColor: "#3a3a3a",
            border: "1px solid #4a4a4a",
            color: "#888888",
            outline: "none",
          }}
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold" style={{ color: "#c8c8c8" }}>
            Design URL
          </span>
          <IoInformationCircleOutline size={18} style={{ color: "#c8c8c8" }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded px-3 py-2 text-sm"
          style={{
            backgroundColor: "#3a3a3a",
            border: "1px solid #4a4a4a",
            color: "#888888",
            outline: "none",
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <button
          className="flex-1 rounded-xl py-3 text-sm font-semibold cursor-pointer"
          style={{ backgroundColor: "#8b4513", color: "#f5e6d3" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-xl py-3 text-sm font-semibold cursor-pointer"
          style={{ backgroundColor: "#7a3d10", color: "#f5e6d3" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="py-4" />
      <span className="text-xl font-bold" style={{ color: "#e0e0e0" }}>
        Recent Breakdowns
      </span>
    </div>
  );
};
