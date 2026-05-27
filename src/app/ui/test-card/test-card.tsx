import { useState } from "react";
import cx from "classix";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiCog, HiInformationCircle } from "react-icons/hi";

// Styling constants for reusable button and input patterns
const INPUT_STYLES = {
  base: "w-full rounded border border-[var(--DarkNeutral300)] bg-[var(--DarkNeutral200)] px-2 py-1.5",
  text: "text-[10.5px] text-[var(--DarkNeutral900)] placeholder:text-[var(--DarkNeutral600)]",
  focus:
    "focus:border-[var(--Blue400)] focus:outline-none focus:ring-1 focus:ring-[var(--Blue400)]",
};

const ACTION_BUTTON_STYLES = {
  base: "flex-1 rounded px-3 py-1.5 text-center text-[11.5px] font-primary-bold",
  colors:
    "bg-[var(--Orange800)] text-white hover:bg-[var(--Orange800)] active:bg-[var(--Orange900)]",
  transition: "transition-colors duration-150",
};

const COLLAPSE_ICON_STYLES = {
  base: "transition-transform duration-200",
  collapsed: "-rotate-90",
};

export const TestCard = (): JSX.Element => {
  // Both sections are expanded by default to show available content and encourage user interaction
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isFormCollapsed, setIsFormCollapsed] = useState(false);

  return (
    <div className="w-[254px] rounded bg-[var(--DarkNeutral0)] p-5">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-primary-bold text-[13.5px] text-[var(--DarkNeutral900)]">
          UI magician Agent
        </h1>
        <button
          aria-label="Settings"
          className="flex items-center justify-center text-[var(--DarkNeutral700)] hover:text-[var(--DarkNeutral800)]"
        >
          <HiCog size={18} />
        </button>
      </div>

      {/* Collapsible Section */}
      <div className="mb-6">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-expanded={!isCollapsed}
          className="flex items-center gap-2 font-primary-bold text-[13.5px] text-[var(--DarkNeutral800)]"
        >
          <RiArrowDropDownLine
            size={18}
            className={cx(
              COLLAPSE_ICON_STYLES.base,
              isCollapsed && COLLAPSE_ICON_STYLES.collapsed
            )}
          />
          From entire frame to a singl...
        </button>
        {!isCollapsed && (
          <div className="mt-3 text-[11.5px] text-[var(--DarkNeutral700)]">
            {/* Expandable content section that shows additional frame conversion details */}
            This section contains additional content about frame conversion.
          </div>
        )}
      </div>

      {/* Add New Design Section */}
      <div className="mb-6 border-t border-[var(--DarkNeutral200)] pt-6">
        <button
          onClick={() => setIsFormCollapsed(!isFormCollapsed)}
          aria-expanded={!isFormCollapsed}
          className="mb-4 flex items-center gap-2 font-primary-bold text-[13.5px] text-[var(--DarkNeutral800)]"
        >
          <RiArrowDropDownLine
            size={18}
            className={cx(
              COLLAPSE_ICON_STYLES.base,
              isFormCollapsed && COLLAPSE_ICON_STYLES.collapsed
            )}
          />
          Add New Design
        </button>

        {!isFormCollapsed && (
          <div className="space-y-4">
            {/* Form fields for connecting to external design tools. These inputs are only visible when the form is expanded. */}
            {/* Personal Access Token */}
            <div>
              <label className="mb-2 flex items-center gap-1 font-primary-bold text-[11.5px] text-[var(--DarkNeutral800)]">
                Personal Access Token
                <HiInformationCircle
                  size={14}
                  className="text-[var(--DarkNeutral700)]"
                />
              </label>
              <input
                type="password"
                placeholder="figd_xxxxxxxxxxxxxxxxx"
                aria-label="Personal Access Token for Figma"
                className={cx(
                  INPUT_STYLES.base,
                  INPUT_STYLES.text,
                  INPUT_STYLES.focus
                )}
              />
            </div>

            {/* Design URL */}
            <div>
              <label className="mb-2 flex items-center gap-1 font-primary-bold text-[11.5px] text-[var(--DarkNeutral800)]">
                Design URL
                <HiInformationCircle
                  size={14}
                  className="text-[var(--DarkNeutral700)]"
                />
              </label>
              <input
                type="text"
                placeholder="https://www.figma.com/file/:"
                aria-label="Design URL from Figma"
                className={cx(
                  INPUT_STYLES.base,
                  INPUT_STYLES.text,
                  INPUT_STYLES.focus
                )}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              <button
                aria-label="Proceed with awesome design setup"
                className={cx(
                  ACTION_BUTTON_STYLES.base,
                  ACTION_BUTTON_STYLES.colors,
                  ACTION_BUTTON_STYLES.transition
                )}
              >
                Awesome
              </button>
              <button
                aria-label="Prepare design for processing"
                className={cx(
                  ACTION_BUTTON_STYLES.base,
                  ACTION_BUTTON_STYLES.colors,
                  ACTION_BUTTON_STYLES.transition
                )}
              >
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns */}
      <div className="border-t border-[var(--DarkNeutral200)] pt-6">
        <h2 className="font-primary-bold text-[13.5px] text-[var(--DarkNeutral800)]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer */}
      <div className="border-t border-[var(--Neutral300)] pt-3 text-center">
        <p className="text-[11.5px] text-[var(--DarkNeutral700)]">
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
