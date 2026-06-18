import { IoSettingsOutline, IoChevronUpOutline } from 'react-icons/io5';
import { AiOutlineInfoCircle } from 'react-icons/ai';

/**
 * TestCard provides an interface for the UI Magician Agent,
 * allowing users to input Figma credentials and design URLs.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-5 rounded text-white w-full max-w-sm">
      {/* Agent Header with settings access */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">UI magician Agent</h2>
        <IoSettingsOutline className="text-2xl cursor-pointer hover:opacity-80" />
      </div>

      {/* Status/Context breadcrumb */}
      <div className="flex items-center gap-2 mb-6">
        <IoChevronUpOutline className="text-amber-500" />
        <span className="text-sm text-amber-500">From entire frame to a singl...</span>
      </div>

      {/* Main Configuration Section */}
      <div className="flex items-center gap-2 mb-4">
        <IoChevronUpOutline className="text-white" />
        <h3 className="text-lg font-semibold">Add New Design</h3>
      </div>

      <div className="space-y-4">
        <InputField
          id="pat"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <InputField
          id="design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 my-6">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Footer / History Section */}
      <div>
        <h3 className="text-lg font-semibold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

/**
 * Internal helper for consistent form field styling
 */
const InputField = ({ id, label, placeholder }: { id: string; label: string; placeholder: string }) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <label htmlFor={id} className="text-sm">{label}</label>
      <AiOutlineInfoCircle className="text-xs text-zinc-400 cursor-help" />
    </div>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="bg-transparent border border-zinc-600 rounded px-3 py-2 w-full text-zinc-400 placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
    />
  </div>
);

/**
 * Internal helper for consistent primary action button styling
 */
const ActionButton = ({ label }: { label: string }) => (
  <button className="bg-[#c1651a] hover:bg-[#a0522d] text-white font-semibold px-5 py-3 rounded-lg flex-1 transition-colors">
    {label}
  </button>
);
