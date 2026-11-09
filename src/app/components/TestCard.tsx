import { FaChevronUp, FaCircleInfo, FaGear } from "react-icons/fa6";

const fieldClassName =
  "mt-4 w-full rounded border border-[#6b6b6b] bg-[#2b2b2b] px-4 py-5 text-[17px] text-[#e6e6e6] placeholder:text-[#8a8a8a]";

const labelClassName = "text-[17px] text-[#c9c9c9]";

const buttonClassName =
  "w-[172px] rounded-lg bg-[#a04a17] py-5 text-[17px] text-[#c9c9c9]";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1e1e1e] px-10 py-12 font-primary text-[#e6e6e6]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[19px] leading-6">
        UI magician Agent
      </h1>
      <FaGear className="mt-1 shrink-0 text-[26px]" aria-hidden="true" />
    </div>

    <div className="mt-6 flex items-center gap-3 text-[#9a9a9a]">
      <FaChevronUp className="shrink-0 text-[20px]" aria-hidden="true" />
      <span className="truncate text-[17px]">
        From entire frame to a single design
      </span>
    </div>

    <div className="mt-20 flex items-center gap-3">
      <FaChevronUp className="shrink-0 text-[26px]" aria-hidden="true" />
      <h2 className="font-primary-bold text-[22px]">Add New Design</h2>
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-3">
        <span className={labelClassName}>Personal Access Token</span>
        <FaCircleInfo
          className="shrink-0 text-[22px] text-[#c9c9c9]"
          aria-hidden="true"
        />
      </div>
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className={fieldClassName}
      />
    </div>

    <div className="mt-6">
      <div className="flex items-center gap-3">
        <span className={labelClassName}>Design URL</span>
        <FaCircleInfo
          className="shrink-0 text-[22px] text-[#c9c9c9]"
          aria-hidden="true"
        />
      </div>
      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className={fieldClassName}
      />
    </div>

    <div className="mt-12 flex justify-center gap-8">
      <button type="button" className={buttonClassName}>
        Awesome
      </button>
      <button type="button" className={buttonClassName}>
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-bold text-[22px]">Recent Breakdowns</h2>
  </div>
);

export default TestCard;
