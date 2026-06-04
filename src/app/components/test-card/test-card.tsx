// Helper component for input fields with label and info icon
const InputField = ({
  label,
  id,
}: {
  label: string;
  id: string;
}): JSX.Element => (
  <div>
    <label
      htmlFor={id}
      className="mb-1 flex items-center gap-1 text-xs text-gray-500"
    >
      {label}
      <span className="text-gray-600" title={`${label} help`}>
        ⓘ
      </span>
    </label>
    <input
      id={id}
      type="text"
      placeholder=""
      className="w-full border border-gray-600 bg-gray-900 px-3 py-2 text-xs text-gray-400 placeholder-gray-600 focus:border-gray-500 focus:outline-none"
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-64 rounded-lg border border-gray-700 bg-black p-6"
    >
      {/* Header with title and options menu */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-sm font-semibold text-gray-400">
          UI magician Agent
        </h1>
        <button
          className="text-gray-400 hover:text-gray-300"
          aria-label="Open menu"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="2" />
            <circle cx="19" cy="12" r="2" />
            <circle cx="5" cy="12" r="2" />
          </svg>
        </button>
      </div>

      {/* Collapsible section showing design preview metadata */}
      <div className="mb-4 flex items-center gap-2 border-b border-gray-700 pb-3">
        <span className="text-xs text-gray-500" aria-hidden="true">
          ▼
        </span>
        <p className="text-xs text-gray-400">From entire frame to a singl...</p>
      </div>

      {/* Design input section header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xs font-semibold text-gray-400">Add New Design</h2>
        <span className="text-gray-500" aria-hidden="true">
          ▶
        </span>
      </div>

      {/* Input fields for design configuration */}
      <div className="mb-4 space-y-3">
        <InputField label="Personal Access Token" id="pat-input" />
        <InputField label="Design URL" id="design-url-input" />
      </div>

      {/* Action buttons for design processing */}
      <div className="mb-5 flex gap-3">
        <button
          className="flex-1 border border-orange-600 bg-orange-600 px-3 py-2 text-xs font-medium text-white hover:bg-orange-700"
          aria-label="Accept and process design"
        >
          Awesome
        </button>
        <button
          className="flex-1 border border-orange-600 bg-orange-600 px-3 py-2 text-xs font-medium text-white hover:bg-orange-700"
          aria-label="Prepare design for next step"
        >
          Prepare
        </button>
      </div>

      {/* Footer showing recent activity */}
      <p className="text-center text-xs text-gray-600">Recent Breakdowns</p>
    </div>
  );
};
