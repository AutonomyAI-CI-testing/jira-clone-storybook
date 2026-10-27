import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

const actionButtonStyle =
  "h-16 w-[172px] rounded-lg bg-[#8d4a2b] font-primary text-lg text-[#f2f2f2]";

const textInputStyle =
  "mt-3 h-14 w-full rounded border-2 border-[#c9c9c9] bg-[#242424] px-4 font-primary text-base text-[#f2f2f2] placeholder:text-[#8a8a8a]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col bg-[#1b1b1b] px-10 pb-16 pt-8 font-primary text-[#f2f2f2]"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Open settings"
          className="text-[#c9c9c9]"
        >
          <RiSettings3Line aria-hidden className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-4 flex items-center gap-2 text-[#9a9a9a]">
        <RiArrowUpSLine aria-hidden className="h-5 w-5 shrink-0" />
        <span className="truncate text-base">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-28 flex items-center gap-2">
        <RiArrowUpSLine aria-hidden className="h-6 w-6 shrink-0" />
        <h2 className="font-primary-bold text-xl">Add New Design</h2>
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-2">
          <label
            htmlFor="test-card-personal-access-token"
            className="text-base"
          >
            Personal Access Token
          </label>
          <RiInformationLine aria-hidden className="h-5 w-5 text-[#c9c9c9]" />
        </div>
        <input
          id="test-card-personal-access-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          className={textInputStyle}
        />
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2">
          <label htmlFor="test-card-design-url" className="text-base">
            Design URL
          </label>
          <RiInformationLine aria-hidden className="h-5 w-5 text-[#c9c9c9]" />
        </div>
        <input
          id="test-card-design-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className={textInputStyle}
        />
      </div>

      <div className="mt-10 flex gap-10">
        <button type="button" className={actionButtonStyle}>
          Awesome
        </button>
        <button type="button" className={actionButtonStyle}>
          Prepare
        </button>
      </div>

      <h2 className="mt-32 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
};
