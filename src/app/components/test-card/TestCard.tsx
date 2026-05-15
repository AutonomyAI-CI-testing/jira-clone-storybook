/**
 * Atom icon representing the agent configuration/settings.
 * Three elliptical orbits at 60° angles create a dynamic visual.
 */
const AtomIcon = ({ color }: { color: string }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={color}
    aria-hidden="true"
  >
    <circle cx="14" cy="14" r="3" fill="currentColor" />
    <ellipse
      cx="14"
      cy="14"
      rx="11"
      ry="5"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      transform="rotate(60 14 14)"
    />
    <ellipse
      cx="14"
      cy="14"
      rx="11"
      ry="5"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      transform="rotate(-60 14 14)"
    />
    <ellipse
      cx="14"
      cy="14"
      rx="11"
      ry="5"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

/**
 * Triangle chevron used for collapsible sections.
 * Points upward to indicate expanded state.
 */
const ChevronIcon = ({ color }: { color: string }) => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
    aria-hidden="true"
  >
    <path d="M4 0L0 5h8L4 0z" fill={color} />
  </svg>
);

/**
 * Info icon (circled 'i') displayed next to field labels.
 * Indicates additional help/context is available.
 */
const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
    aria-label="More information"
  >
    <circle cx="7" cy="7" r="6" stroke={color} strokeWidth="1" />
    <text
      x="7"
      y="10"
      fontSize="9"
      fontWeight="600"
      fill={color}
      textAnchor="middle"
    >
      i
    </text>
  </svg>
);

interface FormFieldProps {
  label: string;
  labelColor: string;
  placeholder: string;
  placeholderSize: string;
  placeholderColor: string;
}

/**
 * Reusable input field with label and info icon.
 * Displays read-only placeholder text in a bordered container.
 */
const FormField = ({
  label,
  labelColor,
  placeholder,
  placeholderSize,
  placeholderColor,
}: FormFieldProps) => (
  <div>
    <div className="mb-2 flex items-center gap-1">
      <span className={`text-[16px] font-semibold ${labelColor}`}>{label}</span>
      <InfoIcon color={labelColor.replace("text-", "")} />
    </div>
    <div className="flex h-[37px] items-center rounded-sm border-2 border-[#6a6a68] bg-[#1e1e1a] bg-opacity-40 px-3">
      <span className={`${placeholderSize} font-semibold ${placeholderColor}`}>
        {placeholder}
      </span>
    </div>
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="min-h-[620px] w-[320px] bg-[#1a1a14] p-5 font-primary">
      {/* Header with agent name and settings icon */}
      <div className="mb-8 flex items-center justify-between">
        <span className="text-[16px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <AtomIcon color="text-[#b5b5b5]" />
      </div>

      {/* Collapsed item - large bottom margin creates visual separation */}
      <div className="mb-[140px] flex items-start gap-2 py-3">
        <div className="mt-1">
          <ChevronIcon color="#8b9291" />
        </div>
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Expandable section header */}
      <div className="mb-10 flex items-center gap-2">
        <ChevronIcon color="#b2b2b1" />
        <span className="text-[13.5px] font-bold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Figma access token input */}
      <div className="mb-8">
        <FormField
          label="Personal Access Token"
          labelColor="text-[#a4a4a3]"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          placeholderSize="text-[11.5px]"
          placeholderColor="text-[#737470]"
        />
      </div>

      {/* Figma file URL input */}
      <div className="mb-10">
        <FormField
          label="Design URL"
          labelColor="text-[#a3a3a2]"
          placeholder="https://www.figma.com/file/:"
          placeholderSize="text-[10.5px]"
          placeholderColor="text-[#71726e]"
        />
      </div>

      {/* Primary action buttons - identical styling for visual consistency */}
      <div className="mb-20 flex gap-5">
        <button
          className="flex h-[44px] w-[100px] items-center justify-center rounded bg-[#843a17] text-[11.5px] font-semibold text-[#d4956d]"
          type="button"
          aria-label="Awesome"
        >
          Awesome
        </button>
        <button
          className="flex h-[44px] w-[100px] items-center justify-center rounded bg-[#843a17] text-[11.5px] font-semibold text-[#d4956d]"
          type="button"
          aria-label="Prepare"
        >
          Prepare
        </button>
      </div>

      {/* Section header for recent breakdown list (content below this would be dynamic) */}
      <div>
        <span className="text-[13.5px] font-bold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>

      {/* Copyright footer */}
      <div className="mt-auto border-t border-gray-300 pt-3 text-center">
        <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
          © AutonomyAI
        </span>
      </div>
    </div>
  );
};
