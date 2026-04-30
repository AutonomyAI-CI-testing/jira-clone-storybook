import { useState } from "react";
import cx from "classix";
import {
  IoChevronUp,
  IoChevronDown,
  IoSettingsOutline,
} from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const UiMagicianPanel = ({
  onAwesome,
  onPrepare,
  className,
}: Props): JSX.Element => {
  const [isAddDesignOpen, setIsAddDesignOpen] = useState(true);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const [token, setToken] = useState("");
  const [designUrl, setDesignUrl] = useState("");

  return (
    <div
      className={cx(
        "flex w-[254px] flex-col gap-3 bg-[#1a1a17] p-4 font-primary",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <button
          type="button"
          className="flex items-center justify-center text-[#b5b5b5] hover:text-[#d5d5d5]"
          aria-label="Settings"
        >
          <IoSettingsOutline size={16} />
        </button>
      </div>

      {/* Description collapsible */}
      <div className="flex flex-col gap-1">
        <button
          type="button"
          className="flex items-center gap-1 text-left"
          onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
        >
          {isDescriptionOpen ? (
            <IoChevronUp size={14} className="text-[#b5b5b5]" />
          ) : (
            <IoChevronDown size={14} className="text-[#b5b5b5]" />
          )}
          <span className="text-[11.5px] text-[#8b9291]">
            From entire frame to a singl...
          </span>
        </button>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-2">
        <button
          type="button"
          className="flex items-center gap-1 text-left"
          onClick={() => setIsAddDesignOpen(!isAddDesignOpen)}
        >
          {isAddDesignOpen ? (
            <IoChevronUp size={14} className="text-[#b5b5b5]" />
          ) : (
            <IoChevronDown size={14} className="text-[#b5b5b5]" />
          )}
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </button>

        {isAddDesignOpen && (
          <div className="flex flex-col gap-3">
            {/* Personal Access Token */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1">
                <span className="text-[11.5px] text-[#a4a4a3]">
                  Personal Access Token
                </span>
                <AiOutlineInfoCircle size={12} className="text-[#a4a4a3]" />
              </div>
              <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="figd_xxxxxxxxxxxxxxxxxx"
                className="rounded border border-[#a5adad] bg-[#272822] px-2 py-1.5 text-[11.5px] text-[#b5b5b5] placeholder:text-[#737470] focus:outline-none focus:ring-1 focus:ring-[#a5adad]"
              />
            </div>

            {/* Design URL */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1">
                <span className="text-[11.5px] text-[#a4a4a3]">
                  Design URL
                </span>
                <AiOutlineInfoCircle size={12} className="text-[#a4a4a3]" />
              </div>
              <input
                type="text"
                value={designUrl}
                onChange={(e) => setDesignUrl(e.target.value)}
                placeholder="https://www.figma.com/file/:"
                className="rounded border-2 border-[#929291] bg-[#272822] px-2 py-1.5 text-[11.5px] text-[#b5b5b5] placeholder:text-[#71726e] focus:outline-none focus:ring-1 focus:ring-[#929291]"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={onAwesome}
                className="flex-1 rounded bg-[#1e40af] px-3 py-1.5 text-[11.5px] font-semibold text-[#93c5fd] hover:bg-[#1e3a8a] active:bg-[#1e3a8a]"
              >
                Awesome
              </button>
              <button
                type="button"
                onClick={onPrepare}
                className="flex-1 rounded bg-[#1e40af] px-3 py-1.5 text-[11.5px] font-semibold text-[#93c5fd] hover:bg-[#1e3a8a] active:bg-[#1e3a8a]"
              >
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns section */}
      <div className="pt-2">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

interface Props {
  onAwesome?: () => void;
  onPrepare?: () => void;
  className?: string;
}
