import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

/**
 * Smoke-test component reproduced from the "UI magician Agent" Figma frame.
 * Deliberately standalone: it takes no props, holds no state, is wired into no
 * screen, and uses a small literal palette read off the frame rather than the
 * app's semantic tokens (the frame is a dark panel from another product).
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1a1a1a] px-10 pb-16 pt-12 text-[#d9d9d9]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl text-[#d9d9d9]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Open settings"
          className="text-[#d9d9d9]"
        >
          <RiSettings3Line aria-hidden size={26} />
        </button>
      </div>

      {/* Collapsed summary row */}
      <div className="mt-6 flex items-center gap-2 font-primary-light text-base text-[#9a9a9a]">
        <RiArrowUpSLine aria-hidden size={24} className="shrink-0" />
        <span className="truncate">From entire frame to a single component</span>
      </div>

      {/* Add New Design */}
      <h2 className="mt-40 flex items-center gap-2 font-primary-bold text-[22px] text-[#d9d9d9]">
        <RiArrowUpSLine aria-hidden size={26} className="shrink-0" />
        Add New Design
      </h2>

      {/* Personal Access Token */}
      <div className="mt-16">
        <div className="flex items-center gap-2">
          <label
            htmlFor="test-card-access-token"
            className="text-[17px] text-[#c9c9c9]"
          >
            Personal Access Token
          </label>
          <RiInformationLine
            aria-hidden
            size={20}
            className="shrink-0 text-[#c9c9c9]"
          />
        </div>
        <input
          id="test-card-access-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-8 h-16 w-full rounded border border-[#8b8b8b] bg-[#2b2b2b] pl-8 text-[17px] text-[#d9d9d9] placeholder:text-[#7a7a7a]"
        />
      </div>

      {/* Design URL */}
      <div className="mt-8">
        <div className="flex items-center gap-2">
          <label
            htmlFor="test-card-design-url"
            className="text-[17px] text-[#c9c9c9]"
          >
            Design URL
          </label>
          <RiInformationLine
            aria-hidden
            size={20}
            className="shrink-0 text-[#c9c9c9]"
          />
        </div>
        <input
          id="test-card-design-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className="mt-8 h-16 w-full rounded border border-[#8b8b8b] bg-[#2b2b2b] pl-8 text-[17px] text-[#d9d9d9] placeholder:text-[#7a7a7a]"
        />
      </div>

      {/* Actions */}
      <div className="mt-12 flex gap-8 pl-12">
        <button
          type="button"
          className="h-16 flex-1 rounded bg-[#a34a22] text-[19px] text-[#d9d9d9]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-16 flex-1 rounded bg-[#a34a22] text-[19px] text-[#d9d9d9]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-28 font-primary-bold text-[22px] text-[#d9d9d9]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
