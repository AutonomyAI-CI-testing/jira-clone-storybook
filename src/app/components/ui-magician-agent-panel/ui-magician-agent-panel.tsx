import { useState } from "react";
import cx from "classix";
import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";
import { Tooltip } from "@app/components/tooltip";

interface Props {
  onAwesome?: () => void;
  onPrepare?: () => void;
  onSettingsClick?: () => void;
  defaultToken?: string;
  defaultUrl?: string;
}

// Shared input styling for consistent appearance across all form fields
const INPUT_STYLES = {
  backgroundColor: "#2c333a",
};

const INPUT_CLASS_NAME =
  "w-full rounded border border-[#38414a] px-3 py-3 text-[#b6c2cf] placeholder:text-[#596773] outline-none focus-visible:border-border-focused";

// Primary CTA color matching design system
const BUTTON_STYLES = {
  backgroundColor: "#b65c02",
};

/**
 * Info tooltip icon that appears next to form labels
 * Provides contextual help for input fields
 */
const InfoTooltip = ({ title, label }: { title: string; label: string }) => (
  <Tooltip title={title}>
    <button
      className="border-blue-400 flex h-4 w-4 cursor-help items-center justify-center rounded-full border bg-transparent p-0"
      aria-label={label}
    >
      <FiInfo size={12} className="text-blue-400" />
    </button>
  </Tooltip>
);

export const UIMagicianAgentPanel = ({
  onAwesome,
  onPrepare,
  onSettingsClick,
  defaultToken = "",
  defaultUrl = "",
}: Props): JSX.Element => {
  const [isSnippetExpanded, setIsSnippetExpanded] = useState<boolean>(true);
  const [isAddNewExpanded, setIsAddNewExpanded] = useState<boolean>(true);
  const [token, setToken] = useState<string>(defaultToken);
  const [url, setUrl] = useState<string>(defaultUrl);

  const toggleSnippet = () => setIsSnippetExpanded(!isSnippetExpanded);
  const toggleAddNew = () => setIsAddNewExpanded(!isAddNewExpanded);

  return (
    <div className="flex w-[480px] flex-col gap-8 bg-[#1d2125] p-6">
      {/* Header section */}
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-lg text-font">
          UI magician Agent
        </h1>
        <button
          onClick={onSettingsClick}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border-none bg-transparent text-icon hover:bg-background-neutral-hovered active:bg-background-neutral-pressed"
          aria-label="Settings"
        >
          <FiSettings size={20} />
        </button>
      </div>

      {/* Collapsible snippet section */}
      <div className="flex flex-col gap-2 pt-2">
        <button
          onClick={toggleSnippet}
          className="flex cursor-pointer items-center gap-2 border-none bg-transparent p-0 text-left"
          aria-label="Toggle snippet"
        >
          <FiChevronUp
            size={16}
            className={cx(
              "text-icon transition-transform duration-200",
              isSnippetExpanded ? "rotate-0" : "rotate-180"
            )}
          />
          <span className="text-font-subtlest">
            From entire frame to a singl...
          </span>
        </button>
        {isSnippetExpanded && (
          <div className="pl-6 text-sm text-font-subtle">
            {/* Placeholder for expanded content */}
          </div>
        )}
      </div>

      {/* Add New Design collapsible section */}
      <div className="flex flex-col gap-4 pt-4">
        <button
          onClick={toggleAddNew}
          className="flex cursor-pointer items-center gap-2 border-none bg-transparent p-0 text-left"
          aria-label="Toggle Add New Design"
        >
          <FiChevronUp
            size={20}
            className={cx(
              "text-icon transition-transform duration-200",
              isAddNewExpanded ? "rotate-0" : "rotate-180"
            )}
          />
          <h2 className="font-primary-bold text-lg text-font">
            Add New Design
          </h2>
        </button>

        {isAddNewExpanded && (
          <div className="flex flex-col gap-4 pl-7">
            {/* Personal Access Token field */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <label
                  htmlFor="personal-token"
                  className="font-primary text-sm text-font-subtle"
                >
                  Personal Access Token
                </label>
                <InfoTooltip
                  title="Enter your Figma personal access token"
                  label="Personal Access Token info"
                />
              </div>
              <input
                id="personal-token"
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="figd_xxxxxxxxxxxxxxxxx"
                style={INPUT_STYLES}
                className={INPUT_CLASS_NAME}
              />
            </div>

            {/* Design URL field */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <label
                  htmlFor="design-url"
                  className="font-primary text-sm text-font-subtle"
                >
                  Design URL
                </label>
                <InfoTooltip
                  title="Enter the full Figma design file URL"
                  label="Design URL info"
                />
              </div>
              <input
                id="design-url"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://www.figma.com/file/:..."
                style={INPUT_STYLES}
                className={INPUT_CLASS_NAME}
              />
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={onAwesome}
                style={BUTTON_STYLES}
                className="flex-1 cursor-pointer rounded px-4 py-2.5 font-primary text-white hover:opacity-90 active:opacity-80"
              >
                Awesome
              </button>
              <button
                onClick={onPrepare}
                style={BUTTON_STYLES}
                className="flex-1 cursor-pointer rounded px-4 py-2.5 font-primary text-white hover:opacity-90 active:opacity-80"
              >
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns section */}
      <div className="flex flex-col gap-3 pt-4">
        <h2 className="font-primary-bold text-lg text-font">
          Recent Breakdowns
        </h2>
        {/* Placeholder for recent breakdowns list */}
      </div>
    </div>
  );
};
