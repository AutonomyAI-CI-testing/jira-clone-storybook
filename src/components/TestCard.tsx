import { LuSettings, LuChevronUp, LuInfo } from "react-icons/lu";

export function TestCard(): JSX.Element {
  const subtitleColor = { color: "#c17a3c" };
  const inputStyle = { background: "#2a2a2a", color: "#cccccc" };
  const buttonStyle = { background: "#b5451b" };

  return (
    <div
      id="testElem"
      className="rounded-lg p-5 font-sans"
      style={{ background: "#1e1e1e", width: "300px" }}
    >
      {/* Header row */}
      <div className="mb-1 flex items-center justify-between">
        <h1 className="text-lg font-bold text-white">UI magician Agent</h1>
        <LuSettings className="text-xl text-white opacity-70" />
      </div>

      {/* Subtitle row */}
      <div className="mb-8 flex items-center gap-1.5">
        <LuChevronUp style={subtitleColor} />
        <span className="text-sm" style={subtitleColor}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <div className="mb-4 flex items-center gap-2">
        <LuChevronUp className="text-white" />
        <h2 className="text-base font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-1.5 flex items-center gap-1.5">
        <span className="text-sm text-gray-300">Personal Access Token</span>
        <LuInfo className="text-sm text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mb-3 w-full rounded border border-gray-600 px-3 py-2 text-sm"
        style={inputStyle}
        readOnly
      />

      {/* Design URL */}
      <div className="mb-1.5 flex items-center gap-1.5">
        <span className="text-sm text-gray-300">Design URL</span>
        <LuInfo className="text-sm text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mb-3 w-full rounded border border-gray-600 px-3 py-2 text-sm"
        style={inputStyle}
        readOnly
      />

      {/* Button row */}
      <div className="mt-4 flex gap-3">
        <button
          className="flex-1 rounded-lg py-2 text-sm font-semibold text-white"
          style={buttonStyle}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg py-2 text-sm font-semibold text-white"
          style={buttonStyle}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-6 text-base font-bold text-white">Recent Breakdowns</h2>
    </div>
  );
}
