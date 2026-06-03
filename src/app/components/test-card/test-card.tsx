// Reusable CSS class strings for consistent styling
const TOGGLE_BUTTON_CLASS =
  "mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center text-gray-400 hover:text-gray-300";
const INPUT_CLASS =
  "w-full rounded border border-gray-600 bg-black px-4 py-3 text-sm text-gray-400 placeholder-gray-600 outline-none transition-colors hover:border-gray-500 focus:border-blue-500 focus:text-gray-300";
const ACTION_BUTTON_CLASS =
  "flex-1 rounded bg-orange-700 px-6 py-3 text-center font-semibold text-orange-100 transition-colors hover:bg-orange-600 active:bg-orange-800";

/**
 * TestCard Component
 *
 * A card interface for the UI Magician Agent, providing:
 * - A collapsible prompt section for design frame selection
 * - An "Add New Design" form with Figma token and URL inputs
 * - Action buttons to process the design inputs
 * - A footer showing recent design breakdowns
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full max-w-2xl rounded-lg bg-black p-6 text-font"
    >
      {/* Header with title and settings icon */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-gray-200 text-lg font-semibold">
          UI magician Agent
        </h1>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-300 flex h-6 w-6 items-center justify-center"
          aria-label="Settings"
        >
          ⚙️
        </button>
      </div>

      {/* Collapsible description section about design frame selection */}
      <div className="mb-8 flex items-start gap-3">
        <button
          type="button"
          className={TOGGLE_BUTTON_CLASS}
          aria-label="Toggle section"
        >
          ^
        </button>
        <p className="text-gray-500 text-sm">
          From entire frame to a single...
        </p>
      </div>

      {/* Form section for adding new design from Figma */}
      <div className="mb-8">
        {/* Section header with toggle */}
        <div className="mb-6 flex items-start gap-3">
          <button
            type="button"
            className={TOGGLE_BUTTON_CLASS}
            aria-label="Toggle section"
          >
            ^
          </button>
          <h2 className="text-gray-200 text-base font-semibold">
            Add New Design
          </h2>
        </div>

        {/* Figma Personal Access Token input field */}
        <div className="mb-6">
          <label className="text-gray-300 mb-2 flex items-center gap-2 text-sm">
            Personal Access Token
            <button
              type="button"
              className="text-gray-500 hover:text-gray-400 flex h-4 w-4 items-center justify-center"
              aria-label="Info"
            >
              ℹ️
            </button>
          </label>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className={INPUT_CLASS}
          />
        </div>

        {/* Figma Design URL input field */}
        <div className="mb-8">
          <label className="text-gray-300 mb-2 flex items-center gap-2 text-sm">
            Design URL
            <button
              type="button"
              className="text-gray-500 hover:text-gray-400 flex h-4 w-4 items-center justify-center"
              aria-label="Info"
            >
              ℹ️
            </button>
          </label>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className={INPUT_CLASS}
          />
        </div>

        {/* Action buttons to submit the design form */}
        <div className="flex gap-4">
          <button type="button" className={ACTION_BUTTON_CLASS}>
            Awesome
          </button>
          <button type="button" className={ACTION_BUTTON_CLASS}>
            Prepare
          </button>
        </div>
      </div>

      {/* Footer section showing recent activity */}
      <div className="text-gray-300 pt-6 text-sm">Recent Breakdowns</div>
    </div>
  );
};
