import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col"
      style={{ width: "254px", minHeight: "508px", background: "#1c1c1a" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span
          className="font-semibold"
          style={{ color: "#b5b5b5", fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          UI magician Agent
        </span>
        <FiSettings style={{ color: "#b5b5b5", width: "16px", height: "16px" }} />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 px-5 pb-10">
        <FiChevronUp style={{ color: "#8b9291", width: "10px", height: "10px", flexShrink: 0 }} />
        <span
          className="font-semibold"
          style={{ color: "#8b9291", fontSize: "11.5px", lineHeight: "13.92px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Add New Design section */}
      <div className="px-5 pb-5">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-4">
          <FiChevronUp style={{ color: "#b2b2b1", width: "12px", height: "12px", flexShrink: 0 }} />
          <span
            className="font-semibold"
            style={{ color: "#b2b2b1", fontSize: "13.5px", lineHeight: "16.34px" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-2">
          <div className="flex items-center gap-2 mb-1.5">
            <span
              className="font-semibold"
              style={{ color: "#a4a4a3", fontSize: "11.5px", lineHeight: "13.92px" }}
            >
              Personal Access Token
            </span>
            <FiInfo style={{ color: "#a4a4a3", width: "14px", height: "14px", flexShrink: 0 }} />
          </div>
          <div
            className="flex items-center px-3"
            style={{
              background: "#272822",
              border: "1px solid #a5adad",
              height: "36px",
              borderRadius: "2px",
            }}
          >
            <span
              className="font-semibold"
              style={{ color: "#737470", fontSize: "11.5px", lineHeight: "13.92px" }}
            >
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1.5">
            <span
              className="font-semibold"
              style={{ color: "#a3a3a2", fontSize: "11.5px", lineHeight: "13.92px" }}
            >
              Design URL
            </span>
            <FiInfo style={{ color: "#a3a3a2", width: "14px", height: "14px", flexShrink: 0 }} />
          </div>
          <div
            className="flex items-center px-3"
            style={{
              background: "#272822",
              border: "2px solid #929291",
              height: "37px",
              borderRadius: "2px",
            }}
          >
            <span
              className="font-semibold"
              style={{ color: "#71726e", fontSize: "10.5px", lineHeight: "12.71px" }}
            >
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            className="flex-1 flex items-center justify-center font-semibold"
            style={{
              background: "#843a17",
              borderRadius: "4px",
              height: "37px",
              color: "#8c8078",
              fontSize: "11.5px",
              lineHeight: "13.92px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 flex items-center justify-center font-semibold"
            style={{
              background: "#843a17",
              borderRadius: "4px",
              height: "37px",
              color: "#8c8078",
              fontSize: "11.5px",
              lineHeight: "13.92px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 py-5">
        <span
          className="font-semibold"
          style={{ color: "#b0b0b0", fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
