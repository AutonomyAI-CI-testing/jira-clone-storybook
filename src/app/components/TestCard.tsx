import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

/**
 * TestCard component serves as a visual smoke test to verify Tailwind,
 * icon rendering, and general component styling pipeline.
 *
 * It reproduces a "UI magician Agent" settings panel based on Figma specs.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    style={{ backgroundColor: "#2b2b2b" }}
    className="w-[254px] space-y-4 p-5 font-primary text-[#d4d4d4]"
  >
    {/* Header row */}
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold text-[#b5b5b5]">UI magician Agent</h2>
      <FiSettings className="h-5 w-5" />
    </div>

    {/* Subtitle row */}
    <div className="flex items-center text-sm text-[#8b9291]">
      <FiChevronUp className="mr-1 h-4 w-4" />
      <span>From entire frame to a singl...</span>
    </div>

    {/* Spacing to match design layout */}
    <div className="h-4" aria-hidden="true"></div>

    {/* Section heading for additions */}
    <div className="flex items-center font-medium text-[#b2b2b1]">
      <FiChevronUp className="mr-1 h-4 w-4" />
      <span>Add New Design</span>
    </div>

    <InputField
      id="personalAccessToken"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />

    <InputField
      id="designUrl"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
    />

    {/* Call-to-action buttons */}
    <div className="flex justify-between space-x-2 pt-2">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>

    {/* Historical/Recent data section */}
    <h3 className="pt-4 font-medium text-[#b2b2b1]">Recent Breakdowns</h3>
  </div>
);

/**
 * Reusable input field with label and info icon
 */
const InputField = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div className="space-y-2">
    <label htmlFor={id} className="flex items-center text-sm text-[#a4a4a3]">
      {label}
      <FiInfo className="ml-1 h-3 w-3" />
    </label>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full rounded-md border border-[#555] bg-[#3a3a3a] p-2 text-sm text-[#737470] outline-none"
    />
  </div>
);

/**
 * Standard button used in the settings panel
 */
const ActionButton = ({ label }: { label: string }) => (
  <button className="flex-1 rounded-lg bg-[#7a4a30] py-2 font-medium text-[#d4c4b8]">
    {label}
  </button>
);
