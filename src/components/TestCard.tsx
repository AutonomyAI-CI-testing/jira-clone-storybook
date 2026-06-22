
/**
 * Smoke test component that replicates a specific Figma design.
 * Used to verify the rendering pipeline and Tailwind CSS configuration.
 */
export function TestCard(): JSX.Element {
  // Brand colors from Figma design
  const COLORS = {
    BACKGROUND: "bg-[#2a2a2a]",
    INPUT_BG: "bg-[#1c1c1c]",
    BUTTON_BG: "bg-[#c1622b]",
    TEXT_MUTED: "text-orange-700",
  };

  return (
    <div id="testElem" className={`${COLORS.BACKGROUND} p-6 max-w-sm rounded-lg text-white shadow-xl`}>
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">UI magician Agent</h2>
        <SettingsIcon className="h-6 w-6 text-white" />
      </div>

      {/* Collapsed Row - Status indicator or breadcrumb */}
      <div className="flex items-center gap-2 mt-4">
        <ChevronIcon className="h-4 w-4 text-white rotate-180" />
        <span className={`text-sm ${COLORS.TEXT_MUTED} truncate`}>From entire frame to a singl...</span>
      </div>

      {/* Spacer per design spec */}
      <div className="my-6" aria-hidden="true" />

      {/* Add New Design Section */}
      <div className="flex items-center gap-2">
        <ChevronIcon className="h-4 w-4 text-white rotate-180" />
        <h3 className="text-lg font-bold">Add New Design</h3>
      </div>

      {/* Form Fields */}
      <div className="space-y-4 mt-4">
        <InputField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          bgClass={COLORS.INPUT_BG}
        />
        <InputField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          bgClass={COLORS.INPUT_BG}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-6">
        <button className={`${COLORS.BUTTON_BG} text-white rounded-lg px-5 py-3 font-semibold flex-1 transition-opacity hover:opacity-90`}>
          Awesome
        </button>
        <button className={`${COLORS.BUTTON_BG} text-white rounded-lg px-5 py-3 font-semibold flex-1 transition-opacity hover:opacity-90`}>
          Prepare
        </button>
      </div>

      {/* Footer Section */}
      <div className="mt-6">
        <h3 className="text-lg font-bold">Recent Breakdowns</h3>
      </div>
    </div>
  );
}

/**
 * Shared input field component for the internal form.
 */
function InputField({ label, placeholder, bgClass }: { label: string; placeholder: string; bgClass: string }) {
  return (
    <div>
      <label className="text-sm text-white flex items-center gap-1 mb-1">
        {label}
        <InfoIcon className="h-4 w-4" />
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full ${bgClass} border border-neutral-600 rounded text-neutral-400 px-3 py-2 text-sm focus:outline-none focus:border-neutral-400`}
      />
    </div>
  );
}

// Internal Icon Components
// Extracted to keep the main component scanable

function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  );
}

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
