import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * TestCard
 *
 * A self-contained smoke-test component modelled on the "UI magician Agent"
 * Figma frame: a dark panel with a header, a collapsible hint row, an
 * "Add New Design" section holding two labelled fields, a pair of action
 * buttons and a "Recent Breakdowns" heading.
 *
 * Takes no props on purpose - every value here is fixed mock content.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1b1b1b] px-10 py-6 font-primary text-[#c9c9c9]"
  >
    {/* Header */}
    <div className="flex items-start justify-between">
      <h1 className="text-[19px] leading-7 text-[#e8e8e8]">
        UI magician Agent
      </h1>
      <FiSettings size={22} className="mt-0.5 shrink-0 text-[#c9c9c9]" />
    </div>

    {/* Collapsed hint row */}
    <div className="mt-5 flex items-center gap-3 text-[15px]">
      <FiChevronUp size={20} className="shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    {/* Add New Design */}
    <div className="mt-[105px] flex items-center gap-3">
      <FiChevronUp size={26} className="shrink-0" />
      <h2 className="text-[21px] text-[#c9c9c9]">Add New Design</h2>
    </div>

    {/* Personal Access Token */}
    <div className="mt-10">
      <div className="flex items-center gap-3">
        <label htmlFor="test-card-token" className="text-[16px]">
          Personal Access Token
        </label>
        <FiInfo size={18} className="shrink-0" />
      </div>
      <input
        id="test-card-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-3 h-12 w-full rounded-sm border border-[#4d4d4d] bg-[#191919] px-3 text-[15px] text-[#c9c9c9] placeholder:text-[#8c8c8c] focus:outline-none"
      />
    </div>

    {/* Design URL */}
    <div className="mt-6">
      <div className="flex items-center gap-3">
        <label htmlFor="test-card-url" className="text-[16px]">
          Design URL
        </label>
        <FiInfo size={18} className="shrink-0" />
      </div>
      <input
        id="test-card-url"
        readOnly
        placeholder="https://www.figma.com/file/"
        className="mt-3 h-12 w-full rounded-sm border border-[#4d4d4d] bg-[#191919] px-3 text-[15px] text-[#c9c9c9] placeholder:text-[#8c8c8c] focus:outline-none"
      />
    </div>

    {/* Actions */}
    <div className="mt-8 flex justify-center gap-8">
      <button
        type="button"
        className="h-[52px] w-[168px] rounded-[10px] bg-[#9e421c] text-[18px] text-[#b9a79c]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[52px] w-[168px] rounded-[10px] bg-[#9e421c] text-[18px] text-[#b9a79c]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-[70px] text-[20px] text-[#e8e8e8]">Recent Breakdowns</h2>
  </div>
);

export default TestCard;
