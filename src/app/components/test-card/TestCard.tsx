import { useState } from "react";
import { FiSettings, FiInfo, FiChevronDown, FiChevronUp } from "react-icons/fi";

// Button colors for action buttons
const ACTION_BUTTON_BASE = "bg-[#974f0c]";
const ACTION_BUTTON_HOVER = "hover:bg-[#8b4608]";
const ACTION_BUTTON_ACTIVE = "active:bg-[#6b3605]";

export const TestCard = (): JSX.Element => {
  // Track collapse state for the description section
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);
  // "Add New Design" section opens by default
  const [isAddNewDesignOpen, setIsAddNewDesignOpen] = useState(true);

  return (
    <div className="w-[254px] rounded-lg border border-border bg-elevation-surface-sunken p-4 shadow-md">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-font-subtle">
          UI magician Agent
        </h2>
        <button className="rounded p-1 hover:bg-background-neutral-hovered">
          <FiSettings size={16} className="text-icon-inverse" />
        </button>
      </div>

      {/* Collapsible Section */}
      <div className="mb-4 border-t border-border pt-3">
        <button
          onClick={() => setIsCollapsibleOpen(!isCollapsibleOpen)}
          className="flex w-full items-center gap-2 rounded p-1 hover:bg-background-neutral-hovered"
        >
          {isCollapsibleOpen ? (
            <FiChevronUp size={16} className="text-icon-inverse" />
          ) : (
            <FiChevronDown size={16} className="text-icon-inverse" />
          )}
          <span className="text-xs text-font-subtle">
            From entire frame to a singl...
          </span>
        </button>
        {isCollapsibleOpen && (
          <p className="mt-2 text-xs text-font-subtlest">
            Convert complete design frames into single components with AI-powered
            breakdown.
          </p>
        )}
      </div>

      {/* Add New Design Section */}
      <div className="mb-4 border-t border-border pt-3">
        <button
          onClick={() => setIsAddNewDesignOpen(!isAddNewDesignOpen)}
          className="flex w-full items-center gap-2 rounded p-1 hover:bg-background-neutral-hovered"
        >
          {isAddNewDesignOpen ? (
            <FiChevronUp size={16} className="text-icon-inverse" />
          ) : (
            <FiChevronDown size={16} className="text-icon-inverse" />
          )}
          <span className="text-sm font-semibold text-font-subtle">
            Add New Design
          </span>
        </button>

        {isAddNewDesignOpen && (
          <div className="mt-3 space-y-3">
            {/* Personal Access Token */}
            <div className="space-y-1">
              <label className="flex items-center gap-1 text-xs text-font-subtle">
                Personal Access Token
                <FiInfo size={13} className="text-icon-inverse" />
              </label>
              <input
                type="password"
                placeholder="figid_xxxxxxxxxxxxxxxxx"
                className="w-full rounded border border-border-input bg-background-input px-2 py-1.5 text-xs text-font placeholder:text-font-subtlest focus-visible:bg-background-input-hovered focus-visible:outline-none"
              />
            </div>

            {/* Design URL */}
            <div className="space-y-1">
              <label className="flex items-center gap-1 text-xs text-font-subtle">
                Design URL
                <FiInfo size={13} className="text-icon-inverse" />
              </label>
              <input
                type="url"
                placeholder="https://www.figma.com/file/:"
                className="w-full rounded border border-border-input bg-background-input px-2 py-1.5 text-xs text-font placeholder:text-font-subtlest focus-visible:bg-background-input-hovered focus-visible:outline-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              <button className={`flex-1 rounded py-1.5 text-xs font-semibold text-font ${ACTION_BUTTON_BASE} ${ACTION_BUTTON_HOVER} ${ACTION_BUTTON_ACTIVE}`}>
                Awesome
              </button>
              <button className={`flex-1 rounded py-1.5 text-xs font-semibold text-font ${ACTION_BUTTON_BASE} ${ACTION_BUTTON_HOVER} ${ACTION_BUTTON_ACTIVE}`}>
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns Section */}
      <div className="border-t border-border pt-3">
        <h3 className="text-xs font-semibold text-font-subtle">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-xs text-font-subtle">© AutonomyAI</p>
      </div>
    </div>
  );
};
