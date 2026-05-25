/**
 * Helper component for the settings icon (SVG)
 * Used in header for configuration/settings button
 */
const SettingsIcon = (): JSX.Element => (
  <svg
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8v-2m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6-8v-2m0 2a2 2 0 100 4m0-4a2 2 0 110 4"
    />
  </svg>
);

/**
 * Helper component for the chevron/collapse icon (SVG)
 * Used in expandable sections to indicate collapsible state
 */
const ChevronIcon = ({ size = "w-3 h-3" }: { size?: string }): JSX.Element => (
  <svg
    className={`${size} transform`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 14l-7-7m0 0L5 14m7-7v12"
    />
  </svg>
);

/**
 * Helper component for the info icon (SVG)
 * Used next to labels to provide additional context or help
 */
const InfoIcon = (): JSX.Element => (
  <svg
    className="h-3 w-3"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
  </svg>
);

/**
 * Helper component for input field with label and info button
 * Reduces duplication for Personal Access Token and Design URL fields
 */
const LabeledInputField = ({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}): JSX.Element => (
  <div>
    <div className="mb-2 flex items-center gap-2">
      <label className="text-gray-400 text-xs font-semibold">{label}</label>
      <button
        className="border-gray-600 text-gray-500 hover:text-gray-400 flex items-center justify-center rounded-full border p-0.5"
        aria-label={`Info about ${label}`}
      >
        <InfoIcon />
      </button>
    </div>
    <input
      type={type}
      placeholder={placeholder}
      className="border-gray-600 text-gray-300 placeholder-gray-500 w-full border bg-transparent px-3 py-2 text-xs focus:outline-none"
      readOnly
    />
  </div>
);

/**
 * TestCard component displays a UI magician agent configuration card
 * Features include design settings, authentication tokens, and action buttons
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="w-full max-w-xs bg-black p-5">
      {/* Header with title and settings button */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-gray-400 text-sm font-semibold">
          UI magician Agent
        </h1>
        <button
          className="border-gray-600 text-gray-400 hover:text-gray-300 flex items-center justify-center rounded-full border p-1"
          aria-label="Settings"
        >
          <SettingsIcon />
        </button>
      </div>

      {/* Collapsible section showing design frame information */}
      <div className="border-gray-700 mb-6 border-b pb-6">
        <button className="text-gray-500 hover:text-gray-400 flex items-center gap-2 text-xs font-semibold">
          <ChevronIcon size="w-3 h-3" />
          <span>From entire frame to a singl...</span>
        </button>
      </div>

      {/* Action to add a new design/frame */}
      <div className="mb-6">
        <button className="text-gray-400 hover:text-gray-300 flex items-center gap-2 text-sm font-semibold">
          <ChevronIcon size="w-4 h-4" />
          <span>Add New Design</span>
        </button>
      </div>

      {/* Input fields section with authentication and design URL */}
      <div className="mb-6 space-y-4">
        <LabeledInputField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          type="password"
        />
        <LabeledInputField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          type="text"
        />
      </div>

      {/* Action buttons for primary workflows */}
      <div className="mb-6 flex gap-3">
        <button className="bg-orange-700 text-orange-200 hover:bg-orange-600 active:bg-orange-800 flex-1 rounded px-4 py-2 text-xs font-semibold">
          Awesome
        </button>
        <button className="bg-orange-700 text-orange-200 hover:bg-orange-600 active:bg-orange-800 flex-1 rounded px-4 py-2 text-xs font-semibold">
          Prepare
        </button>
      </div>

      {/* Section header for recent design breakdowns */}
      <div className="mb-6">
        <h2 className="text-gray-400 text-sm font-semibold">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer with copyright information */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-gray-400 text-xs">© AutonomyAI</p>
      </div>
    </div>
  );
};
