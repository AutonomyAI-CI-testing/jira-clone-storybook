import { MdSettings } from "react-icons/md";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";

// Color palette for the UI magician Agent card
const COLORS = {
  background: "bg-black",
  borderColor: "border-[#333333]",
  headerText: "text-[#b5b5b5]",
  headerHover: "hover:text-[#d0d0d0]",
  secondaryText: "text-[#8b9291]",
  labelText: "text-[#a4a4a3]",
  inputBg: "bg-[#1a1a1a]",
  inputHoverBg: "hover:bg-[#222222]",
  inputText: "text-[#737470]",
  placeholder: "placeholder-[#71726e]",
  buttonBg: "bg-[#a85a3a]",
  buttonText: "text-[#8c8078]",
  buttonHover: "hover:bg-[#b86840]",
  buttonActive: "active:bg-[#9a5230]",
  footerBorder: "border-gray-300",
  copyrightText: "text-[#a4a4a3]",
} as const;

/**
 * Icon button component for small action buttons throughout the card.
 * Used for settings, info, and collapse/expand toggles.
 */
const IconButton = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <button
    className={`flex items-center ${COLORS.headerText} ${COLORS.headerHover}`}
  >
    {children}
  </button>
);

/**
 * Section header with label and optional info icon button.
 */
const SectionHeader = ({
  label,
  hasInfo = false,
  className = "",
}: {
  label: string;
  hasInfo?: boolean;
  className?: string;
}): JSX.Element => (
  <div className={`flex items-center gap-2 ${className}`}>
    <label className="text-xs font-semibold text-[#a4a4a3]">{label}</label>
    {hasInfo && (
      <IconButton>
        <AiOutlineInfoCircle size={16} />
      </IconButton>
    )}
  </div>
);

/**
 * Card displaying configuration for the UI magician Agent.
 * Shows agent name, collapsible sections, input fields, and action buttons.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className={`w-64 space-y-6 ${COLORS.background} p-5`}>
      {/* Card header with title and settings button */}
      <div className="flex items-center justify-between">
        <h2 className={`text-sm font-semibold ${COLORS.headerText}`}>
          UI magician Agent
        </h2>
        <IconButton>
          <MdSettings size={20} />
        </IconButton>
      </div>

      {/* Collapsible section with collapsed state indicator (up arrow) */}
      <div
        className={`flex items-center gap-2 border-t ${COLORS.borderColor} pt-4`}
      >
        <IconButton>
          <RiArrowUpSLine size={18} />
        </IconButton>
        <span className={`text-xs font-semibold ${COLORS.secondaryText}`}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Collapsible section with expanded state indicator (down arrow) */}
      <div
        className={`flex items-center gap-2 border-t ${COLORS.borderColor} pt-4`}
      >
        <IconButton>
          <RiArrowDownSLine size={18} />
        </IconButton>
        <span className="text-sm font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token input section */}
      <div className="space-y-2">
        <SectionHeader label="Personal Access Token" hasInfo />
        <input
          type="password"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={`w-full rounded border ${COLORS.borderColor} ${COLORS.inputBg} px-3 py-2 text-xs ${COLORS.inputText} ${COLORS.placeholder} ${COLORS.inputHoverBg} focus:${COLORS.inputBg} focus:outline-none`}
          readOnly
        />
      </div>

      {/* Design URL input section */}
      <div className="space-y-2">
        <SectionHeader label="Design URL" hasInfo />
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={`w-full rounded border ${COLORS.borderColor} ${COLORS.inputBg} px-3 py-2 text-xs ${COLORS.inputText} ${COLORS.placeholder} ${COLORS.inputHoverBg} focus:${COLORS.inputBg} focus:outline-none`}
          readOnly
        />
      </div>

      {/* Action buttons for agent control */}
      <div className="flex gap-3 pt-2">
        <button
          className={`flex-1 rounded ${COLORS.buttonBg} px-4 py-2 text-xs font-semibold ${COLORS.buttonText} ${COLORS.buttonHover} ${COLORS.buttonActive}`}
        >
          Awesome
        </button>
        <button
          className={`flex-1 rounded ${COLORS.buttonBg} px-4 py-2 text-xs font-semibold ${COLORS.buttonText} ${COLORS.buttonHover} ${COLORS.buttonActive}`}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section header */}
      <div className={`border-t ${COLORS.borderColor} pt-4`}>
        <h3 className="text-sm font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer with copyright */}
      <div className={`border-t ${COLORS.footerBorder} pt-3 text-center`}>
        <p className={`text-xs ${COLORS.copyrightText}`}>© AutonomyAI</p>
      </div>
    </div>
  );
};
