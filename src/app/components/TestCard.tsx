import { LuSettings, LuChevronUp, LuInfo } from "react-icons/lu";

export function TestCard(): JSX.Element {
  return (
    <div id="testElem">
      <div
        className="flex w-full max-w-sm flex-col gap-5 p-5"
        style={{ backgroundColor: "#272727", minHeight: "100vh" }}
      >
        {/* Header row */}
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-white">UI magician Agent</h1>
          <LuSettings size={22} color="#cccccc" />
        </div>

        {/* Subtitle row */}
        <div className="flex items-center gap-2">
          <LuChevronUp size={16} style={{ color: "#b07040" }} />
          <span className="text-sm" style={{ color: "#b07040" }}>
            From entire frame to a singl...
          </span>
        </div>

        {/* Spacer */}
        <div className="py-3" />

        {/* Add New Design section */}
        <div className="flex items-center gap-2">
          <LuChevronUp size={18} color="#ffffff" />
          <h2 className="text-base font-bold text-white">Add New Design</h2>
        </div>

        {/* Personal Access Token field */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="text-sm text-white">Personal Access Token</label>
            <LuInfo size={16} color="#aaaaaa" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded-sm px-3 py-2 text-sm outline-none"
            style={{
              backgroundColor: "#383838",
              border: "1px solid #555555",
              color: "#aaaaaa",
            }}
          />
        </div>

        {/* Design URL field */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="text-sm text-white">Design URL</label>
            <LuInfo size={16} color="#aaaaaa" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded-sm px-3 py-2 text-sm outline-none"
            style={{
              backgroundColor: "#383838",
              border: "1px solid #555555",
              color: "#aaaaaa",
            }}
          />
        </div>

        {/* Buttons row */}
        <div className="flex gap-4">
          <button
            type="button"
            className="flex-1 rounded-lg px-4 py-3 text-sm font-semibold text-white"
            style={{ backgroundColor: "#b5451b" }}
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded-lg px-4 py-3 text-sm font-semibold text-white"
            style={{ backgroundColor: "#b5451b" }}
          >
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns section */}
        <div className="pt-4">
          <h2 className="text-base font-bold text-white">Recent Breakdowns</h2>
        </div>
      </div>
    </div>
  );
}
