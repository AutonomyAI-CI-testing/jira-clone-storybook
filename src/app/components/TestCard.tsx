// Icon component for info tooltips
const InfoIcon = () => (
  <svg
    className="h-4 w-4 flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <circle
      cx="10"
      cy="10"
      r="9"
      strokeWidth="1"
      stroke="currentColor"
      fill="none"
    />
    <text
      x="10"
      y="13"
      textAnchor="middle"
      fontSize="10"
      fontWeight="bold"
      fill="currentColor"
    >
      i
    </text>
  </svg>
);

// Icon component for chevron/collapse indicator
const ChevronIcon = () => (
  <svg
    className="text-gray-400 h-4 w-4 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M19 9l-7 7-7-7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Icon component for settings/atom symbol in header
const SettingsIcon = () => (
  <svg
    className="text-gray-400 h-5 w-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="4" strokeWidth="1.5" />
    <ellipse cx="12" cy="12" rx="8" ry="3" strokeWidth="1.5" />
    <ellipse
      cx="12"
      cy="12"
      rx="8"
      ry="3"
      strokeWidth="1.5"
      transform="rotate(60 12 12)"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="8"
      ry="3"
      strokeWidth="1.5"
      transform="rotate(120 12 12)"
    />
  </svg>
);

// Form field component with label and info icon
const FormField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}): JSX.Element => (
  <div>
    <label className="text-gray-400 mb-2 flex items-center gap-2 text-xs font-semibold">
      {label}
      <InfoIcon />
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className="border-gray-600 text-gray-500 placeholder-gray-600 focus:border-gray-500 w-full rounded border bg-transparent px-3 py-2 text-xs font-semibold focus:outline-none"
      readOnly
    />
  </div>
);

// Action button component
const ActionButton = ({ children }: { children: string }): JSX.Element => (
  <button className="bg-orange-700 hover:bg-orange-600 text-gray-500 flex-1 rounded px-4 py-2.5 text-xs font-semibold transition-colors">
    {children}
  </button>
);

/**
 * TestCard Component
 * Displays a UI design tool interface with collapsible sections, form inputs, and action buttons.
 * Dark theme card with light gray text and form fields for Figma design integration.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="text-gray-400 w-full max-w-xs rounded-lg bg-black p-5">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-gray-300 text-sm font-semibold">
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsible Section 1 */}
      <div className="mb-8 flex items-center gap-2">
        <ChevronIcon />
        <span className="text-gray-500 text-xs font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="mb-8 flex items-center gap-2">
        <ChevronIcon />
        <h2 className="text-gray-300 text-sm font-semibold">Add New Design</h2>
      </div>

      {/* Form Inputs */}
      <div className="space-y-6">
        <FormField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <FormField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex gap-4">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <h2 className="text-gray-300 text-sm font-semibold">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer */}
      <div className="border-gray-300 mt-8 border-t pt-3 text-center">
        <p className="text-gray-400 text-xs">© AutonomyAI</p>
      </div>
    </div>
  );
};
