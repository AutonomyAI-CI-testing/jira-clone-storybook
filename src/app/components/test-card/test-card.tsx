import { useState } from "react";
import {
  RiSettings3Line,
  RiArrowUpSLine,
  RiArrowDownSLine,
  RiInformationLine,
} from "react-icons/ri";
import cx from "classix";

// Placeholder values for demonstration
const DEFAULT_PERSONAL_TOKEN = "figd_xxxxxxxxxxxxxxxxxx";
const DEFAULT_DESIGN_URL = "https://www.figma.com/file/:";

// Reusable button styles for action buttons in the expanded form
const ACTION_BUTTON_STYLES = cx(
  "flex-1 rounded bg-background-warning px-4 py-2 text-xs font-semibold text-font-warning",
  "hover:bg-background-warning-hovered active:bg-background-warning-pressed transition-colors"
);

export const TestCard = (): JSX.Element => {
  // Track whether the first collapsible section is expanded
  const [isFirstSectionOpen, setIsFirstSectionOpen] = useState(true);
  // Track whether the "Add New Design" form section is expanded
  const [isAddNewDesignOpen, setIsAddNewDesignOpen] = useState(true);
  // Store user's Figma personal access token
  const [personalToken, setPersonalToken] = useState(DEFAULT_PERSONAL_TOKEN);
  // Store the Figma design file URL
  const [designUrl, setDesignUrl] = useState(DEFAULT_DESIGN_URL);

  return (
    <div className="w-full max-w-md bg-elevation-surface p-5 text-font-subtle">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-base font-semibold text-font">UI magician Agent</h1>
        <button
          className="text-font-subtlest hover:text-font-subtle"
          aria-label="Settings"
        >
          <RiSettings3Line size={20} />
        </button>
      </div>

      {/* First Collapsible Section */}
      <div className="mb-8">
        <button
          onClick={() => setIsFirstSectionOpen(!isFirstSectionOpen)}
          className="flex items-center gap-2 text-font-subtle hover:text-font"
        >
          {isFirstSectionOpen ? (
            <RiArrowUpSLine size={16} />
          ) : (
            <RiArrowDownSLine size={16} />
          )}
          <span className="text-xs font-semibold">
            From entire frame to a singl...
          </span>
        </button>
      </div>

      {/* Add New Design Section */}
      <div className="mb-8">
        <button
          onClick={() => setIsAddNewDesignOpen(!isAddNewDesignOpen)}
          className="mb-4 flex items-center gap-2 text-font hover:text-font-inverse"
        >
          {isAddNewDesignOpen ? (
            <RiArrowUpSLine size={18} />
          ) : (
            <RiArrowDownSLine size={18} />
          )}
          <span className="text-sm font-semibold">Add New Design</span>
        </button>

        {isAddNewDesignOpen && (
          <>
            {/* Personal Access Token Field */}
            <div className="mb-5">
              <div className="mb-2 flex items-center gap-2">
                <label className="text-xs font-semibold text-font-subtle">
                  Personal Access Token
                </label>
                <RiInformationLine size={14} className="text-font-subtlest" />
              </div>
              <input
                type="text"
                value={personalToken}
                onChange={(e) => setPersonalToken(e.target.value)}
                className={cx(
                  "w-full border border-border bg-background-input px-3 py-2 text-xs text-font-subtle",
                  "placeholder:text-font-subtlest focus:border-border-focused focus:outline-none focus:ring-1 focus:ring-border-focused"
                )}
              />
            </div>

            {/* Design URL Field */}
            <div className="mb-6">
              <div className="mb-2 flex items-center gap-2">
                <label className="text-xs font-semibold text-font-subtle">
                  Design URL
                </label>
                <RiInformationLine size={14} className="text-font-subtlest" />
              </div>
              <input
                type="text"
                value={designUrl}
                onChange={(e) => setDesignUrl(e.target.value)}
                className={cx(
                  "w-full border border-border bg-background-input px-3 py-2 text-xs text-font-subtle",
                  "placeholder:text-font-subtlest focus:border-border-focused focus:outline-none focus:ring-1 focus:ring-border-focused"
                )}
              />
            </div>

            {/* Button Group */}
            <div className="flex gap-4">
              <button className={ACTION_BUTTON_STYLES}>Awesome</button>
              <button className={ACTION_BUTTON_STYLES}>Prepare</button>
            </div>
          </>
        )}
      </div>

      {/* Footer Section */}
      <div className="border-t border-border pt-4">
        <h2 className="text-sm font-semibold text-font">Recent Breakdowns</h2>
      </div>

      {/* Copyright Footer */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-xs text-font-subtle">© AutonomyAI</p>
      </div>
    </div>
  );
};
