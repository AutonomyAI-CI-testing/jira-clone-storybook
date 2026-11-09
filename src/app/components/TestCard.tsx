import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const fieldClass =
  "h-[36px] w-full border-2 border-[#929291] bg-[#272822] px-[17px] text-[11.5px] leading-[13.92px] text-[#b5b5b5] placeholder:text-[#737470]";

const buttonClass =
  "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-[#1C1D17] px-5 py-5 font-primary-bold text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Open settings"
          className="flex items-center justify-center"
        >
          <HiOutlineCog size={16} aria-hidden="true" />
        </button>
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <HiChevronUp size={12} aria-hidden="true" />
        <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-2">
        <HiChevronUp size={14} aria-hidden="true" />
        <h2 className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      <div className="mt-[28px]">
        <div className="flex items-center gap-3">
          <label
            htmlFor="testcard-token"
            className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
          >
            Personal Access Token
          </label>
          <HiOutlineInformationCircle size={15} aria-hidden="true" />
        </div>
        <input
          id="testcard-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={`mt-3 ${fieldClass}`}
        />
      </div>

      <div className="mt-[11px]">
        <div className="flex items-center gap-3">
          <label
            htmlFor="testcard-url"
            className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
          >
            Design URL
          </label>
          <HiOutlineInformationCircle size={15} aria-hidden="true" />
        </div>
        <input
          id="testcard-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={`mt-3 ${fieldClass}`}
        />
      </div>

      <div className="mt-[22px] flex gap-[17px] pl-6">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <h2 className="mt-[46px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

export default TestCard;
