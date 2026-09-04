import { FiSettings, FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = (): JSX.Element => {
  return (
    <>
      <style>{`
        #testElem .pat-input::placeholder { color: #737470; }
        #testElem .url-input::placeholder { color: #71726e; }
      `}</style>
      <div
        id="testElem"
        style={{ fontFamily: "Inter, sans-serif", width: "254px", backgroundColor: "#2b2b27" }}
        className="p-5 flex flex-col gap-4"
      >
        {/* Header row */}
        <div className="flex items-center justify-between">
          <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600 }}>
            UI magician Agent
          </span>
          <FiSettings style={{ color: "#b5b5b5" }} size={16} />
        </div>

        {/* Sub-row */}
        <div className="flex items-center gap-2" style={{ marginTop: "-8px" }}>
          <FiChevronUp style={{ color: "#8b9291" }} size={12} />
          <span style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600 }}>
            From entire frame to a singl...
          </span>
        </div>

        {/* Spacer */}
        <div className="h-4" />

        {/* Add New Design section */}
        <div className="flex items-center gap-2">
          <FiChevronUp style={{ color: "#b2b2b1" }} size={13} />
          <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600 }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token field */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600 }}>
              Personal Access Token
            </span>
            <AiOutlineInfoCircle style={{ color: "#a4a4a3" }} size={15} />
          </div>
          <input
            readOnly
            className="pat-input w-full px-3 py-2 outline-none"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
              fontSize: "11.5px",
              fontWeight: 600,
              color: "#737470",
              fontFamily: "Inter, sans-serif",
            }}
          />
        </div>

        {/* Design URL field */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600 }}>
              Design URL
            </span>
            <AiOutlineInfoCircle style={{ color: "#a3a3a2" }} size={15} />
          </div>
          <input
            readOnly
            className="url-input w-full px-3 py-2 outline-none"
            placeholder="https://www.figma.com/file/:"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
              fontSize: "10.5px",
              fontWeight: 600,
              color: "#71726e",
              fontFamily: "Inter, sans-serif",
            }}
          />
        </div>

        {/* Buttons row */}
        <div className="flex gap-3 justify-center">
          <button
            type="button"
            style={{
              backgroundColor: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              fontFamily: "Inter, sans-serif",
            }}
            className="px-6 py-2"
          >
            Awesome
          </button>
          <button
            type="button"
            style={{
              backgroundColor: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              fontFamily: "Inter, sans-serif",
            }}
            className="px-6 py-2"
          >
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns */}
        <div className="mt-4">
          <span style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600 }}>
            Recent Breakdowns
          </span>
        </div>
      </div>
    </>
  );
};

export default TestCard;
