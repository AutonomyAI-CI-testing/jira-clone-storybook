// Color palette for the dark-themed card UI
const COLORS = {
  BACKGROUND: "bg-black",
  PRIMARY_TEXT: "text-[#b5b5b5]",
  SECONDARY_TEXT: "text-[#b2b2b1]",
  LABEL_TEXT: "text-[#a8a8a8]",
  INFO_BUTTON: "text-[#8b9291]",
  BORDER: "border-[#3a3a3a]",
  INPUT_BG: "bg-[#1a1a1a]",
  PLACEHOLDER: "placeholder-[#71726e]",
  FOCUS_BORDER: "focus:border-[#8B4513]",
  BUTTON_BG: "bg-[#8B4513]",
  BUTTON_TEXT: "text-[#d4a574]",
  BUTTON_HOVER: "hover:bg-[#9d5423]",
};

const INPUT_CLASS = `w-full border ${COLORS.BORDER} ${COLORS.INPUT_BG} px-3 py-2 text-xs ${COLORS.PRIMARY_TEXT} ${COLORS.PLACEHOLDER} ${COLORS.FOCUS_BORDER} focus:outline-none`;

const ACTION_BUTTON_CLASS = `flex-1 rounded ${COLORS.BUTTON_BG} px-3 py-2 text-xs font-semibold ${COLORS.BUTTON_TEXT} ${COLORS.BUTTON_HOVER}`;

const CollapsibleSection = (
  label: string,
  margin: string = "mb-8"
): JSX.Element => (
  <div className={`${margin} flex items-center gap-2`}>
    <button className={`${COLORS.PRIMARY_TEXT} hover:text-white`}>^</button>
    <span className={`text-xs ${COLORS.PRIMARY_TEXT}`}>{label}</span>
  </div>
);

const FormField = (
  label: string,
  inputType: "text" | "password",
  placeholder: string,
  margin: string = "mb-4"
): JSX.Element => (
  <div className={margin}>
    <div className="mb-2 flex items-center gap-2">
      <label className={`text-xs font-semibold ${COLORS.LABEL_TEXT}`}>
        {label}
      </label>
      <button className={`${COLORS.INFO_BUTTON} hover:text-[#b5b5b5]`}>
        ℹ️
      </button>
    </div>
    <input type={inputType} placeholder={placeholder} className={INPUT_CLASS} />
  </div>
);

const ActionButton = (label: string): JSX.Element => (
  <button className={ACTION_BUTTON_CLASS}>{label}</button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className={`w-64 ${COLORS.BACKGROUND} p-5`}>
      {/* Header with title and menu button */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className={`text-sm font-semibold ${COLORS.PRIMARY_TEXT}`}>
          UI magician Agent
        </h1>
        <button className={`text-lg ${COLORS.PRIMARY_TEXT} hover:text-white`}>
          ⚛️
        </button>
      </div>

      {/* Collapsible section with truncated text label */}
      {CollapsibleSection("From entire frame to a singl...", "mb-8")}

      {/* Add New Design section header */}
      <div className="mb-6 flex items-center gap-2">
        <button className={`${COLORS.PRIMARY_TEXT} hover:text-white`}>^</button>
        <span className={`text-xs font-semibold ${COLORS.SECONDARY_TEXT}`}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token input field */}
      {FormField(
        "Personal Access Token",
        "password",
        "figd_xxxxxxxxxxxxxxxxx",
        "mb-4"
      )}

      {/* Design URL input field */}
      {FormField("Design URL", "text", "https://www.figma.com/file/:", "mb-5")}

      {/* Primary action buttons for form submission */}
      <div className="mb-8 flex gap-3">
        {ActionButton("Awesome")}
        {ActionButton("Prepare")}
      </div>

      {/* Section header for recent items */}
      <div className="mb-8 flex items-center gap-2">
        <span className={`text-sm font-bold ${COLORS.SECONDARY_TEXT}`}>
          Recent Breakdowns
        </span>
      </div>

      {/* Footer with copyright attribution */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className={`text-xs ${COLORS.PRIMARY_TEXT}`}>© AutonomyAI</p>
      </div>
    </div>
  );
};
