import { AiOutlineSetting } from "react-icons/ai";
import { BiChevronUp } from "react-icons/bi";
import { HiOutlineInformationCircle } from "react-icons/hi";

const panelHeadingClass = "font-primary-bold text-[26px] text-[#e6e6e6]";

const sectionToggleClass = "shrink-0 text-[22px] text-[#e6e6e6]";

const fieldLabelClass = "flex items-center gap-2 text-[15px] text-[#d0d0d0]";

const infoIconClass = "shrink-0 text-[18px] text-[#8a8a8a]";

const fieldClass =
  "mt-3 w-full rounded-md border border-[#8a8a8a] bg-[#2b2b2b] px-4 py-3 text-[15px] text-[#e6e6e6] placeholder:text-[#8a8a8a] outline-none";

const actionButtonClass =
  "rounded-md bg-[#9c3d1f] px-8 py-3 font-primary-bold text-[17px] text-[#c9c2bd]";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1c1c1c] px-10 py-8 font-primary text-[#e6e6e6]"
  >
    <div className="flex items-start justify-between">
      <h2 className={panelHeadingClass}>UI magician Agent</h2>
      <AiOutlineSetting
        aria-hidden
        className="mt-1 shrink-0 text-[26px] text-[#a0a0a0]"
      />
    </div>

    <div className="mt-6 flex items-center gap-3 text-[#8a8a8a]">
      <BiChevronUp aria-hidden className="shrink-0 text-[22px]" />
      <span className="truncate text-[15px]">From entire frame to a singl...</span>
    </div>

    <div className="mt-20">
      <div className="flex items-center gap-3">
        <BiChevronUp aria-hidden className={sectionToggleClass} />
        <h3 className={panelHeadingClass}>Add New Design</h3>
      </div>

      <div className="mt-10">
        <label className={fieldLabelClass} htmlFor="test-card-personal-access-token">
          Personal Access Token
          <HiOutlineInformationCircle aria-hidden className={infoIconClass} />
        </label>
        <input
          id="test-card-personal-access-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className={fieldClass}
        />
      </div>

      <div className="mt-6">
        <label className={fieldLabelClass} htmlFor="test-card-design-url">
          Design URL
          <HiOutlineInformationCircle aria-hidden className={infoIconClass} />
        </label>
        <input
          id="test-card-design-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className={fieldClass}
        />
      </div>

      <div className="mt-8 flex gap-9">
        <button type="button" className={actionButtonClass}>
          Awesome
        </button>
        <button type="button" className={actionButtonClass}>
          Prepare
        </button>
      </div>
    </div>

    <h3 className={`mt-20 ${panelHeadingClass}`}>Recent Breakdowns</h3>
  </div>
);
