
import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

// Design constants matching Figma spec
const COLORS = {
  CARD_BG: "#2a2a2a",
  INPUT_BG: "#1a1a1a",
  ACCENT_ORANGE: "#c17a4a",
  BUTTON_ORANGE: "#a0522d",
} as const;

/**
 * TestCard - A smoke test component that reproduces a Figma design for a design tool plugin.
 * Used to validate the end-to-end rendering pipeline.
 */
export function TestCard() {
  return (
    <div
      id="testElem"
      className="rounded-xl p-5 max-w-sm font-sans"
      style={{ backgroundColor: COLORS.CARD_BG }}
    >
      {/* Header: Plugin name and settings access */}
      <div className="flex justify-between items-center">
        <h2 className="text-white font-bold text-lg">UI magician Agent</h2>
        <FiSettings className="text-gray-400 text-xl cursor-not-allowed" />
      </div>

      {/* Scope toggle: Indicates the current processing context */}
      <div className="flex items-center gap-2 mt-2">
        <FiChevronUp style={{ color: COLORS.ACCENT_ORANGE }} />
        <p className="text-sm" style={{ color: COLORS.ACCENT_ORANGE }}>
          From entire frame to a singl...
        </p>
      </div>

      <div className="mt-6" aria-hidden="true" />

      {/* Form Section: Input fields for Figma integration */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-white text-base" />
        <h3 className="text-white font-bold text-lg">Add New Design</h3>
      </div>

      <div className="mt-4 space-y-3">
        <InputField
          id="personalAccessToken"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <InputField
          id="designURL"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Actions: Primary CTA buttons */}
      <div className="mt-5 flex gap-3">
        <button
          className="flex-1 text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          style={{ backgroundColor: COLORS.BUTTON_ORANGE }}
        >
          Awesome
        </button>
        <button
          className="flex-1 text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          style={{ backgroundColor: COLORS.BUTTON_ORANGE }}
        >
          Prepare
        </button>
      </div>

      {/* History: List of previous executions */}
      <h3 className="mt-6 text-white font-bold text-lg border-t border-gray-700 pt-4">
        Recent Breakdowns
      </h3>
    </div>
  );
}

/**
 * Reusable input field with associated label and info icon
 */
function InputField({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm text-gray-300 flex items-center gap-1">
        {label} <FiInfo className="text-gray-400" />
      </label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="w-full border border-gray-600 rounded px-3 py-2 text-gray-400 text-sm mt-1 focus:outline-none focus:ring-1 focus:ring-gray-500"
        style={{ backgroundColor: COLORS.INPUT_BG }}
      />
    </div>
  );
}
