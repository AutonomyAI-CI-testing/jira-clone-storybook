import { FiSettings, FiInfo, FiChevronUp } from "react-icons/fi";
import type { ReactNode } from "react";

/**
 * Reusable component for displaying a section header with an optional chevron icon.
 * Used for collapsible or expandable sections in the card.
 */
const SectionHeader = ({
  children,
  showIcon = false,
  iconColor = "text-[#b2b2b1]",
  textColor = "text-[#b2b2b1]",
}: {
  children: ReactNode;
  showIcon?: boolean;
  iconColor?: string;
  textColor?: string;
}) => (
  <div className="flex items-center gap-2">
    {showIcon && <FiChevronUp className={`h-3 w-3 ${iconColor}`} />}
    <span className={`text-[13.5px] leading-[16.34px] ${textColor}`}>
      {children}
    </span>
  </div>
);

/**
 * Reusable component for input fields with labels and info icons.
 * Standardizes the layout and styling of form inputs in the card.
 */
const InputField = ({
  label,
  value,
  borderColor = "border-[#a5adad]",
  labelColor = "text-[#a4a4a3]",
  valueColor = "text-[#737470]",
  valueFontSize = "text-[11.5px] leading-[13.92px]",
}: {
  label: string;
  value: string;
  borderColor?: string;
  labelColor?: string;
  valueColor?: string;
  valueFontSize?: string;
}) => (
  <div>
    <div className="mb-2 flex items-center gap-2">
      <span className={`text-[11.5px] leading-[13.92px] ${labelColor}`}>
        {label}
      </span>
      <FiInfo className={`h-[15px] w-[15px] ${labelColor}`} />
    </div>
    <div className={`rounded border ${borderColor} bg-[#272822] px-3 py-2.5`}>
      <span className={`${valueFontSize} ${valueColor}`}>{value}</span>
    </div>
  </div>
);

/**
 * TestCard component displays a UI configuration card for a design agent.
 * The card includes agent info, design configuration fields, and action buttons.
 *
 * Design notes:
 * - Uses specific hex colors and precise pixel sizes to match the design system
 * - Large margins (mb-16, mb-20) create intentional visual breathing room between sections
 * - Border color on footer (border-gray-300) intentionally differs from other borders for visual hierarchy
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] rounded bg-[#1e1e1a] p-5 font-semibold text-[#b5b5b5]">
      {/* Header with agent name and settings icon */}
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[13.5px] leading-[16.34px]">
          UI magician Agent
        </span>
        <FiSettings className="h-4 w-4 text-[#b5b5b5]" />
      </div>

      {/* Agent description - truncated text is intentional */}
      <div className="mb-16 flex items-center gap-2">
        <FiChevronUp className="h-3 w-3 text-[#8b9291]" />
        <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section: Add New Design */}
      <div className="mb-6">
        <SectionHeader
          showIcon
          iconColor="text-[#b2b2b1]"
          textColor="text-[#b2b2b1]"
        >
          Add New Design
        </SectionHeader>
      </div>

      {/* Input: Personal Access Token - masked value is intentional */}
      <div className="mb-3">
        <InputField
          label="Personal Access Token"
          value="figd_xxxxxxxxxxxxxxxxxx"
          borderColor="border-[#a5adad]"
          labelColor="text-[#a4a4a3]"
          valueColor="text-[#737470]"
        />
      </div>

      {/* Input: Design URL - placeholder format is intentional */}
      <div className="mb-4">
        <InputField
          label="Design URL"
          value="https://www.figma.com/file/:"
          borderColor="border-[#929291]"
          labelColor="text-[#a3a3a2]"
          valueColor="text-[#71726e]"
          valueFontSize="text-[10.5px] leading-[12.71px]"
        />
      </div>

      {/* Action buttons - intentionally styled identically */}
      <div className="mb-20 flex gap-4">
        <button className="flex-1 rounded bg-[#843a17] px-8 py-3 text-[11.5px] leading-[13.92px] text-[#c9b5a8]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843a17] px-8 py-3 text-[11.5px] leading-[13.92px] text-[#c9b5a8]">
          Prepare
        </button>
      </div>

      {/* Section: Recent Breakdowns */}
      <div>
        <span className="text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>

      {/* Footer with copyright - border-gray-300 provides subtle contrast */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <span className="text-[11.5px] leading-[13.92px] text-[#b5b5b5]">
          © AutonomyAI
        </span>
      </div>
    </div>
  );
};
