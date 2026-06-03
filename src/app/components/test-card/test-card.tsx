import { FaCog, FaChevronUp } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";

// Color palette for the dark theme UI
const COLORS = {
  header: "#b5b5b5",
  collapsedText: "#8b9291",
  sectionTitle: "#b2b2b1",
  labelPrimary: "#a4a4a3",
  labelSecondary: "#a3a3a2",
  icon: "#737470",
  inputBg: "#272822",
  inputBorderPrimary: "#a5adad",
  inputBorderSecondary: "#929291",
  inputText: "#737470",
  inputTextSecondary: "#71726e",
  buttonBg: "#843a17",
  buttonText: "#8c8078",
  footer: "#b0b0b0",
};

// Reusable input field component
const InputField = ({
  label,
  placeholder,
  borderColor,
  textColor,
}: {
  label: string;
  placeholder: string;
  borderColor: string;
  textColor: string;
}): JSX.Element => (
  <div>
    <div className="mb-2 flex items-center gap-1">
      <label className="font-primary-bold text-sm" style={{ color: COLORS.labelPrimary }}>
        {label}
      </label>
      <BsInfoCircle style={{ color: COLORS.icon }} size={14} />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border px-3 py-2 font-primary-bold text-sm placeholder-gray-600"
      style={{
        backgroundColor: COLORS.inputBg,
        borderColor,
        color: textColor,
      }}
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-black p-5 font-primary text-font"
    >
      <div className="mx-auto max-w-[254px] space-y-6">
        {/* Header with title and settings button */}
        <div className="flex items-center justify-between">
          <h1 className="font-primary-bold text-base" style={{ color: COLORS.header }}>
            UI magician Agent
          </h1>
          <button className="flex h-6 w-6 items-center justify-center text-lg">
            <FaCog style={{ color: COLORS.header }} />
          </button>
        </div>

        {/* Collapsible section for frame conversion */}
        <div className="flex items-start gap-2">
          <button className="mt-0.5 flex-shrink-0 text-sm">
            <FaChevronUp style={{ color: COLORS.collapsedText }} size={12} />
          </button>
          <p className="font-primary-bold text-sm" style={{ color: COLORS.collapsedText }}>
            From entire frame to a singl...
          </p>
        </div>

        {/* Expandable section for design input */}
        <div className="flex items-center gap-2">
          <button className="flex-shrink-0 text-sm">
            <FaChevronUp style={{ color: COLORS.sectionTitle }} size={12} />
          </button>
          <h2 className="font-primary-bold text-base" style={{ color: COLORS.sectionTitle }}>
            Add New Design
          </h2>
        </div>

        {/* Figma Personal Access Token input */}
        <InputField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          borderColor={COLORS.inputBorderPrimary}
          textColor={COLORS.inputText}
        />

        {/* Figma design file URL input */}
        <InputField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          borderColor={COLORS.inputBorderSecondary}
          textColor={COLORS.inputTextSecondary}
        />

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            className="flex-1 rounded px-4 py-2 font-primary-bold text-sm"
            style={{
              backgroundColor: COLORS.buttonBg,
              color: COLORS.buttonText,
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 rounded px-4 py-2 font-primary-bold text-sm"
            style={{
              backgroundColor: COLORS.buttonBg,
              color: COLORS.buttonText,
            }}
          >
            Prepare
          </button>
        </div>

        {/* Recent activity section */}
        <div className="pt-8">
          <p className="font-primary-bold text-base" style={{ color: COLORS.footer }}>
            Recent Breakdowns
          </p>
        </div>
      </div>
    </div>
  );
};
