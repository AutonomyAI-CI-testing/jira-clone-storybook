
// Icon components extracted for readability. These SVGs are copied from Figma 
// designs and use arbitrary hex colors to match the target UI precisely.
const GearIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-[#a3a3a2]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-3 w-3 ml-1 text-[#a3a3a2]"
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

const SectionChevron = () => (
  <span className="text-[#a3a3a2] mr-1" aria-hidden="true">&#9650;</span>
);

/**
 * TestCard is a smoke test component that visually replicates a Figma plugin panel.
 * It uses arbitrary Tailwind values and inline SVGs to match the design specs exactly
 * without relying on the app's standard design tokens or layout systems.
 */
export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-5 font-sans w-[254px]">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#b5b5b5] text-[13.5px] font-semibold">UI magician Agent</h2>
        <GearIcon />
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center mb-6">
        <SectionChevron />
        <p className="text-[#8b9291] text-[11.5px] font-semibold">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center mb-4">
        <SectionChevron />
        <h3 className="text-[#b2b2b1] text-[13.5px] font-semibold">Add New Design</h3>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-4">
        <label className="flex items-center text-[#a4a4a3] text-[11.5px] font-semibold mb-2">
          Personal Access Token
          <InfoIcon />
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#1e1e1e] border border-[#3a3a3a] rounded px-3 py-2 text-[#737470] text-[11.5px] font-semibold focus:outline-none"
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <label className="flex items-center text-[#a3a3a2] text-[11.5px] font-semibold mb-2">
          Design URL
          <InfoIcon />
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#1e1e1e] border border-[#3a3a3a] rounded px-3 py-2 text-[#71726e] text-[11.5px] font-semibold focus:outline-none"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mb-6">
        <button className="bg-[#7a3d1c] rounded-lg px-4 py-2 flex-1 mr-2 text-[#8c8078] text-[11.5px] font-semibold hover:opacity-90 transition-opacity">
          Awesome
        </button>
        <button className="bg-[#7a3d1c] rounded-lg px-4 py-2 flex-1 ml-2 text-[#8c8078] text-[11.5px] font-semibold hover:opacity-90 transition-opacity">
          Prepare
        </button>
      </div>

      {/* Footer Label */}
      <div>
        <h3 className="text-[#b0b0b0] text-[13.5px] font-semibold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

