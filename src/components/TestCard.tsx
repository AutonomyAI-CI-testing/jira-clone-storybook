// Design tokens based on Figma specifications
const COLORS = {
  background: "#2a2a2a",
  backgroundInput: "#3a3a3a",
  textPrimary: "#b5b5b5",
  textMuted: "#8b9291",
  textLabel: "#a4a4a3",
  textPlaceholder: "#71726e",
  border: "#555555",
  buttonAction: "#b5451b",
} as const;

/**
 * TestCard: A self-contained smoke-test component that replicates the "UI magician Agent" panel.
 * Uses hardcoded content and inline colors to match Figma design tokens exactly.
 * Root ID "testElem" is required by the integration environment.
 */
export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      className="min-h-screen p-4 font-sans"
      style={{ backgroundColor: COLORS.background, color: COLORS.textPrimary }}
    >
      {/* Header section: Title and configuration settings */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-bold">UI magician Agent</h2>
        <span style={{ color: COLORS.textPrimary }}>⚙</span>
      </div>

      {/* Overview row: Displays current scope/context */}
      <div className="flex items-center mb-8">
        <span className="mr-2" style={{ color: COLORS.textMuted }}>^</span>
        <span style={{ color: COLORS.textMuted }}>From entire frame to a singl...</span>
      </div>

      {/* Form Section: Add New Design */}
      <div className="flex items-center mb-4">
        <span className="mr-2" style={{ color: COLORS.textPrimary }}>^</span>
        <h3 className="font-bold">Add New Design</h3>
      </div>

      {/* Field: Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center mb-1">
          <label htmlFor="pat" className="mr-2 text-sm" style={{ color: COLORS.textLabel }}>
            Personal Access Token
          </label>
          <span className="text-xs" style={{ color: COLORS.textLabel }}>ⓘ</span>
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded border"
          style={{
            backgroundColor: COLORS.backgroundInput,
            borderColor: COLORS.border,
            color: COLORS.textPrimary,
          }}
        />
      </div>

      {/* Field: Design URL */}
      <div className="mb-8">
        <div className="flex items-center mb-1">
          <label htmlFor="designUrl" className="mr-2 text-sm" style={{ color: COLORS.textLabel }}>
            Design URL
          </label>
          <span className="text-xs" style={{ color: COLORS.textLabel }}>ⓘ</span>
        </div>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file:/ "
          className="w-full p-2 rounded border"
          style={{
            backgroundColor: COLORS.backgroundInput,
            borderColor: COLORS.border,
            color: COLORS.textPrimary,
          }}
        />
      </div>

      {/* Action Buttons: Primary interactions */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className="text-white font-bold py-2 px-4 rounded-lg"
          style={{ backgroundColor: COLORS.buttonAction }}
        >
          Awesome
        </button>
        <button
          className="text-white font-bold py-2 px-4 rounded-lg"
          style={{ backgroundColor: COLORS.buttonAction }}
        >
          Prepare
        </button>
      </div>

      {/* Footer list indicator */}
      <h3 className="font-bold">Recent Breakdowns</h3>
    </div>
  );
}
