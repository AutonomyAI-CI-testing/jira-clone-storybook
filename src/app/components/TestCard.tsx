import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * One-off panel reproduced from the "UI magician Agent" Figma frame.
 *
 * Spacing, colour and typography are approximations read off the frame image —
 * this component is intentionally outside the semantic-token theme system, so
 * the handful of literal colours below live here rather than in `app.css`.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#262626] px-10 py-11 font-primary text-[#d9d9d9]"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-primary text-[#d9d9d9]">
          UI magician Agent
        </h1>
        <HiOutlineCog
          aria-hidden="true"
          className="text-[#d9d9d9]"
          size={26}
        />
      </div>

      <div className="mt-7 flex items-center gap-3">
        <HiOutlineChevronUp
          aria-hidden="true"
          className="shrink-0 text-[#d9d9d9]"
          size={20}
        />
        <span className="truncate text-base text-[#c4c4c4]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-36">
        <div className="flex items-center gap-3">
          <HiOutlineChevronUp
            aria-hidden="true"
            className="shrink-0 text-[#d9d9d9]"
            size={24}
          />
          <h2 className="text-xl font-primary-bold text-[#d9d9d9]">
            Add New Design
          </h2>
        </div>

        <div className="mt-8">
          <div className="flex items-center gap-3">
            <label
              className="text-base text-[#d9d9d9]"
              htmlFor="test-card-access-token"
            >
              Personal Access Token
            </label>
            <HiOutlineInformationCircle
              aria-hidden="true"
              className="text-[#d9d9d9]"
              size={20}
            />
          </div>
          <input
            id="test-card-access-token"
            className="mt-5 h-16 w-full rounded-[2px] border border-[#8c8c8c] bg-transparent px-4 text-base text-[#d9d9d9] outline-none placeholder:text-[#9e9e9e]"
            placeholder="figd_xxxxxxxxxxxxxxxxxxx"
            type="text"
          />
        </div>

        <div className="mt-10">
          <div className="flex items-center gap-3">
            <label
              className="text-base text-[#d9d9d9]"
              htmlFor="test-card-design-url"
            >
              Design URL
            </label>
            <HiOutlineInformationCircle
              aria-hidden="true"
              className="text-[#d9d9d9]"
              size={20}
            />
          </div>
          <input
            id="test-card-design-url"
            className="mt-5 h-16 w-full rounded-[2px] border border-[#8c8c8c] bg-transparent px-4 text-base text-[#d9d9d9] outline-none placeholder:text-[#9e9e9e]"
            placeholder="https://www.figma.com/file/"
            type="text"
          />
        </div>

        <div className="mt-12 flex gap-8">
          <button
            className="flex h-[73px] w-[170px] cursor-pointer items-center justify-center rounded-md bg-[#a8451f] text-lg font-primary text-[#d9d9d9] hover:bg-[#8f3a19]"
            type="button"
          >
            Awesome
          </button>
          <button
            className="flex h-[73px] w-[170px] cursor-pointer items-center justify-center rounded-md bg-[#a8451f] text-lg font-primary text-[#d9d9d9] hover:bg-[#8f3a19]"
            type="button"
          >
            Prepare
          </button>
        </div>
      </div>

      <h2 className="mt-28 text-xl font-primary-bold text-[#d9d9d9]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
