import cx from "classix";
import {
  SettingsIcon,
  ChevronLeftIcon,
  InfoIcon,
} from "./icons";

/**
 * TestCard Component
 *
 * Displays a UI configuration panel for the AI magician agent, including:
 * - Agent header with settings access
 * - Collapsible sections for navigation
 * - Form inputs for personal access tokens and design URLs (read-only placeholders)
 * - Action buttons for user interactions
 * - Recent activity section
 *
 * This is a presentation component with no state or interactive handlers.
 */
export const TestCard = (): JSX.Element => {
  // Form field read-only values - these display placeholder/example data
  const PAT_PLACEHOLDER = "figd_xxxxxxxxxxxxxxxxx";
  const DESIGN_URL_PLACEHOLDER = "https://www.figma.com/file/:";

  return (
    <div className="min-h-screen bg-elevation-surface">
      <div className="space-y-4 p-5">
        {/* Header: Agent title with settings icon */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="font-primary-bold text-[13.5px] text-font">
              UI magician Agent
            </h1>
          </div>
          <SettingsIcon />
        </div>

        {/* Collapsible Section */}
        <div className="flex items-center gap-2">
          <ChevronLeftIcon />
          <p className="text-[11.5px] text-font-subtle">
            From entire frame to a singl...
          </p>
        </div>

        {/* Add New Design Section */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-2">
            <ChevronLeftIcon />
            <h2 className="font-primary-bold text-[13.5px] text-font">
              Add New Design
            </h2>
          </div>

          {/* Input Fields */}
          <div className="space-y-3 pl-5">
            {/* Personal Access Token */}
            <div>
              <div className="mb-1.5 flex items-center gap-2">
                <label className="text-[11.5px] text-font-subtle">
                  Personal Access Token
                </label>
                <InfoIcon />
              </div>
              <input
                type="text"
                value={PAT_PLACEHOLDER}
                className="w-full rounded bg-background-input px-3 py-2 text-[11.5px] text-font-subtle outline outline-2 outline-border-input"
                readOnly
              />
            </div>

            {/* Design URL */}
            <div>
              <div className="mb-1.5 flex items-center gap-2">
                <label className="text-[11.5px] text-font-subtle">Design URL</label>
                <InfoIcon />
              </div>
              <input
                type="text"
                value={DESIGN_URL_PLACEHOLDER}
                className="w-full rounded bg-background-input px-3 py-2 text-[11.5px] text-font-subtle outline outline-2 outline-border-input"
                readOnly
              />
            </div>
          </div>

          {/* Action Buttons: Warning-styled CTAs for form submission */}
          <div className="flex gap-3 pl-5 pt-1">
            <ActionButton>Awesome</ActionButton>
            <ActionButton>Prepare</ActionButton>
          </div>
        </div>

        {/* Recent Breakdowns Section */}
        <div className="pt-4">
          <h3 className="font-primary-bold text-[13.5px] text-font">
            Recent Breakdowns
          </h3>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-300 pt-3 text-center">
          <p className="text-[12px] text-font-subtle">© AutonomyAI</p>
        </div>
      </div>
    </div>
  );
};

/**
 * ActionButton Component
 *
 * Reusable button with warning-styled appearance for primary actions.
 * Uses semantic color tokens for consistency with the design system.
 */
const ActionButton = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <button
    className={cx(
      "flex-1 rounded px-4 py-2 text-[11.5px] font-semibold",
      "bg-background-warning-bold text-font-inverse border-none",
      "hover:bg-background-warning-bold-hovered active:bg-background-warning-bold-pressed"
    )}
  >
    {children}
  </button>
);
