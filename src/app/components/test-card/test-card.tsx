// TestCard component renders a dark-themed design management panel
// Used by the UI magician agent to manage Figma design integrations
const ATOM_ICON_SVG = (
  <svg
    className="h-4 w-4 text-gray-400"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    {/* Center nucleus */}
    <circle cx="12" cy="12" r="1.5" />
    {/* Outer electron circles (6 points around center) */}
    <circle cx="12" cy="5" r="0.8" />
    <circle cx="18" cy="7.2" r="0.8" />
    <circle cx="18.8" cy="13" r="0.8" />
    <circle cx="12" cy="19" r="0.8" />
    <circle cx="5.2" cy="13" r="0.8" />
    <circle cx="6" cy="7.2" r="0.8" />
    {/* Orbital paths */}
    <ellipse
      cx="12"
      cy="12"
      rx="7"
      ry="5"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.4"
      opacity="0.6"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="7"
      ry="5"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.4"
      opacity="0.6"
      transform="rotate(90 12 12)"
    />
  </svg>
);

const INPUT_FIELD_CLASSNAME = "w-full border border-gray-600 bg-transparent px-3 py-2 text-xs font-semibold text-gray-500 placeholder-gray-600 focus:outline-none focus:border-gray-600";
const ACTION_BUTTON_CLASSNAME = "flex-1 rounded bg-amber-700 px-4 py-2 text-xs font-semibold text-neutral-600 hover:bg-amber-600 focus:outline-none";
const INFO_ICON_CLASSNAME = "flex h-4 w-4 items-center justify-center rounded-full border border-gray-600 text-[10px] font-semibold text-gray-500";
const LABEL_CLASSNAME = "text-xs font-semibold text-gray-500";
const COLLAPSIBLE_INDICATOR_CLASSNAME = "text-sm font-semibold text-gray-500";
const SECTION_HEADING_CLASSNAME = "text-sm font-semibold text-gray-400";

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] bg-black p-5">
      {/* Header with title and atom icon */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className={SECTION_HEADING_CLASSNAME}>UI magician Agent</h1>
        {ATOM_ICON_SVG}
      </div>

      {/* Collapsible section with truncated description */}
      <div className="mb-8 flex items-center gap-2">
        <span className={COLLAPSIBLE_INDICATOR_CLASSNAME}>▲</span>
        <span className="text-xs font-semibold text-gray-500">
          From entire frame to a singl...
        </span>
      </div>

      {/* Form for adding new Figma design */}
      <div className="mb-8">
        <div className="mb-6 flex items-center gap-2">
          <span className={COLLAPSIBLE_INDICATOR_CLASSNAME}>▲</span>
          <h2 className={SECTION_HEADING_CLASSNAME}>Add New Design</h2>
        </div>

        {/* Personal Access Token field with info icon */}
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <label className={LABEL_CLASSNAME}>
              Personal Access Token
            </label>
            <span className={INFO_ICON_CLASSNAME}>
              ⓘ
            </span>
          </div>
          <input
            type="password"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className={INPUT_FIELD_CLASSNAME}
            readOnly
          />
        </div>

        {/* Design URL field with info icon */}
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2">
            <label className={LABEL_CLASSNAME}>
              Design URL
            </label>
            <span className={INFO_ICON_CLASSNAME}>
              ⓘ
            </span>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className={INPUT_FIELD_CLASSNAME}
            readOnly
          />
        </div>

        {/* Action buttons for form submission */}
        <div className="flex gap-4">
          <button className={ACTION_BUTTON_CLASSNAME}>
            Awesome
          </button>
          <button className={ACTION_BUTTON_CLASSNAME}>
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="pt-6 border-t border-gray-800">
        <h3 className="text-sm font-semibold text-gray-400">Recent Breakdowns</h3>
      </div>

      {/* Footer Section */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-xs text-gray-400">© AutonomyAI</p>
      </div>
    </div>
  );
};
