// Atom icon representing AI/agent capability
const AtomIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#b5b5b5]"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="2" fill="currentColor" />
    <ellipse
      cx="8"
      cy="8"
      rx="6"
      ry="3"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <ellipse
      cx="8"
      cy="8"
      rx="6"
      ry="3"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      transform="rotate(60 8 8)"
    />
    <ellipse
      cx="8"
      cy="8"
      rx="6"
      ry="3"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      transform="rotate(120 8 8)"
    />
  </svg>
);

// Upward chevron icon for collapsible sections
const ChevronUpIcon = ({
  width = "8",
  height = "5",
  color = "#8b9291",
}: {
  width?: string;
  height?: string;
  color?: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M1 4L4 1L7 4"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Info icon for help tooltips
const InfoIcon = ({ color = "#a3a3a2" }: { color?: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke={color} strokeWidth="1.5" />
    <path
      d="M7.5 6.5V10.5M7.5 4.5H7.51"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Input field with label and optional info icon
const FormField = ({
  label,
  showInfo = true,
  borderWeight = "border",
  children,
}: {
  label: string;
  showInfo?: boolean;
  borderWeight?: "border" | "border-2";
  children: React.ReactNode;
}) => (
  <div>
    <div className="mb-1.5 flex items-center gap-1.5">
      <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
        {label}
      </span>
      {showInfo && <InfoIcon />}
    </div>
    <div
      className={`rounded ${borderWeight} ${
        borderWeight === "border" ? "border-[#a5adad]" : "border-[#929291]"
      } bg-[#272822] px-3 py-3`}
    >
      {children}
    </div>
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] rounded-lg bg-[#1e1e1a] p-5">
      {/* Header with agent title and icon */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <AtomIcon />
      </div>

      {/* Collapsible description section */}
      <div className="mb-5 flex items-center gap-1.5">
        <ChevronUpIcon />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Form section header */}
      <div className="mb-5 flex items-center gap-2">
        <ChevronUpIcon width="12" height="8" color="#b2b2b1" />
        <h3 className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </h3>
      </div>

      {/* Figma Personal Access Token input */}
      <div className="mb-4">
        <FormField label="Personal Access Token">
          <span className="text-[10.5px] font-semibold text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </FormField>
      </div>

      {/* Figma Design URL input */}
      <div className="mb-5">
        <FormField label="Design URL" borderWeight="border-2">
          <span className="text-[11.5px] font-semibold text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </FormField>
      </div>

      {/* Action buttons */}
      <div className="mb-6 flex gap-2">
        <button className="rounded bg-[#843a17] px-5 py-3 text-xs font-semibold text-[#8c8078]">
          Awesome
        </button>
        <button className="rounded bg-[#843a17] px-5 py-3 text-xs font-semibold text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section */}
      <div>
        <h3 className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer with copyright */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <span className="text-xs text-[#b0b0b0]">© AutonomyAI</span>
      </div>
    </div>
  );
};
