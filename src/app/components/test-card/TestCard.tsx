// Color palette for the dark theme UI
const COLORS = {
  headerText: "#b5b5b5",
  headerIcon: "#666",
  collapseText: "#999",
  collapseDescription: "#8b9291",
  sectionTitle: "#b2b2b1",
  label: "#a4a4a3",
  labelAlt: "#a3a3a2",
  infoIcon: "#555",
  inputBorder: "#444",
  inputBackground: "#1a1a1a",
  inputText: "#737470",
  inputTextAlt: "#71726e",
  buttonBackground: "#a0644e",
  buttonText: "#8c8078",
  recentBreakdownsText: "#b0b0b0",
};

const FieldLabel = ({
  label,
  color = COLORS.label,
}: {
  label: string;
  color?: string;
}): JSX.Element => (
  <div className="mb-2 flex items-center gap-2">
    <label className="text-xs" style={{ color }}>
      {label}
    </label>
    <div
      className="border-gray-600 h-4 w-4 border"
      style={{ borderColor: COLORS.infoIcon }}
    />
  </div>
);

const FormInput = ({
  placeholder,
  textColor = COLORS.inputText,
}: {
  placeholder: string;
  textColor?: string;
}): JSX.Element => (
  <input
    type="text"
    placeholder={placeholder}
    className="w-full border px-3 py-2 text-xs"
    style={{
      borderColor: COLORS.inputBorder,
      backgroundColor: COLORS.inputBackground,
      color: textColor,
    }}
    readOnly
  />
);

const ActionButton = ({ label }: { label: string }): JSX.Element => (
  <button
    className="flex-1 rounded px-4 py-2 text-xs font-semibold"
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
      className="w-64 bg-black p-5 font-primary text-sm font-semibold"
    >
      {/* Header with title and info icon */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-sm" style={{ color: COLORS.headerText }}>
          UI magician Agent
        </h1>
        <div
          className="border-gray-500 h-5 w-5 border"
          style={{ borderColor: COLORS.headerIcon }}
        />
      </div>

      {/* Collapsible section showing currently selected design */}
      <div className="mb-8 flex items-center gap-2">
        <span className="text-xs" style={{ color: COLORS.collapseText }}>
          ▲
        </span>
        <span className="text-xs" style={{ color: COLORS.collapseDescription }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Section header for design configuration */}
      <div className="mb-6 flex items-center gap-2">
        <span className="text-xs" style={{ color: COLORS.collapseText }}>
          ▲
        </span>
        <h2 className="text-sm" style={{ color: COLORS.sectionTitle }}>
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token input field */}
      <div className="mb-6">
        <FieldLabel label="Personal Access Token" />
        <FormInput placeholder="figd_xxxxxxxxxxxxxxxxxx" />
      </div>

      {/* Design URL input field */}
      <div className="mb-8">
        <FieldLabel label="Design URL" color={COLORS.labelAlt} />
        <FormInput
          placeholder="https://www.figma.com/file/:"
          textColor={COLORS.inputTextAlt}
        />
      </div>

      {/* Action buttons for confirming design setup */}
      <div className="mb-8 flex gap-4">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Section showing recent design operations */}
      <div className="text-xs" style={{ color: COLORS.recentBreakdownsText }}>
        Recent Breakdowns
      </div>
    </div>
  );
};
