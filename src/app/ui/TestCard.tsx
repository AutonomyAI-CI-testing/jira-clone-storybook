import { HiOutlineCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-64 flex flex-col font-['Inter']"
      style={{ backgroundColor: "#272822", minHeight: "508px" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span
          className="font-semibold"
          style={{ color: "#b5b5b5", fontSize: "13.5px" }}
        >
          UI magician Agent
        </span>
        <HiOutlineCog size={16} style={{ color: "#b5b5b5" }} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 px-5 pb-10">
        <HiChevronUp size={12} style={{ color: "#8b9291" }} />
        <span
          className="font-semibold"
          style={{ color: "#8b9291", fontSize: "11.5px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="px-5 flex-1">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-4">
          <HiChevronUp size={14} style={{ color: "#b2b2b1" }} />
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
            <HiInformationCircle size={14} style={{ color: "#a4a4a3" }} />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full px-3 py-2 outline-none font-semibold"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
              color: "#737470",
              fontSize: "11.5px",
              borderRadius: "2px",
            }}
          />
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
            <HiInformationCircle size={14} style={{ color: "#a3a3a2" }} />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full px-3 py-2 outline-none font-semibold"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
              color: "#71726e",
              fontSize: "10.5px",
              borderRadius: "2px",
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            className="flex-1 py-2 font-semibold"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              borderRadius: "4px",
              border: "none",
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2 font-semibold"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              borderRadius: "4px",
              border: "none",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pt-10 pb-5">
        <span
          className="font-semibold"
          style={{ color: "#b0b0b0", fontSize: "13.5px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
