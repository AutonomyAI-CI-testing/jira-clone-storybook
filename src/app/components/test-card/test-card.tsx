// Reusable icon components to eliminate duplication
const ChevronUpIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="flex-shrink-0"
  >
    <polyline points="12 10 8 6 4 10" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="flex-shrink-0"
  >
    <circle cx="8" cy="8" r="7" />
    <text x="8" y="10" textAnchor="middle" className="text-[10px]">
      i
    </text>
  </svg>
);

const SettingsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="text-gray-400"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m6.08 0l4.24-4.24M1 12h6m6 0h6m-16.78 7.78l4.24-4.24m6.08 0l4.24 4.24" />
  </svg>
);

// Form field component to reduce duplication between similar input fields
interface FormFieldProps {
  label: string;
  placeholder: string;
  textSize?: string;
  textColor?: string;
  labelColor?: string;
  borderColor?: string;
}

const FormField = ({
  label,
  placeholder,
  textSize = "text-[11.5px]",
  textColor = "#737470",
  labelColor = "#a4a4a3",
  borderColor = "#444",
}: FormFieldProps) => (
  <div className="space-y-2">
    <div className="flex items-center gap-2">
      <label
        className={`${textSize} font-semibold`}
        style={{ color: labelColor }}
      >
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full border bg-black px-3 py-2 ${textSize}`}
      style={{
        borderColor,
        color: textColor,
      }}
      readOnly
    />
  </div>
);

// Collapsible section with icon and text label
interface CollapsibleSectionProps {
  title: string;
  textColor?: string;
  isTruncated?: boolean;
}

const CollapsibleSection = ({
  title,
  textColor = "#8b9291",
  isTruncated = false,
}: CollapsibleSectionProps) => (
  <div className="border-gray-700 border-t px-5 py-4">
    <div className="flex items-center gap-3">
      <ChevronUpIcon />
      <p
        className={`text-[11.5px] font-semibold ${
          isTruncated ? "truncate" : ""
        }`}
        style={{ color: textColor }}
      >
        {title}
      </p>
    </div>
  </div>
);

// Header section with title and settings icon
interface HeaderProps {
  title: string;
  titleColor?: string;
}

const Header = ({ title, titleColor = "#b5b5b5" }: HeaderProps) => (
  <div className="flex items-center justify-between px-5 py-5">
    <h1 className="text-[13.5px] font-semibold" style={{ color: titleColor }}>
      {title}
    </h1>
    <SettingsIcon />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex items-center justify-center bg-black p-4"
    >
      <div className="w-full max-w-[254px] bg-black text-white">
        {/* Header section with title and settings control */}
        <Header title="UI magician Agent" />

        {/* First collapsible section - shows truncated item title */}
        <CollapsibleSection
          title="From entire frame to a singl..."
          textColor="#8b9291"
          isTruncated
        />

        {/* Second collapsible section - Add New Design action */}
        <div className="border-gray-700 border-t px-5 py-6">
          <div className="flex items-center gap-3">
            <ChevronUpIcon />
            <h2
              className="text-[13.5px] font-semibold"
              style={{ color: "#b2b2b1" }}
            >
              Add New Design
            </h2>
          </div>
        </div>

        {/* Form section for Figma integration - collects authentication and design info */}
        <div className="border-gray-700 space-y-5 border-t px-5 py-6">
          <FormField
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            textColor="#737470"
            labelColor="#a4a4a3"
          />
          <FormField
            label="Design URL"
            placeholder="https://www.figma.com/file/:"
            textSize="text-[10.5px]"
            textColor="#71726e"
            labelColor="#a3a3a2"
          />
        </div>

        {/* Action buttons for form submission */}
        <div className="border-gray-700 flex gap-4 border-t px-5 py-6">
          <button
            className="flex-1 rounded py-3 text-[11.5px] font-semibold transition-colors"
            style={{
              backgroundColor: "#a0694d",
              color: "#8c8078",
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 rounded py-3 text-[11.5px] font-semibold transition-colors"
            style={{
              backgroundColor: "#a0694d",
              color: "#8c8078",
            }}
          >
            Prepare
          </button>
        </div>

        {/* Footer section showing recent activity or history */}
        <div className="border-gray-700 border-t px-5 py-6">
          <h3
            className="text-[13.5px] font-semibold"
            style={{ color: "#b0b0b0" }}
          >
            Recent Breakdowns
          </h3>
        </div>
      </div>
    </div>
  );
};
