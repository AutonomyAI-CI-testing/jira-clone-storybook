import cx from "classix";

// Shared icon button styling for info/help icons
const INFO_ICON_BUTTON_CLASSES = "flex items-center justify-center p-0";

// SVG viewBox dimensions for icons
const ICON_VIEWBOX_SMALL = "0 0 12 12";
const ICON_VIEWBOX_SETTINGS = "0 0 16 16";

// Input field styling using classix for consistent appearance
const INPUT_CLASSES = cx(
  "w-full rounded border px-3 py-2",
  "bg-background-input text-font",
  "placeholder:text-font-subtlest placeholder:text-xs",
  "border-border-input outline-2",
  "hover:bg-background-input-hovered",
  "focus-visible:bg-background-input-pressed focus-visible:outline-border-focused"
);

// Action button styling (Awesome/Prepare buttons)
const ACTION_BUTTON_CLASSES = cx(
  "flex-1 rounded px-3 py-2",
  "bg-background-warning-bold text-font-inverse",
  "text-xs font-primary-bold",
  "hover:bg-background-warning-bold-hovered",
  "active:bg-background-warning-bold-pressed"
);

/**
 * Renders a small info icon button used for field tooltips.
 * Reused for "Personal Access Token" and "Design URL" fields.
 */
const InfoIconButton = () => (
  <button className={INFO_ICON_BUTTON_CLASSES}>
    <svg
      width="12"
      height="12"
      viewBox={ICON_VIEWBOX_SMALL}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-icon-subtle"
    >
      <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1" />
      <text
        x="6"
        y="7.5"
        textAnchor="middle"
        className="text-[8px]"
        fill="currentColor"
      >
        i
      </text>
    </svg>
  </button>
);

/**
 * Renders an input field with optional label and info icon.
 * Used for both Personal Access Token and Design URL fields.
 */
interface FormFieldProps {
  label: string;
  placeholder: string;
  type: "text" | "url";
}

const FormField = ({ label, placeholder, type }: FormFieldProps) => (
  <div className="mb-6">
    <div className="mb-2 flex items-center gap-2">
      <label className="font-primary text-xs text-font">{label}</label>
      <InfoIconButton />
    </div>
    <input type={type} placeholder={placeholder} className={INPUT_CLASSES} />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="max-w-[500px] rounded-md bg-elevation-surface p-6">
      {/* Header section */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-primary-bold text-sm text-font">
          UI magician Agent
        </h1>
        <button
          className="flex items-center justify-center rounded p-1 hover:bg-background-neutral"
          aria-label="Settings"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-icon"
          >
            <circle cx="8" cy="3" r="0.8" fill="currentColor" />
            <circle cx="8" cy="8" r="0.8" fill="currentColor" />
            <circle cx="8" cy="13" r="0.8" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* Collapsible section indicator */}
      <div className="mb-6 flex items-center gap-2 text-font-subtle">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <path
            d="M8.5 10.5L4 6L8.5 1.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="truncate text-xs">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mb-6 flex items-center gap-2">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0 text-font-subtle"
        >
          <path
            d="M6 10.5L1.5 4L10.5 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="font-primary-bold text-xs text-font-subtle">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token section */}
      <div className="mb-4">
        <FormField
          label="Personal Access Token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
        />
      </div>

      {/* Design URL section */}
      <FormField
        label="Design URL"
        type="url"
        placeholder="https://www.figma.com/file/:"
      />

      {/* Action buttons */}
      <div className="mb-6 flex gap-3">
        <button className={ACTION_BUTTON_CLASSES}>Awesome</button>
        <button className={ACTION_BUTTON_CLASSES}>Prepare</button>
      </div>

      {/* Recent Breakdowns section */}
      <div className="mb-3 font-primary-bold text-xs text-font">
        Recent Breakdowns
      </div>

      {/* Footer section */}
      <div className="border-gray-300 border-t pt-3 text-center text-xs text-font">
        © AutonomyAI
      </div>
    </div>
  );
};
