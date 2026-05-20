/**
 * AtomIcon - Represents the atomic/molecular structure icon
 * Used in the header to symbolize component breakdown functionality
 */
const AtomIcon = ({ className }: { className: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="8" cy="8" r="1.5" fill="currentColor" />
    <ellipse
      cx="8"
      cy="8"
      rx="6"
      ry="3"
      stroke="currentColor"
      strokeWidth="0.8"
      fill="none"
    />
    <ellipse
      cx="8"
      cy="8"
      rx="6"
      ry="3"
      stroke="currentColor"
      strokeWidth="0.8"
      fill="none"
      transform="rotate(60 8 8)"
    />
    <ellipse
      cx="8"
      cy="8"
      rx="6"
      ry="3"
      stroke="currentColor"
      strokeWidth="0.8"
      fill="none"
      transform="rotate(120 8 8)"
    />
    <circle cx="14" cy="8" r="1" fill="currentColor" />
    <circle cx="5" cy="4.5" r="1" fill="currentColor" />
    <circle cx="5" cy="11.5" r="1" fill="currentColor" />
  </svg>
);

/**
 * ChevronUpIcon - Upward pointing chevron/triangle icon
 * Used to indicate collapsible sections or hierarchy
 */
const ChevronUpIcon = ({ className }: { className: string }) => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M4 0L0 4h8L4 0z" fill="currentColor" />
  </svg>
);

/**
 * InfoIcon - Information icon with 'i' symbol
 * Used next to form labels to indicate additional help is available
 */
const InfoIcon = ({ className }: { className: string }) => (
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
      d="M7.5 6.5v4M7.5 4.5h.01"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * FormField - Reusable form field with label and info icon
 * Standardizes the form field pattern used throughout the card
 */
const FormField = ({
  label,
  value,
  labelColor,
  valueColor,
  borderClass,
  backgroundColor = "bg-[#272822]",
}: {
  label: string;
  value: string;
  labelColor: string;
  valueColor: string;
  borderClass: string;
  backgroundColor?: string;
}) => (
  <div>
    <div className="mb-1 flex items-center gap-1">
      <label className={`font-primary text-xs ${labelColor}`}>{label}</label>
      <InfoIcon className={labelColor} />
    </div>
    <div
      className={`rounded ${borderClass} ${backgroundColor} px-2 py-1.5 font-primary text-xs ${valueColor}`}
    >
      {value}
    </div>
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="max-w-[320px] rounded-lg bg-[#1a1a17] p-4">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-primary text-sm font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <AtomIcon className="text-[#b5b5b5]" />
      </div>

      {/* Subtitle row with chevron */}
      <div className="mb-4 flex items-center gap-1">
        <ChevronUpIcon className="text-[#8b9291]" />
        <span className="font-primary text-xs text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="mb-3 flex items-center gap-1">
        <ChevronUpIcon className="text-[#b2b2b1]" />
        <h3 className="font-primary text-sm font-semibold text-[#b2b2b1]">
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-3">
        <FormField
          label="Personal Access Token"
          value="figd_xxxxxxxxxxxxxxxxxx"
          labelColor="text-[#a4a4a3]"
          valueColor="text-[#737470]"
          borderClass="border border-[#a5adad]"
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-4">
        <FormField
          label="Design URL"
          value="https://www.figma.com/file/:"
          labelColor="text-[#a3a3a2]"
          valueColor="text-[#71726e]"
          borderClass="border-2 border-[#929291]"
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-4 flex gap-2">
        <button className="rounded bg-[#843a17] px-4 py-1.5 font-primary text-sm text-[#8c8078]">
          Awesome
        </button>
        <button className="rounded bg-[#843a17] px-4 py-1.5 font-primary text-sm text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div>
        <h3 className="font-primary text-sm font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <span className="font-primary text-xs">© AutonomyAI</span>
      </div>
    </div>
  );
};
