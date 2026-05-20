/**
 * Icon component for the atom/React logo in the card header.
 * Represents a stylized atomic structure with three orbital paths.
 */
const AtomIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className="text-[#8b9291]"
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
  </svg>
);

/**
 * Chevron icon used for expandable/collapsible sections.
 */
const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    className={className}
  >
    <path
      d="M1 5L5 1L9 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Info icon displayed next to form labels to indicate additional help is available.
 */
const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    className={className}
  >
    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1" />
    <path
      d="M6 3.5V6.5M6 8.5H6.005"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Reusable label with info icon component for form inputs.
 */
const FormLabel = ({
  htmlFor,
  children,
  className,
}: {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <div className="mb-1.5 flex items-center gap-1">
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
    <InfoIcon className={className} />
  </div>
);

/**
 * TestCard component displays a design agent configuration form.
 * Contains inputs for Personal Access Token and Design URL, along with action buttons.
 * Uses a dark theme color scheme with specific color values for the UI.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] rounded-lg bg-[#1C1D17] p-4">
      {/* Header with agent name and icon */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <AtomIcon />
      </div>

      {/* Collapsible subtitle indicating a truncated description */}
      <div className="mb-16 flex items-center gap-1.5">
        <ChevronIcon className="text-[#8b9291]" />
        <p className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Section header for adding a new design */}
      <div className="mb-4 flex items-center gap-1.5">
        <ChevronIcon className="text-[#b2b2b1]" />
        <h3 className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token input with info tooltip */}
      <div className="mb-6">
        <FormLabel
          htmlFor="token"
          className="text-[11.5px] font-semibold text-[#a3a3a2]"
        >
          Personal Access Token
        </FormLabel>
        <input
          id="token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className="w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-4 text-[10.5px] font-semibold text-[#737470] placeholder-[#737470] outline-none"
        />
      </div>

      {/* Design URL input with info tooltip */}
      <div className="mb-10">
        <FormLabel
          htmlFor="url"
          className="text-[11.5px] font-semibold text-[#a4a4a3]"
        >
          Design URL
        </FormLabel>
        <input
          id="url"
          type="text"
          placeholder="https://www.figma.com/file/:..."
          className="w-full rounded border border-[#A5ADAD] bg-[#272822] px-3 py-4 text-[11.5px] font-semibold text-[#71726e] placeholder-[#71726e] outline-none"
        />
      </div>

      {/* Action buttons for form submission */}
      <div className="mb-16 flex gap-3">
        <button className="flex-1 rounded-md bg-[#843A17] px-4 py-3 text-[11.5px] font-semibold text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 rounded-md bg-[#843A17] px-4 py-3 text-[11.5px] font-semibold text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Section for displaying recent breakdowns */}
      <div>
        <h3 className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer with copyright notice */}
      <div className="border-gray-300 border-t pt-[12px] text-center">
        <p className="text-gray-400 text-xs">© AutonomyAI</p>
      </div>
    </div>
  );
};
