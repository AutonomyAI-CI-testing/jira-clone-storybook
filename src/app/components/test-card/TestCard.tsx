import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

// Consistent button styling for primary action buttons
const PRIMARY_BUTTON_CLASSES =
  "rounded bg-[#974f0c] px-6 py-2 font-primary-bold text-base text-white hover:bg-[#b65c02] active:bg-[#d97008]";

const INPUT_CLASSES =
  "w-full rounded border border-border bg-elevation-surface-sunken px-3 py-2 font-primary text-sm text-white placeholder:text-font-subtle focus:outline-border-brand";

interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
  showInfoIcon?: boolean;
}

/**
 * Renders a labeled input field with optional info icon.
 * Inputs are read-only by design to show the static form state.
 */
const FormField = ({
  id,
  label,
  placeholder,
  showInfoIcon = true,
}: FormFieldProps): JSX.Element => {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <label htmlFor={id} className="font-primary text-sm text-white">
          {label}
        </label>
        {showInfoIcon && <FiInfo className="text-white" size={14} />}
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        readOnly
        className={INPUT_CLASSES}
      />
    </div>
  );
};

/**
 * Renders a collapsible section header with chevron icon.
 * Chevron points up to indicate the section is expanded.
 */
const CollapsibleHeader = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div className="flex items-center gap-2">
      <FiChevronUp className="text-white" size={16} />
      {children}
    </div>
  );
};

export const TestCard = (): JSX.Element => {
  return (
    <div className="max-w-[480px] rounded-md bg-elevation-surface-raised p-6">
      {/* Header with settings icon */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="font-primary-bold text-lg text-white">
          UI magician Agent
        </h1>
        <FiSettings className="text-white" size={20} />
      </div>

      {/* Collapsible teaser row showing truncated text */}
      <div className="mb-6">
        <CollapsibleHeader>
          <p className="truncate font-primary text-sm text-white">
            From entire frame to a singl...
          </p>
        </CollapsibleHeader>
      </div>

      {/* Add New Design section header */}
      <div className="mb-6">
        <CollapsibleHeader>
          <h2 className="font-primary-bold text-xl text-white">
            Add New Design
          </h2>
        </CollapsibleHeader>
      </div>

      {/* Form fields for Figma integration */}
      <div className="mb-4">
        <FormField
          id="personal-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
        />
      </div>

      <div className="mb-6">
        <FormField
          id="design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Primary action buttons */}
      <div className="mb-6 flex gap-3">
        <button type="button" className={PRIMARY_BUTTON_CLASSES}>
          Awesome
        </button>
        <button type="button" className={PRIMARY_BUTTON_CLASSES}>
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section heading */}
      <h2 className="font-primary-bold text-xl text-white">Recent Breakdowns</h2>

      {/* Footer with copyright */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="font-primary text-sm text-white">© AutonomyAI</p>
      </div>
    </div>
  );
};
