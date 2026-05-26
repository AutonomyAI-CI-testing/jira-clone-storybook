import { useState } from "react";
import cx from "classix";
import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

interface CollapsibleSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
  children?: React.ReactNode;
}

/**
 * CollapsibleSection handles the collapsible UI pattern with chevron icon and content.
 * The chevron rotates 180° when the section is closed.
 */
const ACTION_BUTTON_STYLES =
  "flex-1 rounded bg-amber-700 py-2.5 text-xs font-semibold text-gray-600 transition-colors hover:bg-amber-600 active:bg-amber-800";

const CollapsibleSection = ({
  title,
  isOpen,
  onToggle,
  className = "",
  children,
}: CollapsibleSectionProps): JSX.Element => (
  <div className={cx("mb-8", className)}>
    <button
      onClick={onToggle}
      className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-gray-300"
      aria-expanded={isOpen}
    >
      <FiChevronUp
        size={16}
        className={cx("transition-transform", !isOpen && "rotate-180")}
      />
      <span className="truncate">{title}</span>
    </button>
    {isOpen && children}
  </div>
);

export const TestCard = (): JSX.Element => {
  const [isFirstSectionOpen, setIsFirstSectionOpen] = useState(true);
  const [isAddNewDesignOpen, setIsAddNewDesignOpen] = useState(true);

  return (
    <div className="w-64 rounded bg-black p-5">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-base font-semibold text-gray-400">
          UI magician Agent
        </h1>
        <FiSettings size={18} className="text-gray-400" />
      </div>

      {/* First Collapsible Section - placeholder for future content */}
      <CollapsibleSection
        title="From entire frame to a singl..."
        isOpen={isFirstSectionOpen}
        onToggle={() => setIsFirstSectionOpen(!isFirstSectionOpen)}
      />

      {/* Add New Design Section - form for adding new design files */}
      <CollapsibleSection
        title="Add New Design"
        isOpen={isAddNewDesignOpen}
        onToggle={() => setIsAddNewDesignOpen(!isAddNewDesignOpen)}
      >
        <>
          {/* Personal Access Token Field */}
          <div className="mb-6">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-xs font-semibold text-gray-500">
                Personal Access Token
              </label>
              <FiInfo size={14} className="text-gray-600" />
            </div>
            <input
              type="text"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full border border-gray-600 bg-gray-900 px-3 py-2.5 text-xs font-semibold text-gray-600 placeholder-gray-600 outline-none transition-colors hover:border-gray-500 focus:border-gray-400"
            />
          </div>

          {/* Design URL Field */}
          <div className="mb-6">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-xs font-semibold text-gray-500">
                Design URL
              </label>
              <FiInfo size={14} className="text-gray-600" />
            </div>
            <input
              type="text"
              placeholder="https://www.figma.com/file/:"
              className="w-full border border-gray-600 bg-gray-900 px-3 py-2.5 text-xs font-semibold text-gray-600 placeholder-gray-600 outline-none transition-colors hover:border-gray-500 focus:border-gray-400"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className={ACTION_BUTTON_STYLES}>Awesome</button>
            <button className={ACTION_BUTTON_STYLES}>Prepare</button>
          </div>
        </>
      </CollapsibleSection>

      {/* Recent Breakdowns Section */}
      <div className="text-sm font-semibold text-gray-400">
        Recent Breakdowns
      </div>

      {/* Footer */}
      <div className="border-t border-gray-300 pt-3 text-center text-xs text-gray-400">
        © AutonomyAI
      </div>
    </div>
  );
};
