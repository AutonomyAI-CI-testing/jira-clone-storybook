import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";
import cx from "classix";

interface FormFieldProps {
  label: string;
  placeholder: string;
}

/**
 * FormField component renders a labeled input with an info icon.
 * Used for consistent styling of form inputs in the design submission form.
 */
const FormField = ({ label, placeholder }: FormFieldProps): JSX.Element => (
  <div>
    <div className="mb-2 flex items-center gap-2">
      <label className="text-xs font-semibold text-font-subtle">{label}</label>
      <FaInfoCircle className="text-icon-subtle" size={14} />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={cx(
        "w-full rounded border border-border-input bg-background-input",
        "px-3 py-2 text-xs font-semibold text-font outline-none",
        "placeholder:text-font-subtlest focus:border-border-focused focus:bg-background-input-hovered"
      )}
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="flex min-h-[100vh] items-center justify-center bg-elevation-surface p-4">
      <div
        className={cx(
          "w-full max-w-sm rounded-lg border border-border",
          "bg-elevation-surface-overlay p-5 text-font"
        )}
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-sm font-semibold text-font">UI magician Agent</h1>
          <FaCog className="text-icon-subtle" size={18} />
        </div>

        {/* Subtitle Row */}
        <div className="mb-6 flex items-center gap-2">
          <FaChevronUp className="text-icon-subtle" size={12} />
          <p className="truncate text-xs font-semibold text-font-subtle">
            From entire frame to a singl...
          </p>
        </div>

        {/* Add New Design Section */}
        <div className="mb-6 flex items-center gap-2">
          <FaChevronUp className="text-icon-subtle" size={14} />
          <h2 className="text-sm font-semibold text-font-subtle">Add New Design</h2>
        </div>

        {/* Form Section */}
        <div className="space-y-4">
          <FormField
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
          />
          <FormField label="Design URL" placeholder="https://www.figma.com/file/:" />
        </div>

        {/* Button Row */}
        <div className="mt-6 flex gap-4">
          {/* Both buttons use the same styling for consistency in the primary action area */}
          {["Awesome", "Prepare"].map((buttonLabel) => (
            <button
              key={buttonLabel}
              className={cx(
                "flex-1 rounded-md bg-background-brand-bold px-4 py-2",
                "text-xs font-semibold text-font-inverse",
                "hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed transition-colors"
              )}
            >
              {buttonLabel}
            </button>
          ))}
        </div>

        {/* Recent Breakdowns Section */}
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-font-subtle">Recent Breakdowns</h3>
        </div>
      </div>
    </div>
  );
};
