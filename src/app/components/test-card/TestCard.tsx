/**
 * TestCard is a standalone smoke-test component used to verify the rendering pipeline,
 * Tailwind CSS integration, and layout configuration.
 *
 * It approximates a "UI magician Agent" panel design.
 */
export const TestCard = () => {
  return (
    <div id="testElem" className="bg-zinc-900 text-white p-6 flex flex-col space-y-4 rounded-lg shadow-lg w-96 mx-auto my-10">
      {/* Header: Title and Settings */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">UI magician Agent</h2>
        <GearIcon />
      </div>

      {/* Info row with caret */}
      <div className="flex items-center gap-2">
        <span className="text-orange-400">^</span>
        <p className="text-orange-400 text-sm">From entire frame to a singl...</p>
      </div>

      <div className="h-4" aria-hidden="true" />

      {/* Actionable section header */}
      <div className="flex items-center gap-2">
        <span className="text-white">^</span>
        <h3 className="text-lg font-bold">Add New Design</h3>
      </div>

      {/* Input Fields */}
      <InputField
        id="pat"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxx"
      />

      <InputField
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      {/* Actions */}
      <div className="flex justify-end gap-3">
         <Button>Awesome</Button>
         <Button>Prepare</Button>
      </div>

      <h3 className="text-lg font-bold mt-4">Recent Breakdowns</h3>
    </div>
  );
};

/**
 * Internal helper for consistent input styling
 */
const InputField = ({ id, label, placeholder }: { id: string; label: string; placeholder: string }) => (
  <div className="space-y-2">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-white">{label}</label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full p-2 rounded-md bg-zinc-800 border border-zinc-700 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-700"
    />
  </div>
);

const Button = ({ children }: { children: React.ReactNode }) => (
  <button className="bg-[#8B4513] hover:bg-[#A0522D] transition-colors rounded-lg px-5 py-2 text-white font-semibold">
    {children}
  </button>
);

const GearIcon = () => <span className="text-gray-400" aria-hidden="true">⚙️</span>;
const InfoIcon = () => <span className="text-gray-400" aria-hidden="true">ℹ️</span>;

