/**
 * InfoIcon: Renders a circular info icon (question mark in a circle)
 * Used in form labels to provide contextual help or additional information.
 */
const InfoIcon = ({ color }: { color: string }): JSX.Element => (
  <svg
    className={`h-4 w-4 ${color}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

/**
 * NavIcon: Renders a directional/navigation arrow-like icon (chevron or direction indicator)
 * Used in section headers to indicate collapsible or expandable sections.
 */
const NavIcon = ({
  size = "h-4 w-4",
  color,
}: {
  size?: string;
  color: string;
}): JSX.Element => (
  <svg className={`${size} ${color}`} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 20 2 2 12 7 22 2 12 20" />
  </svg>
);

/**
 * SettingsIcon: Renders a settings/configuration icon (circular with radiating lines)
 * Used in the card header to indicate settings or options.
 */
const SettingsIcon = (): JSX.Element => (
  <svg
    className="h-5 w-5 text-[#b5b5b5]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m2.12 2.12l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m2.12-2.12l4.24-4.24M19.78 19.78l-4.24-4.24m-2.12-2.12l-4.24-4.24" />
  </svg>
);

/**
 * FormField: Renders a labeled input field with an optional info icon
 * Consolidates duplicate label + icon + input patterns used throughout the card.
 */
const FormField = ({
  label,
  placeholder,
  labelColor,
  iconColor,
  inputTextSize = "text-[11.5px]",
}: {
  label: string;
  placeholder: string;
  labelColor: string;
  iconColor: string;
  inputTextSize?: string;
}): JSX.Element => (
  <div className="mb-8">
    <div className="mb-3 flex items-center gap-2">
      <label
        className={`font-primary-bold text-[11.5px] font-semibold ${labelColor}`}
      >
        {label}
      </label>
      <InfoIcon color={iconColor} />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full border border-[#555554] bg-[#1a1a1a] px-3 py-2 font-primary-bold ${inputTextSize} font-semibold text-[#696967] placeholder-[#696967]`}
      readOnly
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] rounded bg-black p-5">
      {/* Header: Title and settings icon */}
      <div className="mb-10 flex items-center justify-between">
        <h1 className="font-primary-bold text-[13.5px] font-normal text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsible hint section */}
      <div className="mb-16 flex items-center gap-2">
        <NavIcon color="text-[#8b9291]" />
        <p className="font-primary-bold text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design section header */}
      <div className="mb-10 flex items-center gap-2">
        <NavIcon color="text-[#b2b2b1]" />
        <h2 className="font-primary-bold text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token input field */}
      <FormField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        labelColor="text-[#a4a4a3]"
        iconColor="text-[#a4a4a3]"
      />

      {/* Design URL input field */}
      <FormField
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        labelColor="text-[#a3a3a2]"
        iconColor="text-[#a3a3a2]"
        inputTextSize="text-[10.5px]"
      />

      {/* Action Buttons */}
      <div className="mb-16 flex gap-4">
        <button className="flex-1 rounded bg-[#a0522d] px-4 py-2 font-primary-bold text-[11.5px] font-semibold text-[#d8a48e] hover:bg-[#b8633e]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#a0522d] px-4 py-2 font-primary-bold text-[11.5px] font-semibold text-[#d8a48e] hover:bg-[#b8633e]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section header */}
      <div>
        <h3 className="font-primary-bold text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Copyright footer */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="font-primary-bold text-[11.5px] font-semibold text-[#b0b0b0]">
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
