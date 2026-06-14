// Hex colors from Figma design
const COLORS = {
  BACKGROUND: "#2a2a2a",
  INPUT_BG: "#1e1e1e",
  INPUT_BORDER: "#555",
  DIVIDER_BORDER: "#3a3a3a",
  PRIMARY_BUTTON: "#b05030",
  PRIMARY_BUTTON_HOVER: "#c06040",
  SUBTITLE: "#c07040",
} as const;

/**
 * TestCard: A self-contained configuration panel for the UI magician Agent.
 * Replicates a specific Figma design as a smoke test for the pipeline.
 * Static component with no props or external dependencies.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="font-sans mx-auto min-h-screen max-w-xs bg-[#2a2a2a] p-5 text-white"
    >
      {/* Header section with agent title and settings icon */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <span aria-hidden="true">⚙️</span>
      </div>

      {/* Primary agent action/status description */}
      <div className="mt-3 flex items-center">
        <span className="mr-1 text-xl text-[#c07040]" aria-hidden="true">
          ∧
        </span>
        <p className="text-sm text-[#c07040]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Decorative divider to separate header from form */}
      <div className="my-5 border-t border-[#3a3a3a]"></div>

      {/* Main configuration form section */}
      <div className="flex items-center">
        <span className="mr-1 text-xl font-bold" aria-hidden="true">
          ∧
        </span>
        <h2 className="mb-4 mt-6 text-lg font-bold">Add New Design</h2>
      </div>

      {/* Figma Access Token Input */}
      <div className="mb-4">
        <div className="mb-1 flex items-center gap-1 text-sm">
          <label htmlFor="pat">Personal Access Token</label>
          <span title="Figma Personal Access Token" className="cursor-help">
            ⓘ
          </span>
        </div>
        <input
          id="pat"
          type="password"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="text-gray-400 w-full rounded border border-[#555] bg-[#1e1e1e] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#b05030]"
        />
      </div>

      {/* Figma Design Link Input */}
      <div className="mb-4">
        <div className="mb-1 flex items-center gap-1 text-sm">
          <label htmlFor="designUrl">Design URL</label>
          <span title="Link to your Figma file" className="cursor-help">
            ⓘ
          </span>
        </div>
        <input
          id="designUrl"
          type="url"
          placeholder="https://www.figma.com/file/:"
          className="text-gray-400 w-full rounded border border-[#555] bg-[#1e1e1e] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#b05030]"
        />
      </div>

      {/* Action buttons */}
      <div className="mt-2 flex gap-3">
        <button className="rounded-lg bg-[#b05030] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#c06040]">
          Awesome
        </button>
        <button className="rounded-lg bg-[#b05030] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#c06040]">
          Prepare
        </button>
      </div>

      {/* Footer section for history/logs */}
      <h2 className="mt-8 text-xl font-bold">Recent Breakdowns</h2>
    </div>
  );
};
