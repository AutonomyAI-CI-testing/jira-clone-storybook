// Icon components with hardcoded colors matching the dark theme design
// Colors are intentional design choices from the UI magician Agent dashboard
const GearIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#b5b5b5"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#8b9291"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoCircleIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#a4a4a3"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#b2b2b1"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

/**
 * Renders a labeled section with an info icon and input field.
 * Used for fields like Personal Access Token and Design URL.
 */
interface LabeledInputSectionProps {
  label: string;
  placeholder: string;
  inputClassName: string;
}

const LabeledInputSection = ({
  label,
  placeholder,
  inputClassName,
}: LabeledInputSectionProps) => (
  <>
    <div className="mb-2 flex items-center gap-1.5">
      <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
        {label}
      </span>
      <InfoCircleIcon />
    </div>
    <input
      type="text"
      readOnly
      placeholder={placeholder}
      className={inputClassName}
    />
  </>
);

/**
 * TestCard component displays Figma design integration settings.
 * Used to configure personal access tokens and design URLs for design syncing.
 *
 * This component renders a dark-themed card with:
 * - Header with title and settings gear icon
 * - Collapsible sections (expanded/collapsed states shown via chevron icons)
 * - Input fields for PAT and Design URL (read-only placeholders)
 * - Action buttons for primary interactions
 * - Recent activity section
 */
export const TestCard = (): JSX.Element => {
  // Input field styles shared across similar fields
  const inputClassName =
    "w-full rounded border border-[#555] bg-[#252525] px-3 py-2.5 text-[11.5px] outline-none";

  return (
    <div
      id="testElem"
      className="min-h-screen w-full max-w-[340px] bg-[#1a1a1a] p-5"
    >
      {/* Header section with title and settings icon */}
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Collapsed section indicator */}
      <div className="mb-10 flex items-center gap-2">
        <ChevronUpIcon />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Expandable section header */}
      <div className="mb-5 flex items-center gap-2">
        <ChevronDownIcon />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token input section */}
      <div className="mb-4">
        <LabeledInputSection
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          inputClassName={`${inputClassName} mb-4 text-[#737470] placeholder-[#737470]`}
        />
      </div>

      {/* Design URL input section */}
      <div className="mb-6">
        <LabeledInputSection
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          inputClassName={`${inputClassName} text-[#71726e] placeholder-[#71726e]`}
        />
      </div>

      {/* Action buttons for primary interactions */}
      <div className="mb-12 flex gap-4">
        <button className="flex-1 rounded-lg bg-[#7a4a30] px-4 py-3 text-[11.5px] font-semibold text-[#d4b8a8]">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#7a4a30] px-4 py-3 text-[11.5px] font-semibold text-[#d4b8a8]">
          Prepare
        </button>
      </div>

      {/* Section header for recent activity */}
      <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
