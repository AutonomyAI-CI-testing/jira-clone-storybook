
const GearIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`lucide lucide-gear ${className}`}
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.78 1.35a2 2 0 0 0 .73 2.73l.15.08a2 2 0 0 1 1 1.74v.44a2 2 0 0 1-1 1.73l-.15.08a2 2 0 0 0-.73 2.73l.78 1.35a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 1 1.74v.18a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.78-1.35a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.44a2 2 0 0 1 1-1.73l.15-.08a2 2 0 0 0 .73-2.73l-.78-1.35a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-1-1.74V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`lucide lucide-chevron-up ${className}`}
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`lucide lucide-info ${className}`}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

/**
 * TestCard component
 * A static UI panel replicating the "UI magician Agent" design.
 * This is a smoke test component and does not contain interactive logic.
 */
export function TestCard() {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-5 w-64 font-sans flex flex-col gap-4">
      {/* Header row */}
      <div className="flex justify-between items-center">
        <span className="text-[#b5b5b5] text-sm font-semibold">UI magician Agent</span>
        <GearIcon className="text-[#b5b5b5]" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1">
        <ChevronUpIcon className="text-[#8b9291] w-3 h-3" />
        <span className="text-[#8b9291] text-xs font-semibold">From entire frame to a singl...</span>
      </div>

      {/* Separator / spacing */}
      <div className="h-2"></div>

      {/* Add New Design section */}
      <div className="flex items-center gap-1">
        <ChevronUpIcon className="text-[#b2b2b1] w-3 h-3" />
        <span className="text-[#b2b2b1] text-sm font-semibold">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div>
        <label className="text-[#a4a4a3] text-xs font-semibold flex items-center gap-1 mb-1">
          Personal Access Token <InfoIcon className="w-3 h-3" />
        </label>
        <input
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-transparent border border-[#444] rounded px-2 py-1 text-[#737470] text-xs"
        />
      </div>

      {/* Design URL */}
      <div>
        <label className="text-[#a3a3a2] text-xs font-semibold flex items-center gap-1 mb-1">
          Design URL <InfoIcon className="w-3 h-3" />
        </label>
        <input
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-transparent border border-[#444] rounded px-2 py-1 text-[#71726e] text-xs"
        />
      </div>

      {/* Buttons row */}
      <div className="flex gap-3">
        <button className="flex-1 bg-[#b45309] text-[#8c8078] text-xs font-semibold py-2 rounded">
          Awesome
        </button>
        <button className="flex-1 bg-[#b45309] text-[#8c8078] text-xs font-semibold py-2 rounded">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="text-[#b0b0b0] text-sm font-semibold">Recent Breakdowns</h3>
    </div>
  );
}

