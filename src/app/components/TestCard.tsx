export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#232323", minHeight: "100vh" }}
      className="p-5 font-sans text-white w-full max-w-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <span className="text-gray-400 text-xl">⚙</span>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-8">
        <span className="text-gray-400 text-sm">∧</span>
        <span className="text-sm" style={{ color: "#a07850" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mb-5">
        <span className="text-gray-300 text-sm">∧</span>
        <h2 className="text-lg font-semibold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm text-gray-300">Personal Access Token</label>
          <span className="text-gray-400 text-sm">ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          style={{ backgroundColor: "#2d2d2d", borderColor: "#4a4a4a" }}
          className="w-full px-3 py-3 rounded border text-gray-400 text-sm placeholder-gray-500 outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm text-gray-300">Design URL</label>
          <span className="text-gray-400 text-sm">ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          style={{ backgroundColor: "#2d2d2d", borderColor: "#4a4a4a" }}
          className="w-full px-3 py-3 rounded border text-gray-400 text-sm placeholder-gray-500 outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 justify-center mb-10">
        <button
          style={{ backgroundColor: "#b85c38" }}
          className="flex-1 py-3 rounded-lg text-white font-semibold text-sm"
        >
          Awesome
        </button>
        <button
          style={{ backgroundColor: "#b85c38" }}
          className="flex-1 py-3 rounded-lg text-white font-semibold text-sm"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-xl font-bold text-white">Recent Breakdowns</h2>
    </div>
  );
}

export default TestCard;
