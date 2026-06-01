// SVG icon components to avoid duplication
const ChevronDownIcon = () => (
  <svg
    className="ml-2 h-4 w-4 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 14l-7 7m0 0l-7-7m7 7V3"
    />
  </svg>
);

const PlusIcon = () => (
  <svg
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4v16m8-8H4"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.5 6h12.75m0 0a1.5 1.5 0 01-1.5 1.5H2.25a1.5 1.5 0 01-1.5-1.5m19.5 0A1.5 1.5 0 0021 4.5H3a1.5 1.5 0 00-1.5 1.5m19.5 0h-15"
    />
  </svg>
);

// Card content labels and values
const CARD_TITLE = "UI magician Agent";
const BREAKDOWN_ITEM_TEXT = "From entire frame to a singl...";
const ADD_DESIGN_TEXT = "Add New Design";
const TOKEN_LABEL = "Personal Access Token";
const TOKEN_PLACEHOLDER = "••••••••••••••••";
const URL_LABEL = "Design URL";
const URL_PLACEHOLDER = "https://figma.com/file/...";
const AWESOME_BUTTON = "Awesome";
const PREPARE_BUTTON = "Prepare";
const RECENT_BREAKDOWNS = "Recent Breakdowns";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex min-h-screen items-center justify-center bg-black p-4"
    >
      <div className="border-gray-700 w-full max-w-[254px] overflow-hidden rounded-lg border bg-black">
        {/* Header with title and menu button */}
        <div className="border-gray-700 flex items-center justify-between border-b px-4 py-3">
          <h1 className="text-gray-300 text-sm font-semibold">{CARD_TITLE}</h1>
          <button
            className="text-gray-400 hover:text-gray-200 focus:outline-none"
            aria-label="Menu"
          >
            <MenuIcon />
          </button>
        </div>

        {/* Collapsible breakdown item */}
        <div className="border-gray-700 border-b">
          <button className="text-gray-400 hover:bg-gray-900 flex w-full items-center justify-between px-4 py-2 text-xs font-semibold transition">
            <span className="truncate text-left">{BREAKDOWN_ITEM_TEXT}</span>
            <ChevronDownIcon />
          </button>
        </div>

        {/* Add New Design action */}
        <div className="border-gray-700 border-b">
          <button className="text-gray-400 hover:bg-gray-900 flex w-full items-center justify-between px-4 py-2 text-xs font-semibold transition">
            <span>{ADD_DESIGN_TEXT}</span>
            <PlusIcon />
          </button>
        </div>

        {/* Content Section */}
        <div className="space-y-3 px-4 py-3">
          {/* Masked Personal Access Token input - read-only for display purposes */}
          <div>
            <label className="text-gray-500 mb-1 block text-xs font-semibold">
              {TOKEN_LABEL}
            </label>
            <input
              type="password"
              value={TOKEN_PLACEHOLDER}
              readOnly
              className="bg-gray-900 border-gray-600 text-gray-400 focus:border-blue-500 w-full rounded border px-3 py-2 text-xs focus:outline-none"
            />
          </div>

          {/* Design URL input for Figma or other design tool links */}
          <div>
            <label className="text-gray-500 mb-1 block text-xs font-semibold">
              {URL_LABEL}
            </label>
            <input
              type="text"
              placeholder={URL_PLACEHOLDER}
              className="bg-gray-900 border-gray-600 text-gray-400 placeholder-gray-600 focus:border-blue-500 w-full rounded border px-3 py-2 text-xs focus:outline-none"
            />
          </div>

          {/* Primary action buttons - orange for primary action, gray for secondary */}
          <div className="flex gap-2 pt-2">
            <button className="bg-orange-700 hover:bg-orange-600 flex-1 rounded px-3 py-2 text-xs font-semibold text-white transition">
              {AWESOME_BUTTON}
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 flex-1 rounded px-3 py-2 text-xs font-semibold text-white transition">
              {PREPARE_BUTTON}
            </button>
          </div>
        </div>

        {/* Recent Breakdowns footer section */}
        <div className="border-gray-700 border-t px-4 py-2">
          <h2 className="text-gray-400 text-xs font-semibold">
            {RECENT_BREAKDOWNS}
          </h2>
        </div>
      </div>
    </div>
  );
};
