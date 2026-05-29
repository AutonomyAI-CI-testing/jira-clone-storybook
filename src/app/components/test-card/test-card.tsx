import { useState } from "react";
import cx from "classix";

// Default state for expandable sections
const DEFAULT_EXPANDED_STATE = true;

// Shared input styling classes for consistency across form fields
const INPUT_CLASS =
  "w-full rounded border border-border-input bg-background-input px-2 py-1 text-xs text-font placeholder-font-subtlest focus-visible:border-border-focused focus-visible:outline-none";

// Icon button styling for info hints
const INFO_ICON_CLASS =
  "inline-flex h-4 w-4 items-center justify-center rounded-full border border-font-subtlest text-xs";

export const TestCard = (): JSX.Element => {
  const [expandedFrameSection, setExpandedFrameSection] = useState<boolean>(
    DEFAULT_EXPANDED_STATE
  );
  const [expandedDesignSection, setExpandedDesignSection] = useState<boolean>(
    DEFAULT_EXPANDED_STATE
  );
  const [tokenValue, setTokenValue] = useState<string>("");
  const [designUrlValue, setDesignUrlValue] = useState<string>("");

  // Generic toggle function to avoid duplication
  const createToggle =
    (setter: (value: boolean) => void) => (currentState: boolean) => {
      setter(!currentState);
    };

  return (
    <div
      id="testElem"
      className="w-64 space-y-4 rounded-lg bg-black p-5 text-font-subtlest"
    >
      {/* Header with title and settings button */}
      <div className="flex items-center justify-between">
        <h1 className="text-sm font-semibold text-font-subtle">
          UI magician Agent
        </h1>
        <button
          className="text-lg text-font-subtlest hover:text-font-subtle"
          aria-label="Settings"
        >
          ⚙️
        </button>
      </div>

      {/* Collapsible Frame Section with optional content */}
      <div className="space-y-2 border-t border-font-subtlest border-opacity-20 pt-3">
        <button
          onClick={() =>
            createToggle(setExpandedFrameSection)(expandedFrameSection)
          }
          className="flex w-full items-center gap-2 text-xs text-font-subtlest hover:text-font-subtle"
          aria-expanded={expandedFrameSection}
        >
          <span
            className={cx(
              "inline-block transition-transform duration-200",
              expandedFrameSection ? "rotate-180" : ""
            )}
          >
            ▼
          </span>
          <span>From entire frame to a singl...</span>
        </button>
        {expandedFrameSection && (
          <div className="ml-5 space-y-1 text-xs text-font-subtlest">
            <p>Frame breakdown details</p>
          </div>
        )}
      </div>

      {/* Add New Design Section with form fields and action buttons */}
      <div className="space-y-3 border-t border-font-subtlest border-opacity-20 pt-3">
        <button
          onClick={() =>
            createToggle(setExpandedDesignSection)(expandedDesignSection)
          }
          className="flex w-full items-center gap-2 text-xs font-semibold text-font-subtle hover:text-font"
          aria-expanded={expandedDesignSection}
        >
          <span
            className={cx(
              "inline-block transition-transform duration-200",
              expandedDesignSection ? "rotate-180" : ""
            )}
          >
            ▼
          </span>
          <span>Add New Design</span>
        </button>

        {expandedDesignSection && (
          <div className="space-y-3">
            {/* Personal Access Token Field */}
            <div className="space-y-1">
              <label className="flex items-center gap-1 text-xs text-font-subtlest">
                <span>Personal Access Token</span>
                <span className={INFO_ICON_CLASS} aria-label="Information">
                  ⓘ
                </span>
              </label>
              <input
                type="password"
                placeholder="figd_xxxxxxxxxxxxxxxxxx"
                value={tokenValue}
                onChange={(e) => setTokenValue(e.target.value)}
                className={INPUT_CLASS}
              />
            </div>

            {/* Design URL Field */}
            <div className="space-y-1">
              <label className="flex items-center gap-1 text-xs text-font-subtlest">
                <span>Design URL</span>
                <span className={INFO_ICON_CLASS} aria-label="Information">
                  ⓘ
                </span>
              </label>
              <input
                type="text"
                placeholder="https://www.figma.com/file/:"
                value={designUrlValue}
                onChange={(e) => setDesignUrlValue(e.target.value)}
                className={INPUT_CLASS}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              <button className="bg-Orange500 text-DarkNeutral900 flex-1 rounded px-3 py-1.5 text-xs font-semibold hover:opacity-80 active:opacity-70">
                Awesome
              </button>
              <button className="bg-Orange500 text-DarkNeutral900 flex-1 rounded px-3 py-1.5 text-xs font-semibold hover:opacity-80 active:opacity-70">
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns Section */}
      <div className="border-t border-font-subtlest border-opacity-20 pt-3">
        <h2 className="text-xs font-semibold text-font-subtle">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
