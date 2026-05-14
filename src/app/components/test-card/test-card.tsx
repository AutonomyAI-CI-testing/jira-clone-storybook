import { FiSettings, FiInfo, FiChevronUp } from "react-icons/fi";

/**
 * Input field component for displaying labeled input boxes with info icons.
 * Used for Personal Access Token and Design URL fields.
 */
const InputField = ({
  label,
  value,
  borderWidth,
}: {
  label: string;
  value: string;
  borderWidth: "border" | "border-2";
}) => (
  <div>
    <div className="mb-4 flex items-center gap-2">
      <span className="text-[23px] leading-[27.84px] text-[#a3a3a2]">
        {label}
      </span>
      <FiInfo className="ml-auto h-[30px] w-[30px] text-[#a3a3a2]" />
    </div>
    <div
      className={`rounded ${borderWidth} border-[#929291] bg-[#272822] px-6 py-4`}
    >
      <span className="text-[21px] leading-[25.42px] text-[#71726e]">
        {value}
      </span>
    </div>
  </div>
);

/**
 * Action button component with consistent styling.
 * Used for "Awesome" and "Prepare" actions.
 */
const ActionButton = ({ label }: { label: string }) => (
  <button className="flex h-20 w-[170px] items-center justify-center rounded bg-[#843a17] text-[23px] leading-[27.84px] text-[#8c8078]">
    {label}
  </button>
);

/**
 * TestCard component displaying a UI magician agent configuration card.
 * Includes sections for design import, access tokens, and recent breakdowns.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[508px] bg-[#1a1a17] p-10 font-semibold">
      {/* Header with settings icon */}
      <div className="mb-6 flex items-center justify-between">
        <span className="text-[27px] leading-[32.68px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings className="h-8 w-8 text-[#b5b5b5]" />
      </div>

      {/* Collapsible subtitle section */}
      <div className="mb-12 flex items-center gap-4">
        <FiChevronUp className="h-4 w-4 text-[#8b9291]" />
        <span className="text-[23px] leading-[27.84px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Collapsible design import section */}
      <div className="mb-12 flex items-center gap-4">
        <FiChevronUp className="h-6 w-6 text-[#b2b2b1]" />
        <span className="text-[27px] leading-[32.68px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Figma Personal Access Token input - thinner border for visual hierarchy */}
      <div className="mb-8">
        <InputField
          label="Personal Access Token"
          value="figd_xxxxxxxxxxxxxxxxxx"
          borderWidth="border"
        />
      </div>

      {/* Figma Design URL input - thicker border to emphasize primary input */}
      <div className="mb-12">
        <InputField
          label="Design URL"
          value="https://www.figma.com/file/:"
          borderWidth="border-2"
        />
      </div>

      {/* Action buttons for workflow */}
      <div className="mb-16 flex gap-6">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Recent breakdowns section header */}
      <div>
        <span className="text-[27px] leading-[32.68px] text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>

      {/* Footer with copyright */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <span className="text-sm text-[#b5b5b5]">© AutonomyAI</span>
      </div>
    </div>
  );
};
