import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

// The frame's palette is a one-off dark surface with an orange accent, so it has
// no role in the five themes and goes in as arbitrary values. Named Tailwind
// colour classes would compile to nothing here (theme.colors is a full override).
const headingClass = "font-primary-bold text-xl text-[#d6d6d6]";
const labelClass = "font-primary text-base text-[#c2c2c2]";
const inputClass =
  "mt-6 w-full rounded border border-[#7d7d7d] bg-[#2b2b2b] px-5 py-5 font-primary text-base text-[#c2c2c2] placeholder:text-[#8b8b8b]";
const buttonClass =
  "w-[180px] cursor-pointer rounded-md bg-[#8d3c18] py-5 font-primary text-base text-[#a9866f]";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#191919] px-10 pb-24 pt-12 font-primary text-[#c2c2c2]"
  >
    <div className="flex items-start justify-between">
      <h1 className={headingClass}>UI magician Agent</h1>
      <HiOutlineCog
        aria-hidden="true"
        size={26}
        className="mt-0.5 shrink-0 text-[#d6d6d6]"
      />
    </div>

    <div className="mt-10 flex items-center gap-3">
      <HiOutlineChevronUp
        aria-hidden="true"
        size={20}
        className="shrink-0 text-[#d6d6d6]"
      />
      <span className="truncate text-base text-[#c2c2c2]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-40 flex items-center gap-3">
      <HiOutlineChevronUp
        aria-hidden="true"
        size={22}
        className="shrink-0 text-[#d6d6d6]"
      />
      <h2 className={headingClass}>Add New Design</h2>
    </div>

    <div className="mt-12">
      <div className="flex items-center gap-3">
        <label htmlFor="testcard-token" className={labelClass}>
          Personal Access Token
        </label>
        <HiOutlineInformationCircle
          aria-hidden="true"
          size={20}
          className="shrink-0 text-[#c2c2c2]"
        />
      </div>
      <input
        id="testcard-token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        className={inputClass}
      />
    </div>

    <div className="mt-6">
      <div className="flex items-center gap-3">
        <label htmlFor="testcard-url" className={labelClass}>
          Design URL
        </label>
        <HiOutlineInformationCircle
          aria-hidden="true"
          size={20}
          className="shrink-0 text-[#c2c2c2]"
        />
      </div>
      <input
        id="testcard-url"
        placeholder="https://www.figma.com/file/"
        className={inputClass}
      />
    </div>

    <div className="mt-12 flex gap-10">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h2 className="mt-20 font-primary-bold text-xl text-[#d6d6d6]">
      Recent Breakdowns
    </h2>
  </div>
);
