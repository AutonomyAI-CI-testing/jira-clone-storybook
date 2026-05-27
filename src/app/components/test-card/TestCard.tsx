// Chevron SVG icon rotated 180 degrees for collapsed state indication
const ChevronIcon = ({
  color = "text-[#8b9291]",
}: {
  color?: string;
}): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={color}
    style={{ transform: "rotate(180deg)" }}
  >
    <path
      d="M13 6L8 11L3 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Info icon - small circle with 'i' text inside
const InfoIcon = ({
  color = "text-[#a4a4a3]",
}: {
  color?: string;
}): JSX.Element => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={color}>
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1" />
    <text x="8" y="10" textAnchor="middle" fontSize="10" fill="currentColor">
      i
    </text>
  </svg>
);

// Radial dots icon for header menu indicator
const RadialDotsIcon = (): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className="text-[#b5b5b5]"
  >
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <circle cx="12" cy="4" r="1.5" fill="currentColor" />
    <circle cx="12" cy="20" r="1.5" fill="currentColor" />
    <circle cx="20" cy="12" r="1.5" fill="currentColor" />
    <circle cx="4" cy="12" r="1.5" fill="currentColor" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    <circle cx="6.5" cy="17.5" r="1" fill="currentColor" />
    <circle cx="17.5" cy="17.5" r="1" fill="currentColor" />
    <circle cx="6.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

// Orange action button with consistent styling for form submission
const ActionButton = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <button className="flex-1 rounded bg-[#b85c3a] px-6 py-2 text-[11.5px] font-semibold text-[#f5e6d3] hover:bg-[#a84f2e]">
    {children}
  </button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-full max-w-[580px] space-y-6 bg-black p-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <RadialDotsIcon />
      </div>

      {/* Collapsible section showing a truncated design breakdown title */}
      <div className="flex items-center gap-3">
        <ChevronIcon color="text-[#8b9291]" />
        <p className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Expandable section for adding new designs */}
      <div className="flex items-center gap-3 pt-2">
        <ChevronIcon color="text-[#b2b2b1]" />
        <p className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </p>
      </div>

      {/* Personal Access Token input field with helper info icon */}
      <div className="space-y-2 pt-4">
        <div className="flex items-center gap-2">
          <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </label>
          <InfoIcon color="text-[#a4a4a3]" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full border border-[#737470] bg-black px-4 py-3 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470] focus:outline-none"
        />
      </div>

      {/* Design URL input field with helper info icon */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </label>
          <InfoIcon color="text-[#a3a3a2]" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full border border-[#71726e] bg-black px-4 py-3 text-[10.5px] font-semibold text-[#71726e] placeholder-[#71726e] focus:outline-none"
        />
      </div>

      {/* Action buttons for initiating Figma import workflow */}
      <div className="flex gap-4">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Recent Breakdowns footer */}
      <div className="pt-4">
        <p className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </p>
      </div>

      {/* Copyright footer */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-[11.5px] font-semibold text-[#b5b5b5]">
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
