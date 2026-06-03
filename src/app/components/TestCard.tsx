import { MdSettings, MdExpandMore, MdInfo } from "react-icons/md";

// Shared Tailwind class strings for consistent styling
const ICON_BUTTON_CLASS = "text-gray-500";
const LABEL_CLASS = "text-xs text-gray-500";
const INPUT_CLASS = "w-full rounded border border-gray-700 bg-gray-900 px-3 py-2 text-xs text-gray-500 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600";
const BUTTON_CLASS = "flex-1 rounded bg-amber-900 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-amber-800 active:bg-amber-950";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
}

const InputField = ({ label, type, placeholder }: InputFieldProps): JSX.Element => (
  <div className="mb-4">
    <div className="mb-2 flex items-center gap-1">
      <label className={LABEL_CLASS}>{label}</label>
      <MdInfo size={12} className="text-gray-600" />
    </div>
    <input type={type} placeholder={placeholder} className={INPUT_CLASS} />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="mx-auto w-64 rounded-lg bg-black p-5 text-font-subtle"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-sm font-semibold text-gray-400">
          UI magician Agent
        </h1>
        <MdSettings size={16} className={ICON_BUTTON_CLASS} />
      </div>

      {/* Collapsible Section 1 */}
      <div className="mb-4 flex items-center justify-between border-b border-gray-800 pb-3">
        <div className="flex items-center gap-2">
          <MdExpandMore size={14} className={ICON_BUTTON_CLASS} />
          <span className="text-xs text-gray-400">
            From entire frame to a singl...
          </span>
        </div>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6 flex items-center justify-between">
        <span className="text-xs text-gray-400">Add New Design</span>
        <MdExpandMore size={14} className={ICON_BUTTON_CLASS} />
      </div>

      {/* Personal Access Token Input */}
      <InputField
        label="Personal Access Token"
        type="password"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      {/* Design URL Input */}
      <div className="mb-6">
        <InputField
          label="Design URL"
          type="text"
          placeholder="https://www.figma.com/file/..."
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-6 flex gap-3">
        <button className={BUTTON_CLASS}>Awesome</button>
        <button className={BUTTON_CLASS}>Prepare</button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="pt-4 text-xs text-gray-400">Recent Breakdowns</div>
    </div>
  );
};
