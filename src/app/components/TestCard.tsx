import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { MdKeyboardArrowUp } from "react-icons/md";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-64 flex-col rounded font-sans"
      style={{ backgroundColor: "#272822", minHeight: "508px" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span className="text-sm font-semibold" style={{ color: "#b5b5b5" }}>
          UI magician Agent
        </span>
        <IoSettingsOutline size={16} style={{ color: "#b5b5b5" }} />
      </div>

      {/* Subtitle / collapsed row */}
      <div className="flex items-center gap-2 px-5 pb-2">
        <MdKeyboardArrowUp size={14} style={{ color: "#8b9291" }} />
        <span className="text-xs font-semibold" style={{ color: "#8b9291" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" style={{ minHeight: "60px" }} />

      {/* Add New Design */}
      <div className="flex items-center gap-2 px-5 pb-4">
        <MdKeyboardArrowUp size={16} style={{ color: "#b2b2b1" }} />
        <span className="text-sm font-semibold" style={{ color: "#b2b2b1" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="px-5 pb-2">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-xs font-semibold" style={{ color: "#a4a4a3" }}>
            Personal Access Token
          </span>
          <AiOutlineInfoCircle size={14} style={{ color: "#a4a4a3" }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded px-3 py-2 text-xs font-semibold outline-none"
          style={{
            backgroundColor: "#272822",
            border: "1.5px solid #929291",
            color: "#737470",
          }}
        />
      </div>

      {/* Design URL */}
      <div className="px-5 pt-2 pb-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-xs font-semibold" style={{ color: "#a3a3a2" }}>
            Design URL
          </span>
          <AiOutlineInfoCircle size={14} style={{ color: "#a3a3a2" }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded px-3 py-2 text-xs font-semibold outline-none"
          style={{
            backgroundColor: "#272822",
            border: "1.5px solid #a5adad",
            color: "#71726e",
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 px-5 pb-6">
        <button
          className="flex-1 rounded-lg px-4 py-2.5 text-xs font-semibold"
          style={{ backgroundColor: "#843a17", color: "#8c8078" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg px-4 py-2.5 text-xs font-semibold"
          style={{ backgroundColor: "#843a17", color: "#8c8078" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pb-6">
        <span className="text-sm font-semibold" style={{ color: "#b0b0b0" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
