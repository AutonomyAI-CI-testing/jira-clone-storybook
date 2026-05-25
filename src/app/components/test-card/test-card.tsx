import { useState } from "react";
import { FiSettings, FiChevronDown, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  // Track expanded state for collapsible sections
  const [isExpandedDesign, setIsExpandedDesign] = useState(true);
  const [isExpandedAddNew, setIsExpandedAddNew] = useState(true);

  return (
    <div className="w-[254px] bg-elevation-surface p-5">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-sm font-primary-bold text-font-subtlest">
          UI magician Agent
        </h1>
        <button
          className="flex h-6 w-6 items-center justify-center text-font-subtlest hover:opacity-80"
          aria-label="Settings"
        >
          <FiSettings className="text-base" />
        </button>
      </div>

      {/* First Collapsible Section */}
      <div className="mb-6">
        <button
          onClick={() => setIsExpandedDesign(!isExpandedDesign)}
          className="flex w-full items-center gap-2 text-sm text-font-subtle hover:opacity-80"
        >
          {isExpandedDesign ? (
            <FiChevronUp className="text-base" />
          ) : (
            <FiChevronDown className="text-base" />
          )}
          <span className="truncate text-[11.5px]">
            From entire frame to a singl...
          </span>
        </button>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6">
        <button
          onClick={() => setIsExpandedAddNew(!isExpandedAddNew)}
          className="mb-3 flex w-full items-center gap-2 text-sm text-font-subtlest hover:opacity-80"
        >
          {isExpandedAddNew ? (
            <FiChevronUp className="text-base" />
          ) : (
            <FiChevronDown className="text-base" />
          )}
          <span className="text-[13.5px] font-primary-bold">
            Add New Design
          </span>
        </button>

        {isExpandedAddNew && (
          <div className="space-y-4">
            {/* Personal Access Token Input */}
            <div>
              <label className="mb-2 flex items-center gap-1 text-[11.5px] text-font-subtle">
                Personal Access Token
                <FiInfo className="text-base text-font-subtle" />
              </label>
              <input
                type="password"
                placeholder="figd_xxxxxxxxxxxxxxxxxx"
                className="w-full border border-border bg-background-input px-3 py-2 text-[11.5px] text-font placeholder-font-subtlest outline-none focus-visible:border-border-focused"
              />
            </div>

            {/* Design URL Input */}
            <div>
              <label className="mb-2 flex items-center gap-1 text-[11.5px] text-font-subtle">
                Design URL
                <FiInfo className="text-base text-font-subtle" />
              </label>
              <input
                type="text"
                placeholder="https://www.figma.com/file/:"
                className="w-full border border-border bg-background-input px-3 py-2 text-[10.5px] text-font placeholder-font-subtlest outline-none focus-visible:border-border-focused"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              <button className="flex-1 border border-border bg-background-neutral-bold px-3 py-2 text-[11.5px] text-font-inverse font-primary-bold hover:bg-background-neutral-bold-hovered">
                Awesome
              </button>
              <button className="flex-1 border border-border bg-background-neutral-bold px-3 py-2 text-[11.5px] text-font-inverse font-primary-bold hover:bg-background-neutral-bold-hovered">
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns Section */}
      <div className="text-[13.5px] text-font-subtlest">Recent Breakdowns</div>

      {/* Footer Section */}
      <div className="border-t border-gray-300 pt-3 text-center text-[11.5px] text-font-subtle">
        © AutonomyAI
      </div>
    </div>
  );
};
