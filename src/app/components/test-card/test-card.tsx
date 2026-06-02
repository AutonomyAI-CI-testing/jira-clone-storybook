// Helper component for a labeled input field with optional info icon
const FormField = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div>
    <div className="mb-2 flex items-center gap-2">
      <label className="text-xs font-semibold text-gray-400">{label}</label>
      <span className="text-xs text-gray-600">ℹ️</span>
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border border-gray-600 bg-gray-900 px-2 py-2 text-xs text-gray-300 placeholder-gray-600"
    />
  </div>
);

// Helper component for a collapsible section header
const CollapsibleHeader = ({ label, isBottomBordered = false }: { label: string; isBottomBordered?: boolean }) => (
  <div className={`mb-4 flex items-center justify-between ${isBottomBordered ? 'border-b border-gray-700' : ''} pb-3`}>
    <p className={isBottomBordered ? 'text-xs text-gray-500' : 'text-xs font-semibold text-gray-400'}>
      {label}
    </p>
    <span className="text-gray-600">^</span>
  </div>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded bg-black p-5 text-gray-400"
    >
      {/* Card header with agent name and settings icon */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-300">UI magician Agent</h2>
        <span className="text-lg">⚙️</span>
      </div>

      {/* Collapsible section showing current agent task summary */}
      <CollapsibleHeader label="From entire frame to a singl..." isBottomBordered />

      {/* Collapsible section for adding new designs */}
      <CollapsibleHeader label="Add New Design" />

      {/* Form fields for Figma integration credentials */}
      <div className="mb-4 space-y-3">
        <FormField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <FormField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Action buttons: cancel and submit */}
      <div className="mb-4 flex gap-2">
        <button className="flex-1 border border-gray-600 bg-gray-800 px-3 py-2 text-xs font-semibold text-gray-300 hover:bg-gray-700">
          Awesome
        </button>
        <button className="flex-1 border border-gray-700 bg-orange-900 px-3 py-2 text-xs font-semibold text-gray-100 hover:bg-orange-800">
          Prepare
        </button>
      </div>

      {/* Section label for recent design breakdowns */}
      <div className="text-xs text-gray-500">Recent Breakdowns</div>
    </div>
  );
};
