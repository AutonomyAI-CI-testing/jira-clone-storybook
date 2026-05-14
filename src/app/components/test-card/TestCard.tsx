import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

/**
 * Helper component for rendering a section header with an expandable chevron icon.
 * Used for collapsible sections throughout the card.
 */
const SectionHeader = ({
  text,
  textColor = "text-[#b2b2b1]",
  iconColor = "text-[#b2b2b1]",
}: {
  text: string;
  textColor?: string;
  iconColor?: string;
}): JSX.Element => (
  <div className="flex items-center gap-2">
    <FiChevronUp className={`h-5 w-5 ${iconColor}`} />
    <h3 className={`text-[13.5px] leading-[16.34px] ${textColor}`}>{text}</h3>
  </div>
);

/**
 * Helper component for rendering form input fields with labels and info icons.
 * Maintains consistent styling for all input fields in the card.
 */
const FormField = ({
  label,
  value,
  labelColor,
  valueColor,
  borderColor,
  marginBottom,
}: {
  label: string;
  value: string;
  labelColor: string;
  valueColor: string;
  borderColor: string;
  marginBottom: string;
}): JSX.Element => (
  <div className={marginBottom}>
    <div className="mb-2 flex items-center gap-1">
      <label className={`text-[11.5px] leading-[13.92px] ${labelColor}`}>
        {label}
      </label>
      <FiInfo className={`h-3.5 w-3.5 ${labelColor}`} />
    </div>
    <div className={`rounded border ${borderColor} bg-[#272822] px-3 py-4`}>
      <span className={`text-[16px] leading-[19.36px] ${valueColor}`}>
        {value}
      </span>
    </div>
  </div>
);

/**
 * Helper component for action buttons with consistent styling.
 */
const ActionButton = ({ label }: { label: string }): JSX.Element => (
  <button className="flex-1 rounded-md bg-[#843a17] px-6 py-4 text-[17px] leading-[20.57px] text-[#8c8078]">
    {label}
  </button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[340px] rounded-md bg-[#2b2b2b] p-5 font-semibold">
      {/* Header with agent title and settings */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <div className="rounded-full border border-[#b5b5b5] p-1.5">
          <FiSettings className="h-5 w-5 text-[#b5b5b5]" />
        </div>
      </div>

      {/* Agent description with truncated text */}
      <div className="mb-12 flex items-center gap-2">
        <FiChevronUp className="h-5 w-5 text-[#b0b0b0]" />
        <p className="text-[11.5px] leading-[13.92px] text-[#b0b0b0]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Section: Add New Design */}
      <div className="mb-6">
        <SectionHeader text="Add New Design" />
      </div>

      {/* Form fields for Figma integration */}
      <FormField
        label="Personal Access Token"
        value="figd_xxxxxxxxxxxxxxxxxx"
        labelColor="text-[#a4a4a3]"
        valueColor="text-[#737470]"
        borderColor="border-[#929291]"
        marginBottom="mb-4"
      />

      <FormField
        label="Design URL"
        value="https://www.figma.com/file/:"
        labelColor="text-[#a3a3a2]"
        valueColor="text-[#71726e]"
        borderColor="border-[#a5adad]"
        marginBottom="mb-8"
      />

      {/* Action buttons */}
      <div className="mb-14 flex gap-6">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Recent activity section */}
      <h3 className="text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h3>

      {/* Footer with copyright */}
      <div className="mt-4 border-t border-gray-300 pt-3 text-center">
        <p className="text-sm text-[#b0b0b0]">© AutonomyAI</p>
      </div>
    </div>
  );
};
