import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#2a2a2a",
        color: "#ffffff",
        fontFamily: "sans-serif",
        padding: "24px 20px",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <span style={{ fontWeight: "bold", fontSize: "20px", color: "#ffffff" }}>
          UI magician Agent
        </span>
        <IoSettingsOutline size={24} color="#ffffff" />
      </div>

      {/* Subtitle row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "40px",
          color: "#c97a4a",
          fontSize: "14px",
        }}
      >
        <FiChevronUp size={16} color="#c97a4a" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "24px",
        }}
      >
        <FiChevronUp size={18} color="#ffffff" />
        <span style={{ fontWeight: "bold", fontSize: "20px", color: "#ffffff" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "8px",
          }}
        >
          <label style={{ fontSize: "14px", color: "#d0d0d0", fontWeight: "500" }}>
            Personal Access Token
          </label>
          <AiOutlineInfoCircle size={16} color="#d0d0d0" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          style={{
            width: "100%",
            backgroundColor: "#363636",
            border: "1px solid #555555",
            borderRadius: "4px",
            padding: "10px 14px",
            color: "#999999",
            fontSize: "14px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Design URL field */}
      <div style={{ marginBottom: "28px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "8px",
          }}
        >
          <label style={{ fontSize: "14px", color: "#d0d0d0", fontWeight: "500" }}>
            Design URL
          </label>
          <AiOutlineInfoCircle size={16} color="#d0d0d0" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          style={{
            width: "100%",
            backgroundColor: "#363636",
            border: "1px solid #777777",
            borderRadius: "4px",
            padding: "10px 14px",
            color: "#999999",
            fontSize: "14px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Buttons row */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          justifyContent: "center",
          marginBottom: "48px",
        }}
      >
        <button
          type="button"
          style={{
            flex: 1,
            backgroundColor: "#b85c2a",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "12px 0",
            fontWeight: "600",
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          type="button"
          style={{
            flex: 1,
            backgroundColor: "#9e4e24",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "12px 0",
            fontWeight: "600",
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div>
        <span style={{ fontWeight: "bold", fontSize: "20px", color: "#ffffff" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
