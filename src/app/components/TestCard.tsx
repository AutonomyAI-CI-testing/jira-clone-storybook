// Constants for the "UI magician Agent" smoke test component design
const BG_COLOR = "bg-[#1a1a1a]";
const ACCENT_COLOR = "bg-[#b5541e]";
const AMBER_TEXT = "text-amber-600";

export function TestCard() {
  return (
    // Root container with dark background as per Figma design requirements.
    // Explicitly set to dark mode to ensure consistent rendering.
    <div id="testElem" className={`${BG_COLOR} p-4 flex flex-col gap-4 text-white min-w-[350px] dark rounded-xl shadow-2xl`}>
      {/* Header row: Primary title and settings icon */}
      <div className="flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">UI magician Agent</h1>
        <span className="text-white" aria-hidden="true">⚙</span>
      </div>

      {/* Subtitle row: Provides context for the agent's scope */}
      <div className="flex items-center gap-2">
        <span className={AMBER_TEXT} aria-hidden="true">∧</span>
        <p className={`${AMBER_TEXT} text-sm`}>From entire frame to a singl...</p>
      </div>

      <div className="border-t border-gray-700 my-1"></div>

      {/* Add New Design Section: Main configuration area */}
      <div className="flex items-center gap-2">
        <span className="text-white" aria-hidden="true">∧</span>
        <h2 className="text-white font-bold text-lg">Add New Design</h2>
      </div>

      {/* Form Fields: Configuration for Figma API access */}
      <div className="flex flex-col gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <label htmlFor="token" className="text-sm font-medium text-gray-200">Personal Access Token</label>
            <span className="text-gray-400 text-xs cursor-help" title="Figma Personal Access Token">ⓘ</span>
          </div>
          <input
            type="text"
            id="token"
            placeholder="figd_xxxxxxxxxxxxxxxxx"
            className="w-full bg-white/5 border border-gray-600 rounded-md p-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-amber-600 transition-all"
          />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <label htmlFor="design-url" className="text-sm font-medium text-gray-200">Design URL</label>
            <span className="text-gray-400 text-xs cursor-help" title="The URL of the Figma design file">ⓘ</span>
          </div>
          <input
            type="url"
            id="design-url"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-white/5 border border-gray-600 rounded-md p-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-amber-600 transition-all"
          />
        </div>
      </div>

      {/* Actions: Primary triggers for the magician agent */}
      <div className="flex gap-3 mt-2">
        <button className={`flex-1 ${ACCENT_COLOR} hover:opacity-90 active:scale-[0.98] text-white py-2.5 px-4 rounded-lg font-semibold transition-all`}>
          Awesome
        </button>
        <button className={`flex-1 ${ACCENT_COLOR} hover:opacity-90 active:scale-[0.98] text-white py-2.5 px-4 rounded-lg font-semibold transition-all`}>
          Prepare
        </button>
      </div>

      {/* History section label */}
      <h2 className="text-white font-bold text-lg mt-2">Recent Breakdowns</h2>
    </div>
  );
}
