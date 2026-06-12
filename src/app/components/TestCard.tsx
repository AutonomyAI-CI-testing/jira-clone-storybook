/**
 * TestCard component
 * 
 * Replicates a "UI magician Agent" panel with form fields and action buttons.
 * This is a self-contained component used for visual testing and reference.
 * 
 * Design choices like specific hex codes (e.g., #282420, #b5451b) and 
 * Unicode icons (⚙, ∧, ⓘ) are based on the original requirements to match
 * the Figma design exactly.
 */
export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#282420] p-5 w-full max-w-[320px] mx-auto text-white rounded-lg shadow-lg space-y-4">
      {/* Header: Title and Settings icon */}
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg">UI magician Agent</h2>
        <span className="text-gray-500" aria-label="Settings">⚙</span>
      </div>

      {/* Subtitle with accent color and chevron icon */}
      <div className="flex items-center gap-2 text-[#c26a3a]">
        <span aria-hidden="true">∧</span>
        <p className="truncate text-sm">From entire frame to a singl...</p>
      </div>

      {/* Collapsible Section Header: Add New Design */}
      <div className="flex items-center gap-2 mt-8">
        <span className="text-white" aria-hidden="true">∧</span>
        <h3 className="font-bold text-white text-md">Add New Design</h3>
      </div>

      {/* Input Form Section */}
      <div className="space-y-4">
        <InputField 
          label="Personal Access Token" 
          placeholder="figd_xxxxxxxxxxxxxxxxxx" 
        />
        <InputField 
          label="Design URL" 
          placeholder="https://www.figma.com/file/:" 
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-between">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Recent Activity Section Header */}
      <div className="pt-4 border-t border-[#3d3530]">
        <h3 className="font-bold text-white text-md">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

/**
 * Reusable field for the form inputs
 */
const InputField = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div>
    <label className="flex items-center gap-1 text-white text-sm mb-1">
      {label} <span className="text-gray-500 text-xs" title="Info">ⓘ</span>
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className="bg-[#1e1a17] border border-[#4a3f35] text-gray-400 rounded px-3 py-2 w-full text-sm outline-none focus:border-[#b5451b] transition-colors"
      aria-label={label}
    />
  </div>
);

/**
 * Primary action buttons with design-specific orange color
 */
const ActionButton = ({ label }: { label: string }) => (
  <button 
    className="bg-[#b5451b] hover:bg-[#c94f20] text-white rounded-lg px-6 py-3 text-sm flex-1 font-medium transition-colors"
    type="button"
  >
    {label}
  </button>
);
