// Tailwind style constants for consistent styling across the component
const CONTAINER_STYLES =
  "flex w-full max-w-xs flex-col gap-4 bg-black p-4 text-sm";
const LABEL_STYLES =
  "flex items-center gap-2 text-xs font-semibold text-gray-400";
const INPUT_STYLES =
  "w-full border border-gray-700 bg-gray-900 px-3 py-2 text-xs font-semibold text-gray-300 placeholder-gray-600 transition-colors focus:border-gray-600 focus:outline-none";
const ICON_BUTTON_STYLES =
  "text-gray-600 transition-colors hover:text-gray-400";
const SECTION_DIVIDER_STYLES = "border-t border-gray-700";
const COLLAPSIBLE_BUTTON_STYLES =
  "flex w-full items-center gap-2 py-3 text-xs font-semibold text-gray-400 transition-colors hover:text-gray-300";
const ACTION_BUTTON_STYLES =
  "flex-1 rounded-sm px-3 py-2 text-xs font-semibold transition-colors";

// Reusable component for label with info icon
const LabelWithIcon = ({ label }: { label: string }): JSX.Element => (
  <label className={LABEL_STYLES}>
    <span>{label}</span>
    <button className={ICON_BUTTON_STYLES} aria-label="Info">
      ℹ️
    </button>
  </label>
);

// Reusable component for collapsible section button
const CollapsibleSection = ({ title }: { title: string }): JSX.Element => (
  <div className={SECTION_DIVIDER_STYLES}>
    <button className={COLLAPSIBLE_BUTTON_STYLES}>
      <span className="text-gray-600">˄</span>
      {title}
    </button>
  </div>
);

// Reusable component for input field
const InputField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}): JSX.Element => (
  <div className="space-y-2">
    <LabelWithIcon label={label} />
    <input type="text" placeholder={placeholder} className={INPUT_STYLES} />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className={CONTAINER_STYLES}>
      {/* Header with title and settings button */}
      <div className="flex items-center justify-between">
        <h1 className="text-gray-400 text-xs font-semibold">
          UI magician Agent
        </h1>
        <button className={ICON_BUTTON_STYLES} aria-label="Settings">
          ⚙️
        </button>
      </div>

      {/* Expandable section for design frame information */}
      <CollapsibleSection title="From entire frame to a singl..." />

      {/* Section to add new design files */}
      <CollapsibleSection title="Add New Design" />

      {/* Personal Access Token input */}
      <InputField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      {/* Design URL input */}
      <InputField
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      {/* Action buttons for user workflow */}
      <div className="flex gap-3 pt-2">
        <button
          className={`${ACTION_BUTTON_STYLES} bg-gray-800 text-gray-400 hover:bg-gray-700 active:bg-gray-600`}
        >
          Awesome
        </button>
        <button
          className={`${ACTION_BUTTON_STYLES} bg-orange-900 text-orange-800 hover:bg-orange-800 active:bg-orange-700`}
        >
          Prepare
        </button>
      </div>

      {/* Section to view recent design breakdowns */}
      <div className={`${SECTION_DIVIDER_STYLES} pt-3`}>
        <button className={COLLAPSIBLE_BUTTON_STYLES}>
          <span className="text-gray-600">˄</span>
          Recent Breakdowns
        </button>
      </div>
    </div>
  );
};
