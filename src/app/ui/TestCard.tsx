import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { BiChevronUp } from "react-icons/bi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#272822",
        fontFamily: "Inter, sans-serif",
        fontWeight: 600,
        width: "254px",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px" }}>
          UI magician Agent
        </span>
        <AiOutlineSetting style={{ color: "#b5b5b5", fontSize: "16px" }} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 mb-8">
        <BiChevronUp style={{ color: "#8b9291", fontSize: "14px" }} />
        <span style={{ color: "#8b9291", fontSize: "11.5px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-1 mb-4">
        <BiChevronUp style={{ color: "#b2b2b1", fontSize: "14px" }} />
        <span style={{ color: "#b2b2b1", fontSize: "13.5px" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-3">
        <div className="flex items-center gap-1 mb-1">
          <span style={{ color: "#a4a4a3", fontSize: "11.5px" }}>
            Personal Access Token
          </span>
          <AiOutlineInfoCircle style={{ color: "#a4a4a3", fontSize: "13px" }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            width: "100%",
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            borderRadius: "0px",
            padding: "8px 10px",
            color: "#737470",
            fontSize: "11.5px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Design URL field */}
      <div className="mb-5">
        <div className="flex items-center gap-1 mb-1">
          <span style={{ color: "#a3a3a2", fontSize: "11.5px" }}>
            Design URL
          </span>
          <AiOutlineInfoCircle style={{ color: "#a3a3a2", fontSize: "13px" }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={{
            width: "100%",
            backgroundColor: "#272822",
            border: "2px solid #929291",
            borderRadius: "0px",
            padding: "8px 10px",
            color: "#71726e",
            fontSize: "11.5px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mb-8">
        <button
          style={{
            flex: 1,
            backgroundColor: "#843a17",
            borderRadius: "4px",
            color: "#8c8078",
            fontSize: "11.5px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            padding: "10px 0",
            border: "none",
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            flex: 1,
            backgroundColor: "#843a17",
            borderRadius: "4px",
            color: "#8c8078",
            fontSize: "11.5px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            padding: "10px 0",
            border: "none",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns footer */}
      <div>
        <span style={{ color: "#b0b0b0", fontSize: "13.5px" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
