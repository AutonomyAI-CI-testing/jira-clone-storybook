import cx from "classix";

// Common button styling for action buttons
const actionButtonStyles = cx(
  "flex-1 rounded bg-[#843a17] px-4 py-2.5 text-center",
  "text-[11.5px] font-semibold text-[#8c8078]",
  "hover:bg-[#6b2d10] active:bg-[#5a2410]",
  "transition-colors duration-200"
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-full max-w-[254px] space-y-6 bg-[#1a1a1a] p-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <button className="flex items-center justify-center text-[#b5b5b5] hover:opacity-80">
          ⚙️
        </button>
      </div>

      {/* Collapsible Section */}
      <div className="space-y-3 border-y border-[#2a2a2a] py-4">
        <button className="flex items-center gap-2 text-[#8b9291]">
          <span className="text-sm">^</span>
          <span className="text-[11.5px] font-semibold">
            From entire frame to a singl...
          </span>
        </button>
      </div>

      {/* Add New Design Section */}
      <button className="flex items-center gap-2 text-[#b2b2b1]">
        <span className="text-sm">^</span>
        <span className="text-[13.5px] font-semibold">Add New Design</span>
      </button>

      {/* Form Section */}
      <div className="space-y-4">
        {/* Personal Access Token */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-[11.5px] font-semibold text-[#a4a4a3]">
            <span>Personal Access Token</span>
            <button className="flex items-center justify-center text-[#a4a4a3] hover:opacity-80">
              ℹ️
            </button>
          </label>
          <input
            type="password"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className={cx(
              "w-full border border-[#929291] bg-[#272822] px-3 py-2.5",
              "text-[10.5px] font-semibold text-[#737470] placeholder-[#737470]",
              "focus:outline-none focus:ring-1 focus:ring-[#b5b5b5]"
            )}
            readOnly
          />
        </div>

        {/* Design URL */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-[11.5px] font-semibold text-[#a3a3a2]">
            <span>Design URL</span>
            <button className="flex items-center justify-center text-[#a3a3a2] hover:opacity-80">
              ℹ️
            </button>
          </label>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className={cx(
              "w-full border border-[#a5adad] bg-[#272822] px-3 py-2.5",
              "text-[10.5px] font-semibold text-[#71726e] placeholder-[#71726e]",
              "focus:outline-none focus:ring-1 focus:ring-[#b5b5b5]"
            )}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button className={actionButtonStyles}>
          Awesome
        </button>
        <button className={actionButtonStyles}>
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="pt-4">
        <h2 className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer with copyright */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-xs text-[#a4a4a3]">© AutonomyAI</p>
      </div>
    </div>
  );
};
