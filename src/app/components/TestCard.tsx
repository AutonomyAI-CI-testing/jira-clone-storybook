import { AiOutlineInfoCircle, AiOutlineSetting } from "react-icons/ai";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-64 flex-col overflow-hidden rounded-lg font-sans"
      style={{ backgroundColor: "#2a2826", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span
          className="text-sm font-semibold"
          style={{ color: "#b5b5b5", fontSize: "13.5px" }}
        >
          UI magician Agent
        </span>
        <AiOutlineSetting size={20} style={{ color: "#b5b5b5" }} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-8">
        <span style={{ color: "#8b9291", fontSize: "11px" }}>&#8963;</span>
        <span
          className="text-xs"
          style={{ color: "#8b9291", fontSize: "11.5px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 px-5 pb-4">
        <span style={{ color: "#b2b2b1", fontSize: "11px" }}>&#8963;</span>
        <span
          className="font-semibold"
          style={{ color: "#b2b2b1", fontSize: "13.5px" }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-2 px-5 pb-3">
        <div className="flex items-center gap-2">
          <span
            className="text-xs"
            style={{ color: "#a4a4a3", fontSize: "11.5px" }}
          >
            Personal Access Token
          </span>
          <AiOutlineInfoCircle size={14} style={{ color: "#a4a4a3" }} />
        </div>
        <div
          className="rounded px-3 py-2"
          style={{
            backgroundColor: "#1e1e1b",
            border: "1px solid #4a4a47",
          }}
        >
          <span
            className="text-xs"
            style={{ color: "#737470", fontSize: "11.5px" }}
          >
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-2 px-5 pb-5">
        <div className="flex items-center gap-2">
          <span
            className="text-xs"
            style={{ color: "#a3a3a2", fontSize: "11.5px" }}
          >
            Design URL
          </span>
          <AiOutlineInfoCircle size={14} style={{ color: "#a3a3a2" }} />
        </div>
        <div
          className="rounded px-3 py-2"
          style={{
            backgroundColor: "#1e1e1b",
            border: "1px solid #4a4a47",
          }}
        >
          <span
            className="text-xs"
            style={{ color: "#737470", fontSize: "10.5px" }}
          >
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-4 px-5 pb-8">
        <button
          className="rounded-lg px-6 py-2 text-xs font-semibold"
          style={{
            backgroundColor: "#a0522d",
            color: "#c8b8b0",
            fontSize: "11.5px",
          }}
        >
          Awesome
        </button>
        <button
          className="rounded-lg px-6 py-2 text-xs font-semibold"
          style={{
            backgroundColor: "#a0522d",
            color: "#c8b8b0",
            fontSize: "11.5px",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pb-6 pt-1">
        <span
          className="font-semibold"
          style={{ color: "#b0b0b0", fontSize: "13.5px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
