
/**
 * SVGs extracted for readability and reuse.
 * Using inline SVGs to keep the component self-contained per requirements.
 */

const GearIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37zm-2.572 1.065a1.724 1.724 0 002.572-1.065c.426-1.756-2.924-1.756-3.35 0-..."
    />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 21l7-7 7 7" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

/**
 * TestCard Component
 *
 * A self-contained smoke test component designed to validate the Figma-to-code pipeline.
 * It uses arbitrary Tailwind color values and sizes to match Figma designs exactly,
 * bypassing the standard project design tokens where necessary.
 *
 * Requirements:
 * - Root element must have id="testElem"
 * - Self-contained (no props, inline icons)
 */
const TestCard = () => {
  // Shared button style for the "Awesome" and "Prepare" actions
  const buttonClassName =
    "flex-1 py-2 px-4 rounded bg-[#b35c2e] text-[#8c8078] text-[11.5px] font-semibold transition-colors hover:bg-[#a0522d]";

  return (
    <div id="testElem" className="p-4 rounded-lg shadow-lg bg-[#1e1e1e] font-sans text-[#b5b5b5]">
      {/* Header Row: Component Title and Settings */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[13.5px] font-semibold text-[#b5b5b5]">UI magician Agent</h2>
        <GearIcon className="w-4 h-4 text-[#b5b5b5]" />
      </div>

      {/* Collapsed Info Row: Summary of current selection */}
      <div className="flex items-center text-[#8b9291] text-[11.5px] font-semibold mb-4">
        <ChevronIcon className="w-3 h-3 mr-1 rotate-180" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Visual spacer to separate sections */}
      <div className="h-4" aria-hidden="true" />

      {/* Add New Design Section Header */}
      <div className="text-[13.5px] font-semibold text-[#b2b2b1] mb-4 flex items-center">
        <ChevronIcon className="w-3 h-3 mr-1 rotate-180" />
        Add New Design
      </div>

      {/* Personal Access Token Input: Required for Figma API authentication */}
      <div className="mb-4">
        <label className="flex items-center text-[#a4a4a3] text-[11.5px] font-semibold mb-2">
          Personal Access Token
          <InfoIcon className="w-3 h-3 ml-1" />
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded bg-[#2a2a2a] border border-[#3a3a3a] text-[#737470] text-[11.5px] focus:outline-none focus:border-[#4a4a4a]"
        />
      </div>

      {/* Design URL Input: The specific Figma file/frame to process */}
      <div className="mb-6">
        <label className="flex items-center text-[#a3a3a2] text-[11.5px] font-semibold mb-2">
          Design URL
          <InfoIcon className="w-3 h-3 ml-1" />
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded bg-[#2a2a2a] border border-[#3a3a3a] text-[#71726e] text-[11.5px] focus:outline-none focus:border-[#4a4a4a]"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between space-x-2 mb-6">
        <button className={buttonClassName}>Awesome</button>
        <button className={buttonClassName}>Prepare</button>
      </div>

      {/* Historical activity list section */}
      <div>
        <h3 className="text-[13.5px] font-semibold text-[#b0b0b0]">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

export default TestCard;

