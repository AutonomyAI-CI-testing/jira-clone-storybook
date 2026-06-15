export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="p-4 rounded-xl flex flex-col gap-4 mx-auto"
      style={{ backgroundColor: "#2a2a2a", width: "400px" }}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="font-bold text-white">UI magician Agent</span>
        <span className="text-white">⚙</span>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2">
        <span style={{ color: "#f59e0b" }}>∧</span>
        <span style={{ color: "#f59e0b" }}>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-4"></div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2">
        <span className="font-bold text-white">∧</span>
        <span className="font-bold text-white">Add New Design</span>
      </div>

      <div className="flex flex-col gap-3">
        {/* Personal Access Token Input */}
        <div>
          <label className="text-white text-sm flex items-center gap-1 mb-1">
            Personal Access Token <span className="text-gray-400">ⓘ</span>
          </label>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 rounded-md border text-white"
            style={{ backgroundColor: "#1a1a1a", borderColor: "#444" }}
          />
        </div>

        {/* Design URL Input */}
        <div>
          <label className="text-white text-sm flex items-center gap-1 mb-1">
            Design URL <span className="text-gray-400">ⓘ</span>
          </label>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 rounded-md border text-white"
            style={{ backgroundColor: "#1a1a1a", borderColor: "#444" }}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-2">
          <button
            className="flex-1 p-2 rounded-lg text-white font-semibold"
            style={{ backgroundColor: "#b5541a" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 p-2 rounded-lg text-white font-semibold"
            style={{ backgroundColor: "#b5541a" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4">
        <span className="font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
