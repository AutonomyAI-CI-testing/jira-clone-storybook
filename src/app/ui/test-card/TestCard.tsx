import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="w-[320px] rounded-lg bg-black p-5 font-sans text-font-subtle">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-font-subtle">
            UI magician Agent
          </span>
          <FiSettings className="text-icon-subtle" size={16} />
        </div>

        {/* Collapsed helper row */}
        <div className="mt-4 flex items-center gap-2">
          <FiChevronUp className="text-icon-subtle" size={12} />
          <span className="text-xs font-semibold text-font-subtlest">
            From entire frame to a singl...
          </span>
        </div>

        {/* Spacer */}
        <div className="h-10" />

        {/* Add New Design section */}
        <div className="mt-2 flex items-center gap-2">
          <FiChevronUp className="text-icon" size={12} />
          <span className="text-sm font-semibold text-font">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token field */}
        <div className="mt-4">
          <div className="flex items-center gap-1">
            <span className="text-xs font-semibold text-font-subtle">
              Personal Access Token
            </span>
            <FiInfo className="text-icon-subtle" size={12} />
          </div>
          <input
            disabled
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="mt-1 w-full rounded-none border border-border bg-elevation-surface-sunken px-3 py-2 text-xs text-font-subtlest placeholder-font-subtlest"
          />
        </div>

        {/* Design URL field */}
        <div className="mt-4">
          <div className="flex items-center gap-1">
            <span className="text-xs font-semibold text-font-subtle">
              Design URL
            </span>
            <FiInfo className="text-icon-subtle" size={12} />
          </div>
          <input
            disabled
            placeholder="https://www.figma.com/file/:"
            className="mt-1 w-full rounded-none border border-border-bold bg-elevation-surface-sunken px-3 py-2 text-xs text-font-subtlest placeholder-font-subtlest"
          />
        </div>

        {/* Buttons row */}
        <div className="mt-4 flex gap-4">
          <button className="rounded bg-[#843a17] px-6 py-2 text-xs font-semibold text-[#c9a58f]">
            Awesome
          </button>
          <button className="rounded bg-[#843a17] px-6 py-2 text-xs font-semibold text-[#c9a58f]">
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns section */}
        <div className="mt-10">
          <span className="text-sm font-semibold text-font-subtle">
            Recent Breakdowns
          </span>
        </div>
      </div>
    </div>
  );
};
