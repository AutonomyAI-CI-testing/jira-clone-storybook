import { useState } from "react";
import cx from "classix";
import { IoSettingsOutline, IoChevronDown } from "react-icons/io5";
import { BsInfoCircle } from "react-icons/bs";

export const TestCard = (): JSX.Element => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [personalAccessToken, setPersonalAccessToken] = useState<string>("");
  const [designUrl, setDesignUrl] = useState<string>("");

  return (
    <div
      id="testElem"
      className="w-full max-w-md rounded-lg bg-elevation-surface-sunken p-6"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-primary-bold text-sm text-font-subtle">
          UI magician Agent
        </h1>
        <button
          type="button"
          className="text-font-subtlest hover:text-font-subtle transition-colors"
          aria-label="Settings"
        >
          <IoSettingsOutline size={16} />
        </button>
      </div>

      {/* Collapsible section */}
      <div className="mb-6">
        <button
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex w-full items-center gap-2 text-left text-xs font-semibold text-font-subtle hover:text-font transition-colors"
        >
          <IoChevronDown
            size={14}
            className={cx("transition-transform", isCollapsed && "rotate-180")}
          />
          <span>From entire frame to a singl...</span>
        </button>
        {!isCollapsed && (
          <p className="mt-3 text-xs text-font-subtlest leading-relaxed">
            Convert entire Figma frames into single components with AI-powered
            design analysis.
          </p>
        )}
      </div>

      {/* Add New Design section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-xs font-semibold text-font-subtle">
            Add New Design
          </h2>
          <IoChevronDown size={14} className="text-font-subtlest" />
        </div>

        {/* Input fields */}
        <div className="space-y-4">
          {/* Personal Access Token */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <label className="text-xs font-semibold text-font-subtle">
                Personal Access Token
              </label>
              <BsInfoCircle size={12} className="text-font-subtlest" />
            </div>
            <input
              type="password"
              value={personalAccessToken}
              onChange={(e) => setPersonalAccessToken(e.target.value)}
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full rounded-md bg-background-input px-3 py-2 text-xs placeholder-font-subtlest border border-border text-font focus:outline-border-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand"
            />
          </div>

          {/* Design URL */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <label className="text-xs font-semibold text-font-subtle">
                Design URL
              </label>
              <BsInfoCircle size={12} className="text-font-subtlest" />
            </div>
            <input
              type="url"
              value={designUrl}
              onChange={(e) => setDesignUrl(e.target.value)}
              placeholder="https://www.figma.com/file/:"
              className="w-full rounded-md bg-background-input px-3 py-2 text-xs placeholder-font-subtlest border border-border text-font focus:outline-border-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand"
            />
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-4 flex gap-3">
          <button
            type="button"
            className="flex-1 rounded-md bg-background-neutral-bold px-3 py-2 text-xs font-semibold text-font-inverse hover:bg-background-neutral-bold-hovered active:bg-background-neutral-bold-pressed transition-colors"
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded-md bg-background-neutral-bold px-3 py-2 text-xs font-semibold text-font-inverse hover:bg-background-neutral-bold-hovered active:bg-background-neutral-bold-pressed transition-colors"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns section */}
      <div className="pt-4 border-t border-border">
        <h3 className="text-xs font-semibold text-font-subtle">
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
