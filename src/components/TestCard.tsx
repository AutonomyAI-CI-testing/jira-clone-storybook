import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex flex-col gap-5 p-8"
      style={{ backgroundColor: "#2a2a2a", width: "380px", fontFamily: "Inter, sans-serif" }}
    >
      {/* Placeholder color scoped to this card's inputs */}
      <style>{`
        #testElem input::placeholder { color: #737470; }
      `}</style>

      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold" style={{ color: "#b5b5b5" }}>
          UI magician Agent
        </span>
        <IoSettingsOutline size={28} color="#b5b5b5" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        <FiChevronUp size={16} color="#8b9291" />
        <span className="text-base font-semibold" style={{ color: "#8b9291" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div style={{ height: "48px" }} />

      {/* Add New Design section heading */}
      <div className="flex items-center gap-2">
        <FiChevronUp size={18} color="#b2b2b1" />
        <span className="text-xl font-bold" style={{ color: "#b2b2b1" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold" style={{ color: "#a4a4a3" }}>
            Personal Access Token
          </span>
          <AiOutlineInfoCircle size={18} color="#a4a4a3" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded px-4 py-4 text-base outline-none"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            color: "#737470",
          }}
          readOnly
        />
      </div>

      {/* Design URL field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold" style={{ color: "#a3a3a2" }}>
            Design URL
          </span>
          <AiOutlineInfoCircle size={18} color="#a3a3a2" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded px-4 py-4 text-base outline-none"
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            color: "#71726e",
          }}
          readOnly
        />
      </div>

      {/* Buttons row */}
      <div className="flex gap-3">
        <button
          className="flex-1 rounded-lg px-6 py-4 text-base font-semibold"
          style={{ backgroundColor: "#843a17", color: "#8c8078" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg px-6 py-4 text-base font-semibold"
          style={{ backgroundColor: "#843a17", color: "#8c8078" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns footer */}
      <div style={{ marginTop: "40px" }}>
        <span className="text-2xl font-bold" style={{ color: "#b0b0b0" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
