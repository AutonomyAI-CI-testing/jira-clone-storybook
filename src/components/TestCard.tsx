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
        <span className="text-lg font-bold" style={{ color: "#ffffff" }}>
          UI magician Agent
        </span>
        <IoSettingsOutline size={22} style={{ color: "#cccccc" }} />
      </div>

      {/* Subtitle row */}
      <div className="mt-2 flex items-center gap-1">
        <FiChevronUp size={14} style={{ color: "#b06030" }} />
        <span className="truncate text-sm" style={{ color: "#b06030" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="my-8" />

      {/* "Add New Design" section heading */}
      <div className="mb-5 flex items-center gap-2">
        <FiChevronUp size={18} style={{ color: "#ffffff" }} />
        <span className="text-xl font-bold" style={{ color: "#ffffff" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div className="mb-2 flex items-center gap-2">
        <span className="text-sm font-bold" style={{ color: "#cccccc" }}>
          Personal Access Token
        </span>
        <FiInfo size={16} style={{ color: "#999999" }} />
      </div>

      {/* Personal Access Token input */}
      <input
        className="mb-4 w-full rounded p-3 text-sm"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        style={{
          backgroundColor: "#2a2a2a",
          border: "1px solid #555",
          color: "#aaaaaa",
          outline: "none",
        }}
        readOnly
      />

      {/* Design URL label */}
      <div className="mb-2 flex items-center gap-2">
        <span className="text-sm font-bold" style={{ color: "#cccccc" }}>
          Design URL
        </span>
        <FiInfo size={16} style={{ color: "#999999" }} />
      </div>

      {/* Design URL input */}
      <input
        className="mb-6 w-full rounded p-3 text-sm"
        placeholder="https://www.figma.com/file/:"
        style={{
          backgroundColor: "#2a2a2a",
          border: "1px solid #555",
          color: "#aaaaaa",
          outline: "none",
        }}
        readOnly
      />

      {/* Button row */}
      <div className="flex justify-center gap-4">
        <button
          className="rounded-lg px-8 py-3 font-bold"
          style={{ backgroundColor: "#b5541c", color: "#f0ddd0" }}
        >
          Awesome
        </button>
        <button
          className="rounded-lg px-8 py-3 font-bold"
          style={{ backgroundColor: "#b5541c", color: "#f0ddd0" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div className="mt-10 text-xl font-bold" style={{ color: "#ffffff" }}>
        Recent Breakdowns
      </div>
    </div>
  );
};
