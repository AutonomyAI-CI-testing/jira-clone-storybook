import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/**
 * Static reproduction of the "UI magician Agent" panel from the Figma frame.
 * Self-contained: no props, no state, no behaviour.
 *
 * The panel is a fixed dark surface that does not follow the app's themes, so
 * its colours are written as arbitrary Tailwind values rather than semantic
 * tokens. Note that tailwind.config.js replaces `theme.colors`, so stock
 * palette classes (e.g. `bg-zinc-900`) would compile to nothing here.
 */
export const TestCard = () => (
  <div id="testElem" className="w-[254px] bg-black p-5 pb-[62px] font-primary-bold">
    <div className="flex items-center justify-between">
      <h1 className="text-xs text-[#b5b5b5]">UI magician Agent</h1>
      <FaCog size={15} aria-hidden="true" className="text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
      <FaChevronUp size={9} aria-hidden="true" className="text-[#8b9291]" />
      <span className="text-2xs text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[62px] flex h-[47px] items-center gap-[5px] pl-[6px]">
      <FaChevronUp size={12} aria-hidden="true" className="text-[#b2b2b1]" />
      <h2 className="text-xs text-[#b2b2b1]">Add New Design</h2>
    </div>

    <div className="mt-3 flex items-center gap-2">
      <label htmlFor="testCardToken" className="text-2xs text-[#a4a4a3]">
        Personal Access Token
      </label>
      <FaInfoCircle size={15} aria-hidden="true" className="text-[#a4a4a3]" />
    </div>
    <input
      id="testCardToken"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-2xs text-[#737470] placeholder:text-[#737470]"
    />

    <div className="mt-3 flex items-center gap-2">
      <label htmlFor="testCardUrl" className="text-2xs text-[#a3a3a2]">
        Design URL
      </label>
      <FaInfoCircle size={15} aria-hidden="true" className="text-[#a3a3a2]" />
    </div>
    <input
      id="testCardUrl"
      type="text"
      placeholder="https://www.figma.com/file/"
      className="mt-3 h-9 w-full border-2 border-[#929291] bg-[#272822] px-[20px] text-2xs text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex gap-[17px] pl-6">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-2xs text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-2xs text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-[47px] text-xs text-[#b0b0b0]">Recent Breakdowns</h2>
  </div>
);
