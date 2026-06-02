import { IoChevronUp, IoChevronDown } from "react-icons/io5";
import { HiCog6Tooth, HiInformationCircle } from "react-icons/hi2";

/**
 * FormInputField component for consistent input styling.
 * Extracted to reduce repetition of the label + info icon + input pattern.
 */
interface FormInputFieldProps {
  label: string;
  placeholder: string;
}

const FormInputField = ({ label, placeholder }: FormInputFieldProps): JSX.Element => (
  <div>
    <div className="mb-2 flex items-center gap-1">
      <label className="text-xs text-gray-500">{label}</label>
      <HiInformationCircle size={14} className="text-gray-600" />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border border-gray-600 bg-transparent px-3 py-2 text-xs text-gray-300 placeholder-gray-600 outline-none"
    />
  </div>
);

/**
 * TestCard component for previewing Figma design imports.
 * Presents a form for entering Figma credentials and recent breakdown history.
 */
export const TestCard = (): JSX.Element => {
  // Button styling: orange theme with hover and active states for clear interactivity
  const buttonClassName =
    "flex-1 bg-orange-700 px-3 py-2 text-xs font-semibold text-orange-900 hover:bg-orange-600 active:bg-orange-800";

  return (
    <div
      id="testElem"
      className="w-[254px] bg-black p-4 text-gray-300"
      style={{ minHeight: "508px" }}
    >
      {/* Header with title and settings icon */}
      <div className="mb-5 flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-400">
          UI magician Agent
        </span>
        <HiCog6Tooth size={18} className="text-gray-400" />
      </div>

      {/* Collapsed section indicator with truncated preview text */}
      <div className="mb-6 flex items-start gap-2">
        <IoChevronUp size={16} className="mt-1 flex-shrink-0 text-gray-500" />
        <span className="text-xs text-gray-500">
          From entire frame to a singl...
        </span>
      </div>

      {/* Expandable section for adding new designs */}
      <div className="mb-5 flex items-center gap-2">
        <IoChevronDown size={16} className="text-gray-500" />
        <span className="text-xs font-semibold text-gray-400">
          Add New Design
        </span>
      </div>

      {/* Form inputs for Figma credentials */}
      <div className="space-y-4">
        <FormInputField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
        />
        <FormInputField label="Design URL" placeholder="https://www.figma.com/file/:" />
      </div>

      {/* Action buttons: dual-button layout for submit/cancel pattern */}
      <div className="mt-6 flex gap-3">
        <button className={buttonClassName}>Awesome</button>
        <button className={buttonClassName}>Prepare</button>
      </div>

      {/* Section for displaying recent design breakdowns */}
      <div className="mt-8">
        <span className="text-xs font-semibold text-gray-400">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
