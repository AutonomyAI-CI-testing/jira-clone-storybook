import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = () => {
  return (
    <>
      <style>{`
        #testElem input[data-pat]::placeholder { color: #737470; font-size: 11.5px; font-weight: 600; }
        #testElem input[data-url]::placeholder { color: #71726e; font-size: 10.5px; font-weight: 600; }
      `}</style>
      <div
        id="testElem"
        style={{
          backgroundColor: "#272822",
          fontFamily: "Inter, sans-serif",
          minHeight: "100vh",
          maxWidth: "320px",
          padding: "20px",
        }}
      >
        {/* Section 1 — Header row */}
        <div className="flex items-center justify-between">
          <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600 }}>
            UI magician Agent
          </span>
          <IoSettingsOutline size={16} color="#b5b5b5" />
        </div>

        {/* Section 2 — Subtitle row */}
        <div className="flex items-center gap-2 mt-2">
          <FiChevronUp size={12} color="#8b9291" />
          <span style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600 }}>
            From entire frame to a singl...
          </span>
        </div>

        {/* Spacer ~60px */}
        <div style={{ marginTop: "60px" }} />

        {/* Section 3 — Add New Design */}
        <div className="flex items-center gap-2">
          <FiChevronDown size={12} color="#b2b2b1" />
          <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600 }}>
            Add New Design
          </span>
        </div>

        {/* Section 4 — Personal Access Token */}
        <div className="mt-4">
          <div className="flex items-center gap-2">
            <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600 }}>
              Personal Access Token
            </span>
            <AiOutlineInfoCircle size={15} color="#a4a4a3" />
          </div>
          <input
            data-pat
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full mt-2 outline-none"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
              borderRadius: "2px",
              padding: "10px 12px",
              color: "#737470",
              fontSize: "11.5px",
              fontWeight: 600,
            }}
          />
        </div>

        {/* Section 5 — Design URL */}
        <div className="mt-4">
          <div className="flex items-center gap-2">
            <span style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600 }}>
              Design URL
            </span>
            <AiOutlineInfoCircle size={15} color="#a3a3a2" />
          </div>
          <input
            data-url
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full mt-2 outline-none"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
              borderRadius: "2px",
              padding: "10px 12px",
              color: "#71726e",
              fontSize: "10.5px",
              fontWeight: 600,
            }}
          />
        </div>

        {/* Section 6 — Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            style={{
              backgroundColor: "#843a17",
              borderRadius: "4px",
              padding: "10px 20px",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
            }}
          >
            Awesome
          </button>
          <button
            style={{
              backgroundColor: "#843a17",
              borderRadius: "4px",
              padding: "10px 20px",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
            }}
          >
            Prepare
          </button>
        </div>

        {/* Section 7 — Recent Breakdowns */}
        <div className="mt-10">
          <span style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600 }}>
            Recent Breakdowns
          </span>
        </div>
      </div>
    </>
  );
};
