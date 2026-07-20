import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex flex-col p-5"
      style={{
        backgroundColor: "#2a2a2a",
        minHeight: "600px",
        maxWidth: "400px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="text-lg font-bold"
          style={{ color: "#e8e8e8" }}
        >
          UI magician Agent
        </span>
        <IoSettingsOutline size={22} style={{ color: "#aaaaaa" }} />
      </div>

      {/* Collapsible row */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp size={16} style={{ color: "#a07855" }} />
        <span className="text-sm" style={{ color: "#a07855" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div style={{ height: "40px" }} />

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp size={18} style={{ color: "#e8e8e8" }} />
        <span
          className="text-lg font-bold"
          style={{ color: "#e8e8e8" }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-2 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium" style={{ color: "#cccccc" }}>
            Personal Access Token
          </span>
          <FiInfo size={15} style={{ color: "#888888" }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded px-3 py-2 text-sm outline-none border border-solid"
          style={{
            backgroundColor: "#383838",
            borderColor: "#555555",
            color: "#cccccc",
          }}
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-2 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium" style={{ color: "#cccccc" }}>
            Design URL
          </span>
          <FiInfo size={15} style={{ color: "#888888" }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded px-3 py-2 text-sm outline-none border border-solid"
          style={{
            backgroundColor: "#383838",
            borderColor: "#555555",
            color: "#cccccc",
          }}
        />
      </div>

      {/* Buttons row */}
      <div className="flex gap-3 mb-4">
        <button
          className="flex-1 rounded-lg py-3 font-bold cursor-pointer"
          style={{
            backgroundColor: "#b5541e",
            color: "#f0dfd0",
            border: "none",
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg py-3 font-bold cursor-pointer"
          style={{
            backgroundColor: "#b5541e",
            color: "#f0dfd0",
            border: "none",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div style={{ height: "40px" }} />

      {/* Recent Breakdowns */}
      <span className="text-lg font-bold" style={{ color: "#e8e8e8" }}>
        Recent Breakdowns
      </span>
    </div>
  );
};
