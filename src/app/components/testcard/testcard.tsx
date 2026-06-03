// Icon components
const ChevronRightIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="text-gray-500"
  >
    <polyline points="6 3 13 10 6 17" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const SettingsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6M12 17v6M23 12h-6M1 12h6M20.49 3.51l-4.24 4.24M7.75 19.75l-4.24 4.24M20.49 20.49l-4.24-4.24M7.75 7.75L3.51 3.51" />
  </svg>
);

// Collapsible section component
interface CollapsibleSectionProps {
  title: string;
  textColor?: string;
}

const CollapsibleSection = ({
  title,
  textColor = "text-gray-400",
}: CollapsibleSectionProps) => (
  <div className="mb-6">
    <div className="flex items-center gap-2">
      <ChevronRightIcon />
      <span className={`text-sm font-semibold ${textColor}`}>{title}</span>
    </div>
  </div>
);

// Form field component
interface FormFieldProps {
  label: string;
  type: string;
  placeholder: string;
  readOnly?: boolean;
}

const FormField = ({
  label,
  type,
  placeholder,
  readOnly = true,
}: FormFieldProps) => (
  <div className="mb-6">
    <div className="mb-4 flex items-center justify-between">
      <label className="text-gray-400 text-sm font-semibold">{label}</label>
      <button className="text-gray-500">
        <InfoIcon />
      </button>
    </div>
    <input
      type={type}
      placeholder={placeholder}
      className="border-gray-600 bg-gray-900 text-gray-500 placeholder-gray-600 w-full border px-3 py-2 text-xs"
      readOnly={readOnly}
    />
  </div>
);

// Action buttons component
const ActionButtonGroup = () => (
  <div className="mb-6 flex gap-4">
    <ActionButton label="Awesome" />
    <ActionButton label="Prepare" />
  </div>
);

// Action button component
interface ActionButtonProps {
  label: string;
}

const ActionButton = ({ label }: ActionButtonProps) => (
  <button className="bg-orange-700 text-orange-200 hover:bg-orange-800 flex-1 rounded px-4 py-2 text-sm font-semibold">
    {label}
  </button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="text-gray-400 w-full max-w-xs bg-black p-5">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-gray-300 text-base font-semibold">
          UI magician Agent
        </h1>
        <button className="text-gray-500">
          <SettingsIcon />
        </button>
      </div>

      {/* Collapsible sections */}
      <CollapsibleSection
        title="From entire frame to a singl..."
        textColor="text-gray-400"
      />
      <CollapsibleSection title="Add New Design" textColor="text-gray-300" />

      {/* Form fields */}
      <FormField
        label="Personal Access Token"
        type="password"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <FormField
        label="Design URL"
        type="url"
        placeholder="https://www.figma.com/file/:"
      />

      {/* Action Buttons */}
      <ActionButtonGroup />

      {/* Footer Section */}
      <div>
        <h2 className="text-gray-400 text-sm font-semibold">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
