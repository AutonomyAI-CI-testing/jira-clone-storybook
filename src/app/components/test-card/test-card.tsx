
/**
 * TestCard: A self-contained smoke-test component reproducing a dark-themed UI panel.
 * 
 * DESIGN CONTEXT:
 * This component is used to verify the design-to-code pipeline. It uses hardcoded
 * values and inline SVGs to match the Figma design exactly as a static baseline.
 */

// Helper components for inline SVGs to keep the main JSX clean and self-documenting
const GearIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-[#b5b5b5]"
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

const ChevronUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
);

const InfoCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
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

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="p-4 bg-[#222222] text-[#b5b5b5] max-w-sm rounded-md shadow-lg">
      {/* Header row */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold text-[#b5b5b5]">UI magician Agent</h1>
        <GearIcon />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 text-[#8b9291] text-sm mb-4">
        <ChevronUpIcon />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Vertical spacer */}
      <div className="h-10" />

      {/* Section header row */}
      <div className="flex items-center gap-2 text-[#b2b2b1] text-base font-bold mb-4">
        <ChevronUpIcon />
        <span>Add New Design</span>
      </div>

      {/* PAT label and input */}
      <div className="mb-4">
        <div className="flex items-center gap-2 text-[#a4a4a3] text-sm mb-2">
          <span>Personal Access Token</span>
          <InfoCircleIcon />
        </div>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded-md bg-[#272822] border border-[#929291] text-[#a4a4a3] placeholder-[#737470]"
        />
      </div>

      {/* URL label and input */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-[#a4a4a3] text-sm mb-2">
          <span>Design URL</span>
          <InfoCircleIcon />
        </div>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded-md bg-[#272822] border border-[#a5adad] text-[#a4a4a3] placeholder-[#71726e]"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-6">
        <button className="flex-1 p-2 rounded-md bg-[#843a17] text-[#8c8078] font-medium hover:brightness-110 active:brightness-90 transition-all">
          Awesome
        </button>
        <button className="flex-1 p-2 rounded-md bg-[#843a17] text-[#8c8078] font-medium hover:brightness-110 active:brightness-90 transition-all">
          Prepare
        </button>
      </div>

      {/* Bottom section header */}
      <div className="text-[#b0b0b0] text-base font-bold">Recent Breakdowns</div>
    </div>
  );
};
