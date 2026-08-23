import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-64 p-4 font-sans"
      style={{ backgroundColor: "#2a2926" }}
    >
      <style>{`
        #testElem input::placeholder { color: #737470; opacity: 1; }
      `}</style>

      {/* Header */}
      <div className="flex items-start justify-between">
        <span
          className="text-sm font-semibold"
          style={{ color: "#b5b5b5" }}
        >
          UI magician Agent
        </span>
        <IoSettingsOutline
          size={16}
          style={{ color: "#b5b5b5" }}
        />
      </div>
      <div className="mt-1 flex items-center gap-1">
        <FiChevronUp size={12} style={{ color: "#8b9291" }} />
        <span className="text-xs font-semibold" style={{ color: "#8b9291" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-8" />

      {/* Add New Design Section */}
      <div>
        <div className="mb-4 flex items-center gap-2">
          <FiChevronUp size={14} style={{ color: "#b2b2b1" }} />
          <span
            className="text-sm font-semibold"
            style={{ color: "#b2b2b1" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="mb-1 flex items-center gap-1">
            <span className="text-xs font-semibold" style={{ color: "#a4a4a3" }}>
              Personal Access Token
            </span>
            <AiOutlineInfoCircle size={13} style={{ color: "#a4a4a3" }} />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded px-2 py-1.5 text-xs font-semibold outline-none"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
              color: "#737470",
            }}
          />
        </div>

        {/* Design URL */}
        <div className="mb-4">
          <div className="mb-1 flex items-center gap-1">
            <span className="text-xs font-semibold" style={{ color: "#a3a3a2" }}>
              Design URL
            </span>
            <AiOutlineInfoCircle size={13} style={{ color: "#a3a3a2" }} />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded px-2 py-1.5 text-xs font-semibold outline-none"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
              color: "#737470",
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            className="flex-1 rounded py-2 text-xs font-semibold"
            style={{ backgroundColor: "#843a17", color: "#8c8078" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 rounded py-2 text-xs font-semibold"
            style={{ backgroundColor: "#843a17", color: "#8c8078" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="mt-8" />

      {/* Footer */}
      <div>
        <span className="text-sm font-semibold" style={{ color: "#b0b0b0" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
