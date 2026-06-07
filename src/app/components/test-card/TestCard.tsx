// Design tokens: colors, typography, and spacing values
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

const TYPOGRAPHY = {
  // Header title
  headerTitle: { fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" },
  // Header icon
  headerIcon: { fontSize: "14px" },
  // Caret icon
  caretIcon: { fontSize: "10px", lineHeight: 1 },
  // Caret text
  caretText: { fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" },
  // Section heading caret
  sectionCaret: { fontSize: "13px", lineHeight: 1 },
  // Section heading text
  sectionTitle: { fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" },
  // Form label
  formLabel: { fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" },
  // Form label icon
  formIcon: { fontSize: "13px" },
  // Input text (token)
  inputToken: { fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" },
  // Input text (URL)
  inputUrl: { fontSize: "10.5px", fontWeight: 600, lineHeight: "12.71px" },
  // Button text
  buttonText: { fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" },
  // Recent breakdowns
  recentBreakdowns: {
    fontSize: "13.5px",
    fontWeight: 600,
    lineHeight: "16.34px",
  },
};

interface FormInputProps {
  label: string;
  placeholder: string;
  inputStyle: React.CSSProperties;
  labelColor: string;
}

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
          style={{
            ...TYPOGRAPHY.buttonText,
            borderRadius: "4px",
            width: "85px",
            height: "37px",
          }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded bg-[#843a17] px-6 py-2.5 text-[#8c8078]"
          style={{
            ...TYPOGRAPHY.buttonText,
            borderRadius: "4px",
            width: "85px",
            height: "37px",
          }}
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
