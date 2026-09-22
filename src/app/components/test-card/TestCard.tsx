import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[300px] rounded-md p-4 font-sans"
      style={{ backgroundColor: "#1a1712" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold" style={{ color: "#b5b5b5" }}>
          UI magician Agent
        </span>
        <FiSettings size={16} style={{ color: "#b5b5b5" }} />
      </div>

      {/* Collapsed row */}
      <div className="mt-3 flex items-center gap-2">
        <FiChevronUp size={12} style={{ color: "#8b9291" }} />
        <span className="text-[11.5px] font-semibold" style={{ color: "#8b9291" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-6 flex items-center gap-2">
        <FiChevronUp size={12} style={{ color: "#b2b2b1" }} />
        <span className="text-[13.5px] font-semibold" style={{ color: "#b2b2b1" }}>
          Add New Design
        </span>
      </div>

      <div className="mt-4 flex items-center gap-1">
        <span className="text-[11.5px] font-semibold" style={{ color: "#a4a4a3" }}>
          Personal Access Token
        </span>
        <FiInfo size={12} style={{ color: "#a4a4a3" }} />
      </div>
      <div
        className="mt-1 rounded p-2"
        style={{ backgroundColor: "#272822", border: "1px solid #a5adad" }}
      >
        <span className="text-[11.5px] font-semibold" style={{ color: "#737470" }}>
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      <div className="mt-4 flex items-center gap-1">
        <span className="text-[11.5px] font-semibold" style={{ color: "#a3a3a2" }}>
          Design URL
        </span>
        <FiInfo size={12} style={{ color: "#a3a3a2" }} />
      </div>
      <div
        className="mt-1 rounded p-2"
        style={{ backgroundColor: "#272822", border: "2px solid #929291" }}
      >
        <span className="text-[10.5px] font-semibold" style={{ color: "#71726e" }}>
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          className="flex-1 rounded p-2 text-[11.5px] font-semibold"
          style={{ backgroundColor: "#843a17", color: "#8c8078" }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded p-2 text-[11.5px] font-semibold"
          style={{ backgroundColor: "#843a17", color: "#8c8078" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8">
        <span className="text-[13.5px] font-semibold" style={{ color: "#b0b0b0" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
