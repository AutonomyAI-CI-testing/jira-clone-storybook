
/**
 * TestCard component
 * 
 * A self-contained, static visual component that approximates a Figma design 
 * for a "UI magician Agent" panel. This is used for UI demonstration and 
 * testing purposes in isolation.
 */
export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#1e1e1e] p-4 text-white rounded-lg shadow-lg max-w-sm mx-auto my-8">
      <CardHeader />

      <CollapsedDesignInfo />

      {/* Spacer to match the visual vertical gap in the design */}
      <div className="h-4" aria-hidden="true" />

      <AddNewDesignSection />

      <RecentBreakdowns />
    </div>
  );
};

/**
 * Header section with the agent title and a decorative gear icon.
 */
const CardHeader = () => (
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-lg font-bold">UI magician Agent</h2>
    <GearIcon className="h-5 w-5 text-gray-400" />
  </div>
);

/**
 * A representative collapsed state showing a truncated design description.
 */
const CollapsedDesignInfo = () => (
  <div className="flex items-center mb-4">
    <ChevronIcon className="h-4 w-4 mr-2" />
    <span className="text-sm">From entire frame to a singl...</span>
  </div>
);

/**
 * Form section for adding a new Figma design with PAT and URL inputs.
 * The styling uses specific hex codes and neutral tones to match the target dark theme.
 */
const AddNewDesignSection = () => (
  <div className="mb-4">
    <div className="flex items-center mb-2">
      <ChevronIcon className="h-4 w-4 mr-2 text-white" />
      <h3 className="text-white font-bold">Add New Design</h3>
    </div>

    <InputGroup
      id="pat"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />

    <InputGroup
      id="design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
    />

    <ActionButtons />
  </div>
);

/**
 * Reusable input group with a label and an info icon.
 */
const InputGroup = ({ id, label, placeholder }: { id: string; label: string; placeholder: string }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium mb-1">
      {label}
      <InfoIcon className="h-4 w-4 inline-block ml-1" />
    </label>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="w-full p-2 border rounded-md text-font-inverse placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
    />
  </div>
);

/**
 * Primary action buttons for the design panel.
 * Uses a specific brown-orange color scheme (#8B4513) to match the UI design.
 */
const ActionButtons = () => (
  <div className="flex justify-end space-x-2">
    <button className="px-4 py-2 bg-[#8B4513] text-white rounded-lg hover:bg-[#A0522D] focus:outline-none focus:ring-2 focus:ring-[#8B4513] transition-colors">
      Awesome
    </button>
    <button className="px-4 py-2 bg-[#8B4513] text-white rounded-lg hover:bg-[#A0522D] focus:outline-none focus:ring-2 focus:ring-[#8B4513] transition-colors">
      Prepare
    </button>
  </div>
);

/**
 * Placeholder footer for recent design breakdowns.
 */
const RecentBreakdowns = () => (
  <div className="mt-4 pt-4 border-t border-neutral-700">
    <h3 className="text-white font-bold">Recent Breakdowns</h3>
  </div>
);

// --- Icon Components ---

const GearIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M11.49 3.17c-.38-1.16-1.92-1.16-2.3 0L6.8 8.16C6.67 8.54 6.3 8.79 5.86 8.79H.75c-.86 0-1.25 1.07-.63 1.63l4.22 3.52c.3.25.43.64.31 1.02l-1.63 4.96c-.22.68.64 1.25 1.25.79l4.4-3.13c.33-.23.77-.23 1.1 0l4.4 3.13c.61.46 1.47-.11 1.25-.79l-1.63-4.96c-.12-.38.01-.77.31-1.02l4.22-3.52c.62-.56.23-1.63-.63-1.63H14.14c-.44 0-.81-.25-.94-.63l-2.3-5.02z"
      clipRule="evenodd"
    />
  </svg>
);

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
      clipRule="evenodd"
    />
  </svg>
);

