import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex flex-col gap-6 p-5 w-full max-w-sm"
      style={{ backgroundColor: "#282828", minHeight: "100vh", color: "#c9c9c9" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-semibold" style={{ color: "#c9c9c9" }}>
          UI magician Agent
        </span>
        <FiSettings size={22} style={{ color: "#c9c9c9" }} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        <FiChevronUp size={16} style={{ color: "#8b9291" }} />
        <span className="text-sm" style={{ color: "#8b9291" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-5 mt-4">
        <div className="flex items-center gap-2">
          <FiChevronUp size={16} style={{ color: "#b2b2b1" }} />
          <span className="text-lg font-semibold" style={{ color: "#b2b2b1" }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium" style={{ color: "#c9c9c9" }}>
              Personal Access Token
            </span>
            <FiInfo size={15} style={{ color: "#8b9291" }} />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full px-3 py-3 rounded text-sm border"
            style={{
              backgroundColor: "#1e1e1e",
              borderColor: "#4a4a4a",
              color: "#8b9291",
            }}
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium" style={{ color: "#c9c9c9" }}>
              Design URL
            </span>
            <FiInfo size={15} style={{ color: "#8b9291" }} />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full px-3 py-3 rounded text-sm border"
            style={{
              backgroundColor: "#1e1e1e",
              borderColor: "#6a4a3a",
              color: "#8b9291",
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-2">
          <button
            className="flex-1 py-3 rounded-lg font-semibold text-sm"
            style={{ backgroundColor: "#843a17", color: "#e0c9be" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-3 rounded-lg font-semibold text-sm"
            style={{ backgroundColor: "#843a17", color: "#e0c9be" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <span className="text-xl font-semibold" style={{ color: "#c9c9c9" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
