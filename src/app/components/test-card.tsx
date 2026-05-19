/**
 * Icon component for atom symbol (3 electron orbits around a nucleus).
 * Used in the header to represent the UI magician Agent.
 */
const AtomIcon = ({ className }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="8" cy="8" r="1.5" fill="currentColor" />
    <ellipse cx="8" cy="8" rx="6" ry="3" stroke="currentColor" strokeWidth="1" fill="none" />
    <ellipse
      cx="8"
      cy="8"
      rx="6"
      ry="3"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      transform="rotate(60 8 8)"
    />
    <ellipse
      cx="8"
      cy="8"
      rx="6"
      ry="3"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      transform="rotate(120 8 8)"
    />
  </svg>
);

/**
 * Icon component for upward chevron/caret.
 * Used to indicate collapsed/expandable sections.
 */
const ChevronUpIcon = ({ className, size = "small" }: { className?: string; size?: "small" | "medium" }) => {
  const dimensions = size === "small" ? { width: 8, height: 5, viewBox: "0 0 8 5" } : { width: 12, height: 8, viewBox: "0 0 12 8" };
  const pathD = size === "small" ? "M1 4L4 1L7 4" : "M2 7L6 3L10 7";
  
  return (
    <svg
      width={dimensions.width}
      height={dimensions.height}
      viewBox={dimensions.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d={pathD} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

/**
 * Icon component for info/help indicator (circle with "i").
 * Used next to form field labels to indicate additional help is available.
 */
const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1" />
    <path
      d="M7.5 4.5V5.5M7.5 10.5V6.5"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Reusable form field component with label and info icon.
 * Encapsulates the common pattern of label + icon + input field.
 */
const FormField = ({
  label,
  placeholder,
  borderStyle,
}: {
  label: string;
  placeholder: string;
  borderStyle: string;
}) => (
  <div>
    <div className="mb-2 flex items-center gap-2">
      <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">{label}</span>
      <InfoIcon className="text-[#a4a4a3]" />
    </div>
    <div className={`rounded-sm ${borderStyle} bg-[#272822] px-4 py-3`}>
      <span className="text-[11.5px] leading-[13.92px] text-[#737470]">{placeholder}</span>
    </div>
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[500px] bg-[#1e1e1a] p-5 font-semibold">
      {/* Header with agent name and branding icon */}
      <div className="mb-8 flex items-center justify-between">
        <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">UI magician Agent</span>
        <AtomIcon className="text-[#b5b5b5]" />
      </div>

      {/* Collapsed section indicator - shows truncated content preview */}
      <div className="mb-8 flex items-center gap-2">
        <ChevronUpIcon className="text-[#8b9291]" size="small" />
        <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Expandable section header */}
      <div className="mb-10 flex items-center gap-2">
        <ChevronUpIcon className="text-[#b2b2b1]" size="medium" />
        <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">Add New Design</span>
      </div>

      {/* Form fields for Figma integration */}
      <div className="mb-8">
        <FormField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          borderStyle="border border-[#a5adad]"
        />
      </div>

      <div className="mb-10">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">Design URL</span>
          <InfoIcon className="text-[#a3a3a2]" />
        </div>
        {/* Thicker border to indicate active/focused field */}
        <div className="rounded-sm border-2 border-[#929291] bg-[#272822] px-4 py-3">
          <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Primary action buttons */}
      <div className="mb-12 flex gap-3">
        <div className="flex-1 rounded bg-[#843a17] px-4 py-2.5 text-center">
          <span className="text-[11.5px] leading-[13.92px] text-[#8c8078]">Awesome</span>
        </div>
        <div className="flex-1 rounded bg-[#843a17] px-4 py-2.5 text-center">
          <span className="text-[11.5px] leading-[13.92px] text-[#8c8078]">Prepare</span>
        </div>
      </div>

      {/* Section header for historical data */}
      <div className="mt-4">
        <span className="text-[13.5px] leading-[16.34px] text-[#b0b0b0]">Recent Breakdowns</span>
      </div>

      {/* Footer with copyright */}
      <div className="mt-8 border-t border-gray-300 pt-3 text-center">
        <span className="text-[11.5px] text-[#a4a4a3]">© AutonomyAI</span>
      </div>
    </div>
  );
};
