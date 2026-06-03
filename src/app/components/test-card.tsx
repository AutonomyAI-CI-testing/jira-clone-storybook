// Reusable collapsible section button component
const CollapsibleButton = ({ label }: { label: string }): JSX.Element => (
  <button className="text-gray-400 hover:text-gray-200 flex w-full items-center justify-between py-2 text-left text-xs font-semibold">
    <span>{label}</span>
    <span>▼</span>
  </button>
);

// Reusable form input field component
const FormInput = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}): JSX.Element => (
  <div>
    <label className="text-gray-400 mb-1 block text-xs font-semibold">
      {label}
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className="border-gray-600 text-gray-500 placeholder-gray-600 focus:border-gray-500 w-full rounded border bg-black px-3 py-2 text-xs focus:outline-none"
    />
  </div>
);

// Reusable action button component
const ActionButton = ({ children }: { children: string }): JSX.Element => (
  <button className="bg-orange-900 text-gray-100 hover:bg-orange-800 flex-1 rounded px-4 py-2 text-xs font-semibold transition">
    {children}
  </button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="min-h-screen bg-black p-6">
      <div className="text-gray-400 mx-auto max-w-md rounded-lg bg-black p-6">
        {/* Header with title and settings button */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-gray-300 text-sm font-semibold">
            UI magician Agent
          </h1>
          <button className="text-gray-500 hover:text-gray-300">⚙️</button>
        </div>

        {/* Collapsible sections for design selection and management */}
        <div className="border-gray-700 mb-4 border-b pb-4">
          <CollapsibleButton label="From entire frame to a singl..." />
        </div>

        <div className="border-gray-700 mb-6 border-b pb-4">
          <CollapsibleButton label="Add New Design" />
        </div>

        {/* Form inputs for authentication and design URL */}
        <div className="mb-6 space-y-4">
          <FormInput label="Personal Access Token" placeholder="Enter token" />
          <FormInput label="Design URL" placeholder="Enter design URL" />
        </div>

        {/* Action buttons for primary operations */}
        <div className="mb-6 flex gap-3">
          <ActionButton>Awesome</ActionButton>
          <ActionButton>Prepare</ActionButton>
        </div>

        {/* Recent activity section */}
        <div className="border-gray-700 border-t pt-4">
          <h2 className="text-gray-400 text-xs font-semibold">
            Recent Breakdowns
          </h2>
          <p className="text-gray-500 mt-2 text-xs">No recent breakdowns yet</p>
        </div>
      </div>
    </div>
  );
};
