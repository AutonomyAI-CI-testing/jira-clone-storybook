import cx from "classix";

/**
 * Info icon component - used for tooltip/help hints next to labels
 */
const InfoIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#8a8a88]"
    aria-label="Information"
  >
    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
    <text
      x="6"
      y="8.5"
      fontSize="8"
      fontWeight="bold"
      textAnchor="middle"
      fill="currentColor"
    >
      i
    </text>
  </svg>
);

/**
 * Chevron icon component - used for collapsible sections
 */
const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    width="14"
    height="8"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
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
 * Atom icon component - represents the UI magician agent branding
 */
const AtomIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#b5b5b5]"
    aria-label="UI magician Agent"
  >
    {/* Atom icon with nucleus and orbits */}
    <circle cx="9" cy="9" r="1.5" fill="currentColor" />
    <ellipse
      cx="9"
      cy="9"
      rx="7"
      ry="3"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
    />
    <ellipse
      cx="9"
      cy="9"
      rx="7"
      ry="3"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
      transform="rotate(60 9 9)"
    />
    <ellipse
      cx="9"
      cy="9"
      rx="7"
      ry="3"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
      transform="rotate(120 9 9)"
    />
  </svg>
);

/**
 * Form field component - reusable input field with label and info icon
 */
interface FormFieldProps {
  label: string;
  value: string;
  className?: string;
}

const FormField = ({ label, value, className }: FormFieldProps) => (
  <div className={className}>
    <div className="mb-2 flex items-center gap-2">
      <label className="text-[11.5px] font-semibold text-[#8a8a88]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <div className="rounded border border-[#4a4a47] bg-[#2a2a26] px-3 py-3.5">
      <span className="text-[11.5px] font-semibold text-[#5a5a57]">
        {value}
      </span>
    </div>
  </div>
);

/**
 * TestCard component - displays a form for adding new Figma designs
 * to the UI magician agent workflow.
 *
 * The card includes:
 * - Collapsible sections for navigation
 * - Form fields for Personal Access Token and Design URL
 * - Action buttons for workflow progression
 * - Recent breakdowns history section
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className={cx("font-sans w-80 rounded bg-[#1a1a17] p-6 text-white")}>
      {/* Header Row */}
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-[19px] font-bold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <AtomIcon />
      </div>

      {/* Collapsible navigation breadcrumb */}
      <div className="mb-12 flex items-center gap-3 py-2">
        <ChevronIcon className="text-[#8b9291]" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section Header */}
      <div className="mb-16 flex items-center gap-3 py-2">
        <ChevronIcon className="text-[#b2b2b1]" />
        <h2 className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Form fields for Figma integration */}
      <FormField
        label="Personal Access Token"
        value="figd_xxxxxxxxxxxxxxxxxx"
        className="mb-10"
      />

      <FormField
        label="Design URL"
        value="https://www.figma.com/file/:"
        className="mb-12"
      />

      {/* Action buttons for workflow progression */}
      <div className="mb-24 flex gap-3">
        <button
          className="rounded bg-[#843a17] px-8 py-4 text-[13px] font-semibold text-[#6a5048]"
          aria-label="Mark as Awesome"
        >
          Awesome
        </button>
        <button
          className="rounded bg-[#843a17] px-8 py-4 text-[13px] font-semibold text-[#6a5048]"
          aria-label="Prepare design"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="mt-8">
        <h2 className="text-[13.5px] font-bold text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer */}
      <div className="border-gray-300 mt-12 border-t pt-3 text-center">
        <p className="text-gray-400 text-[12px]">© AutonomyAI</p>
      </div>
    </div>
  );
};
