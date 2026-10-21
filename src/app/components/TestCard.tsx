import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke test: a static, prop-less reproduction of the "UI magician Agent"
 * Figma frame. Colours are the frame's own literals rather than design-system
 * tokens, because the frame is a dark panel with rust-orange buttons that the
 * token set does not express.
 */
const SECTION_TITLE = "font-primary-black text-xl leading-none text-[#e6e6e6]";

const FIELD_LABEL = "flex items-center gap-3 font-primary text-base text-[#d0d0d0]";

const FIELD_INPUT =
  "w-full rounded border-2 border-[#6f6f6f] bg-[#232323] px-5 py-4 font-primary-light text-base text-[#e6e6e6] placeholder:text-[#7a7a7a]";

const PANEL_BUTTON =
  "rounded-lg bg-[#a8441a] px-8 py-4 font-primary text-base text-[#c8c8c8]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-full max-w-[508px] bg-[#1e1e1e] px-8 py-8 font-primary-light text-[#e6e6e6]"
  >
    <div className="flex items-start justify-between gap-4">
      <h1 className="font-primary-black text-2xl leading-tight text-[#e6e6e6]">
        UI magician Agent
      </h1>
      <FiSettings aria-hidden size={22} className="mt-1 shrink-0 text-[#d0d0d0]" />
    </div>

    <div className="mt-5 flex items-center gap-3">
      <FiChevronUp aria-hidden size={20} className="shrink-0 text-[#b8b8b8]" />
      <span className="min-w-0 truncate font-primary text-base text-[#b8b8b8]">
        From entire frame to a single component and every variant in between
      </span>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <FiChevronUp aria-hidden size={22} className="shrink-0 text-[#e6e6e6]" />
      <h2 className={SECTION_TITLE}>Add New Design</h2>
    </div>

    <div className="mt-12 flex flex-col gap-3">
      <label className={FIELD_LABEL} htmlFor="testElem-access-token">
        Personal Access Token
        <FiInfo aria-hidden size={18} className="shrink-0 text-[#d0d0d0]" />
      </label>
      <input
        id="testElem-access-token"
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        className={FIELD_INPUT}
      />
    </div>

    <div className="mt-6 flex flex-col gap-3">
      <label className={FIELD_LABEL} htmlFor="testElem-design-url">
        Design URL
        <FiInfo aria-hidden size={18} className="shrink-0 text-[#d0d0d0]" />
      </label>
      <input
        id="testElem-design-url"
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/"
        className={FIELD_INPUT}
      />
    </div>

    <div className="mt-10 flex gap-8">
      <button type="button" className={PANEL_BUTTON}>
        Awesome
      </button>
      <button type="button" className={PANEL_BUTTON}>
        Prepare
      </button>
    </div>

    <h2 className={cx("mt-16", SECTION_TITLE)}>Recent Breakdowns</h2>
  </div>
);
