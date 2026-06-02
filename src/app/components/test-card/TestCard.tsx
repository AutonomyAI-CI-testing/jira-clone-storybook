import { FaChevronDown, FaCog, FaInfo } from "react-icons/fa";

export const TestCard = () => {
  return (
    <div id="testElem" className="flex w-full max-w-[254px] flex-col bg-black p-5">
      {/* Header Section */}
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-sm font-semibold text-font-subtle">
          UI magician Agent
        </h1>
        <button className="flex items-center justify-center text-font-subtlest hover:text-font-subtle">
          <FaCog size={14} />
        </button>
      </div>

      {/* Collapsible Sections */}
      <div className="mb-4 space-y-3">
        {/* Section 1 */}
        <div className="flex items-center gap-2 text-font-subtlest">
          <FaChevronDown size={12} className="flex-shrink-0" />
          <span className="truncate text-xs font-semibold">
            From entire frame to a singl...
          </span>
        </div>

        {/* Section 2 */}
        <div className="flex items-center gap-2 text-font-subtle">
          <FaChevronDown size={12} className="flex-shrink-0" />
          <span className="text-xs font-semibold">Add New Design</span>
        </div>
      </div>

      {/* Input Fields Section */}
      <div className="mb-5 space-y-4">
        {/* Personal Access Token */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label className="text-xs font-semibold text-font-subtlest">
              Personal Access Token
            </label>
            <FaInfo size={12} className="text-font-subtlest" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded border border-border-input bg-background-input px-3 py-2 text-xs font-semibold text-font-subtlest placeholder-font-subtlest focus:border-border-focused focus:outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label className="text-xs font-semibold text-font-subtlest">
              Design URL
            </label>
            <FaInfo size={12} className="text-font-subtlest" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded border border-border-input bg-background-input px-3 py-2 text-xs font-semibold text-font-subtlest placeholder-font-subtlest focus:border-border-focused focus:outline-none"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mb-5 flex gap-3">
        <button className="flex-1 rounded bg-background-warning-bold px-3 py-2 text-xs font-semibold text-font-warning hover:bg-background-warning-bold-hovered active:bg-background-warning-bold-pressed">
          Awesome
        </button>
        <button className="flex-1 rounded bg-background-warning-bold px-3 py-2 text-xs font-semibold text-font-warning hover:bg-background-warning-bold-hovered active:bg-background-warning-bold-pressed">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="text-xs font-semibold text-font-subtle">
        Recent Breakdowns
      </div>
    </div>
  );
};
