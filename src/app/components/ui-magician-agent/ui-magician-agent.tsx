import { useState } from "react";
import cx from "classix";
import { FiSettings, FiInfo, FiChevronUp, FiChevronDown } from "react-icons/fi";

export const UiMagicianAgent = ({
  onAwesome,
  onPrepare,
  onSettingsClick,
}: UiMagicianAgentProps): JSX.Element => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(true);
  const [isAddDesignExpanded, setIsAddDesignExpanded] = useState(true);
  const [token, setToken] = useState("");
  const [designUrl, setDesignUrl] = useState("");

  return (
    <div
      className="w-[254px] rounded-lg bg-[#1A1A1A] p-5"
      style={{ fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif" }}
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <button
          onClick={onSettingsClick}
          className="flex h-5 w-5 cursor-pointer items-center justify-center text-[#b5b5b5] hover:text-[#d5d5d5]"
          aria-label="Settings"
        >
          <FiSettings size={14} />
        </button>
      </div>

      {/* Description Section */}
      <div className="mb-4">
        <button
          onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
          className="mb-1 flex w-full cursor-pointer items-center gap-1 text-left"
        >
          {isDescriptionExpanded ? (
            <FiChevronUp size={8} className="text-[#b5b5b5]" />
          ) : (
            <FiChevronDown size={8} className="text-[#b5b5b5]" />
          )}
          <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
            {isDescriptionExpanded
              ? "From entire frame to a singl..."
              : "Description"}
          </span>
        </button>
        {isDescriptionExpanded && (
          <p className="ml-3 text-[11.5px] text-[#a4a4a3]">
            From entire frame to a single component
          </p>
        )}
      </div>

      {/* Add New Design Section */}
      <div className="mb-4">
        <button
          onClick={() => setIsAddDesignExpanded(!isAddDesignExpanded)}
          className="mb-3 flex w-full cursor-pointer items-center gap-1.5 text-left"
        >
          {isAddDesignExpanded ? (
            <FiChevronUp size={12} className="text-[#b5b5b5]" />
          ) : (
            <FiChevronDown size={12} className="text-[#b5b5b5]" />
          )}
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </button>

        {isAddDesignExpanded && (
          <div className="space-y-3">
            {/* Personal Access Token Input */}
            <div>
              <div className="mb-1.5 flex items-center gap-1">
                <label
                  htmlFor="personal-access-token"
                  className="text-[11.5px] font-semibold text-[#a4a4a3]"
                >
                  Personal Access Token
                </label>
                <FiInfo size={15} className="text-[#a4a4a3]" />
              </div>
              <input
                id="personal-access-token"
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="figd_xxxxxxxxxxxxxxxxxx"
                className="w-full rounded border-2 border-[#929291] bg-[#272822] px-2 py-1.5 text-[10.5px] font-semibold text-[#b5b5b5] placeholder:text-[#737470] focus:border-[#a5adad] focus:outline-none"
              />
            </div>

            {/* Design URL Input */}
            <div>
              <div className="mb-1.5 flex items-center gap-1">
                <label
                  htmlFor="design-url"
                  className="text-[11.5px] font-semibold text-[#a3a3a2]"
                >
                  Design URL
                </label>
                <FiInfo size={15} className="text-[#a3a3a2]" />
              </div>
              <input
                id="design-url"
                type="text"
                value={designUrl}
                onChange={(e) => setDesignUrl(e.target.value)}
                placeholder="https://www.figma.com/file/:"
                className="w-full rounded border border-[#a5adad] bg-[#272822] px-2 py-1.5 text-[11.5px] font-semibold text-[#b5b5b5] placeholder:text-[#71726e] focus:border-[#a5adad] focus:outline-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={onAwesome}
                className="flex-1 rounded bg-[#2563eb] px-3 py-1.5 text-[11.5px] font-semibold text-white hover:bg-[#1d4ed8] active:bg-[#1e40af]"
              >
                Awesome
              </button>
              <button
                onClick={onPrepare}
                className="flex-1 rounded bg-[#2563eb] px-3 py-1.5 text-[11.5px] font-semibold text-white hover:bg-[#1d4ed8] active:bg-[#1e40af]"
              >
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns Section */}
      <div>
        <h2 className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};

interface UiMagicianAgentProps {
  onAwesome?: () => void;
  onPrepare?: () => void;
  onSettingsClick?: () => void;
}
