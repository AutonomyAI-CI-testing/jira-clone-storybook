import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { HiChevronUp } from "react-icons/hi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#272822",
        width: "254px",
        fontFamily: "Inter, sans-serif",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600 }}>
          UI magician Agent
        </span>
        <AiOutlineSetting style={{ color: "#b5b5b5", fontSize: "16px" }} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 mb-6">
        <HiChevronUp style={{ color: "#8b9291", fontSize: "12px" }} />
        <span
          style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600 }}
          className="truncate"
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-4">
        <HiChevronUp style={{ color: "#b2b2b1", fontSize: "14px" }} />
        <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600 }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-3">
        <div className="flex items-center gap-1 mb-1">
          <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600 }}>
            Personal Access Token
          </span>
          <AiOutlineInfoCircle style={{ color: "#a4a4a3", fontSize: "13px" }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            color: "#737470",
            fontSize: "11.5px",
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
            width: "100%",
            padding: "8px 10px",
            boxSizing: "border-box",
            outline: "none",
          }}
        />
      </div>

      {/* Design URL field */}
      <div className="mb-5">
        <div className="flex items-center gap-1 mb-1">
          <span style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600 }}>
            Design URL
          </span>
          <AiOutlineInfoCircle style={{ color: "#a3a3a2", fontSize: "13px" }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            color: "#71726e",
            fontSize: "10.5px",
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
            width: "100%",
            padding: "8px 10px",
            boxSizing: "border-box",
            outline: "none",
          }}
        />
      </div>

      {/* Buttons row */}
      <div className="flex gap-3 mb-8">
        <button
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
            flex: 1,
            padding: "10px 0",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
            flex: 1,
            padding: "10px 0",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div>
        <span style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600 }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
