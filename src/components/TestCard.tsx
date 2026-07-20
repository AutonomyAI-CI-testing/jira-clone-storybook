import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#2a2a2a",
        color: "#e0e0e0",
        fontFamily: "sans-serif",
        padding: "24px 20px",
        maxWidth: "360px",
        minHeight: "600px",
        boxSizing: "border-box",
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-4">
        <h1
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "#e8e8e8",
            margin: 0,
          }}
        >
          UI magician Agent
        </h1>
        <IoSettingsOutline
          size={22}
          style={{ color: "#b0b0b0", flexShrink: 0 }}
        />
      </div>

      {/* Collapsible-looking row */}
      <div
        className="flex items-center gap-2 mb-8"
        style={{ paddingLeft: "4px" }}
      >
        <FiChevronUp size={14} style={{ color: "#a07858", flexShrink: 0 }} />
        <span style={{ color: "#a07858", fontSize: "0.875rem" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-6">
        <FiChevronUp size={16} style={{ color: "#e8e8e8", flexShrink: 0 }} />
        <h2
          style={{
            fontSize: "1.125rem",
            fontWeight: 700,
            color: "#e8e8e8",
            margin: 0,
          }}
        >
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span style={{ fontSize: "0.875rem", color: "#c8c8c8", fontWeight: 500 }}>
            Personal Access Token
          </span>
          <FiInfo size={15} style={{ color: "#a0a0a0" }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          style={{
            width: "100%",
            backgroundColor: "#3a3a3a",
            border: "1px solid #555555",
            borderRadius: "4px",
            padding: "10px 12px",
            color: "#888888",
            fontSize: "0.875rem",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span style={{ fontSize: "0.875rem", color: "#c8c8c8", fontWeight: 500 }}>
            Design URL
          </span>
          <FiInfo size={15} style={{ color: "#a0a0a0" }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          style={{
            width: "100%",
            backgroundColor: "#3a3a3a",
            border: "1px solid #777777",
            borderRadius: "4px",
            padding: "10px 12px",
            color: "#888888",
            fontSize: "0.875rem",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Buttons row */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <button
          type="button"
          style={{
            backgroundColor: "#b5541e",
            color: "#f0d0b8",
            border: "none",
            borderRadius: "8px",
            padding: "12px 28px",
            fontSize: "1rem",
            fontWeight: 600,
            cursor: "pointer",
            flex: 1,
          }}
        >
          Awesome
        </button>
        <button
          type="button"
          style={{
            backgroundColor: "#9e4a18",
            color: "#e8c8a8",
            border: "none",
            borderRadius: "8px",
            padding: "12px 28px",
            fontSize: "1rem",
            fontWeight: 600,
            cursor: "pointer",
            flex: 1,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: 700,
          color: "#d8d8d8",
          margin: 0,
        }}
      >
        Recent Breakdowns
      </h2>
    </div>
  );
};
