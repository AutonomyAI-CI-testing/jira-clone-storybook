// SVG Icons used throughout the component
const InfoIcon = (): JSX.Element => (
  <svg
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
      clipRule="evenodd"
    />
  </svg>
);

const SettingsIcon = (): JSX.Element => (
  <svg
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.49 3.08c-.38-1.45-2.54-1.45-2.92 0a1.007 1.007 0 00-.905 1.622 1.002 1.002 0 00.905 1.622c.38 1.45 2.54 1.45 2.92 0A1 1 0 0011.49 3.08zM9.356 9.998c.938 0 1.7.762 1.7 1.7s-.762 1.7-1.7 1.7-1.7-.762-1.7-1.7.762-1.7 1.7-1.7zm0 2.8c.605 0 1.1-.495 1.1-1.1s-.495-1.1-1.1-1.1-1.1.495-1.1 1.1.495 1.1 1.1 1.1z" />
  </svg>
);

const ChevronDownIcon = (): JSX.Element => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 14l-7 7m0 0l-7-7m7 7V3"
    />
  </svg>
);

const ChevronRightIcon = (): JSX.Element => (
  <svg
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

/**
 * TestCard component displays a dark-themed form card for design imports.
 * It includes sections for token input, URL input, and action buttons.
 * Uses zinc and amber colors from the tailwind config for the dark theme.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex max-w-xs flex-col rounded-lg bg-zinc-900 p-5"
    >
      {/* Header with agent title and settings icon */}
      <div className="mb-4 flex items-start justify-between">
        <h1 className="text-sm font-semibold text-zinc-400">
          UI magician Agent
        </h1>
        <div className="h-5 w-5 text-zinc-600">
          <SettingsIcon />
        </div>
      </div>

      {/* Collapsible section with description and chevron down indicator */}
      <div className="mb-4 flex items-center justify-between border-b border-zinc-700 pb-3">
        <span className="text-xs text-zinc-500">
          From entire frame to a singl...
        </span>
        <div className="h-4 w-4 text-zinc-600">
          <ChevronDownIcon />
        </div>
      </div>

      {/* Section header with add design button (chevron right for expandable state) */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xs font-semibold text-zinc-500">Add New Design</h2>
        <div className="h-4 w-4 text-zinc-600">
          <ChevronRightIcon />
        </div>
      </div>

      {/* Form fields for token and URL */}
      <div className="space-y-4">
        {/* Personal Access Token input field with info icon */}
        <div className="flex flex-col">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-xs font-semibold text-zinc-500">
              Personal Access Token
            </label>
            <div className="h-4 w-4 text-zinc-600">
              <InfoIcon />
            </div>
          </div>
          <input
            type="text"
            className="rounded border border-zinc-700 bg-zinc-800 px-3 py-2 text-xs text-zinc-400 placeholder-zinc-600 focus:border-zinc-600 focus:outline-none"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            defaultValue="figd_xxxxxxxxxxxxxxxxxx"
          />
        </div>

        {/* Design URL input field with info icon */}
        <div className="flex flex-col">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-xs font-semibold text-zinc-500">
              Design URL
            </label>
            <div className="h-4 w-4 text-zinc-600">
              <InfoIcon />
            </div>
          </div>
          <input
            type="text"
            className="rounded border border-zinc-700 bg-zinc-800 px-3 py-2 text-xs text-zinc-400 placeholder-zinc-600 focus:border-zinc-600 focus:outline-none"
            placeholder="https://figma.com/file/..."
            defaultValue="https://figma.com/file/..."
          />
        </div>
      </div>

      {/* Action buttons with amber color scheme for primary CTA prominence */}
      <div className="mt-4 flex gap-3">
        <button className="flex-1 rounded bg-amber-800 px-3 py-2 text-xs font-semibold text-white hover:bg-amber-700">
          Awesome
        </button>
        <button className="flex-1 rounded bg-amber-800 px-3 py-2 text-xs font-semibold text-white hover:bg-amber-700">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="mt-4 border-t border-zinc-700 pt-3">
        <h3 className="text-xs font-semibold text-zinc-500">
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
