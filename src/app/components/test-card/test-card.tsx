import {
  RiSettings4Line,
  RiArrowUpSLine,
  RiInformationLine,
} from "react-icons/ri";

// CSS class constants to avoid duplication and improve maintainability
const BUTTON_CLASS =
  "flex-1 rounded bg-[#b85a3f] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078] transition-colors hover:bg-[#c66847] active:bg-[#a24d35]";

const INPUT_BASE_CLASS =
  "w-full rounded border border-[#3a3a3a] bg-[#1a1a1a] px-3 py-2 font-semibold";

interface InputFieldProps {
  label: string;
  placeholder: string;
  textColor: string;
}

/**
 * Renders a labeled input field with an information icon.
 * Used for authentication and design URL inputs in the agent panel.
 */
function InputField({
  label,
  placeholder,
  textColor,
}: InputFieldProps): JSX.Element {
  return (
    <div className="mb-6">
      <div className="mb-2 flex items-center gap-1">
        <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
          {label}
        </label>
        <RiInformationLine size={16} className="text-[#a4a4a3]" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className={`${INPUT_BASE_CLASS} text-[${textColor === "#737470" ? "11.5px" : "10.5px"}] text-[${textColor}] placeholder-[${textColor}]`}
      />
    </div>
  );
}

interface CollapsibleSectionProps {
  text: string;
  textColor: string;
  fontSize?: string;
}

/**
 * Renders a collapsible section header with an arrow icon and text.
 * Represents expandable/collapsible sections in the agent control panel.
 */
function CollapsibleSection({
  text,
  textColor,
  fontSize = "11.5px",
}: CollapsibleSectionProps): JSX.Element {
  const marginClass = fontSize === "13.5px" ? "mb-6" : "mb-8";
  return (
    <div className={`${marginClass} flex items-center gap-2`}>
      <RiArrowUpSLine size={16} className={`text-[${textColor}]`} />
      <span className={`text-[${fontSize}] font-semibold text-[${textColor}]`}>
        {text}
      </span>
    </div>
  );
}

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-64 rounded-lg bg-black p-5">
      {/* Header with agent name and settings icon */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <RiSettings4Line size={20} className="text-[#b5b5b5]" />
      </div>

      {/* First collapsible section with frame-related content */}
      <CollapsibleSection
        text="From entire frame to a singl..."
        textColor="#8b9291"
      />

      {/* Second collapsible section for adding new designs */}
      <CollapsibleSection
        text="Add New Design"
        textColor="#b2b2b1"
        fontSize="13.5px"
      />

      {/* Personal Access Token input field */}
      <InputField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        textColor="#737470"
      />

      {/* Design URL input field */}
      <InputField
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        textColor="#71726e"
      />

      {/* Action buttons for user interactions */}
      <div className="mb-8 flex gap-4">
        <button className={BUTTON_CLASS}>Awesome</button>
        <button className={BUTTON_CLASS}>Prepare</button>
      </div>

      {/* Recent Breakdowns section title */}
      <div>
        <h2 className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer with copyright information */}
      <div className="border-t border-gray-300 pt-3 text-center text-[11.5px] font-semibold text-[#737470]">
        © AutonomyAI
      </div>
    </div>
  );
};
