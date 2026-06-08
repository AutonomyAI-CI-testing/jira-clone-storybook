import { useState } from "react";
import cx from "classix";
import { IoSettingsOutline, IoInformationCircleOutline } from "react-icons/io5";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  const [subtitleOpen, setSubtitleOpen] = useState(true);
  const [addDesignOpen, setAddDesignOpen] = useState(true);
  const [tokenValue, setTokenValue] = useState("");
  const [urlValue, setUrlValue] = useState("");

  return (
    <div
      className={cx(
        "w-[254px] rounded-sm bg-[#1c1c18] py-5",
        "font-semibold text-[#b5b5b5]"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pb-4">
        <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <IoSettingsOutline
          className="text-[#b5b5b5] opacity-80"
          size={16}
        />
      </div>

      {/* Subtitle accordion row */}
      <button
        type="button"
        onClick={() => setSubtitleOpen((prev) => !prev)}
        className={cx(
          "flex w-full cursor-pointer items-center gap-2 px-5 py-2",
          "bg-transparent text-left hover:bg-white/5"
        )}
      >
        {subtitleOpen ? (
          <HiChevronUp className="shrink-0 text-[#8b9291]" size={10} />
        ) : (
          <HiChevronDown className="shrink-0 text-[#8b9291]" size={10} />
        )}
        <span
          className={cx(
            "truncate text-[11.5px] font-semibold leading-[13.92px]",
            "text-[#8b9291]"
          )}
        >
          From entire frame to a singl...
        </span>
      </button>

      {subtitleOpen && <div className="h-[60px]" />}

      {/* Add New Design accordion */}
      <div className="mt-1">
        <button
          type="button"
          onClick={() => setAddDesignOpen((prev) => !prev)}
          className={cx(
            "flex w-full cursor-pointer items-center gap-2 px-5 py-2",
            "bg-transparent text-left hover:bg-white/5"
          )}
        >
          {addDesignOpen ? (
            <HiChevronUp className="shrink-0 text-[#b2b2b1]" size={12} />
          ) : (
            <HiChevronDown className="shrink-0 text-[#b2b2b1]" size={12} />
          )}
          <span
            className={cx(
              "text-[13.5px] font-semibold leading-[16.34px]",
              "text-[#b2b2b1]"
            )}
          >
            Add New Design
          </span>
        </button>

        {/* Collapsible content */}
        {addDesignOpen && (
          <div className="px-5 pb-4 pt-3">
            {/* Personal Access Token field */}
            <div className="mb-3">
              <div className="mb-1.5 flex items-center gap-2">
                <span
                  className={cx(
                    "text-[11.5px] font-semibold leading-[13.92px]",
                    "text-[#a4a4a3]"
                  )}
                >
                  Personal Access Token
                </span>
                <IoInformationCircleOutline
                  className="shrink-0 text-[#a4a4a3]"
                  size={15}
                />
              </div>
              <input
                type="text"
                value={tokenValue}
                onChange={(e) => setTokenValue(e.target.value)}
                placeholder="figd_xxxxxxxxxxxxxxxxxx"
                className={cx(
                  "w-full rounded-sm border border-[#a5adad] bg-[#272822]",
                  "px-3 py-2 text-[11.5px] font-semibold leading-[13.92px]",
                  "text-[#b5b5b5] outline-none",
                  "placeholder:text-[#737470]",
                  "focus:border-[#c4cece] focus:outline-none"
                )}
              />
            </div>

            {/* Design URL field */}
            <div className="mb-4">
              <div className="mb-1.5 flex items-center gap-2">
                <span
                  className={cx(
                    "text-[11.5px] font-semibold leading-[13.92px]",
                    "text-[#a3a3a2]"
                  )}
                >
                  Design URL
                </span>
                <IoInformationCircleOutline
                  className="shrink-0 text-[#a3a3a2]"
                  size={15}
                />
              </div>
              <input
                type="text"
                value={urlValue}
                onChange={(e) => setUrlValue(e.target.value)}
                placeholder="https://www.figma.com/file/:"
                className={cx(
                  "w-full rounded-sm border-2 border-[#929291] bg-[#272822]",
                  "px-3 py-2 text-[11.5px] font-semibold leading-[13.92px]",
                  "text-[#b5b5b5] outline-none",
                  "placeholder:text-[#71726e]",
                  "focus:border-[#aaaba9] focus:outline-none"
                )}
              />
            </div>

            {/* Action buttons */}
            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                className={cx(
                  "h-[37px] flex-1 rounded bg-[#843a17]",
                  "text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]",
                  "transition-colors duration-150",
                  "hover:bg-[#9a4520] active:bg-[#6e3012]"
                )}
              >
                Awesome
              </button>
              <button
                type="button"
                className={cx(
                  "h-[37px] flex-1 rounded bg-[#843a17]",
                  "text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]",
                  "transition-colors duration-150",
                  "hover:bg-[#9a4520] active:bg-[#6e3012]"
                )}
              >
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns footer */}
      <div className="mt-4 px-5 pt-4">
        <span
          className={cx(
            "text-[13.5px] font-semibold leading-[16.34px]",
            "text-[#b0b0b0]"
          )}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
