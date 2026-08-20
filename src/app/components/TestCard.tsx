import { IoSettingsOutline, IoChevronUp } from "react-icons/io5";
import { BsInfoCircle } from "react-icons/bs";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col w-64 min-h-screen px-5 py-5"
      style={{ backgroundColor: "#272822", fontFamily: "Inter, sans-serif" }}
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
      <div className="flex items-center gap-2 mb-10">
        <IoChevronUp size={10} color="#8b9291" />
        <span
          className="font-semibold truncate"
          style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600 }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-3">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-1">
          <IoChevronUp size={12} color="#b2b2b1" />
          <span
            className="font-semibold"
            style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600 }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div>
          <div className="flex items-center gap-1.5 mb-1.5">
            <span
              className="font-semibold"
              style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600 }}
            >
              Personal Access Token
            </span>
            <BsInfoCircle size={13} color="#a4a4a3" />
          </div>
          <div
            className="w-full rounded px-3 py-2"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
            }}
          >
            <span
              style={{ color: "#737470", fontSize: "11.5px", fontWeight: 600 }}
            >
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div>
          <div className="flex items-center gap-1.5 mb-1.5">
            <span
              className="font-semibold"
              style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600 }}
            >
              Design URL
            </span>
            <BsInfoCircle size={13} color="#a3a3a2" />
          </div>
          <div
            className="w-full rounded px-3 py-2"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
            }}
          >
            <span
              style={{ color: "#71726e", fontSize: "10.5px", fontWeight: 600 }}
            >
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-1">
          <button
            className="flex-1 py-2.5 rounded-md font-semibold"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2.5 rounded-md font-semibold"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
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
