const ICONS = {
  CHEVERON_UP: (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 15l-6-6-6 6"></path>
    </svg>
  ),
  INFO: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 16v-4"></path>
      <path d="M12 8h.01"></path>
    </svg>
  ),
} as const;

interface FieldLabelProps {
  label: string;
}

/**
 * Standard field label with an info icon.
 * Matches the design pattern seen in Figma for "Personal Access Token" and "Design URL".
 */
const FieldLabel = ({ label }: FieldLabelProps) => (
  <div className="flex items-center gap-1 text-[#a4a4a3] text-xs font-semibold mb-2">
    <span>{label}</span>
    {ICONS.INFO}
  </div>
);

/**
 * TestCard component matching the "UI magician Agent" design.
 * Provides inputs for Figma Personal Access Token and Design URL to scan components.
 */
export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#1a1a1a] p-4 font-sans text-sm w-[254px]">
      {/* Header row: Agent name and icon */}
      <div className="flex justify-between items-center mb-1">
        <span className="text-[#b5b5b5] font-semibold">UI magician Agent</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#b5b5b5]"
        >
          <path d="M12 20v-8M12 4V4"></path>
          <path d="M18.000 13H18.040"></path>
          <path d="M6 13H6.040"></path>
          <path d="M12 20a4 4 0 100-8 4 4 0 000 8z"></path>
          <path d="M18 13H6a6 6 0 0112 0z"></path>
        </svg>
      </div>

      {/* Breadcrumb row */}
      <div className="flex items-center gap-1 mb-6 text-xs text-[#8b9291]">
        {ICONS.CHEVERON_UP}
        <span>From entire frame to a singl...</span>
      </div>

      {/* Section heading */}
      <div className="flex items-center gap-2 mb-4 text-[#b2b2b1] font-semibold">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 15l-6-6-6 6"></path>
        </svg>
        <span>Add New Design</span>
      </div>

      <div className="mb-3">
        <FieldLabel label="Personal Access Token" />
        <input
          type="text"
          className="w-full bg-transparent border border-[#3a3a3a] rounded px-3 py-2 text-[#737470] text-xs placeholder:text-[#737470] focus:outline-none focus:border-[#4a4a4a] transition-colors"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
      </div>

      <div className="mb-4">
        <FieldLabel label="Design URL" />
        <input
          type="text"
          className="w-full bg-transparent border border-[#3a3a3a] rounded px-3 py-2 text-[#737470] text-xs placeholder:text-[#737470] focus:outline-none focus:border-[#4a4a4a] transition-colors"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      <div className="flex gap-3 mb-6">
        <button className="bg-[#b85c2a] hover:bg-[#c96d3b] active:bg-[#a65125] text-[#e8d5c8] rounded-lg px-4 py-2 text-sm font-medium flex-1 transition-colors">
          Awesome
        </button>
        <button className="bg-[#b85c2a] hover:bg-[#c96d3b] active:bg-[#a65125] text-[#e8d5c8] rounded-lg px-4 py-2 text-sm font-medium flex-1 transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section header */}
      <div className="text-[#b0b0b0] font-semibold text-sm mt-2">
        Recent Breakdowns
      </div>
    </div>
  );
};

