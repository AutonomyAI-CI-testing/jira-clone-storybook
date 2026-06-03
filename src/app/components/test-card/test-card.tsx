// Design system color tokens used throughout the component
const COLORS = {
  background: "#000000",
  headerText: "#b5b5b5",
  iconText: "#929291",
  collapsibleIconText: "#737470",
  collapsibleLabel1: "#8b9291",
  collapsibleLabel2: "#b2b2b1",
  labelText: "#a4a4a3",
  labelTextAlt: "#a3a3a2",
  inputBackground: "#272822",
  inputBorderDefault: "#a5adad",
  inputBorderActive: "#929291",
  inputText: "#737470",
  inputTextAlt: "#71726e",
  buttonBackground: "#843a17",
  buttonText: "#8c8078",
  recentBreakdownsText: "#b0b0b0",
} as const;

// Collapsible section header component for consistent styling
const CollapsibleSection = ({
  title,
  titleColor,
}: {
  title: string;
  titleColor: string;
}): JSX.Element => (
  <div className="mb-6">
    <div className="flex items-center gap-2">
      <span style={{ color: COLORS.collapsibleIconText }}>▲</span>
      <h2 className="text-base font-semibold" style={{ color: titleColor }}>
        {title}
      </h2>
    </div>
  </div>
);

// Input field component with label and info icon
const InputField = ({
  label,
  placeholder,
  borderWidth = "1px",
  borderColor = COLORS.inputBorderDefault,
}: {
  label: string;
  placeholder: string;
  borderWidth?: string;
  borderColor?: string;
}): JSX.Element => (
  <div className={borderWidth === "2px" ? "mb-8" : "mb-6"}>
    <label
      className="mb-2 flex items-center gap-2 font-semibold"
      style={{
        color:
          borderColor === COLORS.inputBorderActive
            ? COLORS.labelTextAlt
            : COLORS.labelText,
      }}
    >
      {label}
      <span className="text-sm" style={{ color: COLORS.iconText }}>
        ⓘ
      </span>
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className="placeholder-gray-600 w-full border px-3 py-2"
      style={{
        backgroundColor: COLORS.inputBackground,
        borderColor,
        borderWidth,
        color:
          borderColor === COLORS.inputBorderActive
            ? COLORS.inputTextAlt
            : COLORS.inputText,
      }}
    />
  </div>
);

// Action button component for consistent styling
const ActionButton = ({ label }: { label: string }): JSX.Element => (
  <button
    className="rounded px-6 py-2 font-semibold"
    style={{
      backgroundColor: COLORS.buttonBackground,
      color: COLORS.buttonText,
    }}
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-black p-5 text-sm"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header with title and settings icon */}
      <div className="mb-8 flex items-center justify-between">
        <h1
          className="text-lg font-semibold"
          style={{ color: COLORS.headerText }}
        >
          UI magician Agent
        </h1>
        <span className="text-xl" style={{ color: COLORS.iconText }}>
          ⚙
        </span>
      </div>

      {/* Collapsible sections showing expandable content areas */}
      <CollapsibleSection
        title="From entire frame to a singl..."
        titleColor={COLORS.collapsibleLabel1}
      />
      <CollapsibleSection
        title="Add New Design"
        titleColor={COLORS.collapsibleLabel2}
      />

      {/* Input fields for Figma integration credentials */}
      <InputField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        borderWidth="1px"
        borderColor={COLORS.inputBorderDefault}
      />
      <InputField
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        borderWidth="2px"
        borderColor={COLORS.inputBorderActive}
      />

      {/* Action buttons for user interactions */}
      <div className="mb-12 flex gap-8">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Section header for past breakdowns */}
      <div>
        <h2
          className="text-base font-semibold"
          style={{ color: COLORS.recentBreakdownsText }}
        >
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
