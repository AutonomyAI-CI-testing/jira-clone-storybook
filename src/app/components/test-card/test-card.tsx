import cx from "classix";

// SVG icon for settings (gear icon)
const SettingsIcon = (): JSX.Element => (
  <svg
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

// SVG icon for expandable sections (up arrow)
const ExpandIcon = (): JSX.Element => (
  <svg
    className="h-4 w-4 text-[#b2b2b1]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 10l7-7 7 7m0 0l-7-7m7 7v10"
    />
  </svg>
);

// SVG icon for expandable sections in "Add New Design" (different color)
const ExpandIconDark = (): JSX.Element => (
  <svg
    className="h-4 w-4 text-[#a3a3a2]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 10l7-7 7 7m0 0l-7-7m7 7v10"
    />
  </svg>
);

// SVG icon for info tooltips
const InfoIcon = (): JSX.Element => (
  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
  </svg>
);

// Input field with label and info button
const InputWithLabel = ({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder: string;
}): JSX.Element => (
  <div className="mb-6">
    <div className="mb-2 flex items-center gap-1">
      <label className="text-xs font-semibold text-[#8b9291]">{label}</label>
      <button className="text-[#737470] hover:text-[#8b9291]">
        <InfoIcon />
      </button>
    </div>
    <input
      type={type}
      placeholder={placeholder}
      className={cx(
        "w-full rounded border border-[#606060] bg-[#2a2a2a] px-3 py-3",
        "text-xs text-[#737470] placeholder-[#555551]",
        "focus-visible:border-[#7a7a7a] focus-visible:outline-none"
      )}
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[460px] px-10 py-6">
      {/* Header with settings icon */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-sm font-bold text-[#b0b0b0]">UI magician Agent</h1>
        <button className="text-[#8b9291] hover:text-[#a3a3a2]">
          <SettingsIcon />
        </button>
      </div>

      {/* Collapsible subtitle section */}
      <div className="mb-6 cursor-pointer">
        <div className="flex items-center gap-2">
          <ExpandIcon />
          <p className="text-xs text-[#b2b2b1]">
            From entire frame to a single...
          </p>
        </div>
      </div>

      {/* Add New Design section header */}
      <div className="mb-6 cursor-pointer">
        <div className="flex items-center gap-2">
          <ExpandIconDark />
          <p className="text-xs font-semibold text-[#a3a3a2]">Add New Design</p>
        </div>
      </div>

      {/* Personal Access Token input */}
      <InputWithLabel
        label="Personal Access Token"
        type="password"
        placeholder="Enter your token"
      />

      {/* Design URL input */}
      <InputWithLabel
        label="Design URL"
        type="text"
        placeholder="https://figma.com/..."
      />

      {/* Action buttons */}
      <div className="mb-6 flex gap-2">
        {["Awesome", "Prepare"].map((label) => (
          <button
            key={label}
            className={cx(
              "flex-1 rounded px-3 py-2",
              "text-xs font-semibold text-white",
              "bg-[#A0522D] hover:bg-[#8B4513] active:bg-[#7a3b0f]"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Recent Breakdowns section header */}
      <div className="text-xs font-semibold text-[#8b9291]">
        Recent Breakdowns
      </div>

      {/* Footer */}
      <div className="border-gray-300 border-t pt-3 text-center text-xs text-[#8b9291]">
        © AutonomyAI
      </div>
    </div>
  );
};
