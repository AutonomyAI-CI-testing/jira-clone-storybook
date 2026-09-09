import { LuSettings2 } from "react-icons/lu";
import { FaChevronUp } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";

export const TestCard = () => {
  const cardStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    backgroundColor: "#272822",
  };

  return (
    <div id="testElem" style={{ backgroundColor: "#000000" }} className="p-4">
      <div style={cardStyle} className="max-w-[254px] p-5">
        {/* Header row */}
        <div className="flex items-center justify-between">
          <span
            style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600 }}
          >
            UI magician Agent
          </span>
          <LuSettings2 style={{ color: "#b5b5b5" }} size={14} />
        </div>

        {/* Subtitle row */}
        <div className="mt-2 flex items-center gap-1.5">
          <FaChevronUp style={{ color: "#8b9291" }} size={8} />
          <span
            style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600 }}
          >
            From entire frame to a singl...
          </span>
        </div>

        {/* Add New Design section heading */}
        <div className="mt-8 flex items-center gap-1.5">
          <FaChevronUp style={{ color: "#b2b2b1" }} size={12} />
          <span
            style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600 }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token field */}
        <div className="mt-4">
          <div className="mb-1.5 flex items-center gap-1.5">
            <span
              style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600 }}
            >
              Personal Access Token
            </span>
            <FiInfo style={{ color: "#a4a4a3" }} size={15} />
          </div>
          <input
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full px-3 py-2 outline-none"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
              color: "#737470",
              fontSize: "11.5px",
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
            }}
          />
        </div>

        {/* Design URL field */}
        <div className="mt-3">
          <div className="mb-1.5 flex items-center gap-1.5">
            <span
              style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600 }}
            >
              Design URL
            </span>
            <FiInfo style={{ color: "#a3a3a2" }} size={15} />
          </div>
          <input
            readOnly
            placeholder="https://www.figma.com/file/:"
            className="w-full px-3 py-2 outline-none"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
              color: "#71726e",
              fontSize: "10.5px",
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
            }}
          />
        </div>

        {/* Action buttons */}
        <div className="mt-4 flex gap-2">
          <button
            style={{
              backgroundColor: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
            }}
            className="flex-1 py-2.5"
          >
            Awesome
          </button>
          <button
            style={{
              backgroundColor: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
            }}
            className="flex-1 py-2.5"
          >
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns footer */}
        <div className="mt-8">
          <span
            style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600 }}
          >
            Recent Breakdowns
          </span>
        </div>
      </div>
    </div>
  );
};
