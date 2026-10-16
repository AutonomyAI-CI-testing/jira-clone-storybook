import { FaChevronUp, FaCircleInfo, FaGear } from "react-icons/fa6";

/**
 * Self-contained render of the "UI magician Agent" frame.
 *
 * Presentational only: the inputs are placeholders and the chevron rows do not
 * collapse, because the design shows the resting state and nothing here is wired
 * to behaviour yet.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1E1E1E] px-9 pb-10 pt-10 font-primary text-[#D0D0D0]"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-[26px] leading-none text-[#D0D0D0]">
        UI magician Agent
      </h1>
      <FaGear aria-hidden className="h-7 w-7 shrink-0 text-[#D0D0D0]" />
    </div>

    <div className="mt-8 flex items-center gap-3">
      <FaChevronUp aria-hidden className="h-[22px] w-[22px] shrink-0 text-[#9E9E9E]" />
      <span className="font-primary-light text-[19px] leading-tight text-[#9E9E9E]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[140px]">
      <div className="flex items-center gap-3">
        <FaChevronUp aria-hidden className="h-[26px] w-[26px] shrink-0 text-[#D8D8D8]" />
        <h2 className="font-primary-bold text-[24px] leading-none text-[#D8D8D8]">
          Add New Design
        </h2>
      </div>

      <div className="mt-10">
        <div className="flex items-center gap-3">
          <label
            htmlFor="test-card-token"
            className="text-[17px] leading-none text-[#B5B5B5]"
          >
            Personal Access Token
          </label>
          <FaCircleInfo aria-hidden className="h-[26px] w-[26px] shrink-0 text-[#B5B5B5]" />
        </div>
        <input
          id="test-card-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className={fieldClass}
        />
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-3">
          <label
            htmlFor="test-card-url"
            className="text-[17px] leading-none text-[#B5B5B5]"
          >
            Design URL
          </label>
          <FaCircleInfo aria-hidden className="h-[26px] w-[26px] shrink-0 text-[#B5B5B5]" />
        </div>
        <input
          id="test-card-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className={fieldClass}
        />
      </div>

      <div className="mt-[42px] flex gap-[34px]">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>
    </div>

    <h2 className="mt-[107px] font-primary-bold text-[24px] leading-none text-[#D8D8D8]">
      Recent Breakdowns
    </h2>
  </div>
);

const fieldClass =
  "mt-4 h-[60px] w-full rounded border border-[#8A8A8A] bg-[#141414] px-5 font-primary-light text-[19px] text-[#8C8C8C] outline-none placeholder:text-[#8C8C8C]";

const buttonClass =
  "h-[62px] flex-1 rounded-md bg-[#9E4A22] text-[22px] leading-none text-[#9C9C9C]";
