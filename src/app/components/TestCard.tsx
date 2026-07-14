import { LuSettings, LuChevronUp, LuInfo } from "react-icons/lu";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div
        className="w-full max-w-sm p-5"
        style={{ backgroundColor: "#2a2a2a" }}
      >
        {/* Header */}
        <div className="mb-2 flex items-center justify-between">
          <h1
            className="text-lg font-bold"
            style={{ color: "#ffffff" }}
          >
            UI magician Agent
          </h1>
          <LuSettings size={22} style={{ color: "#cccccc" }} />
        </div>

        {/* Subtitle */}
        <div className="mb-10 flex items-center gap-2">
          <LuChevronUp size={16} style={{ color: "#a07060" }} />
          <span
            className="text-sm"
            style={{ color: "#a07060" }}
          >
            From entire frame to a singl...
          </span>
        </div>

        {/* Add New Design */}
        <div className="mb-5 flex items-center gap-2">
          <LuChevronUp size={20} style={{ color: "#ffffff" }} />
          <h2
            className="text-base font-bold"
            style={{ color: "#ffffff" }}
          >
            Add New Design
          </h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-1 flex items-center gap-2">
          <label
            className="text-sm font-semibold"
            style={{ color: "#dddddd" }}
          >
            Personal Access Token
          </label>
          <LuInfo size={16} style={{ color: "#aaaaaa" }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mb-4 w-full rounded px-3 py-2.5 text-sm outline-none"
          style={{
            backgroundColor: "#383838",
            color: "#aaaaaa",
            border: "1px solid #555555",
          }}
          readOnly
        />

        {/* Design URL */}
        <div className="mb-1 flex items-center gap-2">
          <label
            className="text-sm font-semibold"
            style={{ color: "#dddddd" }}
          >
            Design URL
          </label>
          <LuInfo size={16} style={{ color: "#aaaaaa" }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="mb-6 w-full rounded px-3 py-2.5 text-sm outline-none"
          style={{
            backgroundColor: "#383838",
            color: "#aaaaaa",
            border: "1px solid #888888",
          }}
          readOnly
        />

        {/* Buttons */}
        <div className="mb-10 flex gap-4">
          <button
            className="flex-1 rounded-lg px-4 py-3 text-sm font-semibold"
            style={{ backgroundColor: "#c05a2a", color: "#ffffff" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 rounded-lg px-4 py-3 text-sm font-semibold"
            style={{ backgroundColor: "#c05a2a", color: "#ffffff" }}
          >
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns */}
        <h2
          className="text-base font-bold"
          style={{ color: "#ffffff" }}
        >
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};

export default TestCard;
