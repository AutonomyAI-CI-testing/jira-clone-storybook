// SVG icon for the header menu (circular with dots)
const MenuIcon = (): JSX.Element => (
  <svg
    className="h-6 w-6 text-[#b5b5b5]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="6" r="1.5" />
    <circle cx="17" cy="12" r="1.5" />
    <circle cx="12" cy="18" r="1.5" />
    <circle cx="7" cy="12" r="1.5" />
  </svg>
);

// Chevron icon used in collapsible sections
const ChevronIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg
    className={className || "h-5 w-5 text-[#b5b5b5]"}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
  >
    <polyline points="6 15 12 9 18 15" />
  </svg>
);

// Info icon used in form labels
const InfoIcon = (): JSX.Element => (
  <svg
    className="h-4 w-4 text-[#8b9291]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="12" r="9" />
    <text
      x="12"
      y="15"
      textAnchor="middle"
      className="text-[10px]"
      fill="currentColor"
      fontSize="10"
      fontWeight="bold"
    >
      i
    </text>
  </svg>
);

// Form input field with label and optional info icon
interface FormFieldProps {
  label: string;
  placeholder: string;
}

const FormField = ({ label, placeholder }: FormFieldProps): JSX.Element => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <label className="text-[11.5px] font-bold text-[#a4a4a3]">{label}</label>
      <InfoIcon />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="border border-[#666666] bg-transparent px-3 py-2.5 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470]"
    />
  </div>
);

// Collapsible section item
interface CollapsibleSectionProps {
  text: string;
  textColor?: string;
}

const CollapsibleSection = ({
  text,
  textColor = "text-[#8b9291]",
}: CollapsibleSectionProps): JSX.Element => (
  <div className="flex items-center gap-2">
    <ChevronIcon />
    <span className={`font-semibold ${textColor}`}>{text}</span>
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="flex w-[254px] flex-col gap-8 bg-[#2B2B2B] p-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <MenuIcon />
      </div>

      {/* Collapsible Section 1 */}
      <CollapsibleSection
        text="From entire frame to a singl..."
        textColor="text-[#8b9291] text-[11.5px]"
      />

      {/* Collapsible Section 2 - Add New Design */}
      <CollapsibleSection
        text="Add New Design"
        textColor="text-[#b2b2b1] text-[13.5px]"
      />

      {/* Form Sections */}
      <FormField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <FormField
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      {/* Button Section */}
      <div className="flex gap-3">
        <button className="flex-1 rounded-sm border-none bg-[#843a17] px-4 py-3.5 text-[13px] font-semibold text-[#8c8078] hover:bg-[#9a4a1f] active:bg-[#783014]">
          Awesome
        </button>
        <button className="flex-1 rounded-sm border-none bg-[#843a17] px-4 py-3.5 text-[13px] font-semibold text-[#8c8078] hover:bg-[#9a4a1f] active:bg-[#783014]">
          Prepare
        </button>
      </div>

      {/* Footer Section */}
      <div className="pt-2">
        <h2 className="text-[13.5px] font-bold text-[#b5b5b5]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Copyright Footer */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-[11.5px] font-semibold text-[#a3a3a2]">
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
