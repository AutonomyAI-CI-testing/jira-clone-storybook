import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

// Text constants - these are the intentional display values
const CARD_TITLE = "UI magician Agent";
const SUBTITLE_TEXT = "From entire frame to a singl...";
const ADD_NEW_DESIGN_LABEL = "Add New Design";
const PERSONAL_ACCESS_TOKEN_LABEL = "Personal Access Token";
const DESIGN_URL_LABEL = "Design URL";
const TOKEN_PLACEHOLDER = "figd_xxxxxxxxxxxxxxxxxx";
const URL_PLACEHOLDER = "https://www.figma.com/file/:";
const BUTTON_AWESOME_LABEL = "Awesome";
const BUTTON_PREPARE_LABEL = "Prepare";
const RECENT_BREAKDOWNS_TITLE = "Recent Breakdowns";
const FOOTER_COPYRIGHT = "© AutonomyAI";

/**
 * Renders a labeled input field with an info icon.
 * Extracted to eliminate duplication and improve maintainability.
 */
const InputField = ({
  label,
  placeholder,
  labelColor,
  borderColor,
}: {
  label: string;
  placeholder: string;
  labelColor: string;
  borderColor: string;
}) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <span
        className={`font-primary-bold text-[11.5px] leading-[13.92px] ${labelColor}`}
      >
        {label}
      </span>
      <FiInfo className={`h-[15px] w-[15px] ${labelColor}`} />
    </div>
    <div className={`rounded border-2 ${borderColor} bg-[#272822] px-4 py-3`}>
      <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#737470]">
        {placeholder}
      </span>
    </div>
  </div>
);

/**
 * Renders a section header with a chevron icon.
 * Used for collapsible/expandable section headers throughout the card.
 */
const SectionHeader = ({
  text,
  textColor,
  iconColor,
  textSize = "text-[13.5px]",
}: {
  text: string;
  textColor: string;
  iconColor: string;
  textSize?: string;
}) => (
  <div className="flex items-center gap-2">
    <FiChevronUp className={`h-3 w-3 ${iconColor}`} />
    <span
      className={`font-primary-bold ${textSize} leading-[13.92px] ${textColor}`}
    >
      {text}
    </span>
  </div>
);

/**
 * TestCard component displays a design agent configuration interface.
 * Features a progress indicator, form fields for token/URL input,
 * and action buttons for workflow management.
 */
export const TestCard = () => {
  return (
    <div className="relative w-[254px] rounded bg-[#1C1D17]">
      {/* Progress indicator - orange gradient shows active state */}
      <div className="from-orange-700 to-orange-500 h-[9px] w-full rounded-t bg-gradient-to-r" />

      <div className="flex flex-col gap-5 p-5">
        {/* Header with title and settings icon */}
        <div className="flex items-center justify-between">
          <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#B5B5B5]">
            {CARD_TITLE}
          </span>
          <FiSettings className="h-4 w-[14px] text-[#B5B5B5]" />
        </div>

        {/* Subtitle with truncated description */}
        <SectionHeader
          text={SUBTITLE_TEXT}
          textColor="text-[#8B9291]"
          iconColor="text-[#8B9291]"
          textSize="text-[11.5px]"
        />

        {/* Vertical spacing between header and form sections */}
        <div className="h-12" />

        <SectionHeader
          text={ADD_NEW_DESIGN_LABEL}
          textColor="text-[#B2B2B1]"
          iconColor="text-[#B2B2B1]"
        />

        {/* Form fields for API token and design URL */}
        <InputField
          label={PERSONAL_ACCESS_TOKEN_LABEL}
          placeholder={TOKEN_PLACEHOLDER}
          labelColor="text-[#A4A4A3]"
          borderColor="border-[#A5ADAD]"
        />

        <InputField
          label={DESIGN_URL_LABEL}
          placeholder={URL_PLACEHOLDER}
          labelColor="text-[#A3A3A2]"
          borderColor="border-[#929291]"
        />

        {/* Action buttons for workflow steps */}
        <div className="flex gap-4">
          <button className="flex h-[41px] w-[90px] items-center justify-center rounded bg-[#843A17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8C8078]">
            {BUTTON_AWESOME_LABEL}
          </button>
          <button className="flex h-[41px] w-[90px] items-center justify-center rounded bg-[#843A17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8C8078]">
            {BUTTON_PREPARE_LABEL}
          </button>
        </div>

        {/* Recent activity section */}
        <div className="mt-4">
          <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#B0B0B0]">
            {RECENT_BREAKDOWNS_TITLE}
          </span>
        </div>

        {/* Footer with copyright notice */}
        <div className="border-gray-300 border-t pt-3 text-center">
          <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#B0B0B0]">
            {FOOTER_COPYRIGHT}
          </span>
        </div>
      </div>
    </div>
  );
};
