import {
  FiChevronUp,
  FiSettings,
  FiInfo,
} from "react-icons/fi";
import cx from "classix";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className={cx(
        "w-full max-w-2xl rounded-lg border",
        "bg-[#1a1a1a] text-[#d0d0d0]",
        "border-[#333333] p-6"
      )}
    >
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">UI magician Agent</h1>
        <FiSettings
          size={24}
          className="text-[#999999]"
        />
      </div>

      {/* Collapsible Section 1 */}
      <div className="mb-6 flex items-center gap-3">
        <FiChevronUp
          size={20}
          className="text-[#999999]"
        />
        <span className="text-[#888888]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Collapsible Section 2 - Add New Design */}
      <div className="mb-8 flex items-center gap-3">
        <FiChevronUp
          size={20}
          className="text-[#999999]"
        />
        <span className="text-lg text-[#c0c0c0]">
          Add New Design
        </span>
      </div>

      {/* Form Fields */}
      <div className="mb-8 space-y-6">
        {/* Personal Access Token */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <label className="text-[#b0b0b0]">
              Personal Access Token
            </label>
            <FiInfo
              size={18}
              className="text-[#666666]"
            />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxx"
            className={cx(
              "w-full rounded border px-4 py-3",
              "bg-[#2a2a2a] text-[#888888]",
              "border-[#444444] placeholder-[#666666]",
              "focus:outline-none focus:border-[#555555]"
            )}
            readOnly
          />
        </div>

        {/* Design URL */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <label className="text-[#b0b0b0]">
              Design URL
            </label>
            <FiInfo
              size={18}
              className="text-[#666666]"
            />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className={cx(
              "w-full rounded border px-4 py-3",
              "bg-[#2a2a2a] text-[#888888]",
              "border-[#444444] placeholder-[#666666]",
              "focus:outline-none focus:border-[#555555]"
            )}
            readOnly
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mb-8 flex gap-4">
        <button
          className={cx(
            "flex-1 rounded px-6 py-3 text-lg font-medium",
            "bg-[#b8632b] text-[#d0d0d0]",
            "hover:bg-[#a85522] transition-colors",
            "disabled:opacity-60"
          )}
        >
          Awesome
        </button>
        <button
          className={cx(
            "flex-1 rounded px-6 py-3 text-lg font-medium",
            "bg-[#b8632b] text-[#d0d0d0]",
            "hover:bg-[#a85522] transition-colors",
            "disabled:opacity-60"
          )}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div>
        <h2 className="text-lg font-semibold text-[#c0c0c0]">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
