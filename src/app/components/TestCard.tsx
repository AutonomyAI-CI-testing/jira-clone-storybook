import {
  HiChevronUp,
  HiOutlineCog6Tooth,
  HiOutlineInformationCircle,
} from "react-icons/hi2";

/**
 * TestCard
 *
 * A self-contained reproduction of the "UI magician Agent" panel from the
 * attached Figma frame. Smoke test only: no props, no state, no data.
 *
 * Colours are literal values read from the design image rather than semantic
 * theme tokens, because the design's dark-grey/rust palette has no equivalent
 * in the app's token set.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1C1C1C] px-10 py-9 font-primary text-[#E8E8E8]"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-[22px] leading-[1.2]">
          UI magician Agent
        </h1>
        <HiOutlineCog6Tooth
          role="img"
          aria-label="Settings"
          size={26}
          className="mt-[2px] shrink-0"
        />
      </div>

      {/* Collapsed section row */}
      <div className="mt-6 flex items-center gap-2">
        <HiChevronUp size={20} className="shrink-0 text-[#9E9E9E]" />
        <span className="truncate text-[17px] text-[#9E9E9E]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[88px] flex items-center gap-3">
        <HiChevronUp size={26} className="shrink-0" />
        <h2 className="font-primary-bold text-[24px]">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mt-9">
        <div className="flex items-center gap-3">
          <label
            htmlFor="test-card-access-token"
            className="font-primary-bold text-[19px]"
          >
            Personal Access Token
          </label>
          <HiOutlineInformationCircle
            role="img"
            aria-label="About the personal access token"
            size={26}
            className="shrink-0 text-[#C7C7C7]"
          />
        </div>
        <input
          id="test-card-access-token"
          name="accessToken"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-4 h-[60px] w-full rounded border border-[#5A5A5A] bg-[#2C2C2C] px-4 text-[17px] placeholder:text-[#8C8C8C]"
        />
      </div>

      {/* Design URL */}
      <div className="mt-7">
        <div className="flex items-center gap-3">
          <label
            htmlFor="test-card-design-url"
            className="font-primary-bold text-[19px]"
          >
            Design URL
          </label>
          <HiOutlineInformationCircle
            role="img"
            aria-label="About the design URL"
            size={26}
            className="shrink-0 text-[#C7C7C7]"
          />
        </div>
        <input
          id="test-card-design-url"
          name="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/"
          className="mt-4 h-[60px] w-full rounded border border-[#5A5A5A] bg-[#2C2C2C] px-4 text-[17px] placeholder:text-[#8C8C8C]"
        />
      </div>

      {/* Actions */}
      <div className="mt-8 flex gap-9 pl-12">
        <button
          type="button"
          className="h-[64px] w-[172px] rounded-lg bg-[#A8451E] text-[20px] text-[#C9C4C0]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[64px] w-[172px] rounded-lg bg-[#A8451E] text-[20px] text-[#C9C4C0]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-14 font-primary-bold text-[26px]">Recent Breakdowns</h2>
    </div>
  );
};
