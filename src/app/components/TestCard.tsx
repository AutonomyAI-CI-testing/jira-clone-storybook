import { HiOutlineCog, HiChevronUp } from "react-icons/hi";
import { BiInfoCircle } from "react-icons/bi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{
        width: "254px",
        minHeight: "508px",
        backgroundColor: "#272822",
        fontFamily: "Inter, sans-serif",
        overflow: "auto",
      }}
    >
      {/* Top bar */}
      <div style={{ height: "9px", backgroundColor: "#1e1e1b", width: "100%" }} />

      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <span
          className="font-semibold"
          style={{ color: "#b5b5b5", fontSize: "13.5px" }}
        >
          UI magician Agent
        </span>
        <HiOutlineCog style={{ color: "#b5b5b5", width: "14px", height: "16px" }} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-4">
        <HiChevronUp style={{ color: "#8b9291", width: "8px", height: "5px", flexShrink: 0 }} />
        <span
          className="font-semibold"
          style={{ color: "#8b9291", fontSize: "11.5px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-10" />

      {/* Add New Design section */}
      <div className="px-5">
        <div className="flex items-center gap-2 mb-4">
          <HiChevronUp style={{ color: "#b2b2b1", width: "12px", height: "8px", flexShrink: 0 }} />
          <span
            className="font-semibold"
            style={{ color: "#b2b2b1", fontSize: "13.5px" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-1 mb-1">
            <span
              className="font-semibold"
              style={{ color: "#a4a4a3", fontSize: "11.5px" }}
            >
              Personal Access Token
            </span>
            <BiInfoCircle style={{ color: "#a4a4a3", width: "15px", height: "15px" }} />
          </div>
          <div
            className="w-full px-3 py-2"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
              minHeight: "36px",
            }}
          >
            <span
              className="font-semibold"
              style={{ color: "#737470", fontSize: "11.5px" }}
            >
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-1 mb-1">
            <span
              className="font-semibold"
              style={{ color: "#a3a3a2", fontSize: "11.5px" }}
            >
              Design URL
            </span>
            <BiInfoCircle style={{ color: "#a3a3a2", width: "15px", height: "15px" }} />
          </div>
          <div
            className="w-full px-3 py-2"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
              minHeight: "37px",
            }}
          >
            <span
              className="font-semibold"
              style={{ color: "#71726e", fontSize: "10.5px" }}
            >
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            className="flex-1 font-semibold py-2"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 font-semibold py-2"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-10" />

      {/* Recent Breakdowns */}
      <div className="px-5">
        <span
          className="font-semibold"
          style={{ color: "#b0b0b0", fontSize: "13.5px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
