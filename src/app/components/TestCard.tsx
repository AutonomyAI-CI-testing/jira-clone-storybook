import { FaChevronUp } from "react-icons/fa";
import { FiInfo, FiSettings } from "react-icons/fi";

const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]";

/**
 * Static recreation of the "UI magician Agent" panel from the Figma design.
 * Self-contained: no props, no state, no data. Colours, spacing and type are
 * approximations taken from the design's style guide.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black px-5 pt-5 pb-[62px] font-primary"
  >
    <div className="flex h-4 items-center justify-between">
      <span className="font-primary-bold text-[13.5px] leading-4 text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings size={16} className="text-[#a5adad]" aria-hidden />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <FaChevronUp size={9} className="shrink-0 text-[#8b9291]" aria-hidden />
      <span className="text-[11.5px] leading-[14px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <FaChevronUp size={13} className="shrink-0 text-[#b2b2b1]" aria-hidden />
      <h2 className="font-primary-bold text-[13.5px] leading-4 text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <label
      htmlFor="testElem-token"
      className="mt-[28px] flex items-center gap-3 text-[11.5px] leading-[14px] text-[#a4a4a3]"
    >
      Personal Access Token
      <FiInfo size={15} className="text-[#a4a4a3]" aria-hidden />
    </label>
    <input
      id="testElem-token"
      name="personal-access-token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-[12px] h-9 w-full border border-[#a5adad] bg-[#272822] pl-[18px] text-[11.5px] text-[#737470] placeholder:text-[#737470]"
    />

    <label
      htmlFor="testElem-url"
      className="mt-[11px] flex items-center gap-3 text-[11.5px] leading-[14px] text-[#a3a3a2]"
    >
      Design URL
      <FiInfo size={15} className="text-[#a3a3a2]" aria-hidden />
    </label>
    <input
      id="testElem-url"
      name="design-url"
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] pl-[18px] text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex justify-center gap-[17px]">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h3 className="mt-[47px] font-primary-bold text-[13.5px] leading-4 text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);
