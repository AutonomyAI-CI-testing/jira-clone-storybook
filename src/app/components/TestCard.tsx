import { IoSettingsOutline } from "react-icons/io5";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col p-5 w-64"
      style={{ backgroundColor: "#272822", fontFamily: "Inter, sans-serif", minHeight: "100%" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span
          className="font-semibold"
          style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600 }}
        >
          UI magician Agent
        </span>
        <IoSettingsOutline size={16} color="#b5b5b5" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 mb-8">
        <FaChevronUp size={8} color="#8b9291" />
        <span
          className="font-semibold truncate"
          style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600 }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div>
        {/* Section header */}
        <div className="flex items-center gap-2 mb-4">
          <FaChevronDown size={9} color="#b2b2b1" />
          <span
            className="font-semibold"
            style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600 }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-1 mb-1">
            <span
              className="font-semibold"
              style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600 }}
            >
              Personal Access Token
            </span>
            <AiOutlineInfoCircle size={13} color="#a4a4a3" />
          </div>
          <div
            className="w-full px-3 py-2 font-semibold"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
              color: "#737470",
              fontSize: "11.5px",
              fontWeight: 600,
            }}
          >
            figd_xxxxxxxxxxxxxxxxxx
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-4">
          <div className="flex items-center gap-1 mb-1">
            <span
              className="font-semibold"
              style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600 }}
            >
              Design URL
            </span>
            <AiOutlineInfoCircle size={13} color="#a3a3a2" />
          </div>
          <div
            className="w-full px-3 py-2 font-semibold"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
              color: "#71726e",
              fontSize: "11.5px",
              fontWeight: 600,
            }}
          >
            https://www.figma.com/file/:
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            className="flex-1 py-2 font-semibold"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              borderRadius: "4px",
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
              fontWeight: 600,
              borderRadius: "4px",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8">
        <span
          className="font-semibold"
          style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600 }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
