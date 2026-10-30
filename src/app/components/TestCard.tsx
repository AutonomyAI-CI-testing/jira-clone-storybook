import {
  HiChevronUp,
  HiOutlineCog6Tooth,
  HiOutlineInformationCircle,
} from "react-icons/hi2";

/**
 * Static, self-contained card reproducing the "UI magician Agent" Figma frame.
 *
 * Smoke test only: it takes no props and wires no behaviour. The frame's dark /
 * rust palette has no semantic token in this design system, so the colours are
 * approximate literal values read off the reference image.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#111111] px-10 pb-24 pt-10 font-primary text-[#e8e8e8]"
  >
    {/* Title + settings */}
    <div className="flex items-center justify-between">
      <h2 className="text-[26px] font-primary-bold">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="flex cursor-pointer text-[#e8e8e8]"
      >
        <HiOutlineCog6Tooth size={28} />
      </button>
    </div>

    {/* Collapsed summary */}
    <div className="mt-10 flex items-center gap-3 text-[#9a9a9a]">
      <HiChevronUp size={22} />
      <span className="text-[20px]">From entire frame to a singl...</span>
    </div>

    {/* Section heading */}
    <div className="mt-24 flex items-center gap-3">
      <HiChevronUp size={24} />
      <h3 className="text-[26px] font-primary-bold">Add New Design</h3>
    </div>

    {/* Personal Access Token */}
    <div className="mt-16 flex flex-col">
      <div className="flex items-center gap-3">
        <label htmlFor="test-card-token" className="text-[20px]">
          Personal Access Token
        </label>
        <button
          type="button"
          aria-label="About the personal access token"
          className="flex cursor-pointer text-[#e8e8e8]"
        >
          <HiOutlineInformationCircle size={24} />
        </button>
      </div>
      <input
        id="test-card-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="mt-3 w-full rounded border border-[#7a7a7a] bg-[#1a1a1a] px-4 py-4 text-[20px] text-[#e8e8e8] outline-none placeholder:text-[#8a8a8a]"
      />
    </div>

    {/* Design URL */}
    <div className="mt-8 flex flex-col">
      <div className="flex items-center gap-3">
        <label htmlFor="test-card-url" className="text-[20px]">
          Design URL
        </label>
        <button
          type="button"
          aria-label="About the design URL"
          className="flex cursor-pointer text-[#e8e8e8]"
        >
          <HiOutlineInformationCircle size={24} />
        </button>
      </div>
      <input
        id="test-card-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-3 w-full rounded border border-[#7a7a7a] bg-[#1a1a1a] px-4 py-4 text-[20px] text-[#e8e8e8] outline-none placeholder:text-[#8a8a8a]"
      />
    </div>

    {/* Actions */}
    <div className="mt-10 flex gap-9 pl-12">
      <button
        type="button"
        className="cursor-pointer rounded-md bg-[#a04a1e] px-10 py-5 text-[20px] text-white"
      >
        Awesome
      </button>
      <button
        type="button"
        className="cursor-pointer rounded-md bg-[#a04a1e] px-10 py-5 text-[20px] text-white"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h3 className="mt-24 text-[26px] font-primary-bold">Recent Breakdowns</h3>
  </div>
);
