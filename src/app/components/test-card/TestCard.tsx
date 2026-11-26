import { HiChevronUp, HiCog, HiInformationCircle } from "react-icons/hi";

/**
 * Approximate values read from the Figma frame (508x1016). The frame's dark/rust
 * palette has no semantic token in the theme, so these are deliberate one-off
 * literals rather than a violation of the Semantic-Only Rule.
 */
const PANEL_CLASS = "w-[508px] bg-[#1e1e1e] px-10 py-10 font-primary text-[#f0f0f0]";
const SECTION_TITLE_CLASS = "font-primary-bold text-[26px] leading-none";
const FIELD_LABEL_CLASS = "text-[17px] text-[#c4c4c4]";
const FIELD_INPUT_CLASS =
  "mt-3 h-[70px] w-full rounded border border-[#6b6b6b] bg-[#2c2c2c] px-4 text-[17px] text-[#e6e6e6] placeholder:text-[#7e7e7e] focus:outline-none";
const ACTION_BUTTON_CLASS =
  "h-[74px] w-[170px] rounded bg-[#a4471f] text-[20px] text-[#d9d9d9]";

export const TestCard = (): JSX.Element => (
  <div id="testElem" className={PANEL_CLASS}>
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[22px] leading-none">
        UI magician Agent
      </span>
      <HiCog size={26} className="text-[#d8d8d8]" aria-hidden />
    </div>

    <div className="mt-8 flex items-center gap-3">
      <HiChevronUp size={20} className="shrink-0 text-[#d8d8d8]" aria-hidden />
      <span className="truncate font-primary-light text-[17px] text-[#9a9a9a]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-32 flex items-center gap-2">
      <HiChevronUp size={24} className="shrink-0" aria-hidden />
      <span className={SECTION_TITLE_CLASS}>Add New Design</span>
    </div>

    <div className="mt-12">
      <div className="flex items-center gap-2">
        <label htmlFor="test-card-access-token" className={FIELD_LABEL_CLASS}>
          Personal Access Token
        </label>
        <HiInformationCircle
          size={22}
          className="text-[#c4c4c4]"
          aria-hidden
        />
      </div>
      <input
        id="test-card-access-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxx"
        className={FIELD_INPUT_CLASS}
      />
    </div>

    <div className="mt-6">
      <div className="flex items-center gap-2">
        <label htmlFor="test-card-design-url" className={FIELD_LABEL_CLASS}>
          Design URL
        </label>
        <HiInformationCircle
          size={22}
          className="text-[#c4c4c4]"
          aria-hidden
        />
      </div>
      <input
        id="test-card-design-url"
        readOnly
        placeholder="https://www.figma.com/file/"
        className={FIELD_INPUT_CLASS}
      />
    </div>

    <div className="mt-10 flex items-center justify-center gap-8">
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <div className="mt-28">
      <span className={SECTION_TITLE_CLASS}>Recent Breakdowns</span>
    </div>
  </div>
);
