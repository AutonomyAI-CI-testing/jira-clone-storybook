import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Smoke-test panel: a static reproduction of the "UI magician Agent" frame.
 *
 * Colours are literal hex on purpose. The repo's semantic tokens resolve to
 * its light theme and have no rust accent, so using them would render a light
 * panel instead of the dark one in the reference.
 */
const FIELD_CLASSNAME =
  "mt-3 h-[52px] w-full rounded border border-[#7a7a7a] bg-[#2a2a2a] px-4 font-primary-light text-lg text-[#e8e8e8] outline-none placeholder:text-[#8b8b8b]";

const BUTTON_CLASSNAME =
  "h-[70px] rounded bg-[#b4461f] font-primary-bold text-lg text-[#efe2dc]";

const HEADING_CLASSNAME =
  "font-primary-bold text-2xl leading-none text-[#e8e8e8]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="mx-auto w-full max-w-[508px] bg-[#1f1f1f] px-10 py-8 font-primary text-[#e8e8e8]"
    >
      <div className="flex items-center justify-between">
        <h2 className={HEADING_CLASSNAME}>UI magician Agent</h2>
        <HiOutlineCog aria-hidden className="h-7 w-7" />
      </div>

      <div className="mt-7 flex items-center gap-3">
        <HiChevronUp aria-hidden className="h-5 w-5 shrink-0" />
        <p className="min-w-0 truncate font-primary-light text-xl text-[#8b8b8b]">
          From entire frame to a singl...
        </p>
      </div>

      <h3 className={`mt-16 flex items-center gap-3 ${HEADING_CLASSNAME}`}>
        <HiChevronUp aria-hidden className="h-6 w-6 shrink-0" />
        Add New Design
      </h3>

      <div className="mt-8">
        <div className="flex items-center gap-3">
          <label
            htmlFor="testElem-token"
            className="font-primary text-lg text-[#e8e8e8]"
          >
            Personal Access Token
          </label>
          <HiOutlineInformationCircle aria-hidden className="h-5 w-5" />
        </div>
        <input
          id="testElem-token"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          className={FIELD_CLASSNAME}
        />
      </div>

      <div className="mt-7">
        <div className="flex items-center gap-3">
          <label
            htmlFor="testElem-url"
            className="font-primary text-lg text-[#e8e8e8]"
          >
            Design URL
          </label>
          <HiOutlineInformationCircle aria-hidden className="h-5 w-5" />
        </div>
        <input
          id="testElem-url"
          readOnly
          placeholder="https://www.figma.com/file/"
          className={FIELD_CLASSNAME}
        />
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4">
        <button type="button" className={BUTTON_CLASSNAME}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASSNAME}>
          Prepare
        </button>
      </div>

      <h3 className={`mt-14 ${HEADING_CLASSNAME}`}>Recent Breakdowns</h3>
    </div>
  );
};

export default TestCard;
