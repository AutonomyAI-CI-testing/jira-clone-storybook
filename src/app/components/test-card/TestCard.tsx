import { IoSettingsOutline } from "react-icons/io5";
import { HiChevronUp, HiInformationCircle } from "react-icons/hi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2a2a", width: "300px" }}
      className="p-5 font-primary"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-bold text-lg" style={{ color: "#ffffff" }}>
          UI magician Agent
        </span>
        <IoSettingsOutline size={22} style={{ color: "#ffffff" }} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-6">
        <HiChevronUp size={16} style={{ color: "#c47a3a" }} />
        <span className="text-sm" style={{ color: "#c47a3a" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-6">
        <HiChevronUp size={20} style={{ color: "#ffffff" }} />
        <span className="font-bold text-lg" style={{ color: "#ffffff" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm" style={{ color: "#ffffff" }}>
            Personal Access Token
          </span>
          <HiInformationCircle size={16} style={{ color: "#888" }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          style={{
            backgroundColor: "#1e1e1e",
            border: "1px solid #555",
            color: "#888",
            width: "100%",
            borderRadius: "4px",
            padding: "10px 12px",
            fontSize: "14px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm" style={{ color: "#ffffff" }}>
            Design URL
          </span>
          <HiInformationCircle size={16} style={{ color: "#888" }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          style={{
            backgroundColor: "#1e1e1e",
            border: "1px solid #c47a3a",
            color: "#888",
            width: "100%",
            borderRadius: "4px",
            padding: "10px 12px",
            fontSize: "14px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 justify-center mb-6">
        <button
          style={{
            backgroundColor: "#8b4513",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "12px 24px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            flex: 1,
          }}
        >
          Awesome
        </button>
        <button
          style={{
            backgroundColor: "#8b4513",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "12px 24px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            flex: 1,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="font-bold text-lg" style={{ color: "#ffffff" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
