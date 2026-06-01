import { useState } from "react";

interface ToggleSectionProps {
  label: string;
  isExpanded: boolean;
  onToggle: () => void;
  isBold?: boolean;
}

/**
 * Collapsible section with a toggle button and rotating chevron icon.
 * Used in TestCard for expandable configuration sections.
 */
const ToggleSection = ({
  label,
  isExpanded,
  onToggle,
  isBold = false,
}: ToggleSectionProps): JSX.Element => (
  <div className="mb-4 border-b border-gray-700 pb-4">
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between text-left"
      aria-expanded={isExpanded}
    >
      <span className={`text-xs ${isBold ? "font-semibold" : ""} text-gray-300`}>
        {label}
      </span>
      <span
        className={`text-gray-400 transition-transform ${
          isExpanded ? "rotate-180" : ""
        }`}
        aria-hidden="true"
      >
        ▼
      </span>
    </button>
  </div>
);

export const TestCard = (): JSX.Element => {
  const [isFromExpanded, setIsFromExpanded] = useState(true);
  const [isAddNewExpanded, setIsAddNewExpanded] = useState(true);

  return (
    <div id="testElem">
      <div className="w-64 rounded-lg bg-black p-4">
        {/* Header with title and settings icon */}
        <div className="mb-5 flex items-center justify-between">
          <span className="font-primary text-sm font-semibold text-gray-300">
            UI magician Agent
          </span>
          <span className="text-gray-400">⚙</span>
        </div>

        {/* Collapsible section for frame-to-component conversion */}
        <ToggleSection
          label="From entire frame to a singl..."
          isExpanded={isFromExpanded}
          onToggle={() => setIsFromExpanded(!isFromExpanded)}
        />

        {/* Collapsible section for creating new designs */}
        <ToggleSection
          label="Add New Design"
          isExpanded={isAddNewExpanded}
          onToggle={() => setIsAddNewExpanded(!isAddNewExpanded)}
          isBold
        />

        {/* Configuration form fields */}
        <div className="mb-4 space-y-3">
          {/* Secure token input - read-only for display purposes */}
          <div>
            <label className="mb-1 block text-xs text-gray-400" htmlFor="pat-input">
              Personal Access Token
            </label>
            <input
              id="pat-input"
              type="password"
              placeholder="••••••••••••••••"
              className="w-full rounded bg-gray-900 px-3 py-2 text-xs text-gray-300 placeholder-gray-600 outline-none"
              readOnly
            />
          </div>

          {/* Design file URL - read-only for display purposes */}
          <div>
            <label className="mb-1 block text-xs text-gray-400" htmlFor="url-input">
              Design URL
            </label>
            <input
              id="url-input"
              type="text"
              placeholder="https://figma.com/..."
              className="w-full rounded bg-gray-900 px-3 py-2 text-xs text-gray-300 placeholder-gray-600 outline-none"
              readOnly
            />
          </div>
        </div>

        {/* Action buttons: primary action (orange) and secondary action (amber) */}
        <div className="mb-4 flex gap-2">
          <button
            className="flex-1 rounded bg-orange-700 px-3 py-2 text-xs font-semibold text-gray-100 hover:bg-orange-800"
            aria-label="Confirm and proceed with awesome action"
          >
            Awesome
          </button>
          <button
            className="flex-1 rounded bg-amber-800 px-3 py-2 text-xs font-semibold text-gray-100 hover:bg-amber-900"
            aria-label="Prepare for next step"
          >
            Prepare
          </button>
        </div>

        {/* Recent activity summary section */}
        <div className="text-xs text-gray-500">Recent Breakdowns</div>
      </div>
    </div>
  );
};
