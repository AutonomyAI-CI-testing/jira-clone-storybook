import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 *
 * Smoke test only: no props, no state, no data. Colours are literal values taken
 * from the frame, which sits outside this repo's semantic token palette (see
 * task/PLAN.md, decision 2).
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1c1c1c] px-10 pb-14 pt-8 font-primary text-[#d9d9d9]"
    >
      <div className="flex items-start justify-between">
        <h1 className="text-[26px] font-primary-bold leading-tight">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="p-1 text-[#d9d9d9]"
        >
          <IoSettingsOutline size={28} />
        </button>
      </div>

      <div className="mt-12 flex items-center gap-3 text-[17px] text-[#9a9a9a]">
        <IoChevronUp aria-hidden="true" size={20} />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <h2 className="mt-20 flex items-center gap-3 text-[22px] font-primary-bold">
        <IoChevronUp aria-hidden="true" size={22} />
        Add New Design
      </h2>

      <div className="mt-8">
        <div className="flex items-center justify-between">
          <label htmlFor="personal-access-token" className="text-[17px]">
            Personal Access Token
          </label>
          <IoInformationCircleOutline aria-hidden="true" size={22} />
        </div>
        <input
          id="personal-access-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-3 w-full rounded-none border-2 border-[#8a8a8a] bg-transparent px-4 py-4 text-[17px] placeholder:text-[#8f8f8f]"
        />
      </div>

      <div className="mt-5">
        <div className="flex items-center gap-2">
          <label htmlFor="design-url" className="text-[17px]">
            Design URL
          </label>
          <IoInformationCircleOutline aria-hidden="true" size={22} />
        </div>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className="mt-3 w-full rounded-none border-2 border-[#8a8a8a] bg-transparent px-4 py-4 text-[17px] placeholder:text-[#8f8f8f]"
        />
      </div>

      <div className="mt-10 flex justify-end gap-8">
        <button
          type="button"
          className="rounded-lg bg-[#a34a1c] px-10 py-4 text-[17px] text-[#b9a89e]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-lg bg-[#a34a1c] px-10 py-4 text-[17px] text-[#b9a89e]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-20 text-[22px] font-primary-bold">
        Recent Breakdowns
      </h2>
    </div>
  );
};
