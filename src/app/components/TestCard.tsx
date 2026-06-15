import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { FiChevronUp } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen p-5 w-[320px]"
      style={{ backgroundColor: "#2a2a2a", color: "#ffffff" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-lg font-bold" style={{ color: "#ffffff" }}>
          UI magician Agent
        </span>
        <AiOutlineSetting style={{ color: "#d1d5db", fontSize: "1.25rem" }} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-8">
        <FiChevronUp style={{ color: "#c47a52", fontSize: "0.875rem" }} />
        <span className="text-sm" style={{ color: "#c47a52" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-5">
        <FiChevronUp style={{ color: "#ffffff", fontSize: "1rem" }} />
        <span className="text-lg font-bold" style={{ color: "#ffffff" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-2">
          <label className="text-sm" style={{ color: "#e5e7eb" }}>
            Personal Access Token
          </label>
          <AiOutlineInfoCircle style={{ color: "#9ca3af", fontSize: "0.875rem" }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full text-sm rounded px-3 py-2 outline-none"
          style={{
            backgroundColor: "#1e1e1e",
            border: "1px solid #555555",
            color: "#d1d5db",
          }}
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-1 mb-2">
          <label className="text-sm" style={{ color: "#e5e7eb" }}>
            Design URL
          </label>
          <AiOutlineInfoCircle style={{ color: "#9ca3af", fontSize: "0.875rem" }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full text-sm rounded px-3 py-2 outline-none"
          style={{
            backgroundColor: "#1e1e1e",
            border: "1px solid #555555",
            color: "#d1d5db",
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-10">
        <button
          className="flex-1 font-semibold py-3 px-4 rounded-lg"
          style={{ backgroundColor: "#a0522d", color: "#ffffff" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 font-semibold py-3 px-4 rounded-lg"
          style={{ backgroundColor: "#a0522d", color: "#ffffff" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-lg font-bold" style={{ color: "#ffffff" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
