/**
 * Design tokens for the TestCard component
 * Colors, typography, and spacing values are centralized for consistency
 * and easier theme adjustments.
 */
const COLORS = {
  background: "#1a1a1a",
  inputBg: "#272822",
  buttonBg: "#843a17",
  headerText: "#b5b5b5",
  mutedText: "#8b9291",
  sectionHeading: "#b2b2b1",
  fieldLabel: "#a4a4a3",
  designUrlLabel: "#a3a3a2",
  inputText: "#737470",
  inputTextAlt: "#71726e",
  buttonText: "#8c8078",
  recentBreakdownsText: "#b0b0b0",
};

// Typography sizes and weights for consistent visual hierarchy across the component
const TYPOGRAPHY = {
  headerTitle: { fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" },
  headerIcon: { fontSize: "14px" },
  caretIcon: { fontSize: "10px", lineHeight: 1 },
  caretText: { fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" },
  sectionCaret: { fontSize: "13px", lineHeight: 1 },
  sectionTitle: { fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" },
  formLabel: { fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" },
  formIcon: { fontSize: "13px" },
  inputToken: { fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" },
  inputUrl: { fontSize: "10.5px", fontWeight: 600, lineHeight: "12.71px" },
  buttonText: { fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" },
  recentBreakdowns: {
    fontSize: "13.5px",
    fontWeight: 600,
    lineHeight: "16.34px",
  },
};

// Button styling configuration shared by all action buttons
const BUTTON_STYLE = {
  ...TYPOGRAPHY.buttonText,
  borderRadius: "4px",
  width: "85px",
  height: "37px",
};

interface FormInputProps {
  label: string;
  placeholder: string;
  inputStyle: React.CSSProperties;
  labelColor: string;
}

/**
 * FormInput component for displaying read-only input fields with labels and help icons.
 * Used for displaying tokens and URLs that users need to reference but not edit.
 */
const FormInput = ({
  label,
  placeholder,
  inputStyle,
  labelColor,
}: FormInputProps) => (
  <div>
    <div className="mb-1.5 flex items-center gap-2">
      <span className={labelColor} style={TYPOGRAPHY.formLabel}>
        {label}
      </span>
      <span className={labelColor} style={TYPOGRAPHY.formIcon}>
        ⓘ
      </span>
    </div>
    <input
      type="text"
      readOnly
      placeholder={placeholder}
      className="w-full rounded bg-[#272822] px-3 py-2 outline-none"
      style={inputStyle}
    />
  </div>
);

/**
 * SectionHeading component for displaying collapsible section headers.
 * Shows a caret icon followed by the section title text.
 */
const SectionHeading = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <span className="text-[#b2b2b1]" style={TYPOGRAPHY.sectionCaret}>
      ∧
    </span>
    <span className="text-[#b2b2b1]" style={TYPOGRAPHY.sectionTitle}>
      {text}
    </span>
  </div>
);

/**
 * CaretRow component for displaying a description row with a caret indicator.
 * Used for expandable/collapsible content hints.
 */
const CaretRow = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <span className="text-[#8b9291]" style={TYPOGRAPHY.caretIcon}>
      ∧
    </span>
    <span className="text-[#8b9291]" style={TYPOGRAPHY.caretText}>
      {text}
    </span>
  </div>
);

/**
 * TestCard component displays a card UI for configuring design integrations.
 * Shows form inputs for authentication tokens and URLs, along with action buttons.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#1a1a1a] p-5 text-white"
      style={{ width: "254px", minHeight: "508px" }}
    >
      {/* Header: title and settings icon */}
      <div className="flex items-center justify-between">
        <span className="text-[#b5b5b5]" style={TYPOGRAPHY.headerTitle}>
          UI magician Agent
        </span>
        <span className="text-[#b5b5b5]" style={TYPOGRAPHY.headerIcon}>
          ⚙
        </span>
      </div>

      {/* Description row with caret */}
      <div className="mt-4">
        <CaretRow text="From entire frame to a singl..." />
      </div>

      {/* Spacer */}
      <div className="mt-16" />

      {/* Section heading */}
      <div className="mt-5">
        <SectionHeading text="Add New Design" />
      </div>

      {/* Form inputs */}
      <div className="mt-5 flex flex-col gap-3">
        <FormInput
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          labelColor="text-[#a4a4a3]"
          inputStyle={{
            ...TYPOGRAPHY.inputToken,
            color: COLORS.inputText,
            border: `1px solid #a5adad`,
          }}
        />
        <FormInput
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          labelColor="text-[#a3a3a2]"
          inputStyle={{
            ...TYPOGRAPHY.inputUrl,
            color: COLORS.inputTextAlt,
            border: `2px solid #929291`,
          }}
        />
      </div>

      {/* Action buttons */}
      <div className="mt-5 flex gap-3">
        <button
          type="button"
          className="rounded bg-[#843a17] px-6 py-2.5 text-[#8c8078]"
          style={BUTTON_STYLE}
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded bg-[#843a17] px-6 py-2.5 text-[#8c8078]"
          style={BUTTON_STYLE}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section */}
      <div className="mt-16">
        <span className="text-[#b0b0b0]" style={TYPOGRAPHY.recentBreakdowns}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
