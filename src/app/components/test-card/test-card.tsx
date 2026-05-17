import { IoChevronUp, IoInformationCircleOutline, IoSettingsSharp } from "react-icons/io5";

// Constants for styling consistency
const BUTTON_BASE_CLASSES = "flex-1 rounded px-4 py-2 font-primary text-sm text-white";
const BUTTON_COLOR_CLASSES = "bg-[#B65C02] hover:bg-[#9d4f02] active:bg-[#854302]";
const INPUT_CLASSES =
  "w-full rounded border border-border-input bg-background-input px-3 py-2 font-primary text-sm text-font placeholder:text-font-subtlest focus:border-border-focused focus:outline-none";

interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
}

/**
 * Reusable input field with label and info icon
 * Used for form inputs with consistent styling and help text affordance
 */
const InputField = ({ label, placeholder, type = "text" }: InputFieldProps): JSX.Element => (
  <div>
    <div className="mb-2 flex items-center gap-2">
      <label className="font-primary text-sm text-font">{label}</label>
      <IoInformationCircleOutline className="h-4 w-4 text-font-subtlest" aria-hidden="true" />
    </div>
    <input
      type={type}
      placeholder={placeholder}
      className={INPUT_CLASSES}
      aria-label={label}
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    // Dark theme wrapper for Storybook display context
    <div className="dark bg-[#0d1117] p-8">
      <div className="w-full max-w-md rounded-lg bg-elevation-surface-sunken p-6 shadow-md">
        {/* Header with settings icon */}
        <header className="mb-6 flex items-center justify-between">
          <h1 className="font-primary-bold text-xl text-font">UI magician Agent</h1>
          <IoSettingsSharp
            className="h-6 w-6 text-font-subtlest"
            aria-label="Settings"
            role="button"
            tabIndex={0}
          />
        </header>

        {/* Collapsed summary item - shows truncated text with chevron */}
        <div className="mb-8 flex items-center gap-2">
          <IoChevronUp className="h-4 w-4 text-font-subtlest" aria-hidden="true" />
          <span className="font-primary text-sm text-font-subtlest">
            From entire frame to a singl...
          </span>
        </div>

        {/* Expandable section header */}
        <div className="mb-6 flex items-center gap-2">
          <IoChevronUp className="h-5 w-5 text-font" aria-hidden="true" />
          <h2 className="font-primary-bold text-base text-font">Add New Design</h2>
        </div>

        {/* Form fields for Figma integration */}
        <div className="mb-4">
          <InputField
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          />
        </div>

        <div className="mb-6">
          <InputField
            label="Design URL"
            placeholder="https://www.figma.com/file/:"
          />
        </div>

        {/* Primary action buttons with equal width */}
        <div className="mb-8 flex gap-4">
          <button className={`${BUTTON_BASE_CLASSES} ${BUTTON_COLOR_CLASSES}`}>
            Awesome
          </button>
          <button className={`${BUTTON_BASE_CLASSES} ${BUTTON_COLOR_CLASSES}`}>
            Prepare
          </button>
        </div>

        {/* Content section heading */}
        <h2 className="font-primary-bold text-base text-font">Recent Breakdowns</h2>

        {/* Footer with branding */}
        <footer className="mt-6 border-t border-gray-300 pt-3 text-center">
          <span className="font-primary text-sm text-font-subtlest">© AutonomyAI</span>
        </footer>
      </div>
    </div>
  );
};
