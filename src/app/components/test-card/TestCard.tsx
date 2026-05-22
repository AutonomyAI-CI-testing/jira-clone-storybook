import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

// Design tokens and color constants
const CARD_WIDTH = "w-[254px]";
const BUTTON_COLORS = {
  bg: "bg-[#843a17]",
  hover: "hover:bg-[#963e1c]",
  active: "active:bg-[#723014]",
};

const INPUT_COLORS = {
  border: "border-[#a5adad]",
  bg: "bg-[#272822]",
  text: "text-[#71726e]",
  placeholder: "placeholder-[#71726e]",
};

const TOKEN_INPUT_COLORS = {
  border: "border-[#929291]",
  bg: "bg-[#272822]",
  text: "text-[#737470]",
  placeholder: "placeholder-[#737470]",
};

const ICON_COLORS = {
  header: "text-[#b5b5b5]",
  collapsed: "text-[#8b9291]",
  section: "text-[#b2b2b1]",
  label: "text-[#a4a4a3]",
};

const TEXT_COLORS = {
  header: "text-[#b5b5b5]",
  collapsed: "text-[#8b9291]",
  section: "text-[#b2b2b1]",
  label: "text-[#a4a4a3]",
  footer: "text-[#b0b0b0]",
  copyright: "text-[#a4a4a3]",
};

// Helper component for input fields with labels
const LabeledInput = ({
  label,
  placeholder,
  showIcon = true,
  inputColors,
}: {
  label: string;
  placeholder: string;
  showIcon?: boolean;
  inputColors: typeof INPUT_COLORS | typeof TOKEN_INPUT_COLORS;
}) => (
  <div>
    <div className="mb-2 flex items-center gap-2">
      <label
        className={`font-inter text-[11.5px] font-semibold ${TEXT_COLORS.label}`}
      >
        {label}
      </label>
      {showIcon && (
        <FiInfo className={`h-3 w-3 ${ICON_COLORS.label}`} strokeWidth={2} />
      )}
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full border ${inputColors.border} ${inputColors.bg} font-inter px-3 py-2 text-[10.5px] font-semibold ${inputColors.text} ${inputColors.placeholder}`}
    />
  </div>
);

// Helper component for action buttons
const ActionButton = ({ children }: { children: string }) => (
  <button
    className={`flex-1 rounded ${BUTTON_COLORS.bg} font-inter px-3 py-2 text-[11.5px] font-semibold text-[#8c8078] transition-colors ${BUTTON_COLORS.hover} ${BUTTON_COLORS.active}`}
  >
    {children}
  </button>
);

export const TestCard = () => {
  return (
    <div className={`${CARD_WIDTH} bg-black p-5 text-left`}>
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between">
        <h1
          className={`font-inter text-[13.5px] font-semibold ${TEXT_COLORS.header}`}
        >
          UI magician Agent
        </h1>
        <FiSettings
          className={`h-4 w-4 ${ICON_COLORS.header}`}
          strokeWidth={1.5}
        />
      </div>

      {/* Collapsible Section 1 */}
      <div className="mb-8 flex items-center gap-2">
        <FiChevronUp
          className={`h-3 w-3 ${ICON_COLORS.collapsed}`}
          strokeWidth={2}
        />
        <p
          className={`font-inter text-[11.5px] font-semibold ${TEXT_COLORS.collapsed}`}
        >
          From entire frame to a singl...
        </p>
      </div>

      {/* Collapsible Section 2 - Add New Design */}
      <div className="mb-5 flex items-center gap-2">
        <FiChevronUp
          className={`h-3 w-3 ${ICON_COLORS.section}`}
          strokeWidth={2}
        />
        <h2
          className={`font-inter text-[13.5px] font-semibold ${TEXT_COLORS.section}`}
        >
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <LabeledInput
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          inputColors={TOKEN_INPUT_COLORS}
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <LabeledInput
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          inputColors={INPUT_COLORS}
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-8 flex gap-3">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Footer Section */}
      <p
        className={`font-inter text-[13.5px] font-semibold ${TEXT_COLORS.footer}`}
      >
        Recent Breakdowns
      </p>

      {/* Copyright Footer */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p
          className={`font-inter text-[10.5px] font-semibold ${TEXT_COLORS.copyright}`}
        >
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
