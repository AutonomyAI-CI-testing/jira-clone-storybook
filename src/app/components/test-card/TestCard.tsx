import { HiChevronUp, HiCog } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";

/**
 * TestCard - A standalone UI component replicating a "UI magician Agent" panel.
 * This component is intended for visual demonstration and testing in Storybook.
 * Content is intentionally hardcoded to match specific Figma design requirements.
 */
const TestCard = () => {
  return (
    <div
      id="testElem"
      className="font-sans w-full max-w-sm rounded-lg bg-[#2a2a2a] p-4 text-white"
    >
      {/* Header: Identity and Settings */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-lg font-bold text-white">UI magician Agent</h1>
        <HiCog className="text-gray-400 text-xl" />
      </div>

      {/* Status/Context row: Currently collapsed showing a truncated breadcrumb-style path */}
      <div className="mb-6 flex items-center gap-2 text-sm text-[#c47c4a]">
        <HiChevronUp />
        <span>From entire frame to a singl...</span>
      </div>

      <div className="mb-2 mt-4">
        {/* Section Header: Indicates the primary action area */}
        <div className="mb-4 flex items-center gap-2 text-base font-bold text-white">
          <HiChevronUp />
          <h2>Add New Design</h2>
        </div>

        <InputGroup
          id="accessToken"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />

        <InputGroup
          id="designUrl"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Action Buttons: Primary CTAs using a custom brown/orange palette to match design */}
      <div className="mb-6 mt-2 flex gap-3">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Footer Section: Placeholder for historical activity */}
      <div>
        <h2 className="mt-4 text-base font-bold text-white">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};

interface InputGroupProps {
  id: string;
  label: string;
  placeholder: string;
}

/**
 * Shared input pattern with design-specific styling and an info icon.
 */
const InputGroup = ({ id, label, placeholder }: InputGroupProps) => (
  <div className="mb-3">
    <label
      htmlFor={id}
      className="text-gray-300 mb-1 flex items-center gap-1 text-sm"
    >
      {label}
      <AiOutlineInfoCircle />
    </label>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="border-gray-600 text-gray-400 placeholder-gray-600 w-full rounded border bg-[#1e1e1e] px-3 py-2 text-sm focus:outline-none"
    />
  </div>
);

interface ActionButtonProps {
  label: string;
}

/**
 * Styled action button with specific brand color #b5541c.
 */
const ActionButton = ({ label }: ActionButtonProps) => (
  <button className="flex-1 rounded-lg bg-[#b5541c] px-4 py-3 font-semibold text-white hover:bg-[#9a4718]">
    {label}
  </button>
);

export default TestCard;
