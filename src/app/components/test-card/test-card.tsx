// Settings gear icon for header
const SettingsIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m2.12 2.12l4.24 4.24M1 12h6m6 0h6m-4.22-7.78l-4.24 4.24m-2.12 2.12l-4.24 4.24" />
  </svg>
);

// Chevron icon for collapsible sections
const ChevronIcon = (): JSX.Element => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    className="text-gray-500"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// Information icon for label tooltips
const InfoIcon = (): JSX.Element => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-gray-600"
  >
    <circle cx="12" cy="12" r="10" />
    <text x="12" y="16" textAnchor="middle" fill="white" fontSize="14">
      i
    </text>
  </svg>
);

// Collapsible section wrapper component
interface CollapsibleSectionProps {
  title: string;
}

const CollapsibleSection = ({
  title,
}: CollapsibleSectionProps): JSX.Element => (
  <div className="border-gray-700 mb-4 border-b pb-4">
    <button className="flex w-full items-center justify-between text-left">
      <span className="flex items-center gap-2">
        <ChevronIcon />
        <span className="text-gray-500 text-xs font-semibold">{title}</span>
      </span>
    </button>
  </div>
);

// Input field with label and info icon
interface LabeledInputProps {
  label: string;
  placeholder: string;
}

const LabeledInput = ({
  label,
  placeholder,
}: LabeledInputProps): JSX.Element => (
  <div className="mb-4">
    <label className="text-gray-600 mb-2 block text-xs font-semibold">
      <span className="flex items-center gap-1">
        <span>{label}</span>
        <InfoIcon />
      </span>
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className="bg-gray-900 border-gray-700 text-gray-600 placeholder-gray-700 focus:border-gray-600 w-full rounded border px-3 py-2 text-xs focus:outline-none"
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-64 bg-black p-4">
      {/* Header with title and settings button */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-gray-400 text-sm font-semibold">
          UI magician Agent
        </h1>
        <button
          className="text-gray-500 hover:text-gray-300"
          aria-label="Settings"
        >
          <SettingsIcon />
        </button>
      </div>

      {/* Collapsible sections for frame-to-design and adding new designs */}
      <CollapsibleSection title="From entire frame to a singl..." />
      <CollapsibleSection title="Add New Design" />

      {/* Input fields for authentication and design reference */}
      <LabeledInput
        label="Personal Access Token"
        placeholder="ghp_1234567890abcdef..."
      />
      <div className="mb-6">
        <LabeledInput
          label="Design URL"
          placeholder="https://www.figma.com/..."
        />
      </div>

      {/* Action buttons to trigger workflow */}
      <div className="mb-6 flex gap-2">
        <button className="bg-orange-900 hover:bg-orange-800 text-orange-200 flex-1 rounded px-3 py-2 text-xs font-semibold transition-colors">
          Awesome
        </button>
        <button className="bg-orange-900 hover:bg-orange-800 text-orange-200 flex-1 rounded px-3 py-2 text-xs font-semibold transition-colors">
          Prepare
        </button>
      </div>

      {/* Section to view recent design analysis results */}
      <CollapsibleSection title="Recent Breakdowns" />
    </div>
  );
};
