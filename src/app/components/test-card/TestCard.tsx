/**
 * Icon component representing an atomic structure with orbital rings
 * Used as a settings or configuration indicator
 */
const AtomIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="text-[#b5b5b5]"
  >
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <ellipse
      cx="12"
      cy="12"
      rx="9"
      ry="4"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="9"
      ry="4"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
      transform="rotate(60 12 12)"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="9"
      ry="4"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
      transform="rotate(120 12 12)"
    />
  </svg>
);

/**
 * Chevron icon indicating expandable/collapsible state
 * @param color - Stroke color for the chevron path
 */
const ChevronUpIcon = ({ color }: { color: string }) => (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
    <path d="M1 7l5-5 5 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/**
 * Information icon for tooltips or help text
 * @param color - Color for the circle stroke and text fill
 */
const InfoIcon = ({ color }: { color: string }) => (
  <svg width="18" height="18" viewBox="0 0 15 15" fill="none">
    <circle cx="7.5" cy="7.5" r="7" stroke={color} strokeWidth="1" fill="none" />
    <text
      x="7.5"
      y="11"
      fontSize="9"
      fontWeight="600"
      fill={color}
      textAnchor="middle"
    >
      i
    </text>
  </svg>
);

/**
 * Form field with label and info icon
 * @param label - The field label text
 * @param placeholder - Input placeholder text
 * @param labelColor - Color for the label text
 * @param infoColor - Color for the info icon
 * @param inputClassName - Additional Tailwind classes for the input
 */
const FormField = ({
  label,
  placeholder,
  labelColor,
  infoColor,
  inputClassName,
}: {
  label: string;
  placeholder: string;
  labelColor: string;
  infoColor: string;
  inputClassName: string;
}) => (
  <div className="mt-10">
    <div className="mb-2 flex items-center gap-1.5">
      <label className="text-sm leading-[14px]" style={{ color: labelColor }}>
        {label}
      </label>
      <InfoIcon color={infoColor} />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={inputClassName}
      readOnly
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      className="w-64 bg-[#1a1a17] p-5 font-semibold text-[#b5b5b5]"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Header with agent title and settings icon */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg leading-tight">UI magician Agent</h1>
        <AtomIcon />
      </div>

      {/* Collapsible subtitle showing truncated description */}
      <div className="mt-10 flex items-center gap-2">
        <ChevronUpIcon color="#8b9291" />
        <span className="text-[11.5px] leading-[14px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Vertical spacing between sections */}
      <div className="my-16" />

      {/* Expandable section for adding new designs */}
      <div className="flex items-center gap-2">
        <ChevronUpIcon color="#b2b2b1" />
        <span className="text-[13.5px] leading-[16px] text-[#b2b2b1]">Add New Design</span>
      </div>

      {/* Figma API token input field */}
      <FormField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        labelColor="#a4a4a3"
        infoColor="#a4a4a3"
        inputClassName="w-full border-2 border-[#a5adad] bg-[#272822] px-3 py-6 text-[11.5px] leading-[14px] text-[#737470] outline-none"
      />

      {/* Figma file URL input field */}
      <FormField
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        labelColor="#a3a3a2"
        infoColor="#a3a3a2"
        inputClassName="w-full border-2 border-[#929291] bg-[#272822] px-3 py-6 text-[10.5px] leading-[13px] text-[#71726e] outline-none"
      />

      {/* Primary action buttons */}
      <div className="mt-12 flex gap-5">
        <button className="flex-1 bg-[#843a17] px-6 py-5 text-[11.5px] leading-[14px] text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 bg-[#843a17] px-6 py-5 text-[11.5px] leading-[14px] text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Section for previously processed designs */}
      <div className="mt-28">
        <h2 className="text-lg leading-tight text-[#b0b0b0]">Recent Breakdowns</h2>
      </div>

      {/* Copyright footer */}
      <div className="border-t border-gray-300 pt-3 text-center text-sm">
        © AutonomyAI
      </div>
    </div>
  );
};
