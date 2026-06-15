import { useState } from "react";
import cx from "classix";
import { IoSettingsOutline } from "react-icons/io5";
import { MdExpandLess, MdInfoOutline } from "react-icons/md";

// Shared styling for input fields with focus states and hover effects
const INPUT_CLASSES = cx(
  "w-full rounded-md border border-[#544e47] bg-background-input p-3 text-font outline-2",
  "hover:bg-background-input-hovered focus-visible:bg-background-input-pressed focus-visible:outline-border-brand",
  "placeholder:text-xs placeholder:text-font-subtlest"
);

export const TestCard = (): JSX.Element => {
  const [isCollapsed1, setIsCollapsed1] = useState(false);
  const [personalToken, setPersonalToken] = useState("figd_xxxxxxxxxxxxxxxxxx");
  const [designUrl, setDesignUrl] = useState("https://www.figma.com/file/:");

  return (
    <div className="w-full bg-[#252220] p-6 text-font">
      {/* Header with title and settings button */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
        <button
          className="flex items-center justify-center text-icon hover:opacity-80"
          aria-label="Settings"
        >
          <IoSettingsOutline size={24} />
        </button>
      </div>

      {/* Collapsible information section */}
      <div className="mb-8">
        <button
          onClick={() => setIsCollapsed1(!isCollapsed1)}
          className="flex items-center gap-2 text-font-subtle hover:text-font"
          aria-expanded={!isCollapsed1}
        >
          <MdExpandLess
            size={20}
            className={cx("transition-transform", isCollapsed1 && "rotate-180")}
          />
          <span>From entire frame to a singl...</span>
        </button>
      </div>

      {/* Add New Design Section */}
      <div className="mb-8">
        <div className="mb-6 flex items-center gap-2">
          <MdExpandLess size={20} className="text-font-subtle" />
          <h2 className="font-primary-bold text-lg">Add New Design</h2>
        </div>

        {/* Personal Access Token Input */}
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <label className="font-primary text-sm">
              Personal Access Token
            </label>
            <MdInfoOutline size={16} className="text-icon-subtle" />
          </div>
          <input
            type="text"
            value={personalToken}
            onChange={(e) => setPersonalToken(e.target.value)}
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className={INPUT_CLASSES}
          />
        </div>

        {/* Design URL Input */}
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2">
            <label className="font-primary text-sm">Design URL</label>
            <MdInfoOutline size={16} className="text-icon-subtle" />
          </div>
          <input
            type="text"
            value={designUrl}
            onChange={(e) => setDesignUrl(e.target.value)}
            placeholder="https://www.figma.com/file/:"
            className={INPUT_CLASSES}
          />
        </div>

        {/* Orange CTA buttons with dark theme hover state */}
        <div className="flex gap-4">
          <button
            className="flex-1 rounded-md bg-[#b85c25] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#a0501f]"
            aria-label="Awesome"
          >
            Awesome
          </button>
          <button
            className="flex-1 rounded-md bg-[#b85c25] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#a0501f]"
            aria-label="Prepare"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Footer section listing recent breakdowns */}
      <div className="border-t border-border-input pt-8">
        <h2 className="font-primary-bold text-lg">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

TestCard.displayName = "TestCard";
