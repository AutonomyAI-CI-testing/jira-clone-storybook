/**
 * Icon components for UI magician Agent panel.
 * These are inline SVGs as per the requirement to avoid external icon dependencies.
 */
function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.78 1.22a2 2 0 0 0 .73 2.73l.15.08a2 2 0 0 1 1 1.74v.44a2 2 0 0 1-1 1.73l-.15.08a2 2 0 0 0-.73 2.73l.78 1.22a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 1 1.74v.18a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.78-1.22a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.44a2 2 0 0 1 1-1.73l.15-.08a2 2 0 0 0 .73-2.73l-.78-1.22a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-1-1.74V2a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ChevronUpIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

/**
 * Common Input field with label and info icon.
 */
function InputField({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) {
  return (
    <div className="mb-4 last:mb-6">
      <label
        htmlFor={id}
        className="mb-2 block flex items-center text-sm font-bold text-white"
      >
        {label}
        <InfoIcon className="ml-1" />
      </label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        className="shadow focus:shadow-outline w-full appearance-none rounded border border-[#444] bg-[#1e1e1e] px-3 py-2 leading-tight text-white focus:outline-none"
      />
    </div>
  );
}

export function TestCard() {
  return (
    <div id="testElem" className="min-h-screen bg-[#2a2a2a] p-8 text-white">
      {/* Header section with brand and settings toggle */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <SettingsIcon className="lucide-settings" />
      </div>

      {/* Collapsed scope indicator — uses muted orange to signify inactive/collapsed state */}
      <div className="mb-6 flex items-center">
        <ChevronUpIcon className="mr-2 text-[#c8794a]" />
        <span className="text-[#c8794a]">From entire frame to a singl...</span>
      </div>

      {/* Primary section header */}
      <div className="mb-6 flex items-center">
        <ChevronUpIcon className="mr-2 text-white" />
        <h2 className="text-lg font-bold">Add New Design</h2>
      </div>

      <InputField
        id="pat"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <InputField
        id="designUrl"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      {/* Action buttons — primary CTA uses burnt orange for high visibility on dark bg */}
      <div className="mb-8 flex space-x-4">
        <button className="focus:shadow-outline flex-1 rounded-lg bg-[#b5541e] px-4 py-2 font-bold text-white transition-colors hover:bg-[#d46424] focus:outline-none">
          Awesome
        </button>
        <button className="focus:shadow-outline flex-1 rounded-lg bg-[#b5541e] px-4 py-2 font-bold text-white transition-colors hover:bg-[#d46424] focus:outline-none">
          Prepare
        </button>
      </div>

      {/* History section heading */}
      <div>
        <h2 className="text-lg font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
}
