import { LuSettings, LuChevronUp, LuInfo } from "react-icons/lu";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div
        className="w-full max-w-sm p-5"
        style={{ backgroundColor: "#2a2a2a" }}
      >
        {/* Header */}
        <div className="mb-3 flex items-center justify-between">
          <h1 className="text-lg font-bold text-white">UI magician Agent</h1>
          <LuSettings size={22} style={{ color: "#aaaaaa" }} />
        </div>

        {/* Subtitle */}
        <div className="mb-8 flex items-center gap-2">
          <LuChevronUp size={16} style={{ color: "#b07050" }} />
          <span className="text-sm" style={{ color: "#b07050" }}>
            From entire frame to a singl...
          </span>
        </div>

        {/* Add New Design */}
        <div className="mb-5 flex items-center gap-2">
          <LuChevronUp size={18} className="text-white" />
          <h2 className="text-base font-bold text-white">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-1 flex items-center gap-2">
          <label className="text-sm text-white">Personal Access Token</label>
          <LuInfo size={15} style={{ color: "#aaaaaa" }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mb-4 w-full rounded px-3 py-2 text-sm text-gray-400 outline-none"
          style={{
            backgroundColor: "#383838",
            border: "1px solid #555",
          }}
        />

        {/* Design URL */}
        <div className="mb-1 flex items-center gap-2">
          <label className="text-sm text-white">Design URL</label>
          <LuInfo size={15} style={{ color: "#aaaaaa" }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="mb-6 w-full rounded px-3 py-2 text-sm text-gray-400 outline-none"
          style={{
            backgroundColor: "#383838",
            border: "1px solid #555",
          }}
        />

        {/* Buttons */}
        <div className="mb-8 flex gap-4">
          <button
            className="flex-1 rounded-lg px-6 py-3 text-sm font-semibold text-white"
            style={{ backgroundColor: "#c05a2a" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 rounded-lg px-6 py-3 text-sm font-semibold text-white"
            style={{ backgroundColor: "#c05a2a" }}
          >
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns */}
        <h2 className="text-base font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
