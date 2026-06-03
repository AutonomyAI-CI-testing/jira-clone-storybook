export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-full max-w-xs flex-col gap-6 bg-black p-5 text-font-subtlest"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-sm font-semibold text-font-subtle">
          UI magician Agent
        </h1>
        <div className="flex h-5 w-5 items-center justify-center rounded-full border border-font-subtlest text-xs">
          ⚙
        </div>
      </div>

      {/* Collapsible Section 1 */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs">^</span>
          <span className="text-xs font-semibold text-font-subtle">
            From entire frame to a singl...
          </span>
        </div>
      </div>

      {/* Collapsible Section 2 - Add New Design */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xs">^</span>
          <span className="text-xs font-semibold text-font-subtle">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token Input */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <label className="text-xs font-semibold text-font-subtlest">
              Personal Access Token
            </label>
            <div className="flex h-4 w-4 items-center justify-center rounded-full border border-font-subtlest text-xs">
              i
            </div>
          </div>
          <input
            type="password"
            placeholder="••••••••••••••"
            className="rounded border border-font-subtlest bg-black px-2 py-1.5 text-xs placeholder-font-subtlest text-font-subtlest focus:outline-none focus:ring-1 focus:ring-font-subtlest"
          />
        </div>

        {/* Design URL Input */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <label className="text-xs font-semibold text-font-subtlest">
              Design URL
            </label>
            <div className="flex h-4 w-4 items-center justify-center rounded-full border border-font-subtlest text-xs">
              i
            </div>
          </div>
          <input
            type="text"
            placeholder="https://..."
            className="rounded border border-font-subtlest bg-black px-2 py-1.5 text-xs placeholder-font-subtlest text-font-subtlest focus:outline-none focus:ring-1 focus:ring-font-subtlest"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          className="flex-1 rounded px-3 py-2 text-xs font-semibold hover:opacity-90 active:opacity-100"
          style={{
            backgroundColor: "#8B4513",
            color: "#8c8078",
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded px-3 py-2 text-xs font-semibold hover:opacity-90 active:opacity-100"
          style={{
            backgroundColor: "#8B4513",
            color: "#8c8078",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="flex flex-col gap-2">
        <h2 className="text-xs font-semibold text-font-subtle">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
