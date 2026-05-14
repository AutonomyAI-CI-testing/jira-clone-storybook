/**
 * Settings gear icon component
 */
const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#b5b5b5]">
    <path
      d="M8 10a2 2 0 100-4 2 2 0 000 4z"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M14 8a1.5 1.5 0 00-.3-.9l-1-.6a5.5 5.5 0 000-1l1-.6a1.5 1.5 0 00.3-.9 1.5 1.5 0 00-.3-.9l-1-.6a5.5 5.5 0 000-1l1-.6a1.5 1.5 0 00.3-.9 1.5 1.5 0 00-.6-.8l-1.5-.9a1.5 1.5 0 00-1 0l-1.2.3a5.5 5.5 0 00-.9-.5V1.5A1.5 1.5 0 008 0a1.5 1.5 0 00-1.5 1.5v1.2a5.5 5.5 0 00-.9.5l-1.2-.3a1.5 1.5 0 00-1 0l-1.5.9a1.5 1.5 0 00-.6.8c0 .3.1.6.3.9l1 .6a5.5 5.5 0 000 1l-1 .6a1.5 1.5 0 00-.3.9c0 .3.1.6.3.9l1 .6a5.5 5.5 0 000 1l-1 .6a1.5 1.5 0 00-.3.9c0 .3.2.6.6.8l1.5.9a1.5 1.5 0 001 0l1.2-.3a5.5 5.5 0 00.9.5v1.2A1.5 1.5 0 008 16a1.5 1.5 0 001.5-1.5v-1.2a5.5 5.5 0 00.9-.5l1.2.3a1.5 1.5 0 001 0l1.5-.9a1.5 1.5 0 00.6-.8c0-.3-.1-.6-.3-.9l-1-.6a5.5 5.5 0 000-1l1-.6c.2-.3.3-.6.3-.9z"
      stroke="currentColor"
      strokeWidth="0.8"
      fill="none"
    />
  </svg>
);

/**
 * Chevron icon for accordion/expandable sections
 */
const ChevronIcon = ({ color }: { color: string }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={color}>
    <path d="M6 9.5L2.5 4.5H9.5L6 9.5Z" fill="currentColor" />
  </svg>
);

/**
 * Info icon (i) for field help text
 */
const InfoIcon = ({ color }: { color: string }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
    <circle cx="8" cy="8" r="6.5" stroke={color} strokeWidth="1.3" fill="none" />
    <text x="8" y="11.5" fontSize="10" fontWeight="700" fill={color} textAnchor="middle">
      i
    </text>
  </svg>
);

/**
 * Form input field with label and optional info icon
 */
interface FormFieldProps {
  label: string;
  placeholder: string;
  infoColor: string;
  inputClassName: string;
}

const FormField = ({ label, placeholder, infoColor, inputClassName }: FormFieldProps) => (
  <div className="mb-6">
    <div className="mb-2 flex items-center gap-1.5">
      <label className="text-[11.5px] font-semibold" style={{ color: infoColor }}>
        {label}
      </label>
      <InfoIcon color={infoColor} />
    </div>
    <input type="text" placeholder={placeholder} className={inputClassName} />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[280px] rounded bg-[#1a1a17] p-5 font-primary text-font shadow-md">
      {/* Header with title and settings icon */}
      <div className="mb-6 flex items-center justify-between pr-2">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">UI magician Agent</h1>
        <SettingsIcon />
      </div>

      {/* Collapsed accordion item */}
      <div className="mb-10 flex items-center gap-2">
        <ChevronIcon color="text-[#8b9291]" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section (expanded) */}
      <div className="mb-10">
        <div className="mb-6 flex items-center gap-2">
          <ChevronIcon color="text-[#b2b2b1]" />
          <h2 className="text-[13.5px] font-bold text-[#b2b2b1]">Add New Design</h2>
        </div>

        {/* Form fields for design configuration */}
        <FormField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          infoColor="#a4a4a3"
          inputClassName="w-full rounded border-[1.5px] border-[#a5adad] bg-[#232420] px-3 py-2 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470] focus:outline-none focus:ring-1 focus:ring-[#a5adad]"
        />

        <FormField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          infoColor="#a3a3a2"
          inputClassName="w-full rounded border-[2px] border-[#929291] bg-[#232420] px-3 py-2 text-[10.5px] font-semibold text-[#71726e] placeholder-[#71726e] focus:outline-none focus:ring-1 focus:ring-[#929291]"
        />

        {/* Action buttons */}
        <div className="flex gap-6">
          <button
            type="button"
            className="flex-1 rounded bg-[#843a17] px-4 py-5 text-[11.5px] font-semibold text-[#8c8078] transition-opacity hover:opacity-90"
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded bg-[#843a17] px-4 py-5 text-[11.5px] font-semibold text-[#8c8078] transition-opacity hover:opacity-90"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="mt-10">
        <h3 className="text-[13.5px] font-semibold text-[#b0b0b0]">Recent Breakdowns</h3>
      </div>

      {/* Footer with copyright */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-[11.5px] text-[#b0b0b0]">© AutonomyAI</p>
      </div>
    </div>
  );
};
