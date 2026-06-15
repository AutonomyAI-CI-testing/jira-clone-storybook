
import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

// Design constants based on Figma spec
const COLORS = {
  CARD_BG: "#2a2a2a",
  ACCENT: "#c0622a",
  INPUT_BG: "#1e1e1e",
  BORDER: "border-gray-600",
} as const;

/**
 * A self-contained smoke test component that replicates a Figma design panel.
 * Used to verify the design system and rendering in isolation.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="p-4 rounded-lg shadow-xl"
      style={{ backgroundColor: COLORS.CARD_BG }}
    >
      {/* Header: Title and Settings */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-bold">UI magician Agent</h2>
        <FiSettings className="text-white text-xl cursor-not-allowed" title="Settings" />
      </div>

      {/* Breadcrumb/Subtitle: Indicates context or progress */}
      <div className="flex items-center mb-6">
        <FiChevronUp className="mr-2" style={{ color: COLORS.ACCENT }} />
        <p className="text-sm" style={{ color: COLORS.ACCENT }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Main Action Section: Add New Design */}
      <div className="flex items-center mb-4">
        <FiChevronUp className="text-white mr-2" />
        <h3 className="text-white text-md font-bold">Add New Design</h3>
      </div>

      {/* Form Fields: Hardcoded for visualization as per spec */}
      <div className="space-y-4 mb-6">
        <InputField
          id="pat"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <InputField
          id="designUrl"
          label="Design URL"
          placeholder="https://www.figma.com/file:/"
        />
      </div>

      {/* Action Buttons: Principal CTAs */}
      <div className="flex justify-between space-x-4 mb-6">
        <PrimaryButton>Awesome</PrimaryButton>
        <PrimaryButton>Prepare</PrimaryButton>
      </div>

      {/* Footer Section: Lists history or related items */}
      <div className="pt-2 border-t border-gray-700/50">
        <h3 className="text-white text-sm font-bold opacity-90">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

/**
 * Internal helper for consistent form field styling
 */
const InputField = ({ id, label, placeholder }: InputFieldProps) => (
  <div>
    <label htmlFor={id} className="flex items-center text-white text-xs font-medium mb-1.5 opacity-90">
      {label}
      <FiInfo className="text-gray-400 ml-2 text-xs" />
    </label>
    <input
      id={id}
      type="text"
      readOnly // Static component as per requirement
      placeholder={placeholder}
      className={`w-full p-2.5 rounded-md text-sm text-white placeholder-gray-500 border ${COLORS.BORDER} outline-none`}
      style={{ backgroundColor: COLORS.INPUT_BG }}
    />
  </div>
);

/**
 * Internal helper for the orange-brown primary action buttons
 */
const PrimaryButton = ({ children }: { children: React.ReactNode }) => (
  <button
    className="flex-1 py-2.5 px-4 text-white rounded-lg font-bold text-sm transition-opacity hover:opacity-90 active:scale-[0.98]"
    style={{ backgroundColor: COLORS.ACCENT }}
  >
    {children}
  </button>
);
