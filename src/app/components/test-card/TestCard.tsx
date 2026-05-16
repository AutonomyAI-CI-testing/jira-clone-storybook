// Icon components for better reusability and clarity
const AtomIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="text-[#b5b5b5]"
  >
    <circle
      cx="12"
      cy="12"
      r="3"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <circle cx="12" cy="5" r="2" fill="currentColor" />
    <circle cx="12" cy="19" r="2" fill="currentColor" />
    <circle cx="5" cy="12" r="2" fill="currentColor" />
    <circle cx="19" cy="12" r="2" fill="currentColor" />
  </svg>
);

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <path
      d="M10 12L5 7h10l-5 5z"
      fill="currentColor"
      transform="rotate(180 10 10)"
    />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    className={className}
  >
    <circle
      cx="9"
      cy="9"
      r="8"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <circle cx="9" cy="6" r="0.75" fill="currentColor" />
    <rect x="8.4" y="8" width="1.2" height="6" fill="currentColor" />
  </svg>
);

// Reusable component for form field labels with info icons
const FieldLabel = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => (
  <div className="mb-2 flex items-center gap-2">
    <span className={`text-[11.5px] font-semibold ${className}`}>{label}</span>
    <InfoIcon className={className} />
  </div>
);

// Card dimensions chosen to match design specifications
const CARD_WIDTH = "508px";

export const TestCard = (): JSX.Element => {
  return (
    <div
      className="rounded bg-[#1a1a14] p-6 text-font"
      style={{ width: CARD_WIDTH }}
    >
      {/* Header with agent branding */}
      <div className="mb-6 flex items-center justify-between">
        <span className="font-primary text-xl font-bold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <AtomIcon />
      </div>

      {/* Subtitle with chevron indicating expandable/collapsible content */}
      <div className="mb-8 flex items-center gap-2">
        <ChevronIcon className="shrink-0 text-[#8b9291]" />
        <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section with chevron for expandable interaction */}
      <div className="mb-6 flex items-center gap-2">
        <ChevronIcon className="shrink-0 text-[#b2b2b1]" />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token input field */}
      <div className="mb-6">
        <FieldLabel label="Personal Access Token" className="text-[#a4a4a3]" />
        <div className="rounded border border-[#a5adad] bg-[#272822] px-4 py-3">
          <span className="text-[11.5px] font-semibold text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL input field with distinct border styling */}
      <div className="mb-8">
        <FieldLabel label="Design URL" className="text-[#a3a3a2]" />
        <div className="rounded border-2 border-[#929291] bg-[#272822] px-4 py-3">
          <span className="text-[10.5px] font-semibold text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Action buttons with equal width distribution */}
      <div className="mb-10 flex gap-3">
        <button className="flex-1 rounded bg-[#843a17] px-6 py-3 text-[11.5px] font-semibold text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843a17] px-6 py-3 text-[11.5px] font-semibold text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section header */}
      <div>
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>

      {/* Footer with copyright */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <span className="text-sm">© AutonomyAI</span>
      </div>
    </div>
  );
};
