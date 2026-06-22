
// Constants for the "UI magician Agent" Figma design smoke test
const COLORS = {
  BACKGROUND: "bg-[#1e1e1e]",
  ACCENT_ORANGE: "text-[#c8783a]",
  BUTTON_ORANGE: "bg-[#b5541c]",
};

/**
 * TestCard is a smoke test component designed to validate the rendering environment.
 * It approximates a dark UI card design with inputs and buttons using hardcoded values.
 */
export function TestCard() {
  return (
    <div
      id="testElem"
      className={`${COLORS.BACKGROUND} text-white p-4 w-64 rounded-md font-sans`}
    >
      {/* Header row: Title and settings icon */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-lg font-bold">UI magician Agent</span>
        <span className="text-xl">⚙</span>
      </div>

      {/* Collapsed section: Informational text in accent color */}
      <div className={`flex items-center gap-1 ${COLORS.ACCENT_ORANGE} text-sm mb-4`}>
        <span>^</span>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Primary Divider */}
      <div className="h-px bg-gray-700 my-4" />

      {/* Add New Design Section Header (Visually expanded by default) */}
      <div className="flex items-center gap-2 font-bold text-lg mt-4 mb-3">
        <span>^</span>
        <span>Add New Design</span>
      </div>

      {/* Form Fields: Token and Design URL inputs */}
      <div className="mb-3">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm">Personal Access Token</span>
          <span className="text-sm">ℹ</span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full border border-gray-600 bg-transparent rounded-md px-3 py-2 text-sm text-gray-400 focus:outline-none focus:border-gray-400"
          readOnly
        />
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm">Design URL</span>
          <span className="text-sm">ℹ</span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full border border-gray-600 bg-transparent rounded-md px-3 py-2 text-sm text-gray-400 focus:outline-none focus:border-gray-400"
          readOnly
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-4">
        <button
          className={`${COLORS.BUTTON_ORANGE} text-white rounded-lg px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90`}
        >
          Awesome
        </button>
        <button
          className={`${COLORS.BUTTON_ORANGE} text-white rounded-lg px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90`}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns - Static heading for smoke test */}
      <h3 className="text-lg font-bold mt-6">Recent Breakdowns</h3>
    </div>
  );
}
