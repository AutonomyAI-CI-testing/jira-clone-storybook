import {
  IoSettingsSharp,
  IoChevronUp,
  IoInformationCircleOutline,
} from "react-icons/io5";

/**
 * FormField component to reduce duplication between the two input fields.
 * Each field has a label with an info icon and a styled text input.
 */
const FormField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div className="mb-3">
    <div className="mb-2 flex items-center gap-1.5">
      <label className="font-primary text-[11.5px] leading-[13.92px] text-[#b5b5b5]">
        {label}
      </label>
      <IoInformationCircleOutline className="h-4 w-4 text-[#b5b5b5]" />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="focus-visible:outline-orange-500 w-full rounded border border-[#555555] bg-[#3a3a3a] px-3 py-2 font-primary text-[11.5px] leading-[13.92px] text-[#b5b5b5] placeholder:text-[#8c8078] focus-visible:bg-[#444444]"
    />
  </div>
);

/**
 * SectionHeader component to reduce duplication between collapsible section headers.
 * Each has a chevron icon and text content.
 */
const SectionHeader = ({
  text,
  isBold = false,
}: {
  text: string;
  isBold?: boolean;
}) => (
  <div className="mb-4 flex items-center gap-2">
    <IoChevronUp className="h-4 w-4 text-[#b5b5b5]" />
    {isBold ? (
      <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#c9c9c9]">
        {text}
      </h2>
    ) : (
      <span className="font-primary text-[11.5px] leading-[13.92px] text-[#8c8078]">
        {text}
      </span>
    )}
  </div>
);

/**
 * ActionButton component to reduce duplication between the two CTA buttons.
 * Both share the same orange brand styling with hover/active states.
 */
const ActionButton = ({ label }: { label: string }) => (
  <button className="rounded bg-[#b65c02] px-6 py-2 font-primary-bold text-[11.5px] leading-[13.92px] text-white hover:bg-[#974f0c] active:bg-[#7f4209]">
    {label}
  </button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-full max-w-[480px] rounded bg-[#2b2b2b] p-5">
      {/* Header with title and settings icon */}
      <div className="mb-3 flex items-center justify-between">
        <h1 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#c9c9c9]">
          UI magician Agent
        </h1>
        <IoSettingsSharp className="h-5 w-5 text-[#b5b5b5]" />
      </div>

      {/* Collapsible section indicator with truncated description */}
      <div className="mb-6">
        <SectionHeader text="From entire frame to a singl..." />
      </div>

      {/* Add New Design section header */}
      <SectionHeader text="Add New Design" isBold />

      {/* Form fields for Figma integration */}
      <FormField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <FormField
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      {/* Primary action buttons */}
      <div className="mb-6 flex gap-3">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Recent Breakdowns section header */}
      <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#c9c9c9]">
        Recent Breakdowns
      </h2>

      {/* Footer with copyright notice */}
      <div className="border-gray-300 mt-4 border-t pt-3 text-center">
        <span className="font-primary text-[11.5px] text-[#b5b5b5]">
          © AutonomyAI
        </span>
      </div>
    </div>
  );
};
