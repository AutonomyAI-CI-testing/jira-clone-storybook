import cx from "classix";

// Icon components to reduce duplication and improve maintainability
const SettingsIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    className="stroke-[#929291]"
    fill="none"
    strokeWidth="1"
  >
    <circle cx="8" cy="8" r="3" />
    <path d="M8 1v2M8 13v2M1 8h2M13 8h2M2.93 2.93l1.41 1.41M11.66 11.66l1.41 1.41M2.93 13.07l1.41-1.41M11.66 4.34l1.41-1.41" />
  </svg>
);

const CollapseIcon = () => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    className="stroke-[#929291]"
    fill="none"
    strokeWidth="1.5"
  >
    <path d="M1 4l3-3 3 3" />
  </svg>
);

const ExpandIcon = () => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    className="stroke-[#929291]"
    fill="none"
    strokeWidth="1.5"
  >
    <path d="M1 7l5-5 5 5" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    className="stroke-[#929291]"
    fill="none"
    strokeWidth="1"
  >
    <circle cx="7.5" cy="7.5" r="6.5" />
    <path d="M7.5 5v4M7.5 11h.01" />
  </svg>
);

// Button styles shared between action buttons
const ACTION_BUTTON_STYLE = cx(
  "flex-1 rounded px-4 py-2 font-primary-bold text-[11.5px] text-[#8c8078] transition-colors",
  "bg-[#843a17] hover:bg-[#9d461b]"
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="flex min-h-screen items-start justify-center bg-black px-4 py-8">
      <div className="w-full max-w-md px-8">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <h1 className="font-primary-bold text-[13.5px] text-[#b5b5b5]">
            UI magician Agent
          </h1>
          <SettingsIcon />
        </div>

        {/* Collapsible Section 1 */}
        <div className="mb-12 flex items-center gap-3">
          <CollapseIcon />
          <p className="font-primary-bold text-[11.5px] text-[#8b9291]">
            From entire frame to a singl...
          </p>
        </div>

        {/* Collapsible Section 2 - Add New Design */}
        <div className="mb-6 flex items-center gap-3">
          <ExpandIcon />
          <p className="font-primary-bold text-[13.5px] text-[#b2b2b1]">
            Add New Design
          </p>
        </div>

        {/* Personal Access Token Field */}
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <label className="font-primary-bold text-[11.5px] text-[#a4a4a3]">
              Personal Access Token
            </label>
            <InfoIcon />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full border border-[#a5adad] bg-[#272822] px-3 py-2 font-primary-bold text-[11.5px] text-[#737470] placeholder-[#737470] focus-visible:outline-none"
          />
        </div>

        {/* Design URL Field */}
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2">
            <label className="font-primary-bold text-[11.5px] text-[#a3a3a2]">
              Design URL
            </label>
            <InfoIcon />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full border border-[#929291] bg-[#272822] px-3 py-2 font-primary-bold text-[10.5px] text-[#71726e] placeholder-[#71726e] focus-visible:outline-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="mb-16 flex gap-6">
          <button className={ACTION_BUTTON_STYLE}>Awesome</button>
          <button className={ACTION_BUTTON_STYLE}>Prepare</button>
        </div>

        {/* Recent Breakdowns */}
        <div>
          <h2 className="font-primary-bold text-[13.5px] text-[#b0b0b0]">
            Recent Breakdowns
          </h2>
        </div>

        {/* Footer */}
        <div className="border-gray-300 border-t pt-3 text-center">
          <p className="font-primary-bold text-[11.5px] text-[#737470]">
            © AutonomyAI
          </p>
        </div>
      </div>
    </div>
  );
};
