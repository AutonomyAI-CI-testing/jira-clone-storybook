import { HiChevronUp, HiCog, HiInformationCircle } from "react-icons/hi";

const sectionTitleClass = "flex items-center gap-2 font-primary-bold text-xl text-[#dcdcdc]";

const fieldClass =
  "w-full rounded border border-[#4a4a4a] bg-[#242424] px-4 py-3 font-primary-light text-sm text-[#e3e3e3] placeholder:text-[#8c8c8c]";

const buttonClass = "h-12 w-[170px] rounded-lg bg-[#9e4318] font-primary text-sm text-[#d5cec9]";

const InfoIcon = (): JSX.Element => (
  <span aria-hidden="true" className="text-[#c8c8c8]">
    <HiInformationCircle className="h-[18px] w-[18px]" />
  </span>
);

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-[508px] bg-[#1b1b1b] px-9 pt-7 pb-10 text-[#e3e3e3]">
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
        <span aria-hidden="true" className="text-[#cfcfcf]">
          <HiCog className="h-[22px] w-[22px]" />
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2 text-[#9a9a9a]">
        <HiChevronUp className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span className="min-w-0 flex-1 truncate text-sm">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-14">
        <h3 className={sectionTitleClass}>
          <HiChevronUp className="h-5 w-5 shrink-0" aria-hidden="true" />
          Add New Design
        </h3>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-3">
          <label htmlFor="testElem-token" className="text-sm text-[#d6d6d6]">
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        <input
          id="testElem-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          className={`${fieldClass} mt-2`}
        />
      </div>

      <div className="mt-7">
        <div className="flex items-center gap-3">
          <label htmlFor="testElem-url" className="text-sm text-[#d6d6d6]">
            Design URL
          </label>
          <InfoIcon />
        </div>
        <input
          id="testElem-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className={`${fieldClass} mt-2`}
        />
      </div>

      <div className="mt-9 flex items-center gap-[34px]">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <h3 className={`${sectionTitleClass} mt-20`}>Recent Breakdowns</h3>
    </div>
  );
};
