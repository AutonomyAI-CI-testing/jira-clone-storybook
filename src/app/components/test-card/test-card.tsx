export const TestCard = (): JSX.Element => {
  return (
    <div className="w-full max-w-md p-6" style={{ backgroundColor: "#000000" }}>
      {/* Header with title and settings icon */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-sm font-semibold" style={{ color: "#b0b0b0" }}>
          UI magician Agent
        </h1>
        <button
          className="flex h-6 w-6 items-center justify-center rounded"
          style={{
            borderColor: "#4a4a4a",
            color: "#888888",
            border: "1px solid #4a4a4a",
          }}
          aria-label="Settings"
        >
          ⚙
        </button>
      </div>

      {/* Collapsible section 1 */}
      <div className="mb-8 flex items-center space-x-3">
        <button style={{ color: "#888888" }} aria-label="Toggle">
          ▲
        </button>
        <p className="text-xs font-semibold" style={{ color: "#888888" }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Collapsible section 2 - Add New Design */}
      <div className="mb-6">
        <div className="flex items-center space-x-3">
          <button style={{ color: "#b0b0b0" }} aria-label="Toggle">
            ▲
          </button>
          <h2 className="text-sm font-semibold" style={{ color: "#b0b0b0" }}>
            Add New Design
          </h2>
        </div>
      </div>

      {/* Form section */}
      <div className="space-y-6">
        {/* Personal Access Token field */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <label
              className="text-xs font-semibold"
              style={{ color: "#a8a8a8" }}
            >
              Personal Access Token
            </label>
            <button
              className="flex h-5 w-5 items-center justify-center rounded-full"
              style={{
                borderColor: "#5a5a5a",
                color: "#a8a8a8",
                border: "1px solid #5a5a5a",
                fontSize: "0.75rem",
              }}
              aria-label="Info"
            >
              ⓘ
            </button>
          </div>
          <input
            type="password"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full px-3 py-2 text-xs font-semibold"
            style={{
              backgroundColor: "#000000",
              borderColor: "#4a4a4a",
              color: "#888888",
              border: "1px solid #4a4a4a",
            }}
          />
        </div>

        {/* Design URL field */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <label
              className="text-xs font-semibold"
              style={{ color: "#a8a8a8" }}
            >
              Design URL
            </label>
            <button
              className="flex h-5 w-5 items-center justify-center rounded-full"
              style={{
                borderColor: "#5a5a5a",
                color: "#a8a8a8",
                border: "1px solid #5a5a5a",
                fontSize: "0.75rem",
              }}
              aria-label="Info"
            >
              ⓘ
            </button>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full px-3 py-2 text-xs font-semibold"
            style={{
              backgroundColor: "#000000",
              borderColor: "#4a4a4a",
              color: "#888888",
              border: "1px solid #4a4a4a",
            }}
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 pt-2">
          <button
            className="flex-1 rounded px-4 py-2 text-xs font-semibold"
            style={{ backgroundColor: "#a0522d", color: "#8a8a8a" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 rounded px-4 py-2 text-xs font-semibold"
            style={{ backgroundColor: "#a0522d", color: "#8a8a8a" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns section */}
      <div className="mt-8 pt-6" style={{ borderTop: "1px solid #4a4a4a" }}>
        <h3 className="text-sm font-semibold" style={{ color: "#b0b0b0" }}>
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer section */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-xs font-semibold" style={{ color: "#888888" }}>
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
